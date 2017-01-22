block('head').match(node => node.mods.level).tag()((node, ctx) => 'h' + ctx.mods.level);

block('head').match(node => node.mods.level <= 2)(
    mix()({ elem: 'cover' }),

    content()((node, ctx) => {
        return [
            {
                elem: 'image'
            },
            {
                elem: 'fog'
            },
            {
                elem: 'title',
                tag: 'span',
                content: {
                    elem: 'heading',
                    tag: 'span',
                    content: ctx.content
                }
            }
        ];
    })
);
