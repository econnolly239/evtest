import React, { useState } from "react";
import Avatar from "./Avatar.component";

const avatarObj = {
  url:
    "https://vignette.wikia.nocookie.net/mercenary-kings/images/8/84/Runner_Unprovoked.png/revision/latest?cb=20130803092942",
  width: 140,
  height: 158
};

const Merc = ({ ...props }) => {
  return <Avatar {...avatarObj} />;
};

export default Merc;
