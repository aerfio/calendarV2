import React from 'react';
import './WeekParity.css';
import moment from 'moment';
class WeekParity extends React.Component{
    render(){
        let text = 'Tydzień jest '+(moment().week()%2===0 ? 'parzysty.' : 'nieparzysty.');
        if(moment().day()===6 || moment().day()===0){
            text=text+' Następny będzie '+(moment().week()%2===1 ? 'parzysty.' : 'nieparzysty.');
        }
        return( <div className={'container-fluid'}>
             <div className="row">

                <div className={'col'} id={'week'}>
                    {text}
                </div>
            </div>
        </div>)
    }
}
export default WeekParity;