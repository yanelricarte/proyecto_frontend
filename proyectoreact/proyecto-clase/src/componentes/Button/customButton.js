import React from "react";
import "./button.css";



const CustomButton = ({ texto, color }) =>{
    return(

<button style={{ backgroundColor: color }}
className="customButton"> {texto}
</button>

    )
}

export default CustomButton;