import {useState} from "react"
import './App.css';

function App() {

  const [students,setStudents]=useState([
    {name:"Souvik",score:24},
    {name:"Sampad",score:45},
    {name:"Rajat",score:40},
    {name:"Sumeet",score:39},
    {name:"Sourav",score:40},
    {name:"Talib",score:76},
    {name:"Husen",score:80},
    {name:"Savarna",score:96},
    {name:"Karthik",score:95},
    {name:"wasim",score:100},
  ])


  return (
    <div className="App">
      {students.map(student=>{
        if(student.score>75){
          if(student.score>=90){
            return (
              <p className="bg-pink">{student.name} :{student.score}</p>
            )
          }else{
            return (
              <p>{student.name} :{student.score}</p>
            )
          }
        }
      })}
      
      
    </div>
  );
}

export default App;
