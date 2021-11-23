import { env } from "../src/app";

test('a', () => {
  expect(env()).toBe("Merhaba");
})