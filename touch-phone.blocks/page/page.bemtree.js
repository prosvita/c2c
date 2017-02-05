block('page').content()((node, ctx) => [
    {
        block: 'header',
        mods: { size: 's' },
        content: [
            {
                elem: 'logo'
            },
            {
                elem: 'nop'
            },
            {
                elem: 'menu',
                navigation: ctx.navigation
            }
        ]
    },
    {
        block: 'article',
        content: applyNext()
    },
    {
        block: 'footer'
    },
    {
        block: 'counters'
    }
]);
