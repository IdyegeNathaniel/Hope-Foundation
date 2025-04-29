import { InputHTMLAttributes } from "react"

type InputVariant = 'primary' | 'secondary'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    variant?: InputVariant,
     

}




const Input:React.FC<InputProps> = ({children}) => {
  return (
    <input>
        {children}
    </input>
  )
}

export default Input