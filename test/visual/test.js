gemini.suite('vaadin-board-demo', function(rootSuite) {

    gemini.suite('default', function(suite) {
        suite
            .setUrl('/index.html')
            .before(function (actions, find) {
                actions.setWindowSize(1700, 800);
            })
            .setCaptureElements('body')
            .capture('main', {}, function(actions, find) {
                actions.wait(5000);
            });
    });
});