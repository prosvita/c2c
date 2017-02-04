block('header').elem('langs').content()((node, ctx) => {
    // FIXIT: Винести в шаблон та витягати автоматично
    node.ctx.bundle = 'call';

    // FIXIT: Передавати тільки у шаблон lang: [ 'uk', 'crh', 'ru' ]
    // В шаблоні додаємо назву бандлу і робимо з цього посилання.
    // Назви кладемо у i18n
    return applyCtx([
        { url: '/uk', content: 'Українська' },
        { url: '/crh', content: 'Qırımtatarca' },
        { url: '/ru', content: 'Русский' }
    ]);
});
