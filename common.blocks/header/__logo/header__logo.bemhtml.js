block('header')(
    elem('logo')(
        // FIXIT: addElemMods()({ mod: 'val' }) in bem-xjst 8.x
        match(node => node._header.mods.size).def()(node => {
            node.elemMods = node.extend(node.elemMods, node._header.mods);
            return applyNext();
        }),

        content()({ elem: 'logo-img' })
    ),

    // FIXIT: addElemMods()({ mod: 'val' }) in bem-xjst 8.x
    elem('logo-img').match(node => node._header.mods.size).def()(node => {
        node.elemMods = node.extend(node.elemMods, node._header.mods);
        return applyNext();
    })
);
