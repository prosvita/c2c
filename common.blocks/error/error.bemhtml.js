block('error')(
    tag()(false),
    content()(function() {
        return [
            {
                tag: 'center',
                content: {
                    tag: 'h1',
                    content: this.ctx.title
                }
            }, {
                tag: 'hr'
            }, {
                tag: 'center',
                content: this.ctx.content
            }
        ];
    })
);
