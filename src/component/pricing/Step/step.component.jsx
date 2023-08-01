import "./step.styles.scss";
import React from "react";
import { useState } from "react";
import { stages } from "./progress.component";

const Steps = () =>{

    const[stage, setStage]=useState(0);
    const flow = (index) =>{
        setStage(index);
    }

    return(
        <>
        <div className="progressBar col-lg-12 col-md-10 col-sm-8 center">
            {
                stages?.map((item,index)=>
                    <div className="hold" key={index}>
                        <p className= {stage === index? "bold":""}>{item.tag}</p>
                        <button 
                            className= {stage >= index? "selectedStage "+ item.name : item.name}
                            
                            onClick={()=>flow(index)} />
                    </div>  
                )
            }
            
        </div>
        <hr className="clrLine"/>
        </>
    );
}
export default Steps;