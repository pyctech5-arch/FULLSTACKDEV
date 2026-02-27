import './Studentdetails.css'

function Studentdeatils(props) {

  const details = [
    props.details1,
    props.details2,
    props.details3,
    props.details4,
    props.details5
  ].filter(Boolean); // removes undefined, null, empty values

  if (details.length === 0) return null; 
  return (
    <div className="rainbow-box">
      <ol className="details-list">
        {details.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ol>
    </div>
  )
}

export default Studentdeatils