import React, { useContext } from 'react'
import { Calcontext } from '../Context/CalcContext'

const getStyleName = btn => {
  const ClassName = {
    'DeL': 'bg-red-600'
  }
  return ClassName[btn]
}

const Button = ({value}) => {
const {setCalc, calc} = useContext(Calcontext);


//USer click comma
const commaClick = () => {
  setCalc({
    ...calc,
    num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
  })
}

//User Click Reset
const resetClick = () => {
  setCalc({sign: '', num: 0, res: 0})
}

//User Clicks Number
const handleClickButton = () => {
  const numberString = value.toString()

  let numberValue;
  if (numberString === '0' && calc.num === 0) {
    numberValue = "0"
  } else {
    numberValue=Number(calc.num + numberString ) 
  }
  setCalc({
    ...calc,
    num: numberValue
  })
}

//User Click Operation
const signClick = () => {
  setCalc({
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0
  })
}

//User Click equals
const equalsClick = () => {
  if (calc.res && calc.num) {
    const math = (a, b, sign) => {
      const result = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
      }
      return result[sign](a, b)
    }
    setCalc({
      res: math(calc.res, calc.num, calc.sign),
      sign: '',
      num: 0
    })
  }
}

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'RESET': resetClick,
      'DEL':resetClick,
      '/': signClick,
      '+': signClick,
      '-': signClick,
      'x': signClick,
      '=': equalsClick  
    }
    if(results[value]) {
      return results[value]()

    }else {
      return handleClickButton()
    }
  }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} bg-white text-[#444b5a] font-bold text-[18px] h-20 rounded-[10px]`}>
      {value}
    </button>
  )
}

export default Button