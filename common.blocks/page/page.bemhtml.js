block('page')(
    js()(true),

    // set Content-Language
    elem('head').content()(node => [
        applyNext(),
        {
            elem: 'meta',
            attrs: {
                'http-equiv': 'Content-Language',
                content: node.i18n('page', 'lang')
            }
        }
    ]),

    // fonts
    elem('head').content()(() => [
        applyNext(),
        {
            elem: 'css',
            url: 'https://fonts.googleapis.com/css?family=Scada:400,700&subset=latin,cyrillic'
        }
    ]),

    // js for ya-share2 block
    elem('head').content()(() => [
        applyNext(),
        {
            elem: 'js',
            url: 'https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js'
        },
        {
            elem: 'js',
            url: 'https://yastatic.net/share2/share.js',
            attrs: { async: 'async' }
        }
    ])
);

block('page').def().match((node, ctx) => !ctx.favicon)((node, ctx) => {
    ctx.favicon='../../common.blocks/page/_favicon/page_favicon_motanka.ico';
    return applyNext();
});
