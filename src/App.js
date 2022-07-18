import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem"
import Footer from "./MyComponents/Footer"

function App() {
  let todos =[
    {
      sno:1,
      title:"Go to the Market",
      desc:"You need to go to the market to get job done1"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go to the market to get job done2"
    },
    {
      sno:1,
      title:"Go to the ghat",
      desc:"You need to go to the market to get job done3"
    }

  ]
  return (
    <>
         <Header  title="Todos List" serarchBar={false}/> 
          
         <Todos todos={todos}/>
          
         <Footer/>
    </>
  );
}

export default App;
