pm.test("Verify latitude and longitude", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.coord.lat).to.equal(51.51);
    pm.expect(jsonData.coord.lon).to.equal(-0.13);
});

pm.test("Verify temperature unit", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.main.temp).to.be.a("number");
});

pm.test("Verify city name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.equal("London");
});

pm.test("Verify API status code", function () {
    pm.response.to.have.status(200);
});