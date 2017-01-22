block('page').content()((node, ctx) => {
    const nav = [];
    ctx.data.forEach(item => {
        if (item.nav) {
            nav.push(item.nav);
        }
    });

    return [
        {
            block: 'header',
            content: [
                {
                    elem: 'logo'
                },
                {
                    elem: 'nav',
                    content: nav
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
        }
    ];
});
