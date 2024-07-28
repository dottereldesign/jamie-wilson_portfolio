const request = require("supertest");
let server;

before((done) => {
  server = require("../index"); // Ensure this points to your server file
  done();
});

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(server).get("/").expect(200, done);
  });
});

after((done) => {
  server.close(done);
});
