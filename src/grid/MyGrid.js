import React from 'react';
import './MyGrid.css';
// import {Alert} from 'react-bootstrap'
import Lecture from '../universityClasses/Lecture';
import LabShort from '../universityClasses/LabShort';
import LabWide from '../universityClasses/LabWide';

class MyGrid extends React.Component{
render(){

    return(<div className={'container-fluid '}>
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
                    <LabWide text={'OSP'} link={'https://platforma.polsl.pl/rau1/enrol/index.php?id=171'}/>
                    <Lecture text={'SISP'} />
                    <LabWide text={'IUW'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=389'}/>
                </div>
            </div>
            <div className={'col'}>
                <div className={'row'}>
                     <div className={'col-6'}>
                         {/*blank, so that PSR is moved to appropriate column*/}
                     </div>
                    <LabShort text={'PSR'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=196'}/>
                </div>
            </div>
            <div className={'col'}>
                    <div className={'row'}>
                        <Lecture text={'PSR'}/>
                        <Lecture text={'KWPD'}/>
                        <LabWide text={'DP'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=27'}/>
                        <Lecture text={'POC'}/>
                    </div>
                <div className={'row'}>
                    <div className={'col'}>{}</div>
                    <LabShort text={'PR'} link={'https://platforma.polsl.pl/rau1/pluginfile.php/24379/mod_resource/content/2/Plan_PR_17_18.pdf'}/>
                </div>
            </div>
            <div className={'col'}>
                <div className={'row'}>
                    <LabWide text={'SISP'} opt={'https://www.facebook.com/groups/1058685264172016/permalink/2119381584769040/'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=189'}/>
                    <LabWide text={'ZSW'} link={'https://platforma.polsl.pl/rau1/mod/page/view.php?id=11245'}/>
                    <Lecture text={'IUW'}/>
                </div>
            </div>
            <div className={'col'}>
                <div className={'row'}>
                    <LabShort text={'POC'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=206'}/>
                    <LabShort text={'KWPD'} options={'small'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=191'}/>
                </div>
                <div className={'row'}>
                    <LabWide text={'STiOD'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=188'}/>
                    <Lecture text={'STiOD'}/>
                </div>
                <div className={'row'}>
                    <div className={'col'}>{}</div>
                    <LabShort text={'ESS'}/>
                </div>
            </div>
        </div>
        <div className={'row justify-content-center align-self-center'} >
            <a id={'podzial'} href={'https://docs.google.com/spreadsheets/d/1nyIpk-EQaqEcx6jRcCc5lBai_KL89SS30L8dJzf4iBQ/edit#gid=2020654902'}>{'Podział na grupy'}</a>
        </div>
    </div>);
}
}
export default MyGrid;