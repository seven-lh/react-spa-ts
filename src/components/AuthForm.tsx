import * as React from 'react'


interface FooProp { 
  submit: Function,
  errors: Array<string>,
 }
class AuthForm extends React.Component < FooProp > {
  state = { 
      email: '',
      password: '',
  }
  
  onValueChange = (data: object)=>{
    this.setState({...data});
  }
  onSubmit = ()=> {
    this.props.submit(this.state)
  }
  render() {
    return (
      <div className="row">
      <form onSubmit={(e)=> e.preventDefault()} className="col s4">
        <div className="input-field">
          <input
            placeholder="email"
            value={this.state.email} 
            onChange={(e)=>this.onValueChange({ email: e.target.value })} 
            type="email"
          />
        </div>
        <div className="input-field">
          <input
            placeholder="password"
            value={this.state.password} 
            onChange={(e)=>this.onValueChange({ password: e.target.value })} 
            type="password"
          />
        </div>
        <div className="errors">
          {
            this.props.errors.map(error=><div key={error}>{error}</div>)
          }
        </div>
        <button className="btn" onClick={this.onSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}


export default AuthForm