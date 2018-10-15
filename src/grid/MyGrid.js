import React from 'react';
import './MyGrid.css';
// import {Alert} from 'react-bootstrap'
import Lecture from '../universityClasses/Lecture';
import LabShort from '../universityClasses/LabShort';
import LabWide from '../universityClasses/LabWide';

class MyGrid extends React.Component {
	render() {
		return (
			<div className={'container-fluid '}>
				<div className="row">
					<div className={'col col-md box border'}>{'Pon'}</div>
					<div className={'col col-md box border'}>{'Wt'}</div>
					<div className={'col col-md box border'}>{'Śr'}</div>
					<div className={'col col-md box border'}>{'Czw'}</div>
					<div className={'col col-md box border'}>{'Pt'}</div>
				</div>
				<div className={'row'}>
					<div className={'col d-none d-lg-block border box'}>{'P'}</div>
					<div className={'col d-none d-lg-block border box'}>{'N'}</div>
					<div className={'col d-none d-lg-block border box'}>{'P'}</div>
					<div className={'col d-none d-lg-block border box'}>{'N'}</div>
					<div className={'col d-none d-lg-block border box'}>{'P'}</div>
					<div className={'col d-none d-lg-block border box'}>{'N'}</div>
					<div className={'col d-none d-lg-block border box'}>{'P'}</div>
					<div className={'col d-none d-lg-block border box'}>{'N'}</div>
					<div className={'col d-none d-lg-block border box'}>{'P'}</div>
					<div className={'col d-none d-lg-block border box'}>{'N'}</div>

					<div className="col d-lg-none box border">{'P | N'}</div>
					<div className="col d-lg-none box border">{'P | N'}</div>
					<div className="col d-lg-none box border">{'P | N'}</div>
					<div className="col d-lg-none box border">{'P | N'}</div>
					<div className="col d-lg-none box border">{'P | N'}</div>
				</div>

				<div className={'row'}>
					<div className={'col'}>
						<div className={'row'}>
							<LabShort text={'SiSP'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=189'} />
						</div>
					</div>
					<div className={'col'}>
						<div className="row">
							<Lecture text="MSI" link="https://platforma.polsl.pl/rau1/course/view.php?id=205" />
						</div>
					</div>
					<div className={'col'}>
						<div className={'row'}>
							<LabWide text={'MSI'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=205'} />
							<LabWide text={'ZP'} link="https://platforma.polsl.pl/rau1/course/view.php?id=204" />
						</div>
					</div>
					<div className={'col'}>
						<div className={'row'}>
							<LabShort text={'POC'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=438'} />
							<LabWide text="Ekonomia" />
						</div>
					</div>
					<div className={'col'} />
				</div>
				<div className={'row justify-content-center align-self-center'}>
					<a
						id={'podzial'}
						href={
							'https://docs.google.com/spreadsheets/d/16qHKlwlILy2yzJGB6N977VTMC7fniWBS_srIUeU8iu4/edit#gid=109744242'
						}>
						{'Podział na grupy'}
					</a>
				</div>
			</div>
		);
	}
}
export default MyGrid;
