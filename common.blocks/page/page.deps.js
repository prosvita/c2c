({
    mustDeps: [ 'i18n', 'cookie' ],
    shouldDeps: [
        { block: 'header', elems: [ 'logo', 'nav', 'langs' ] },
        { block: 'article' },
        { block: 'content' },
        { block: 'footer' },
        { block: 'counters' }
    ]
})
