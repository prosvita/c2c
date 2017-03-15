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
        content()((node, ctx) => {
            const start = ctx.start,
                current = (new Date()).getFullYear();

            return [
                '©\u00a0',
                start && start !== current && (start + '–'),
                current,
                '\u00a0\u00a0',
                ctx.content
            ];
        })
    ),

    content()(node => [{
        elem: 'container',
        content: [
            { elem: 'about' },
            { elem: 'feedback' },
            { elem: 'disclaimers' },
            {
                elem: 'copyright',
                start: 2016,
                content: node.i18n('footer', 'organisation')
            }
        ]
    }]),

    elem('title').tag()('h3'),
    elem('text').tag()('p')
);
