import React from 'react';
import './classesCSS.css'
class Lecture extends React.Component{
    render(){
        //todo dokoncz tutaj
        return(<div className={'lect col-12  bg-success'}>
<div className={'row justify-content-center align-self-center'}>
    <p className={'title'}>{this.props.text}</p>
</div>
                <div className={'row justify-content-center'}>
                    {this.props.opt && <a className={'link'} href={this.props.opt}>{'Harmonogram'}</a>}
                </div>
            <div className={'row justify-content-center'}>
                { this.props.link &&   <a className={'link'} href={this.props.link}>{'Platforma'}</a>}
            </div>
                </div>)
    };
}
export default Lecture;