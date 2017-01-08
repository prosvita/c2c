block('header')(

    elem('nav')(
        tag()('nav'),
        content()((node, ctx) => {
            return {
                elem: 'menu',
                content: ctx.content
            }
        })
    ),

    elem('menu')(
        tag()('ul'),
        content()((node, ctx) => {
            return ctx.content.map((link) => {
                return [{
                    elem: 'link',
                    link: link
                }]
            });
        })
    ),

    elem('link')(
        tag()('li'),
        content()((node, ctx) => {
            return {
                block: 'link',
                url: ctx.link.url,
                content: ctx.link.content
            };
        })
    )
);
