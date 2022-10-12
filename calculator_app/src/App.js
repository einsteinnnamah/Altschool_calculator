import './index.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Screen from './Components/Screen';
import CalcProvider from './Context/CalcContext';
import Footer from './Components/Footer';

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="]
];

function App() {
  return (
    <div className=" w-[980px] m-auto">
      <CalcProvider className='absolute top-[50%] left-[40%]'>

        <Header />
      <Screen />
      <div className='grid grid-cols-4  gap-5 mt-5'>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </div>
            <Footer />
     
    </CalcProvider>
      </div>
   
   
  );
}

export default App;
