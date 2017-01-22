block('list')(
    tag()('ul'),

    mod('ordered', true).tag()('ol'),

    elem('item').tag()('li')
);
