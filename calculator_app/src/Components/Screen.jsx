import { useContext } from "react"
import { Calcontext } from "../Context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
const {calc} = useContext(Calcontext);


  return (
    <Textfit className='border-white border-[2px] h-[120px] mt-[20px] rounded-[10px] px-[10px] text-white text-right text-[50px]' max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  )
}

export default Screen