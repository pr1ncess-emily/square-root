import {default as sqrt} from "./sqrt";

test("Parameters are valid numbers", () => {
    expect(() => sqrt('adsafsdfs', 3)).toThrow(TypeError);
    expect(() => sqrt(3, 'adsafsdfs')).toThrow(TypeError);
    expect(sqrt(3, '4')).toBeInstanceOf(Number);
});