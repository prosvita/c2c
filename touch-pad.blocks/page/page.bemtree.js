block('page').content()((node, ctx) => [
    {
        block: 'header',
        mods: { size: 'l' },
        content: [
            {
                elem: 'logo'
            },
            {
                elem: 'nav',
                content: ctx.navigation
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
