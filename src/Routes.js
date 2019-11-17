import React from 'react';
import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Github from './components/Github';
import Work from './components/Work.js';
import Body from './components/Body.js';
import Contact from './components/Contact.js';
import Home from './components/Home';


const Routes = (props) => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route  {...props} path="/github" exact component={Github} />
                    <Route  {...props} path="/work" exact component={Work} />
                    <Route  {...props} path="/home" exact component={Body} />
                    <Route  {...props} path="/" exact component={Home} />
                    <Route  {...props} path="/app" exact component={Body} />
                    <Route  {...props} path="/contact" exact component={Contact} />
                </Switch>
            </Layout>

        </div>
    );
}

export default Routes;