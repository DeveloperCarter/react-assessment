import addCommas from "./addCommas";

it("works for 1234, 1000000, 9876543210, 6, -10, -5678", () => {
  expect(addCommas(1234)).toBe("1,234");
  expect(addCommas(1000000)).toBe("1,000,000");
  expect(addCommas(9876543210)).toBe("9,876,543,210");
  expect(addCommas(6)).toBe("6");
  expect(addCommas(-10)).toBe("-10");
  expect(addCommas(-5678)).toBe("-5,678");
});
