import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { ThemeContext, useTheme } from "../../context/ThemeContext";
import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useState, useEffect } from "react";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  // const [img, setImg] = useState(nightImage);
  // console.log(themeName);
  // useEffect(() => {
  //   if (themeName === "day") {
  //     setImg(dayImage);
  //   } else if (themeName === "night") {
  //     setImg(nightImage);
  //   }

  // }, [themeName, img]);
  let img;
  img = themeName === "day" ? dayImage : nightImage;

  return (
    <section>
      <img className="greenhouse-img" src={img} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
