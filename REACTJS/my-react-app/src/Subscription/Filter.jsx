import './Filter.css'
// This also an controlled component
function Filter(props) {
 const onchangeHandler=(evento)=>{
console.log('on select handler',evento.target.value);
   props.onFilterchange(evento.target.value);
  }
    return (
    <div className='filter'>
      <div className="filter_control">
<label className='filter_label'>Filter by year</label>
<select value={props.selectfilter} className='filter_select' name="options" onChange={onchangeHandler}>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
</select>
      </div>     
    </div>
  )
}

export default Filter;
