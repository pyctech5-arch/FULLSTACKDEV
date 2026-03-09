import Bookdetails from "./Bookdetails"
function Newbook(props) {
    const onSaveHandler=(data)=>{
const Allbooks={
...data,id:Math.random().toString()}
    props.addbooks(Allbooks)}
  return (
    <div>
      <Bookdetails onSave={onSaveHandler}/>
    </div>
  )
}

export default Newbook
