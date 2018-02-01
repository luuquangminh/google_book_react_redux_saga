/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import BookPage from 'containers/BookPage/Loadable';
import BookCollection from 'containers/BookCollection/Loadable';
import Footer from 'components/Footer';
import BookDetail from 'containers/BookPage/components/BookDetail';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <div>
        <Switch>
          <Route path="/abouts" component={AboutPage} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/collections" component={BookCollection} />
          <Route exact path="/" component={BookPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </AppWrapper>
  );
}
