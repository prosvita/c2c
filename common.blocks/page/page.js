modules.define('page', ['i-bem__dom', 'i18n', 'cookie'], function(provide, BEMDOM, i18n, cookie) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                cookie.set('language', i18n('page', 'lang'));
            }
        }
    }
}));

});
