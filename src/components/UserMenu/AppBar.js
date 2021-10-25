import { useSelector } from "react-redux";

import Navigation from "../UserMenu/Navigation";
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../UserMenu/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn)
  return (
    <>
    <header>
  <Navigation />
  {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
  </>
  )

}