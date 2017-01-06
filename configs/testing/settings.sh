# Presets

HOST=${HOST:-"beta.connect.crimea.ua"}

# Common settings

. configs/common/settings.sh

# Settings for testing mode

unset COMPRESS_EXT

TARBALL_NAME="c2c-beta"
