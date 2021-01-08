export const cell = {
    EMPTY: 0,
    WALL: 1,
    START: 2,
    END: 3,
}

export const dir = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3,
}

export const makeGridData = (width, height, newCell = _ => 0) =>
    Array.from({length: height})
    .map(_ =>
        Array.from({length: width})
        .map(_ => newCell()))