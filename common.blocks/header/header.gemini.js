gemini.suite('header', (suite) => {
    suite.setUrl(GH.pagePath('call', 'uk'));

    gemini.suite('logo', (suite) => {
        suite
            .setCaptureElements('.header__logo-img')
            .capture('plain');
    });

    gemini.suite('langs', (suite) => {
        suite
            .setCaptureElements('.header__langs')
            .capture('plain')
            .capture('hovered-current', (actions, find) => {
                actions
                    .mouseMove(find('.header__lang_current'))
                    .wait(400);
            })
            .capture('hovered', (actions, find) => {
                actions
                    .mouseMove(find('.header__lang:nth-child(2)'))
                    .wait(400);
            })
            .capture('pressed', (actions, find) => {
                actions.mouseDown(find('.header__lang:nth-child(2)'));
            })
            .after((actions) => {
                actions.mouseUp();
            });
    });
});
