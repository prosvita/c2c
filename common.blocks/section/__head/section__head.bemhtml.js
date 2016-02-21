block('section')(

    elem('head')(

        mix()(function(){
            return [
                { elem: 'cover' },
                { elem: 'specific', mods: { height: this.ctx.specific } }
            ];
        }),

        content()(function(){
            return [
                {
                    elem: 'image',
                    mix: [
                        { elem: 'specific', mods: { height: this.ctx.specific } },
                        { elem: 'specific', mods: { background: this.ctx.specific } }
                    ]
                },
                {
                    elem: 'fog',
                    mix: { elem: 'specific', mods: { height: this.ctx.specific } }
                },
                {
                    elem: 'title',
                    content: {
                        elem: 'heading',
                        mods: { level: this.ctx.level },
                        mix: { elem: 'specific', mods: { height: this.ctx.specific } },
                        content: this.ctx.content
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
