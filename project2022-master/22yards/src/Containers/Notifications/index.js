import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NotifMainCard from './notifMainCard.js';
function Notifications(){
    return (
        <Container  className='d-flex flex-column'>
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
            <NotifMainCard />
        </Container>
    );
}

export default Notifications