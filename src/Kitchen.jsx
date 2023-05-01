import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <>
      <div>
        <h3>Kitchen</h3>
          <div id="oven">
            < Oven />
          </div>
          <div  id="sink">
            < Sink />
          </div>
      </div>
    </>
  )
}
export default Kitchen;