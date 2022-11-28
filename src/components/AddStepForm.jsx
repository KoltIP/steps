import React from 'react';
import ReactDOM from 'react-dom/client';
import classes  from '../styles/AddStepForm.css';
import uuid from 'react-uuid';



const AddStepForm = (props) => {
    
    const action = props.action;

    const Add = () =>
    {
        var addDate = document.getElementById('date').value;
        var addKm = Number(document.getElementById('km').value);
        if (addDate!=='' && addKm!==0)
        {
            var result = {id:uuid(), date: addDate, km: addKm };
            action(result);
        }
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
