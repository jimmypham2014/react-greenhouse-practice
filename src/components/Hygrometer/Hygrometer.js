import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate} from "../../context/ClimateContext";
import{useEffect,useState } from 'react'

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity);


  useEffect(() => {
    const timer = setTimeout(() => {
       if(humidity > desiredHumidity && humidity-desiredHumidity ===1){
        setDesiredHumidity((preTemp) => {
          return preTemp + 1;
        });
       }
      else if (humidity > desiredHumidity) {
        setDesiredHumidity((preTemp) => {
          return preTemp + 2;
        });

      } else if(humidity < desiredHumidity && desiredHumidity-humidity ===1){
          setDesiredHumidity((preTemp) => {
            return preTemp - 1;
          });
        
      } else if (humidity < desiredHumidity) {
        setDesiredHumidity((preTemp) => {
          return preTemp - 2;
        })
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [humidity, desiredHumidity]);



  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {desiredHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => setHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
