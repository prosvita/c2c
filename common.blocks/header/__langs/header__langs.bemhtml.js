block('header')(

    elem('langs')(
        tag()('ul'),
        content()(function(){
            var bundle = this.ctx.bundle;

            return this.ctx.content.map(function(lang){
                return [{
                    elem: 'lang',
                    lang: lang,
                    bundle: bundle
                }]
            });
        })
    ),

    elem('lang')(
        tag()('li'),
        content()(function(){
            return {
                block: 'link',
                // mods: { pseudo: true },
                url: this.ctx.lang.url + '/' + this.ctx.bundle,   //FIXIT: Повний url (`/{this.ctx.lang}/{bundleName}.html`)
                content: this.ctx.lang.content  //FIXIT: this.i18n('header', this.ctx.lang)
            };
        }),

        //FIXIT: Переробити на regexp this.ctx.url =~ m/^\/{this.ctx.lang}\//
        match(function(){ return this.ctx.lang.url === '/' + this.i18n('page', 'lang'); })(
            mix()([{ elemMods: { current: true } }])
        )
    )
);
