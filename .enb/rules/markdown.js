module.exports = {
    html(html, rootCtx) {
        function parsePageMetadata(data) {
            var result;

            if (result = data.match(/^NAVIGATION:\s*(.*)$/)) {
                let nav = result[1].replace(/\s$/g, '');
                rootCtx.pushToRootCtx('navigation', {
                    url: nav.substr(0, nav.indexOf(' ')),
                    content: nav.substr(nav.indexOf(' ') + 1)
                });
                return true;
            }

            if (result = data.match(/^META:(\w*)\s+(.*)$/)) {
                rootCtx.pushToRootCtx('head', {
                    elem: 'meta',
                    attrs: {
                        name: result[1],
                        content: result[2].replace(/\s$/g, '')
                    }
                });

                rootCtx.setInRootCtx('og.' + result[1], result[2].replace(/\s$/g, ''), false);
                return true;
            }

            if (result = data.match(/^OG:(\w*)\s+(.*)$/)) {
                rootCtx.setInRootCtx('og.' + result[1], result[2].replace(/\s$/g, ''), false);
                return true;
            }

            if (result = data.match(/^OG:fb:(\w*)\s+(.*)$/)) {
                rootCtx.setInRootCtx('og.fb.' + result[1], result[2].replace(/\s$/g, ''), false);
                return true;
            }

            if (result = data.match(/^OG:twitter:(\w*)\s+(.*)$/)) {
                rootCtx.setInRootCtx('og.tw.' + result[1], result[2].replace(/\s$/g, ''), false);
                return true;
            }

            return false;
        }

        function parse(element) {
            let arg;

            if (element === '<social/>') {
                return { block: 'ya-share2' };
            }

            if (arg = element.match(/^<!--\s*(.*)\s*-->$/)) {
                if (parsePageMetadata(arg[1])) {
                    return '';
                }

                if (element.match(/^\n+$/)
                    || element.match(/^<!-- begin:.+$/)
                    || element.match(/^<!-- end:.+$/)) {
                    return '';
                }
            }

            return element;
        }

        if (typeof html === 'object' && html instanceof Array) {
            html.forEach((item, i, arr) => {
                arr[i] = parse(item);
            });
        } else if (typeof html === 'string') {
                html = parse(html);
        }

        return html;
    },

    heading(text, level, raw, rootCtx) {
        if (level === 1) {
            rootCtx.setInRootCtx('title', raw, false);
        }

        return {
            block: 'head',
            mods: { level: level },
            mix: { block: 'content', elem: 'heading' },
            content: text
        };
    },

    paragraph(text) {
        return {
            block: 'paragraph',
            mix: { block: 'content', elem: 'paragraph' },
            content: text
        };
    },

    list(body, ordered) {
        const result = {
            block: 'list',
            mix: { block: 'content', elem: 'paragraph' },
            content: body
        };

        if (ordered) {
            result.mods = { ordered: true };
        }

        return result;
    },

    listitem(text) {
        return {
            block: 'list',
            elem: 'item',
            content : text
        };
    },

    table(header, body) {
        const result = {
            block: 'table',
            mix: [
                { block: 'content', elem: 'paragraph' },
                { mods: { gap: 'm' } }
            ],
            content: []
        };

        if (header) {
            result.content.push({
                elem: 'head',
                content: header
            });
        }

        result.content.push({
            elem: 'body',
            content: body
        });

        return result;
    },

    tablerow(content) {
        return {
            elem: 'row',
            content: content
        };
    },

    tablecell(content, flags) {
        const result = {
            elem: 'cell',
            content: content
        };

        if (flags.align) {
            result.elemMods = { align: flags.align };
        }

        return result;
    },

    codespan(text) {
        return {
            block: 'codespan',
            content: text,
        };
    },

    link(href, title, text) {
        const result = {
            block: 'link',
            url: href,
            content: text
        };

        if (title) {
            result.title = title;
        }

        return result;
    }
};
