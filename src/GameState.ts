/**
 *  Array of 9 numbers. 0 is no placed 1 is max -1 is min.
 */
export type GameState = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
/**
 *  First pos is position. Second pos is the player/value.
 */
export type Action = [number, number];

export const player = (state: GameState) => {
  // There will at maximum only be one more from max, which means the total sum of the array can only be 1 or 0.
  return state.reduce((pos1, pos2) => pos1 + pos2, 0) || -1;
};

export const action = (state: GameState) => {
  const activePlayer = player(state);

  let possibileActions: Array<Action> = [];
  for (let i = 0; i < state.length; i++) {
    //Check for empty positions
    if (!state[i]) {
      possibileActions.push([i, activePlayer]);
    }
  }
  return possibileActions;
};

/**
 *
 * @param state
 * @returns     1, max wins. 0, draw. -1, min wins. null, not terminal state.
 */
export const terminal = (state: GameState) => {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (const pos of winStates) {
    const sum = pos.reduce((prevSum, pos) => prevSum + state[pos], 0);
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }
  }

  // Check if there are any empty spaces
  if (state.indexOf(0) === -1) {
    return 0;
  }

  return null;
};
