export const resize = (frame, given) => {
  let newObject;
  const ratio = given.width / given.height;
  if (frame.width / ratio > frame.height) {
    newObject = {
      width: frame.height * ratio,
      height: frame.height
    };
  } else if (frame.width / ratio < frame.height) {
    newObject = {
      width: frame.width,
      height: frame.width / ratio
    };
  } else {
    newObject = {
      width: frame.width,
      height: frame.height
    };
  }
  return newObject;
};

export const resizeImages = (elements) => {
  const images = Array.from(elements.querySelectorAll(`.game__option`));
  images.forEach((image) => {
    const frame = {
      width: image.clientWidth,
      height: image.clientHeight
    };
    const imageElement = image.querySelector(`img`);
    const resizedImage = new Image();
    resizedImage.src = imageElement.src;
    resizedImage.onload = () => {
      const given = {
        width: resizedImage.width,
        height: resizedImage.height
      };
      const imageNewSize = resize(frame, given);
      imageElement.width = imageNewSize.width;
      imageElement.height = imageNewSize.height;
    };
  });
};
