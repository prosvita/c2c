block('page')(
    js()(true),

    // set Content-Language
    elem('meta').match((node, ctx) => { return ctx.i18n; }).def()((node) => {
        return applyNext({
            'ctx.attrs': { 'http-equiv': 'Content-Language', content: node.i18n('page', 'lang') }
        });
    }),

    // replace '?.min.css' with '?.{lang}.min.css'
    elem('css').match((node, ctx) => { return ctx.i18n; }).replace()((node, ctx) => {
        var url = ctx.url.split('.');
        url.splice(1, 0, node.i18n('page', 'lang'));

        return { elem: 'css', url: url.join('.') };
    }),

    // replace '?.min.js' with '?.{lang}.min.js'
    elem('js').match((node, ctx) => { return ctx.i18n; }).replace()((node, ctx) => {
        var url = ctx.url.split('.');
        url.splice(1, 0, node.i18n('page', 'lang'));

        return { elem: 'js', url: url.join('.') };
    })
);

block('page').def().match((node, ctx) => { return !ctx.favicon; })((node, ctx) => {
    ctx.favicon='../../common.blocks/page/_favicon/page_favicon_motanka.ico';
    return applyNext();
});
