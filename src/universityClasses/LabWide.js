import React from 'react';
import './classesCSS.css';

class LabWide extends React.Component {
	render() {
		return (
			<div className={'labwide col-12 bg-info '}>
				<div className={'row justify-content-center align-self-center'}>
					<p className={'title'}>{this.props.text}</p>
				</div>
				<div className={'row justify-content-center'}>
					{this.props.opt && (
						<a className={'link'} href={this.props.opt}>
							{'Harmonogram'}
						</a>
					)}
				</div>

				{this.props.link && (
					<a className={'link'} href={this.props.link}>
						{'Platforma'}
					</a>
				)}
			</div>
		);
	}
}
export default LabWide;
