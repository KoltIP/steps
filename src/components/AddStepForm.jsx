import React from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/AddStepForm.css';

const AddStepForm = (props) => {
    
    const action = props.action;

    const Add = () =>
    {
        var date = document.getElementById('date').value;
        var km = document.getElementById('km').value;
        if (date!='' && km!='')
            action(date,km);
    }


    return(  
       <div className='row'>

            <div className='column'>
                <label>Дата(ДД.ММ.ГГ)</label>
                <input id='date' />
            </div>

            <div className='column'>
                <label>Пройдено км</label>
                <input id='km' />
            </div>
            
            <button className='button' onClick={Add}>OK</button>
       </div>
    )    
}
export default AddStepForm;
