block('page').content()((node, ctx) => {

    if (ctx.og) {
        ctx.og.title = ctx.title;
        ctx.head.push({
            elem: 'og',
            og: ctx.og
        });
    }

    return [
        {
            block: 'header',
            content: [
                {
                    elem: 'logo'
                },
                {
                    elem: 'nav',
                    content: ctx.navigation
                },
                {
                    elem: 'langs',
                    bundle: 'call', // FIXIT: Витягати автоматично
                    // TODO: Передавати тільки моду lang: [ 'uk', 'crh', 'ru' ]
                    // В шаблоні додаємо назву бандлу і робимо з цього посилання.
                    // Назви кладемо у i18n
                    content: [
                        { url: '/uk', content: 'Українська' },
                        { url: '/crh', content: 'Qırımtatarca' },
                        { url: '/ru', content: 'Русский' }
                    ]
                }
            ]
        },
        {
            block: 'article',
            content: ctx.content
        },
        {
            block: 'footer'
        },
        {
            block: 'counters'
        }
    ];
});
