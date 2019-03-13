import * as  React from 'react'
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import Login from '../mutations/Login';
import query from '../queries/CurrentUser';

type Mutate = {mutate: any}
class LoginForm extends React.Component < Mutate > {
  state = {
    errors: []
  };
  submit = ({email,password})=> {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{query}]
    }).catch(res =>{
      const errors = res.graphqlErrors.map( error =>error.message);
      console.log(errors);
      this.setState({errors})
    })
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} submit={this.submit}/>
      </div>
    )
  }
}

export default graphql(Login)(LoginForm) 