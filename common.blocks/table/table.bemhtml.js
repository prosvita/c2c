block('table')(
    tag()('table'),
    elem('head')(
        def()(function() {
            return applyNext({
                head: true
            });
        }),
        tag()(false),
        content()(function() {
            return {
                elem: 'row',
                content: this.ctx.content
            };
        })
    ),
    elem('body').tag()(false),
    elem('row')(
        tag()('tr'),
        bem()(false)
    ),
    elem('cell')(
        tag()(function() {
            return this.head ? 'th' : 'td';
        }),
        attrs()({
            scope: 'col'
        })
    )
);
