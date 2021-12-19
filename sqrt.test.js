import {default as sqrt} from "./sqrt";

test("Parameters are valid numbers", () => {
    expect(() => sqrt('adsafsdfs', 3)).toThrow(Error);
    expect(() => sqrt(3, "dlsakfjdlewskij")).toThrow(Error);
    expect(() => sqrt(4, 3)).toBeInstanceOf(Number);
});