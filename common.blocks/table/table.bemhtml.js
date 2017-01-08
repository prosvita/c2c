block('table')(
    tag()('table'),
    elem('head')(
        def()(() => {
            return applyNext({
                head: true
            });
        }),
        tag()(false),
        content()((node, ctx) => {
            return {
                elem: 'row',
                content: ctx.content
            };
        })
    ),
    elem('body').tag()(false),
    elem('row')(
        tag()('tr'),
        bem()(false)
    ),
    elem('cell')(
        tag()((node) => {
            return node.head ? 'th' : 'td';
        }),
        attrs()({
            scope: 'col'
        })
    )
);
