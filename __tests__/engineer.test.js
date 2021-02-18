const Engineer = require("../lib/engineer")

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");

});

test("Can set name via constructor arguments", () => {
    const name = "Sarah";
    const e = new Engineer(name)
    expect(e.name).toBe(name);
});