import {GameType} from "./constants";

const PictureType = {
  "two-of-two": GameType.PHOTO_OR_PICTURE_TWO,
  "tinder-like": GameType.PHOTO_OR_PICTURE_ONE,
  "one-of-three": GameType.FIND_ONE
};

const ServerPictureTypeMap = {
  painting: `paint`,
  photo: `photo`
};

const preprocessLevel = (level) => {
  level.description = level.question;
  // delete level.question;
  level.gameType = PictureType[level.type];
  // delete level.type;
  level.questions = level.answers;
  // delete level.answers;

  level.questions.map((question) => {
    question.width = question.image.width;
    question.height = question.image.height;
    question.image = question.image.url;
    question.answer = ServerPictureTypeMap[question.type];
    // delete question.type;
  });
};

export const prosessServerData = (data) => {
  let newObject = {};
  data.map((el, index) => {
    newObject[`game-${index + 1}`] = el;
  });
  Object.keys(newObject).map((key) => preprocessLevel(newObject[key]));
  return newObject;
};
