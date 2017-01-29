({
    mustDeps: [ 'i18n', 'cookie' ],
    shouldDeps: [
        { elem: 'og' },
        { block: 'header', elems: [ 'logo', 'nav', 'langs' ] },
        { block: 'article' },
        { block: 'content' },
        { block: 'footer' },
        { block: 'counters' }
    ]
})
