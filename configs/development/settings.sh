# Common settings

. configs/common/settings.sh

# Settings for development mode

unset FREEZE
unset COMPRESS_EXT
unset HOST

TARGETS='blocks ?.min.css ?.{lang}.min.js ?.{lang}.html'
TARBALL_NAME="c2c-dev"
ROOT_REMOVE=".enb/tmp"
