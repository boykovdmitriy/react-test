import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import SalonDetails from 'containers/salon-details';
import Salons from 'containers/salons';
import NotFoundPage from 'containers/not-found-page';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/" component={Salons}/>
                        <Route path="/salon/:salonId" component={SalonDetails}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </main>
            </Router>
        );
    }
}