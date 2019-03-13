import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import App from './components/App';
import LoginForm from './components/LoginForm'
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
})
// dataIdFromObject: (o: any) => o.id

const client = new ApolloClient({
  cache,
  link
});

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function AppWraper() {
  return <h2>Users</h2>;
}
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route path="/" exact component={()=> <App><LoginForm /></App>} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />  
        </div>
      </Router>
    </ApolloProvider>
  );
};
ReactDom.render(
  <Root />, 
  document.getElementById('root')
)

