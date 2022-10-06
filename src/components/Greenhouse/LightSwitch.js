import "./LightSwitch.css";
import { ThemeContext, useTheme } from "../../context/ThemeContext";
import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import { useState } from "react";
function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  const [img, setImg] = useState();
  // console.log(themeName, "lightswitch");

  return (
    <div className={`light-switch ${themeName}`}>
      <div
        onClick={() => {
          setImg(dayImage);
          setThemeName("day");
        }}
        className="on"
      >
        DAY
      </div>
      <div
        onClick={() => {
          setImg(nightImage);
          setThemeName("night");
        }}
        className="off"
      >
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
