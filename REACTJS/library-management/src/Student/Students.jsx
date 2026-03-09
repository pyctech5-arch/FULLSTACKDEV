import './Students.css';
import Studentlist from '../components/Studentslist'
import Booklist from '../components/Booklist'
import Studentdetails from '../components/Studentdetails';
import Container from '../components/Container';
import Bookdetails from '../components/Form/Bookdetails';
import Newbook from '../components/Form/Newbook';
import { useState } from 'react';
function Students() {
  const studentdetails = [{
    id: "1",
    name: "monoj",
    details: " monoj is a good boy .",

  },
  {
    id: "2",
    name: "pratheek",
    details: " pratheek is a talented boy .",

  },
  {
    id: "3",
    name: "Divya",
    details: "Divya is a good girl .",

  },
  {
    id: "4",
    name: "Deepak",
    details: "Deepak is a good boy with bad habits",

  },
  {
    id: "5",
    name: "Dhanush",
    details: "Danush have bad handwriting but good boy .",
  },
  ]
  const [booklist,setbooklist]=useState(
 [
    {
      id: '1',
      book: "Manuyugwm",
      title: "the warior"
    },
    {
      id: '2',
      book: "DSA knowledge",
      title: "DSA prep make easy"
    },
    {
      id: '3',
      book: "C++ basics",
      title: "C++ Prep make easy "
    },
    {
      id: '4',
      book: "Computer web development",
      title: "Web development on he way to flow"
    },
    {
      id: '5',
      book: "ramayana",
      title: "the story of rama the legend"
    },

  ])
  const addbooksHandler=(data)=>{
  setbooklist((booklist) => {
    return [data, ...booklist];
  })
  console.log("on book Added", data);
}
  return (
    <>
    <Newbook addbooks={addbooksHandler}/>
      <div className='student_table'>
          <Container className='table_row'>
          <h3 className='table_header'>Student1</h3>
          <Studentlist name={studentdetails[0].name} />
          <Booklist book={"Book: " + booklist[0].book} title={booklist[0].title} />
          <Studentdetails details={studentdetails[0].details} /> 
          </Container>
        <Container className='table_row'>
          <h3 className='table_header'>Student2</h3>
          <Studentlist name={studentdetails[1].name} />
          <Booklist book={"Book: " + booklist[1].book} title={booklist[1].title} />
          <Studentdetails details={studentdetails[1].details} /> 
          </Container>
      
         <Container className='table_row'>
          <h3 className='table_header'>Student3</h3>
          <Studentlist name={studentdetails[2].name} />
          <Booklist book={"Book: " + booklist[2].book} title={booklist[2].title} />
          <Studentdetails details={studentdetails[2].details} /> 
          </Container>
      
        <Container className='table_row'>
          <h3 className='table_header'>Student4</h3>
          <Studentlist name={studentdetails[3].name} />
          <Booklist book={"Book: " + booklist[3].book} title={booklist[3].title} />
          <Studentdetails details={studentdetails[3].details} /> 
          </Container>
      
         <Container className='table_row'>
          <h3 className='table_header'>Student5</h3>
          <Studentlist name={studentdetails[4].name} />
          <Booklist book={"Book: " + booklist[4].book} title={booklist[4].title} />
          <Studentdetails details={studentdetails[4].details} /> 
          </Container>
      
      </div>
    </>
  )
}
export default Students
