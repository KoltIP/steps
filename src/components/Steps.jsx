import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/Steps.css'
import AddStepForm from './AddStepForm';
import StepForm from './StepForm';

const Steps = () => {

    const data = [
        {
            date:'20.09.2019',
            km: 5.7
        },
        {
            date:'19.07.2019',
            km: 14.7
        },
        {
            date:'18.07.2019',
            km: 3.4
        }
    ]

    const [results,setResults] = useState(data); 


    const Add = (date,km) => {
        var result = {
            date: date,
            km: km
        }
        setResults([...results,result]);
    }

    return(  
        <div className='box'>
            <AddStepForm  action={ (date,km) => {    var result = {date: date, km: km }; setResults([...results,result]);   }            }/>           
            <StepForm steps = {results} />
        </div>
    )    
}
export default Steps;
