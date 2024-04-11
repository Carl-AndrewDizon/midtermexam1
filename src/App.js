import './App.css';

// function CalcButton({label}) {
//   function handleClick() {
//     alert('you clicked!');
//   }

//   return (
//     <button  className="CalcButton" onClick={handleClick}>
//       {label}
//     </button>
//   );
// }

function Dizon({display}) {
  return (
    <div className="Dizon">
      {display}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Dizon display={"hello world"}/>
      
      </div>
  );
}

export default App;