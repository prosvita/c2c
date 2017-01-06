#!/bin/bash

CURRENT="configs/current"
STATUS=0

[ "x$1" == "xreset" ] && rm -f ${CURRENT}

if [ ! -e ${CURRENT} ]; then
    ln -sf ${YENV:-development} ${CURRENT}
    ln -sf ${CURRENT}/borschik .borschik
fi

if [[ -L ${CURRENT} && -d ${CURRENT} ]]; then
    [ "x$1" != "xsilent" ] && readlink ${CURRENT}
else
    STATUS=1
fi

exit ${STATUS}
