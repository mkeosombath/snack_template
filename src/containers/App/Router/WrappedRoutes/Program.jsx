import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Cart from '../../../ProgramPath/Cart/index';
import OrdersList from '../../../ProgramPath/OrdersList/index';
import Payment from '../../../ProgramPath/Payment/index';
import ProductEdit from '../../../ProgramPath/ProductEdit/index';
import ProductsList from '../../../ProgramPath/ProductsList/index';
import Catalog from '../../../ProgramPath/Catalog/index';
import ProductPage from '../../../ProgramPath/ProductPage/index';

export default () => (
  <Switch>
    <Route path="/program/catalog" component={Catalog} />
  </Switch>
);
