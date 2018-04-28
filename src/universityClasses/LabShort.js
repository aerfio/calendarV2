import React from 'react';
import './classesCSS.css'

class LabShort extends React.Component{
    render(){

        //all this shit coz kwpd lab in friday looks shitty without it
        if(this.props.options==='small'){
            return(<div className={'labsh col-6 bg-info'} id={'kwpd'}>
                <div className={'row justify-content-center align-self-center'}>
                    <p className={'title'}>{this.props.text}</p>
                </div>
                <div className={'row justify-content-center'}>
                    {this.props.opt && <a className={'link'} href={this.props.opt}>{'Harmonogram'}</a>}
                </div>

                <a className={'link'} href={this.props.link}>{'Platforma'}</a>
            </div>)
        }
        else{
            return(<div className={'labsh col-6 bg-info'}>
                <div className={'row justify-content-center align-self-center'}>
                    <p className={'title'}>{this.props.text}</p>
                </div>
                <div className={'row justify-content-center'}>
                    {this.props.opt && <a className={'link'} href={this.props.opt}>{'Harmonogram'}</a>}
                </div>
                <div className={'row justify-content-center'}>
                    {this.props.link && <a className={'link'} href={this.props.link}>{'Platforma'}</a>}
                </div>
            </div>)
        }

    };
}
export default LabShort;