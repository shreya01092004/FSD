// import React from 'react';
// import Student from'./Student';
// function App() {
//   let a = 20;
//   let mystyle = {
//     backgroundColor: 'cyan',
//     color: 'red',
   
//   };

  
//   return (
//     <div style={mystyle}>
//       <h2>ABES EC</h2>
//       <div>
//         <Student/>
//       </div>
//     </div>
   
//   );
// }

// export default App;

import React from 'react'
import Student from './Student'

function App() {

  const studentdata={
    pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    college:"ABESEC",
    name:"abc",
    rollno:"123",
    branch:"AIML",
    section:"B",

}
  return (
    <div style={{marginLeft:"500px"}}>
      <Student data={studentdata}/>
  {/* <Student  
  // pic={<img src={logo}/>}
  college="ABES EC" rollno="123" name="Shinchain" branch="Aiml"  section="B"/>

<Student  
  // pic={<img src={logo}/>}
  college="ABES EC" rollno="113" name="Shin" branch="Aiml"  section="B"/>
  
      <Student  
      // pic={<img src={logo}/>}
       rollno="123" name="chain" branch="Aiml"  section="B"/>
        */}
        </div>
  )
}

export default App