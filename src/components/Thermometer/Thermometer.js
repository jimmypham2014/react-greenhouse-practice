import ReactSlider from "react-slider";
import "./Thermometer.css";

import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [desiredTemp, setDesiredTemp] = useState(temperature);

  // console.log(temperature, "temp");
  // console.log(desiredTemp, "desired");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (temperature > desiredTemp) {
        setDesiredTemp((preTemp) => {
          return preTemp + 1;
        });
      } else if (temperature < desiredTemp) {
        setDesiredTemp((preTemp) => {
          return preTemp - 1;
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [temperature, desiredTemp]);
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {desiredTemp}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {
          setTemperature(val);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
