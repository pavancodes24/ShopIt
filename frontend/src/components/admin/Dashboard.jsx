import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'

import { getAdminProducts } from '../redux/actions/productActions';
import { allOrders } from '../redux/actions/orderActions';
import Sidebar from './Sidebar';
import { allUsers } from '../redux/actions/userActions';

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
