block('header').elem('menu').content()((node, ctx) => {
    const menu = [{
        block: 'header',
        elem: 'menu-item',
        content: [{ elem: 'langs' }]
    }];

    menu.push(ctx.navigation.map(item => {
        return {
            block: 'header',
            elem: 'menu-item',
            mix: { elem: 'navigation' },
            content: node.extend({ block: 'link' }, item)
        }
    }));

    return applyCtx({
        block: 'header',
        elem: 'menu-container',
        content: menu
    });
});
