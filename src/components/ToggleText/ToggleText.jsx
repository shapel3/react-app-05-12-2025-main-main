import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from "@mdi/js";
import { getRandomColor } from "../utils";

const ToggleText = () => {
  const [color, setColor] = useState("#aaaaaaa");
  const [close, setclose] = useState(true);
  const changeClose = () => {
    setclose(!close);
  };
  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div style={{ backgroundColor: color }} onClick={changeColor}>
      <h2>
        Title{" "}
        <span onClick={changeClose}>
          {close ? (
            <Icon path={mdiArrowDownDropCircleOutline} size={1} color="pink" />
          ) : (
            <Icon path={mdiArrowUpDropCircleOutline} size={1} color="pink" />
          )}
        </span>
      </h2>
      {close && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere
          dolor ab? Quidem ea animi nostrum aspernatur nisi culpa esse odio?
          Ducimus, laborum quaerat. Veniam sed tempora nam quo ipsum!
        </p>
      )}
    </div>
  );
};

export default ToggleText;
