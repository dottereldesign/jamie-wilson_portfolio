const request = require("supertest");
const server = require("../index"); // Ensure this points to your server file

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(server).get("/").expect(200, done);
  });
});

// Close the server after tests
afterAll(() => {
  server.close();
});
