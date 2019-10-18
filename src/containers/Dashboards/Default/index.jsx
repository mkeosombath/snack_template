import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ActiveTraining from './components/ActiveTraining';
import TrainingCompletion from './components/TrainingCompletion';
import NewUsers from './components/NewUsers';
import EmployeesOverdue from './components/EmployeesOverdue';
import ABTestingAnalytics from './components/ABTestingAnalytics';
import SalesStatistic from './components/SalesStatistic';
import VisitorsSessions from './components/VisitorsSessions';
import BounceRateArea from './components/BounceRateArea';
import EmployeeList from './components/EmployeeList';
import BudgetStatistic from './components/BudgetStatistic';
import BestSellingRegions from './components/BestSellingRegions';
import GoalsCompletion from './components/GoalsCompletion';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';
import ActiveUsers from './components/ActiveUsers';
import RecentOrders from './components/RecentOrders';

import TotalLearners from './components/TotalLearners';

const DefaultDashboard = ({ t, rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <TotalLearners/>
      <ActiveTraining />
      <TrainingCompletion />
      <EmployeesOverdue />
    </Row>
    <Row>
      <ActiveUsers dir={rtl.direction} />
      <EmployeeList />
      <RecentOrders />
      <ABTestingAnalytics dir={rtl.direction} />
      <BounceRateArea dir={rtl.direction} />
      <VisitorsSessions dir={rtl.direction} />
      <SalesStatistic />
      {/* <BudgetStatistic /> */}
      {/* <BestSellingRegions /> */}
      <GoalsCompletion />
    </Row>
  </Container>
);

DefaultDashboard.propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
};

export default compose(withTranslation('common'), connect(state => ({
  rtl: state.rtl,
})))(DefaultDashboard);
