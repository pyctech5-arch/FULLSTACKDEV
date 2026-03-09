import './Containe.css'
// import styled from 'styled-components'
function Container(props) {
    const classes="Container "+props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}
// Below we are accesing element using backtique
// const Container = styled.div`
// {
// box-shadow: 0 2px 8px rgba(0,0,0,0.25);
// border-radius:12px;
// }
// &:hover{border:red}`;

export default Container;
