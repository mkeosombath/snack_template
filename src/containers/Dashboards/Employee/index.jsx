import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import BasicCard from './components/BasicCard';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import NewOrders from './components/NewOrders';
import SalesStatistisBar from './components/SalesStatistisBar';
import MyTodos from './components/MyTodos';
import Emails from './components/Emails';
import SalesReport from './components/SalesReport';
import ShortReminders from './components/ShortReminders';
import { deleteNewOrderTableData } from '../../../redux/actions/newOrderTableActions';
import { NewOrderTableProps } from '../../../shared/prop-types/TablesProps';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

import EmployeeList from './components/EmployeeList';
import HorizontalForm from './components/HorizontalForm';

class EmployeeDashboard extends PureComponent {
  static propTypes = {
    newOrder: NewOrderTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
  };

  onDeleteRow = (index, e) => {
    const { dispatch, newOrder } = this.props;

    e.preventDefault();
    const arrayCopy = [...newOrder];
    arrayCopy.splice(index, 1);
    dispatch(deleteNewOrderTableData(arrayCopy));
  };

  render() {
    const { t, newOrder, rtl } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Employee List</h3>
          </Col>
          <EmployeeList />
        </Row>
        <Row>
        <Col md={12}>
            <h3 className="page-title">Add</h3>
          </Col>
          {/* <ProductSales rtl={rtl.direction} />
          <SalesStatistic />
          <MyTodos />
          <SalesStatistisBar />
          <SalesReport />
          <Emails />
          <ShortReminders />
          <TopSellingProducts dir={rtl.direction} />
          <NewOrders newOrder={newOrder} onDeleteRow={this.onDeleteRow} /> */}
          
          <HorizontalForm/>
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  newOrder: state.newOrder.items,
  rtl: state.rtl,
}))(withTranslation('common')(EmployeeDashboard));
