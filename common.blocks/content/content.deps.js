//FIXIT: перетворити в блок article, чи навпаки
({
    mustDeps: { block: 'variables' },
    shouldDeps: [
        { elems: [ 'object', 'paragraph' ] },
        { block: 'head' },
        { block: 'paragraph' },
        { block: 'table' },
        { block: 'list' }
    ]
})
