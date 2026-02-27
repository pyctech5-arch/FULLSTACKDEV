import React from 'react'
import Booklist from '../components/Bookslist'
import Studentlist from '../components/Studentslist'
import Studentdeatils from '../components/Studentdeatils'
function Students() {
        const studentnames=[{
  id:"1",
  name:"monoj",
  details1:"The monoj is a good boy .",
  book:"Manuyugwm"
},
{
  id:"2",
  name:"pratheek",
    details2:"The pratheek is a talented boy .",
    book:"DSA knowledge"
},
{
  id:"3",
  name:"Divya",
   details3:"Divya is a good girl .",book:"C++ basics"
},
{
  id:"4",
  name:"Deepak",
  details4:"Deepak is a good boy with bad habits",
  book:"Computer web development"
},
{
  id:"5",
  name:"Dhanush",
  details5:"The Danush have bad handwriting but good boy ."
,book:"ramayana"
},
]
  return (
    <>
     <Studentlist name={studentnames[0].name} 
     />
     <Studentdeatils details1={studentnames[0].details1}/>
<Studentdeatils />
<Booklist book={"The book that he have "+studentnames[0].book}/>
     <Studentlist name={studentnames[1].name} />
         <Studentdeatils details2={studentnames[1].details2}/>
 <Booklist book={"And also The book that he have "+studentnames[1].book}/>
     <Studentlist name={studentnames[2].name} />
     <Studentdeatils details3={studentnames[2].details3}/>
    <Booklist book={"sry but book that she have "+studentnames[2].book}/>
     <Studentlist name={studentnames[3].name}/>
     <Studentdeatils details4={studentnames[3].details4}/>
    <Booklist book={"The book that he have "+studentnames[3].book}/>
         <Studentlist name= {studentnames[4].name}/>
     <Studentdeatils details5={studentnames[4].details5}/>
      <Booklist book={"The book that he have "+studentnames[4].book}/>
      </>
  )
}
export default Students
