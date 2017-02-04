block('head').match(node => node.mods.level <= 2)(
    mix()({ elem: 'cover' }),

    content()((node, ctx) => [
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
                content: applyNext()
            }
        }
    ])
);
