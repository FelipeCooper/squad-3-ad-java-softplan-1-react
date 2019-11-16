import  React from 'react';

const Button = ({text : text, ...rest}) =>(

    <button {...rest}>{text}</button>
)

export default Button;