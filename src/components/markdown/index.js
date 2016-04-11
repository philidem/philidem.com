var marked = require('marked');

var removeIndentation = require('src/util/removeIndentation');

var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
	var result = `<a href="${href}"`;
	if (title) {
		result += ' title="' + title + '"';
	}

	result += ` target="_blank">${text}</a>`;

	return result;
};

marked.setOptions({
	renderer: renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: false,
	smartypants: false,
	langPrefix: 'hljs lang-',
    highlight: require('../code-block').highlight,
	anchorTarget: '_blank'
});

exports.renderer = function(input, out) {
    var body = out.captureString(function () {
        input.renderBody(out);
    });

	body = removeIndentation(body);

    out.write(marked(body));

};
