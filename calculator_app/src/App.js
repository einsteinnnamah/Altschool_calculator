import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Screen from './Components/Screen';


const btnValues = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "/", "x"],
  ["Reset", "="]
]

function App() {
  return (
    <div className="container w-[980px] m-auto">
      <div className='absolute top-[50%] left-[40%]'>
      <Header />
      <Screen />
     {btnValues.flat().map((btn, i) => {
      <Button 
        value={btn}
        key={i}
      />
     })}
      </div>
   
    </div>
  );
}

export default App;
