import  React from 'react';
import Button from 'antd/es/button';


const ButtonDefault = ({text : text, ...rest}) =>(
    <Button {...rest} style={{borderBlockColor:'black',position:'initial',backgroundColor:'black'}}type="primary">
        {text}</Button>
)

export default ButtonDefault;