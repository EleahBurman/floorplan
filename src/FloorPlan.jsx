const FloorPlan = (props) => {
  return (
    <>
      <div>
        <Bedroom bednum={1} />
        <Kitchen />
        <Bath size={'Full'} />
        <LivingRoom />
        <Bath size={'Half'} />
        <Bedroom bednum={3} />
      </div>
    </>
  )
}
export default FloorPlan;