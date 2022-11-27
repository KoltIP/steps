import React from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/StepForm.css'

const StepForm = (props) => {

    const steps = props.steps;

    return(  
        <table className='stepContent'>
            <thead>
                <tr>
                    <th>Дата(ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действие</th>
                </tr>                
            </thead>
            <tbody>
                {steps.map(
                    (step,index) =>
                        <tr key={index}>
                            <td>{step.date}</td>
                            <td>{step.km}</td>
                            <td>Удаление</td>
                        </tr>
                    )}
            </tbody>
            <tfoot></tfoot>
        </table>
    )    
}
export default StepForm;
