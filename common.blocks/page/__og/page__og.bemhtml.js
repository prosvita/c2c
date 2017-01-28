block('page').elem('og')(
    tag()(false),
    bem()(false),
    content()((node, ctx) => {
        const content = [
            { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { elem: 'meta', attrs: { property: 'og:updated_time', content: Date.now() / 1000 | 0 } },
            { elem: 'meta', attrs: { property: 'og:locale', content: node.i18n('page', 'locale') } },
            { elem: 'meta', attrs: { property: 'twitter:card', content: 'summary' } }
        ];

        if (ctx.og.title) {
            content.push({ elem: 'meta', attrs: { property: 'og:title', content: ctx.og.title } });
            content.push({ elem: 'meta', attrs: { property: 'twitter:title', content: ctx.og.title } });
        }

        if (ctx.og.description) {
            content.push({ elem: 'meta', attrs: { property: 'og:description', content: ctx.og.description } });
            content.push({ elem: 'meta', attrs: { property: 'twitter:description', content: ctx.og.description } });
        }

        if (ctx.og.url) {
            content.push({ elem: 'meta', attrs: { property: 'og:url', content: ctx.og.url } });
        }

        if (ctx.og.image) {
            content.push({ elem: 'meta', attrs: { property: 'og:image', content: ctx.og.image } });
        }

        if (ctx.og.tw && ctx.og.tw.image) {
            content.push({ elem: 'meta', attrs: { property: 'twitter:image', content: ctx.og.tw.image } });
        }

        if (ctx.og.tw && ctx.og.tw.site) {
            content.push({ elem: 'meta', attrs: { property: 'twitter:site', content: ctx.og.tw.site } });
        }

        if (ctx.og.fb && ctx.og.fb.app_id) {
            content.push({ elem: 'meta', attrs: { property: "fb:app_id", content: ctx.og.fb.app_id } });
        }

        if (1) { // FIXIT: to config
            // beta: fb:app_id 1093711844024689
            // prod: fb:app_id 1093708287358378
            content.push({ elem: 'meta', attrs: { property: "fb:app_id", content: "1093708287358378" } });
            content.push({ elem: 'meta', attrs: { property: "twitter:site", content: "@connect2crimea" } });
            content.push({ elem: 'meta', attrs: { property: "og:image", content: "https://img-fotki.yandex.ru/get/108697/204961608.0/0_12694e_4d33a55e_orig" } });
            content.push({ elem: 'meta', attrs: { property: "twitter:image", content: "https://img-fotki.yandex.ru/get/174352/204961608.0/0_12694f_f77ce585_orig" } });
             // FIXIT: Автоматично з '${SCHEME}://${HOST}/' + node.i18n('page', 'lang') + '/' + node._targetName
            content.push({ elem: 'meta', attrs: { property: 'og:url', content: 'http://connect.crimea.ua/' + node.i18n('page', 'lang') + '/call/' } });
        }

        return content;
    })
);
