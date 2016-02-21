#!/bin/bash

# Settings

LANGS="uk crh ru"
BNDL_EXCLUDE="blocks ?.bemjson.js ?.{lang}.bemjson.js"
ROOT_REMOVE="_"

# Const

PLATFORMS="desktop touch-pad touch-phone"
PLATFORMSUFIX=".bundles"
RM="rm -rf"

###

excludetechs=()

for excl in $BNDL_EXCLUDE; do
    if [ -n "$LANGS" ]; then
        for lang in $LANGS; do
            pattern="s/{lang}/$lang/"
            excludetechs[${#excludetechs[*]}]=`echo $excl | sed $pattern`
        done
    else
        excludetechs[${#excludetechs[*]}]=$excl
    fi
done

tmpIFS=$IFS
IFS=$'\n'
excludetechs=( $(echo "${excludetechs[*]}" | sort | uniq) )
IFS=$tmpIFS

###

allbundles=()

for platform in $PLATFORMS; do
    if [ -d "$platform$PLATFORMSUFIX" ]; then
        for d in `ls -d $platform$PLATFORMSUFIX/*`; do
            if [ -d "$d" ]; then
                allbundles[${#allbundles[*]}]=$(basename $d)
            fi
        done
    fi
done

tmpIFS=$IFS
IFS=$'\n'
allbundles=( $(echo "${allbundles[*]}" | sort | uniq) )
IFS=$tmpIFS

### Remove files from bundles

for bundle in ${allbundles[*]}; do
    for platform in $PLATFORMS; do
        if [ -d "$platform$PLATFORMSUFIX/$bundle" ]; then

            exclude=()

            for excl in ${excludetechs[*]}; do
                pattern="s/?/$bundle/"
                exclude[${#exclude[*]}]="$platform$PLATFORMSUFIX/$bundle/$(echo $excl | sed $pattern)"
            done

            for f in `ls -d $platform$PLATFORMSUFIX/$bundle/*`; do

                ignore=
                for excl in ${exclude[*]}; do
                    if [ $f == $excl ]; then
                        ignore=1
                    fi
                done

                if [ -z "$ignore" ]; then
                    $RM "$f"
                fi

            done

        fi
    done
done

### Remove files from root

for f in $ROOT_REMOVE; do
    $RM "$f"
done
