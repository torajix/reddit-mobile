import './App.less';
import React from 'react';
import Login from './components/login/Login';
import { Anchor, UrlSync } from '@r/platform/components';
import { PageSelector, Page } from '@r/platform/page';
import { PostsFromSubredditPage } from './pages/PostsFromSubredditPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PageSelector>
          <Page url='/' component={ PostsFromSubredditPage } />
          <Page url='/r/:subredditName' component={ PostsFromSubredditPage } />
          <Page
            url='/login'
            component={pageData => (
              <Login/>
            )}
          />
        </PageSelector>
        <UrlSync/>
      </div>
    );
  }
}
