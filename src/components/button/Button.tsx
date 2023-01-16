import React from 'react'
import s from './Button.module.scss'

type ButtonType = {
  size: 'big' | 'medium'
  buttonStyle: 'primary' | 'outlined'
  children: string | JSX.Element
}

export const Button: React.FC<ButtonType> = ({
                                               size,
                                               buttonStyle,
                                               children
                                             }) => {


  const checkButtonStyle = buttonStyle === 'primary' ? s.primary : s.outlined

  console.log(checkButtonStyle)

  const checkButtonSize = size === 'big' ? s.bigButton : s.mediumButton


  return (
    <button
            className={`${checkButtonStyle} ${checkButtonSize} ${s.button}`}>
      {children}
    </button>
  )
}