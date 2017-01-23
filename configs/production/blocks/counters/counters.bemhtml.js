block('counters')(
    content()((node) => [
        {
            block: 'google-analytics',
            params: {
                id: node.i18n('counters', 'google-analytics-id')
            }
        },
        {
            block: 'yandex-metrica',
            params: {
                id: 35297225,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            }
        },
        {
            block: 'statcounter',
            params: {
                project: 10810946,
                security: '11cd22e7'
            }
        }
    ])
);
