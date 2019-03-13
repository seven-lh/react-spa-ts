import * as  React from 'react'
import AuthForm from './AuthForm';
export default class LoginForm extends React.Component {
  state = {};
  
  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <AuthForm/>
      </div>
    )
  }
}
