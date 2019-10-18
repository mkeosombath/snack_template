import React from 'react';
import {Badge, Progress, Table, Button } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const Brasil = `${process.env.PUBLIC_URL}/img/flags/Brasil.svg`;
const Argentina = `${process.env.PUBLIC_URL}/img/flags/Argentina.svg`;
const Gabon = `${process.env.PUBLIC_URL}/img/flags/Gabon.svg`;
const Ireland = `${process.env.PUBLIC_URL}/img/flags/Ireland.svg`;
const Italia = `${process.env.PUBLIC_URL}/img/flags/Italia.svg`;
const Sierra = `${process.env.PUBLIC_URL}/img/flags/Sierra.svg`;

const EmployeeList = ({ t }) => (
  <Panel lg={12} xl={12} md={12} title= "Employee List">
    <Table responsive className="table--bordered dashboard__audience-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Program Name</th>
          <th>Deadline</th>
          <th>Progress</th>
          <th>Status</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>John Smith</td>
          <td>HR</td>
          <td>Sexual Harassment</td>
          <td>11/05/19</td>
          <td>
            <div className="progress-wrap progress-wrap--blue">
              <Progress value={41}>41% </Progress>
            </div>
          </td>
          <td><Badge color="success">In Progress</Badge></td>
          <td>
            <Button size="sm">Assign a..</Button>
          </td>
        </tr>
        <tr>
          <td>Katey Soto</td>
          <td>HR</td>
          <td>Sexual Harassment</td>
          <td>11/05/19</td>
          <td>
            <div className="progress-wrap progress-wrap--blue">
              <Progress value={100}>Completed</Progress>
            </div>
          </td>
          <td><Badge color="primary">Completed</Badge></td>
          <td>
            <Button size="sm">Assign a..</Button>
          </td>
        </tr>
        <tr>
          <td>Aden Hills</td>
          <td>HR</td>
          <td>Sexual Harassment</td>
          <td>10/15/19</td>
          <td>
            <div className="progress-wrap progress-wrap--blue">
              <Progress value={0}>5%</Progress>
            </div>
          </td>
          <td><Badge color="danger">Overdue</Badge></td>
          <td>
            <Button size="sm">Assign a..</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

EmployeeList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(EmployeeList);
