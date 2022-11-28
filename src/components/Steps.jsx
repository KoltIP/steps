import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/Steps.css'
import AddStepForm from './AddStepForm';
import StepForm from './StepForm';
import uuid from 'react-uuid';





const Steps = () => {

    const data = [
        {
            id : uuid(),
            date:'19.09.2019',
            km: 5.7
        },
        {
            id : uuid(),
            date:'20.07.2019',
            km: 14.7
        },
        {
            id : uuid(),
            date:'18.07.2019',
            km: 3.4
        }
    ]  

    const [results,setResults] = useState(data);

    return(  
        <div className='box'>
            <AddStepForm  action = 
            {
                (result) => 
                {
                    var exist = results.find(p=>p.date.toLocaleLowerCase() === result.date.toLocaleLowerCase());
                    if (exist!==undefined)   
                    {
                        var index = results.indexOf(exist);
                        let copy = Object.assign([], results);
                        copy[index].km = Number(result.km) + Number(exist.km);              
                        setResults(copy);   
                    }  
                    else
                        setResults([...results,result]);   
                }            
            }
            />           
            <StepForm steps = {results} action = {   (removeResult) => {setResults(results.filter(p=>p!==removeResult));      }          }/>
        </div>
    )    
}
export default Steps;
