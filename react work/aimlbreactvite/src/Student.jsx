import React from 'react'
import './Studentstyle.css'

// import logo from './logo.jpg'
function Student({data}) {

   
  return (
    <div className='icard'>


   {/* { JSON.stringify(data)} */}
        {/* <h2>Hi,{props.name}</h2>
        Your branch is {props.branch} */}

        {/* <table>
<tbody>
<tr>
 <td colSpan={2}>{props.college}</td>
</tr>
<tr>
 <td colSpan={2}>{props.pic}</td>
</tr>
<tr>
<td>RollNO.</td>
    <td >{props.rollno}</td>
</tr>
<tr>
    <td>Name</td>
    <td>{props.name}</td>
</tr>
<tr>
    <td>Branch</td>
    <td>{props.branch}</td>
</tr>
<tr>
    <td>Section</td>
    <td>{props.section}</td>
</tr>
</tbody>

        </table> */}


<table>
    <tbody>
      <tr><td colSpan={2}>{data.college}</td> </tr>
      <tr><td colSpan={2}><img src={data.pic} height="100px" width="100px" alt="" /></td> </tr>
      <tr><td>Roll</td><td>{data.roll}</td></tr>
      <tr><td>Name</td><td>{data.name}</td></tr>
      <tr><td>Branch</td><td>{data.branch}</td></tr>
      <tr><td>Section</td><td>{data.section}</td></tr>


      
      
        

     
   </tbody>
 </table>
    </div>
  )
}
// Student.defaultProps={
//     college:"SGSR"
// }
export default Student