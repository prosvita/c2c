block('section')(
    content()((node, ctx) => {
        return [
            {
                elem: 'head',
                specific: ctx.specific,
                level: ctx.level,
                content: ctx.title
            },
            {
                elem: 'anchor',
                anchor: ctx.anchor
            },
            {
                elem: 'container',
                anchor: ctx.anchor,
                content: applyNext()
            }
        ];
    }),

    elem('anchor')(
        tag()(false),
        match((node, ctx) => { return ctx.anchor; })(
            tag()('a'),
            attrs()((node, ctx) => { return { name: ctx.anchor }; } )
        )
    ),

    elem('container')(
        match((node, ctx) => { return !ctx.anchor; })(
            mix()({ elemMods: {'anchor': 'no'} })
        )
    ),

    elem('h').tag()('h3'),
    elem('paragraph').tag()('p')
);
