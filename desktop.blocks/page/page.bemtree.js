block('page').def()((node, ctx) => {
    if (!ctx.styles) {
        ctx.styles = [];
    }

    ctx.styles.push({
        elem: 'conditional-comment',
        condition : 'lte IE 9',
        content : { elem : 'css', url : 'call.min.ie.css' }
    });

    return applyNext();
});

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
