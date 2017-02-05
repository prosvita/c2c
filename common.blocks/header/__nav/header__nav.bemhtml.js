block('header')(

    elem('nav')(
        tag()('nav'),
        content()((node, ctx) => [{
            elem: 'navigation',
            content: ctx.content
        }])
    ),

    elem('navigation')(
        tag()('ul'),
        content()((node, ctx) =>
            ctx.content.map(link => [{
                elem: 'link',
                link: link
            }])
        )
    ),

    elem('link')(
        tag()('li'),
        content()((node, ctx) => [{
            block: 'link',
            url: ctx.link.url,
            content: ctx.link.content
        }])
    )
);
