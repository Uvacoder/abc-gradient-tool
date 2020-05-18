import { Gradient } from './Gradient';
import { Color } from './Color';

const KAREN = new Gradient(
    [
        new Color('FF5757', 0, true, 0),
        new Color('FF66C5', 25, false, 1),
        new Color('CB6BE7', 50, false, 2),
        new Color('8C52FF', 75, false, 3),
        new Color('5171FF', 100, false, 4),
    ],
    true,
    45,
    'Karen'
);

const DORA = new Gradient(
    [new Color('fdafaf', 0, true, 0), new Color('a6a8f2', 100, false, 1)],
    true,
    45,
    'Dora'
);

const STEVEN = new Gradient(
    [
        new Color('faee01', 0, true, 0),
        new Color('f37721', 50, false, 1),
        new Color('ec2e24', 100, false, 2),
    ],
    true,
    160,
    'Steven'
);

const SHARON = new Gradient(
    [
        new Color('6a3333', 0, true, 0),
        new Color('FF6400', 33, false, 1),
        new Color('fcb045', 67, false, 2),
        new Color('fae791', 100, false, 3),
    ],
    true,
    90,
    'Sharon'
);

const BRANDY = new Gradient(
    [
        new Color('47bcd5', 19, true, 0),
        new Color('299de2', 37, false, 1),
        new Color('2879d9', 52, false, 2),
        new Color('2b3bc4', 77, false, 3),
        new Color('2e189c', 92, false, 4),
    ],
    true,
    0,
    'Brandy'
);

export { KAREN, DORA, STEVEN, SHARON, BRANDY };
