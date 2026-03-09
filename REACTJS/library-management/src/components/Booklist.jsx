import './Booklist.css'
function Booklist(props) {
  return (
    <>
      <h2 className='books'>{props.book}</h2>
      <h3 className='title'>Title: {props.title}</h3>
    </>
  )
}
export default Booklist
