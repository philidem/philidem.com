BASEDIR=`dirname $0`

rm -rf dist .cache

node "$BASEDIR/build.js" $@
