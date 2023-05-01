import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      <div>
        <div id="bedroomOne">
          <Bedroom bednum={1} />
        </div>
        <div id="kitchen">
          <Kitchen/>
        </div>
        <div id="fullbath">
          <Bath size={'Full'}/>
        </div>
        <div id="bedroomTwo">
          <Bedroom bednum={2} />
        </div>
        <div id="livingroom">
          <LivingRoom />
        </div>
        <div id="halfbath">
          <Bath size={'Half'}/>
        </div>
        <div id="bedroomThree">
          <Bedroom bednum={3} />
        </div>
      </div>
    </>
  )
}
export default FloorPlan;