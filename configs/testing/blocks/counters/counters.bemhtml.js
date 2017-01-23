block('counters')(
    content()(() => [
        {
            block: 'google-analytics',
            params: {
                id: 'UA-90734636-4'
            }
        },
        {
            block: 'yandex-metrica',
            params: {
                id: 42291699,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            }
        }
    ])
);
