gemini.suite('footer', suite => {
    suite
        .setUrl(GH.pagePath('call', 'uk'))
        .setCaptureElements('footer')
        .capture('plain', (actions, find) => {
            actions
                .executeJS(window => window.scrollTo(0, find('footer').scrollHeight))
                .wait(1000);
        });
});
