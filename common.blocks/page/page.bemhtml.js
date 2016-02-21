block('page')(
    js()(true),

    // set Content-Language
    elem('meta').match(function() { return this.ctx.i18n; }).def()(function() {
        return applyNext({
            'ctx.attrs': { 'http-equiv': 'Content-Language', content: this.i18n('page', 'lang') }
        });
    }),

    // replace '?.min.css' with '?.{lang}.min.css'
    elem('css').match(function() { return this.ctx.i18n; }).def()(function() {
        var url = this.ctx.url.split('.');
        url.splice(1, 0, this.i18n('page', 'lang'));

        return applyNext({ 'ctx.url': url.join('.') });
    }),

    // replace '?.min.js' with '?.{lang}.min.js'
    elem('js').match(function() { return this.ctx.i18n; }).def()(function() {
        var url = this.ctx.url.split('.');
        url.splice(1, 0, this.i18n('page', 'lang'));

        return applyNext({ 'ctx.url': url.join('.') });
    })
);

block('page').def().match(!this.ctx.favicon)(function() {
    this.ctx.favicon='../../common.blocks/page/_favicon/page_favicon_motanka.ico';
    applyNext();
});
