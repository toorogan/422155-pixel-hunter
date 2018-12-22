export const Rate = {
  CORRECT_ANSWER_POINTS: 100,
  FAST_ANSWER_BONUS: 50,
  SLOW_ANSWER_FINE: 50,
  FOR_LIVE_BONUS: 50
};
export const Limit = {
  LIVES: 4,
  TIME: 30,
  LEVELS: 10,
  FAST_TIME: 10,
  SLOW_TIME: 20,
  TIMER_TWINK: 5
};
export const GameType = {
  PHOTO_OR_PICTURE_ONE: 1,
  PHOTO_OR_PICTURE_TWO: 2,
  FIND_ONE: 3
};

export const INITIAL_GAME = Object.freeze({
  level: 1,
  lives: 4,
  time: 30
});
