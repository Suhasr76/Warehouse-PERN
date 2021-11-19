import React from 'react'
import Header from '../components/Header'
import InputTruck from '../components/Input_truck'
import TruckList from '../components/truck_list'
import EditTruck from '../components/EditTruck'

import Inputmanager from '../components/Input_manager'
import ManagerList from '../components/manager_list'

import Inputitems from '../components/Input_items'
import ItemsList from '../components/items_list'

import Inputemployees from '../components/Input_employees'
import EmployeesList from '../components/employees_list'

import Inputnon_food from '../components/Input_non_food'
import Non_foodList from '../components/non_food_list'

import Inputfood from '../components/Input_food'
import FoodList from '../components/food_list'

import Inputdelivery from '../components/Input_delivery'
import DeliveryList from '../components/delivery_list'

import Inputdriver from '../components/Input_driver'
import DriverList from '../components/driver_list'




const Home = () => {
    return(
        <div className="bg-blue">
            <div>
                <Header/>
            </div>
            <div>
                <Inputemployees/>
                <EmployeesList/>
            </div>
            <div>
                <Inputmanager/>
                <ManagerList/>
            </div>
            <div>
                <Inputitems/>
                <ItemsList/>
            </div>
            <div>
                <Inputfood/>
                <FoodList/>
            </div>
            <div>
                <Inputnon_food/>
                <Non_foodList/>
            </div>
            <div>
                <Inputdelivery/>
                <DeliveryList/>
            </div>
            <div>
                <InputTruck/>
                <TruckList/>
            </div>
            <div>
                <Inputdriver/>
                <DriverList/>
            </div>
            
        </div>
    );
};

export default Home