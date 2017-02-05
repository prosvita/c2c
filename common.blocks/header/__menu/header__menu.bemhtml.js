block('header')(
    elem('menu').content()(() => [{
        block: 'dropdown',
        mods: { switcher: 'link' },
        mix: { block: 'header', elem: 'menu-container' },
        switcher: {
            block: 'link',
            mods: { pseudo: true },
            content: {
                block: 'header',
                elem: 'menu-img'
            }
        },
        popup: applyNext()
    }]),

    // FIXIT: addElemMods()({ mod: 'val' }) in bem-xjst 8.x
    elem('menu-img').match(node => node._header.mods.size).def()(node => {
        node.elemMods = node.extend(node.elemMods, node._header.mods);
        return applyNext();
    }),

    elem('menu-container')(
        tag()('ul'),

        // FIXIT: addElemMods()({ mod: 'val' }) in bem-xjst 8.x
        match(node => node._header.mods.size).def()(node => {
            node.elemMods = node.extend(node.elemMods, node._header.mods);
            return applyNext();
        })
    ),

    elem('menu-item').tag()('li')
);

