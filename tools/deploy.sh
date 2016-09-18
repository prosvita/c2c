#!/bin/bash

. ./tools/common

### Settings

. ./configs/current/settings.sh

if [[ -z ${TARGETS+x} || -z ${LANGS+x}
        || -z ${PLATFORMS+x} || -z ${PLATFORMSUFIX+x}
        || -z ${SCHEME+x} || -z ${HOST+x} || -z ${TARGETTECH+x} ]]; then
    echo "one or more variables are undefined"
    exit 1
fi

### Get targets files

targets=()
fill_langs targets "${TARGETS}" "${LANGS}"

bundles=()
get_bundles bundles "${PLATFORMS}" "${PLATFORMSUFIX}"

targetfiles=()
get_tehcs_files targetfiles "${bundles[*]}" "${PLATFORMS}" "${PLATFORMSUFIX}" "${targets[*]}"

if [ "x${FREEZE}" != "x" ]; then
    for f in $(find ${FREEZE} -type f); do
        targetfiles[${#targetfiles[*]}]=${f}
    done
fi

### Geterate Sitemap

urls=()
for lang in ${LANGS}; do
    fill_langs targettechs "${TARGETTECH}" "${lang}"
    for bundle in ${bundles[*]}; do
        get_tehcs_files page "${bundle}" "${PLATFORMS}" "${PLATFORMSUFIX}" "${targettechs}"
        lastmod=$(git log -n 1 --pretty=format:%cI -- ${page})
        [[ "${bundle}" == "index" ]] && bundle="" || bundle="/${bundle}"
        urls[${#urls[*]}]="
   <url>
      <loc>${SCHEME}://${HOST}/${lang}${bundle}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>"
    done
done

cat << EOF > sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls[*]}
</urlset>
EOF

targetfiles[${#targetfiles[*]}]="sitemap.xml"

### Generate robots.txt

cat << EOF > robots.txt
User-Agent: *
Disallow: /_
Host: ${HOST}
Sitemap: ${SCHEME}://${HOST}/sitemap.xml
EOF

targetfiles[${#targetfiles[*]}]="robots.txt"

### Compress

compressfiles=()
if [ -n ${COMPRESS_EXT+x} ]; then
    for f in ${targetfiles[*]}; do
        for ext in ${COMPRESS_EXT}; do
            if [ "${f##*.}" = "${ext}" ]; then
                gzip -fk -- "$f"
                compressfiles[${#compressfiles[*]}]="$f.gz"
            fi
        done
    done
fi

_targetfiles=("${targetfiles[@]}" "${compressfiles[@]}")
targetfiles=()
sort_uniq targetfiles "${_targetfiles[*]}"

### Make tarball

tar -cvf "${TARBALL_DIR}/${TARBALL_NAME}-$(TZ=EDT date '+%Y%m%dT%H%M%SEDT').tar" ${targetfiles[*]}

### End
