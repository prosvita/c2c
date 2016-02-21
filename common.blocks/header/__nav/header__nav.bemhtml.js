block('header')(

    elem('nav')(
        tag()('nav'),
        content()(function(){
            return {
                elem: 'menu',
                content: this.ctx.content
            }
        })
    ),

    elem('menu')(
        tag()('ul'),
        content()(function(){
            return this.ctx.content.map(function(link){
                return [{
                    elem: 'link',
                    link: link
                }]
            });
        })
    ),

    elem('link')(
        tag()('li'),
        content()(function() {
            return {
                block: 'link',
                //mods: { pseudo: true },
                url: this.ctx.link.url,
                content: this.ctx.link.content
            };
        })
    )
);
