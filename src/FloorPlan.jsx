import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  return (
    <>
      <div className="grid-container" id="floorplan">
        <div className="grid-item" id="bedroomOne">
          <Bedroom bedNum={1} />
        </div>
        <div className="grid-item" id="fullbath">
          <Bath size={'Full'}/>
        </div>
        <div className="grid-item"  id="livingroom">
          <LivingRoom />
        </div>
        <div className="grid-item"  id="kitchen">
          <Kitchen/>
        </div>
        <div className="grid-item"  id="halfbath">
          <Bath size={'Half'}/>
        </div>
        <div className="grid-item"  id="bedroomThree">
          <Bedroom bedNum={3} />
        </div>
        <div className="grid-item"  id="bedroomTwo">
          <Bedroom bedNum={2} />
        </div>
      </div>
    </>
  )
}
export default FloorPlan;