export function stringToArray(state: string) {
  let arr: Array<number> = [];
  for (let i = 0; i < state.length; i++) {
    arr[i] = parseInt(state[i], 10);
  }

  return arr;
}

export function arrayToString(stateArr: Array<number>) {
  return stateArr.reduce((totalString, num) => totalString + num, "");
}
