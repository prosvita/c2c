block('footer')(
    tag()('footer'),

    elem('about')(
        content()(function(){
            return [
                { elem: 'title', content: this.i18n('footer', 'about-title') },
                { elem: 'text', content: this.i18n('footer', 'about') }
            ];
        })
    ),

    elem('feedback')(
        content()(function(){
            return [
                { elem: 'title', content: this.i18n('footer', 'feedback-title') },
                { elem: 'text', content: this.i18n('footer', 'feedback') },
                { elem: 'text', content: {
                        block: 'link',
                        url: 'mailto:feedback@connect.crimea.ua',
                        content: 'feedback@connect.crimea.ua'
                    }
                },
                { elem: 'text', content: this.i18n('footer', 'bugreport') }
            ];
        })
    ),

    elem('disclaimers')(
        content()(function(){
            return [
                { elem: 'title', content: this.i18n('footer', 'disclaimers-title') },
                { elem: 'text', content: this.i18n('footer', 'disclaimers') }
            ];
        })
    ),

    elem('copyright')(
        content()(function(){
            return '© 2016 ' + this.i18n('footer', 'organisation')
        })
    ),

    content()(function(){
        return [{
            elem: 'container',
            content: [
                { elem: 'about' },
                { elem: 'feedback' },
                { elem: 'disclaimers' },
                { elem: 'copyright' }
            ]
        }];
    }),

    elem('title').tag()('h3'),
    elem('text').tag()('p')
);
