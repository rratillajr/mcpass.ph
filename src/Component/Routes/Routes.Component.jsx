import React from 'react';
import {Switch,Route} from "react-router-dom";
import { Missing } from './../../Pages/404/404.Page';
import { Scanner } from './../../Pages/Scanner/Scanner.Page';
import { Home } from './../../Pages/Home/Home.Page';
import RiderRegistration from './../../Pages/Registration/Rider/RiderRegistration.Page';
import { BackRideRegistration } from './../../Pages/Registration/BackRide/BackRideRegistration.Page';
import { Contact } from './../../Pages/Contact/Contact.Page';
import { About } from './../../Pages/About/About.Page';
import TakePic from './../../Pages/TakePic/TakePic.Page';

export const MCPassRouter = (props) => (
    <div className='routes'>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/scan" component={ Scanner } />
            <Route exact path="/takePic" component={ TakePic } />
            <Route exact path="/reg/rider" component={ RiderRegistration } />
            <Route exact path="/reg/backRide" component={ BackRideRegistration } />
            <Route exact path="/contact" component={  Contact } />
            <Route exact path="/about" component={ About } />
            <Route exact path="*" component={ Missing } />
        </Switch>
    </div>
)