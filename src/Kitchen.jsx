import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <>
      <div id="ovensink"> 
        <Oven />
        <Sink />
      </div>
      <h3>Kitchen</h3>
    </>
  )
}
export default Kitchen;