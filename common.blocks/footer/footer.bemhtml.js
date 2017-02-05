block('footer')(
    tag()('footer'),

    elem('about')(
        mix()({ elem: 'cell' }),
        content()(node => [
            { elem: 'title', content: node.i18n('footer', 'about-title') },
            { elem: 'text', content: node.i18n('footer', 'about') }
        ])
    ),

    elem('feedback')(
        mix()({ elem: 'cell' }),
        content()(node => [
            { elem: 'title', content: node.i18n('footer', 'feedback-title') },
            { elem: 'text', content: node.i18n('footer', 'feedback') },
            { elem: 'text', content: {
                    block: 'link',
                    url: 'mailto:feedback@connect.crimea.ua',
                    content: 'feedback@connect.crimea.ua'
                }
            },
            { elem: 'text', content: node.i18n('footer', 'bugreport') }
        ])
    ),

    elem('disclaimers')(
        mix()({ elem: 'cell' }),
        content()(node => [
            { elem: 'title', content: node.i18n('footer', 'disclaimers-title') },
            { elem: 'text', content: node.i18n('footer', 'disclaimers') }
        ])
    ),

    elem('copyright')(
        content()(node => {
            return '© 2016–2017 ' + node.i18n('footer', 'organisation')
        })
    ),

    content()(() => [{
        elem: 'container',
        content: [
            { elem: 'about' },
            { elem: 'feedback' },
            { elem: 'disclaimers' },
            { elem: 'copyright' }
        ]
    }]),

    elem('title').tag()('h3'),
    elem('text').tag()('p')
);
