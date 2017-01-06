# Common settings

PLATFORMS="desktop touch-pad touch-phone"
PLATFORMSUFIX=".bundles"
TARGETS='?.{lang}.html'
TECHS='blocks ?.bemjson.js ?.{lang}.bemjson.js ?.gemini.js ?.{lang}.md'
FREEZE="_"

TARGETTECH='?.{lang}.bemjson.js'
COMPRESS_EXT="css js svg xml"

ROOT_REMOVE="${FREEZE} .enb/tmp .borschik configs/current libs node_modules robots.txt sitemap.xml*"

# Project settings

LANGS="uk crh ru"
SCHEME="http"
HOST=${HOST:-"connect.crimea.ua"}
TARBALL_DIR=".."
TARBALL_NAME="c2c"

# Environment

YENV=${YENV:-$(readlink configs/current)}
BASEURL=${BASEURL:-"${SCHEME}://${HOST}/"}
