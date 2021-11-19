import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/home"
import update_truck from "./routes/update_truck";
import details_truck from "./routes/details_truck";
import Input_truck from "../src/components/Input_truck";
import {truckContextProvider} from "../src/context/truckContext";
import { managerContextProvider } from "./context/managerContext";
import EditTruck from "../src/components/EditTruck";

import update_manager from "./routes/update_manager";
import details_manager from "./routes/details_manager";
import Input_manager from "../src/components/Input_manager";
import { itemsContextProvider } from "./context/itemsContext";

import update_items from "./routes/update_items";
import details_items from "./routes/details_items";
import Input_items from "../src/components/Input_items";

import update_employees from "./routes/update_employees";
import details_employees from "./routes/details_employees";
import Input_employees from "../src/components/Input_employees";

import update_non_food from "./routes/update_non_food";
import details_non_food from "./routes/details_non_food";
import Input_non_food from "../src/components/Input_non_food";

import update_food from "./routes/update_food";
import details_food from "./routes/details_food";
import Input_food from "../src/components/Input_food";

import update_delivery from "./routes/update_delivery";
import details_delivery from "./routes/details_delivery";
import Input_delivery from "../src/components/Input_delivery";

import update_driver from "./routes/update_driver";
import details_driver from "./routes/details_driver";
import Input_driver from "../src/components/Input_driver";

const App = () => {
    return(
        // <Fragment>
        //     <div className="container">
        //         <Input_truck/>
        //     </div>
        // </Fragment>
        <div >
        <truckContextProvider>
            <div className="container">
            <Router>
                <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/truck/:id/update" component = {update_truck}/>
                <Route exact path="/truck/:id" component = {details_truck}/>
                <Route exact path="/truck/insert" component={Input_truck}/>
                </Switch>
            </Router>
            </div>
        </truckContextProvider>

        <managerContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/manager/:id/update" component = {update_manager}/>
                <Route exact path="/manager/:id" component = {details_manager}/>
                <Route exact path="/manager/insert" component={Input_manager}/>
                </Switch>
            </Router>
            </div>
        </managerContextProvider>

        <itemsContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/items/:id/update" component = {update_items}/>
                <Route exact path="/items/:id" component = {details_items}/>
                <Route exact path="/items/insert" component={Input_items}/>
                </Switch>
            </Router>
            </div>
        </itemsContextProvider>

        <employeesContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/employees/:id/update" component = {update_employees}/>
                <Route exact path="/employees/:id" component = {details_employees}/>
                <Route exact path="/employees/insert" component={Input_employees}/>
                </Switch>
            </Router>
            </div>
        </employeesContextProvider>

        <non_foodContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/non_food/:id/update" component = {update_non_food}/>
                <Route exact path="/non_food/:id" component = {details_non_food}/>
                <Route exact path="/non_food/insert" component={Input_non_food}/>
                </Switch>
            </Router>
            </div>
        </non_foodContextProvider>

        <foodContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/food/:id/update" component = {update_food}/>
                <Route exact path="/food/:id" component = {details_food}/>
                <Route exact path="/food/insert" component={Input_food}/>
                </Switch>
            </Router>
            </div>
        </foodContextProvider>

        <deliveryContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/delivery/:id/update" component = {update_delivery}/>
                <Route exact path="/delivery/:id" component = {details_delivery}/>
                <Route exact path="/delivery/insert" component={Input_delivery}/>
                </Switch>
            </Router>
            </div>
        </deliveryContextProvider>

        <driverContextProvider>
            <div className="container">
            <Router>
                <Switch>
                
                <Route exact path="/driver/:id/update" component = {update_driver}/>
                <Route exact path="/driver/:id" component = {details_driver}/>
                <Route exact path="/driver/insert" component={Input_driver}/>
                </Switch>
            </Router>
            </div>
        </driverContextProvider>
        </div>
    );
    
};

 export default App;