block('ya-share2')(
    attrs()(node => ({
        'data-services': 'facebook,twitter,vkontakte',
        'data-counter': true,
        'data-lang': node.i18n('page', 'lang'),
        'data-size': 'm'
    }))
);
