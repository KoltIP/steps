import React from 'react';
import classes  from '../styles/AddStepForm.css';
import uuid from 'react-uuid';

const AddStepForm = (props) => {
    
    const action = props.addAction;
    var selectedResult = props.openResult;

    if (selectedResult !== undefined)
    {
        document.getElementById('date').value = selectedResult.date;
        document.getElementById('km').value = selectedResult.km;
    }

    const AddHandler = () =>
    {        
        var addId = selectedResult !== undefined ? selectedResult.id : uuid();
        var addDate = document.getElementById('date').value;
        var addKm = Number(document.getElementById('km').value);
        if (addDate !== '' && addKm !== 0)
        {
            var result = {id:addId, date: addDate, km: addKm };
            action(result);
        }
        document.getElementById('date').value = "";
        document.getElementById('km').value = "";
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
            
            <button className='button' onClick={AddHandler}>OK</button>
       </div>
    )    
}
export default AddStepForm;
