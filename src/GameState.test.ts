import { action, player, terminal } from "./GameState";

describe("GameState functions", () => {
  it("sets initial player to min", () => {
    expect(player([0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(-1);
  });
  it("sets second player to max", () => {
    expect(player([0, 0, 0, 0, -1, 0, 0, 0, 0])).toBe(-1);
  });
  it("returns correct possible actions", () => {
    const actions = action([0, 0, 1, -1, 1, -1, 1, -1, 0]);
    expect(actions).toStrictEqual([
      [0, -1],
      [1, -1],
      [8, -1],
    ]);
  });

  it("draws when all spaces are occupied with no winning state", () => {
    const res = terminal([1, -1, 1, -1, -1, 1, 1, 1, -1]);
    expect(res).toBe(0);
  });

  it("no terminal state returns null", () => {
    const res = terminal([1, -1, 1, -1, -1, 1, 1, 1, 0]);
    expect(res).toBe(null);
  });

  it("checks a correct winning position", () => {
    const res = terminal([1, -11, 1, -1, -1, 1, -1, -1, 1]);
    expect(res).toBe(1);
  });
});
