import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Col, Button } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];

const HeartRate = ({ t }) => (
  <Col md={3} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardImg top width="100%" src="http://via.placeholder.com/640x360" alt="Card image cap" />
        <CardBody>
          <CardTitle>HR Compliance </CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
    </Card>
    
  </Col>
);

HeartRate.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(HeartRate);
