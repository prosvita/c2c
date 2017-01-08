block('section')(

    elem('head')(

        mix()((node, ctx) => {
            return [
                { elem: 'cover' },
                { elem: 'specific', elemMods: { height: ctx.specific } }
            ];
        }),

        content()((node, ctx) => {
            return [
                {
                    elem: 'image',
                    mix: [
                        { elem: 'specific', elemMods: { height: ctx.specific } },
                        { elem: 'specific', elemMods: { background: ctx.specific } }
                    ]
                },
                {
                    elem: 'fog',
                    mix: { elem: 'specific', elemMods: { height: ctx.specific } }
                },
                {
                    elem: 'title',
                    content: {
                        elem: 'heading',
                        elemMods: { level: ctx.level },
                        mix: { elem: 'specific', elemMods: { height: ctx.specific } },
                        content: ctx.content
                    }
                }
            ];
        })
    )
);

block('section').elem('heading')(
    elemMod('level', 1).tag()('h1'),
    elemMod('level', 2).tag()('h2')
);
