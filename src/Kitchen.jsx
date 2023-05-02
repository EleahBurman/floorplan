import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return (  
    <>
      <span id="ovensink"> 
        <Oven />
        <Sink />
      </span>
      <h3>Kitchen</h3>
    </>
  )
}
export default Kitchen;