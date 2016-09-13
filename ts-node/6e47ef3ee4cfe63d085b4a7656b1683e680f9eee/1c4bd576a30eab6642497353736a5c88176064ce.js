describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'Angular2 Component Scaffold';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=/Users/miguelmartinezecheverria/Documents/workspace/BANKIA/angular2-component-webpack/ts-node/6e47ef3ee4cfe63d085b4a7656b1683e680f9eee/1c4bd576a30eab6642497353736a5c88176064ce.js.map