const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");
const { once } = require("node:events");

test("Home page responds successfully", async () => {
  const server = app.listen(0);
  await once(server, "listening");

  try {
    const response = await fetch(`http://localhost:${server.address().port}/`);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /Jenkins CI\/CD Pipeline Application/);
  } finally {
    server.close();
  }
});

test("Health endpoint responds successfully", async () => {
  const server = app.listen(0);
  await once(server, "listening");

  try {
    const response = await fetch(`http://localhost:${server.address().port}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "healthy" });
  } finally {
    server.close();
  }
});
