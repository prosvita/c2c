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
                elem: 'langs'
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
