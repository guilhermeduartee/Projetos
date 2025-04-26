import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Schedule from './components/Schedule';
import Patients from './components/Patients';
import Inventory from './components/Inventory';
import Procedures from './components/Procedures';
import Reports from './components/Reports';
import Payments from './components/Payments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={UserManagement} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/patients" component={Patients} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/reports" component={Reports} />
        <Route path="/payments" component={Payments} />
      </Switch>
    </Router>
  );
}

export default App;
