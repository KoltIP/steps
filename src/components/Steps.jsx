import React from 'react';
import { useState } from 'react';
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
        }]  

    const [results,setResults] = useState(data);

    const [selectedResult,setSelectedResult] = useState() ;

    const AddOrEdit = (result) => {
        var exist = results.find(p=>p.date === result.date);
        if (exist!==undefined)   
        {            
            var index = results.indexOf(exist);
            let copy = Object.assign([], results);
            if (result.id === exist.id)
                copy[index] = result;  
            else
                copy[index].km = Number(result.km) + Number(exist.km);              
            setResults(copy);   
        }  
        else
            setResults([...results,result]);  
        setSelectedResult();
    }

    const Open = (openResult) => {
        setSelectedResult(openResult);
    }

    const Remove = (removeResult) =>{
        setResults(results.filter(p=>p!==removeResult));
    }

    return(  
        <div className='box'>
            <AddStepForm 
                addAction =  {  (addResult) => {AddOrEdit(addResult);}  }
                openResult = {selectedResult}
            />           
            <StepForm 
                steps = {results}
                openAction = {(openResult) => {Open(openResult)}}
                removeAction = {  (removeResult) => {Remove(removeResult)}  }
            />
        </div>
    )    
}
export default Steps;
