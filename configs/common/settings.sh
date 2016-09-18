# Settings for tools scripts
LANGS="uk crh ru"

PLATFORMS="desktop touch-pad touch-phone"
PLATFORMSUFIX=".bundles"
TARGETS='?.{lang}.html'
TECHS='blocks ?.bemjson.js ?.{lang}.bemjson.js ?.{lang}.md'
FREEZE="_"

TARGETTECH='?.{lang}.bemjson.js'
SCHEME="http"
HOST="connect.crimea.ua"
COMPRESS_EXT="css js svg xml"
TARBALL_DIR=".."
TARBALL_NAME="c2c"

ROOT_REMOVE="${FREEZE} .enb/tmp .borschik configs/current libs node_modules robots.txt sitemap.xml*"
