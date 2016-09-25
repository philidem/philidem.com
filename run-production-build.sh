BASEDIR=`dirname $0`

OUTPUT_DIR=../philidem.github.io/
EXISTING_FILES=`ls $OUTPUT_DIR`

rm -rf .cache

pushd .

cd $OUTPUT_DIR
rm -rf $EXISTING_FILES

popd

node "$BASEDIR/build.js" --output-dir "${OUTPUT_DIR}" --url-prefix http://philidem.github.io/ --production true