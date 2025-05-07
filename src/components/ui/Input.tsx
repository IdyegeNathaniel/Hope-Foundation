import { ChangeEvent, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  label?: string,
  error?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, label, error, onChange, className='', ...props }) => {
  return (
    <div>
      {label && <label htmlFor="props.id">{label}</label>}
      <input placeholder={placeholder} className={className} {...props}/>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Input