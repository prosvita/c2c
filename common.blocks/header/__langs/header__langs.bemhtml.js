block('header')(

    elem('langs')(
        tag()('ul'),
        content()((node, ctx) => {
            return ctx.content.map((lang) => {
                return [{
                    elem: 'lang',
                    lang: lang,
                    bundle: ctx.bundle
                }]
            });
        })
    ),

    elem('lang')(
        tag()('li'),
        content()((node, ctx) => {
            return {
                block: 'link',
                url: ctx.lang.url + '/' + ctx.bundle,   //FIXIT: Повний url (`/{ctx.lang}/{bundleName}.html`)
                content: ctx.lang.content  //FIXIT: node.i18n('header', ctx.lang)
            };
        }),

        //FIXIT: Переробити на regexp ctx.url =~ m/^\/{ctx.lang}\//
        match((node, ctx) => { return ctx.lang.url === '/' + node.i18n('page', 'lang'); })(
            mix()([{ elemMods: { current: true } }])
        )
    )
);
