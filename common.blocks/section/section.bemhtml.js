block('section')(
    content()(function(){
        return [
            {
                elem: 'head',
                specific: this.ctx.specific,
                level: this.ctx.level,
                content: this.ctx.title
            },
            {
                elem: 'anchor',
                anchor: this.ctx.anchor
            },
            {
                elem: 'container',
                content: applyNext()
            }
        ];
    }),

    elem('anchor')(
        tag()(false),
        match(function() { return this.ctx.anchor; })(
            tag()('a'),
            attrs()(function(){ return { name: this.ctx.anchor }; } )
        )
    ),

    elem('h').tag()('h3'),
    elem('paragraph').tag()('p')
);
