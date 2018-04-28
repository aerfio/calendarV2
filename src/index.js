import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  'react-bootstrap';
import WeekParity from './weekParity/WeekParity';
import MyGrid from './grid/MyGrid';
// import {Col, Row,Grid,Button} from 'react-bootstrap'

ReactDOM.render(<div id={'xd'}>
    <WeekParity/>
<MyGrid/>

</div>, document.getElementById('root'));

