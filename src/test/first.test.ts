import myComponents from "../my-components/firts";

describe("say Hello", () => {
  it("should return hello Dandi", () => {
    expect(myComponents.hello("dandi")).toBe("Hallo dandi")
  })
})
