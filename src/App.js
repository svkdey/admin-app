import React, {
  useEffect,
  Fragment
} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css";
import store from './store/store';
import {
  Provider
} from 'react-redux';

import SearchBox from './components/SearchBox';
import ApplicationList from './components/ApplicationList';
import UpdateStatusModal from './components/UpdateStatusModal';
function App() {
  useEffect(() => {
    M.AutoInit();
  })


  return (< Provider store={store} >
    <Fragment>
      <SearchBox />
      <div className="container" >
        <UpdateStatusModal />
        <ApplicationList />
      </div>
    </Fragment>
  </Provider>);
}

export default App;