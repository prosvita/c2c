modules.define('page', ['i-bem__dom', 'i18n', 'cookie'], function(provide, BEMDOM, i18n, cookie) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                if (cookie.get('language') !== i18n('page', 'lang')) {
                    cookie.set('language', null); // HACK: Чомусь залишається попередня кука
                    cookie.set('language', i18n('page', 'lang'), { path: '/' });
                }
            }
        }
    }
}));

});
