gemini.suite('call', suite => {
    suite.setUrl(GH.pagePath('call', 'uk'));

    gemini.suite('head_level_1', suite => {
        suite
            .setCaptureElements('h1')
            .capture('plain');
    });

    // gemini.suite('head_level_2', suite => {
    //     suite
    //         .setCaptureElements('h2:first-of-type')
    //         .capture('first');
    //         .setCaptureElements('h2:last-of-type')
    //         .capture('last');
    // });

    // gemini.suite('paragraph', suite => {
    //     suite
    //         .setCaptureElements('.paragraph:nth-of-type(3)')
    //         .capture('plain', actions => {
    //             actions
    //                 .executeJS(window => window.scrollTo(0, 555))
    //                 .wait(300);
    //         });
    // });
});
