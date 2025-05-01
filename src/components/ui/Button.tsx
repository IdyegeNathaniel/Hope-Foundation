import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant,
  size: 'sm' | 'md' | 'lg',
  isLoading?: boolean,
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  fullWidth = false,
  disabled,
  ...rest
}) => {

  //STYLING

  const baseStyling = 'font-medium rounded focus:outline-none transition-colors duration-200'
  const variantStyling = {
    primary: "text-sm border border-white hover:border-amber-400 text-white hover:text-amber-400 rounded-full cursor-pointer",
    secondary: "bg-orange-600 text-white hover:bg-orange-400 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-full cursor-pointer",
    outline: "cursor-pointer",
  };
  const sizeStyling = {
    'sm': 'px-3 py-1.5 text-sm',
    'md': 'px-4 py-2 text-base',
    'lg': 'px-6 py-3 text-lg',
  };
  const widthStyling = fullWidth ? 'w-full' : '';

  const buttonStyling = `${variantStyling[variant]} ${sizeStyling[size]} ${widthStyling} ${baseStyling} ${disabled} ${className} ${className}`;


  return (
    <button disabled={disabled || isLoading} className={buttonStyling} {...rest}>
      {isLoading && <span className='inline-block animate-pulse'>Loading....</span>}
      {children}
    </button>
  )
}

export default Button