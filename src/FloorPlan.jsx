import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      <div class="grid-container" id="floorplan">
        <div class="grid-item" id="bedroomOne">
          <Bedroom bednum={1} />
        </div>
        <div class="grid-item" id="fullbath">
          <Bath size={'Full'}/>
        </div>
        <div class="grid-item"  id="livingroom">
          <LivingRoom />
        </div>
        <div class="grid-item"  id="kitchen">
          <Kitchen/>
        </div>
        <div class="grid-item"  id="halfbath">
          <Bath size={'Half'}/>
        </div>
        <div class="grid-item"  id="bedroomThree">
          <Bedroom bednum={3} />
        </div>
        <div class="grid-item"  id="bedroomTwo">
          <Bedroom bednum={2} />
        </div>
      </div>
    </>
  )
}
export default FloorPlan;