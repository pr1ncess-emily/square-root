import {default as sqrt} from "./sqrt";

test("Parameters are valid numbers", () => {
    expect(() => sqrt('adsafsdfs', 3)).toThrow(TypeError);
    expect(() => sqrt(3, 'adsafsdfs')).toThrow(TypeError);
    expect(() => sqrt(-1, 3)).toThrow(RangeError);
    expect(() => sqrt(2, -3)).toThrow(RangeError);
    expect(() => sqrt(Infinity, 2)).toThrow(RangeError);
});

test("Return type is a number", () => {
    expect(sqrt(3, '4')).toBeInstanceOf(Number);
    expect(sqrt(5, 6)).toBeInstanceOf(Number);
    expect(sqrt("7", "8")).toBeInstanceOf(Number);
});