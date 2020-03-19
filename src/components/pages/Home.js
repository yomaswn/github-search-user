import React, { Fragment, useState } from 'react';
import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../layout/Alert';

const Home = () => {
  const [alert, setAlert] = useState(null);

  // set alert message
  const showAlert = (msg, type) => {
    setTimeout(() => setAlert(null), 4000);
    setAlert({ msg, type });
  };
  return (
    <Fragment>
      <Alert alert={alert} />
      <Search setAlert={showAlert} />
      <Users />
    </Fragment>
  );
};

export default Home;
