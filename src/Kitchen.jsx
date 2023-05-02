import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <>
      <div>
        <h3>Kitchen</h3>
          <div class="floatleft">
            <div id="oven">
              < Oven />
            </div>
          </div>
          <div class="floatriht">
            <div  id="sink">
              < Sink />
            </div>
          </div>
      </div>
    </>
  )
}
export default Kitchen;