ulimit -S -n 2048

BASEDIR=`dirname $0`

if [ -z "$NODE_DEBUG_MODE" ]; then
    #$BASEDIR/node_modules/.bin/browser-refresh "$BASEDIR/index.js" --config ./config-run-server.properties $@
    MARKO_CLEAN=true node $BASEDIR/node_modules/.bin/browser-refresh "$BASEDIR/server.js" --config config-dev.properties $@
else
    MARKO_CLEAN=true node --"$NODE_DEBUG_MODE" "$BASEDIR/server.js" --config config-dev.properties $@
fi
