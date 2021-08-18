const request = require("supertest");
const app = require("./app");

test("테스트", async () => {
    const response = await request(app)
        .get("/api/test")
        .send();
    expect(response.status).toEqual(200);
});
