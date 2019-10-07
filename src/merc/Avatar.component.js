import React, { useState } from "react";

function resetAvatarWidthAndHeight(url, width, height) {
  if (
    url &&
    Number.isInteger(width) &&
    Number.isInteger(height) &&
    (width > 100 || height > 100)
  ) {
    width = width / 2;
    height = height / 2;
  }
  return { url, width, height };
}

const Avatar = ({ width, height, url }) => {
  const [avatar /*, setAvatar*/] = useState(
    resetAvatarWidthAndHeight(url, width, height)
  );
  return (
    <img
      src={avatar.url}
      className="merc"
      style={{ width: avatar.width, height: avatar.height }}
      alt="Mercenary Avatar"
    />
  );
};

export default Avatar;
