
function sort_uniq()
{
    local __result=$1
    read -ra __array <<<"$2"

    local tmpIFS=${IFS}
    IFS=$'\n'
    __array=( "$(echo "${__array[*]}" | sort | uniq)" )
    IFS=${tmpIFS}

    eval $__result="'${__array[*]}'"
    unset __array
}

function fill_langs()
{
    local __result=$1
    #local _masks=("$2")
    read -ra __masks <<<"$2"
    local _langs=$3

    local _targets=()

    for mask in "${__masks[@]}"; do
        if [ -n "${_langs}" ]; then
            for lang in ${_langs}; do
                local pattern="s/{lang}/${lang}/"
                _targets[${#_targets[*]}]=$(echo "${mask}" | sed -e "${pattern}")
            done
        else
            _targets[${#_targets[*]}]="${mask}"
        fi
    done

    local _result=()
    sort_uniq _result "${_targets[*]}"

    eval $__result="'${_result[*]}'"
    unset __mask
}

function get_bundles()
{
    local __result=$1
    local _platforms=$2
    local _platformsufix=$3

    local _bundles=()

    for platform in ${_platforms}; do
        if [ -d "${platform}${_platformsufix}" ]; then
            for d in `ls -d ${platform}${_platformsufix}/*`; do
                if [ -d "$d" ]; then
                    _bundles[${#_bundles[*]}]=$(basename $d)
                fi
            done
        fi
    done

    local _result=()
    sort_uniq _result "${_bundles[*]}"

    eval $__result="'${_result[*]}'"
}

function get_tehcs_files()
{
    local __result=$1
    local _bundles="$2"
    local _platforms=$3
    local _platformsufix=$4
    local _techs="$5"

    local _files=()

    for bundle in ${_bundles[*]}; do
        for platform in ${_platforms}; do
            if [ -d "${platform}${_platformsufix}/${bundle}" ]; then
                for mask in ${_techs[*]}; do
                    local pattern="s/?/${bundle}/"
                    local file="${platform}${_platformsufix}/${bundle}/$(echo "${mask}" | sed -e "${pattern}")"
                    if [ -e "$file" ]; then
                        _files[${#_files[*]}]=${file}
                    fi
                done
            fi
        done
    done

    eval $__result="'${_files[*]}'"
}
