var fs = require('fs');

exports.renderer = function (data, out) {
    // var inFile = fs.createReadStream(data.path);
    // inFile.pipe(out);
    var contents = fs.readFileSync(data.file, {encoding: 'utf8'});
    out.write(contents);
    //out.write(data.path);
};
