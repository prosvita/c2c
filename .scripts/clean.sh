#!/bin/bash

. .scripts/common.sh

### Settings

RM="rm -rf"

. configs/current/settings.sh

if [[ -z ${TECHS+x} || -z ${LANGS+x} || -z ${PLATFORMS+x} || -z ${PLATFORMSUFIX+x} ]]; then
    echo "one or more variables are undefined"
    exit 1
fi

### Get excluded files

excludetechs=()
fill_langs excludetechs "${TECHS}" "${LANGS}"

bundles=()
get_bundles bundles "${PLATFORMS}" "${PLATFORMSUFIX}"

excludefiles=()
get_tehcs_files excludefiles "${bundles[*]}" "${PLATFORMS}" "${PLATFORMSUFIX}" "${excludetechs[*]}"

### Remove files from bundles

for bundle in ${bundles[*]}; do
    for platform in ${PLATFORMS}; do
        if [ -d "${platform}${PLATFORMSUFIX}/${bundle}" ]; then

            for f in $(ls -d ${platform}${PLATFORMSUFIX}/${bundle}/*); do

                ignore=
                for excl in ${excludefiles[*]}; do
                    if [ ${f} == ${excl} ]; then
                        ignore=1
                    fi
                done

                if [ -z "${ignore}" ]; then
                    echo " delete ${f}"
                    ${RM} "${f}"
                fi

            done

        fi
    done
done

### Remove files from root

for f in ${ROOT_REMOVE}; do
    if [ -e "${f}" ]; then
        echo " delete ${f}"
        ${RM} "${f}"
    fi
done

### End
