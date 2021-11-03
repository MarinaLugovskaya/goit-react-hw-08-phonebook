import { Switch } from 'react-router-dom';
import { HomeView } from '../../views/HomeView/HomeView';
import { RegisterView } from '../../views/RegisterView';
import { LoginView } from '../../views/LoginView/LoginView';
import { ContactsView } from '../../views/ContactsView';
import { AppBar } from '../AppBar/AppBar';
import PrivateRoute from '../Route/PrivateRoute';
import PublicRoute from '../Route/PublicRoute';
import css from '../App/App.module.css';

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>

        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </>
  );
}
