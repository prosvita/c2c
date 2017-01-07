#!/bin/bash

. .scripts/common.sh

### Settings

GIT="git"

. configs/current/settings.sh

REVISION=$(TZ=EDT date '+%Y%m%dT%H%M%SEDT')

if [[ -z ${TARGETS+x} || -z ${LANGS+x}
        || -z ${PLATFORMS+x} || -z ${PLATFORMSUFIX+x}
        || -z ${TARBALL_DIR+x} || -z ${TARBALL_NAME+x} ]]; then
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

### Generate Sitemap

if [[ -n ${SCHEME+x} && -n ${HOST+x} && -n ${TARGETTECH+x} ]]; then
    urls=()
    for lang in ${LANGS}; do
        fill_langs targettechs "${TARGETTECH}" "${lang}"
        for bundle in ${bundles[*]}; do
            get_tehcs_files page "${bundle}" "${PLATFORMS}" "${PLATFORMSUFIX}" "${targettechs}"
            lastmod=$(${GIT} log -n 1 --pretty=format:%cI -- ${page})
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
else
    echo "Warning: skip generate sitemap.xml"
fi

### Generate robots.txt

if [[ -n ${SCHEME+x} && -n ${HOST+x} ]]; then
    cat << EOF > robots.txt
# mode: ${YENV}
# revision: ${REVISION}
User-Agent: *
Disallow: /_
Host: ${HOST}
Sitemap: ${SCHEME}://${HOST}/sitemap.xml
EOF

    targetfiles[${#targetfiles[*]}]="robots.txt"
else
    echo "Warning: skip generate robots.txt"
fi

### Compress

if [ -n ${COMPRESS_EXT+x} ]; then
    compressfiles=()

    for f in ${targetfiles[*]}; do
        for ext in ${COMPRESS_EXT}; do
            if [ "${f##*.}" = "${ext}" ]; then
                gzip -fk -- "$f"
                compressfiles[${#compressfiles[*]}]="$f.gz"
            fi
        done
    done

    _targetfiles=("${targetfiles[@]}" "${compressfiles[@]}")
    targetfiles=()
    sort_uniq targetfiles "${_targetfiles[*]}"
else
    echo "Warning: skip compress"
fi

### Make tarball

DIST_FILE="${TARBALL_DIR}/${TARBALL_NAME}-${REVISION}.tar.gz"

tar -zcvf ${DIST_FILE} ${targetfiles[*]}
echo ${DIST_FILE} > .dist

echo "Saved to ${DIST_FILE}"

### End
