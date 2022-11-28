import React from 'react';
import classes  from '../styles/StepForm.css'

const StepForm = (props) => {

    const steps = props.steps.sort((a, b) => a.date < b.date ? 1 : -1);
    const remove = props.removeAction;
    const open = props.openAction;

    const RemoveHandler = (step) => {
        remove(step);        
    }

    const OpenEditMenu = (step) =>{
        open(step);
    }

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
                    (step) =>
                        <tr key={step.id}>
                            <td>{step.date}</td>
                            <td>{step.km}</td>
                            <td>                                
                                <span onClick={()=>OpenEditMenu(step)}><span className='material-symbols-outlined'>edit</span></span>
                                <span onClick={()=>RemoveHandler(step)}><span className='material-symbols-outlined'>close</span></span>
                            </td>
                        </tr>
                    )}
            </tbody>
            <tfoot></tfoot>
        </table>
    )    
}
export default StepForm;
