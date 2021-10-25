import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import React, { Component } from 'react';
import Container from '../components/Container/Container';
import AppBar from '../components/UserMenu/AppBar';

// const NotFoundView = lazy(() => import('../views/NotFoundView/NotFoundView'));
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const LoginView = lazy(() => import('../views//LoginView/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader type="Puff" color="#00BFFF" height={80} width={80} />}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/login" exact>
              <LoginView />
            </Route>

            <Route path="/register">
              <RegisterView />
            </Route>

            <Route path="/contacts">
              <ContactsView />
            </Route>
          </Switch>
        </Suspense>

        {/* <Contacts /> */}
      </Container>
    </>
  );
}
