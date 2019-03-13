import * as React from 'react';
import { Query,Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout'

class Header extends React.Component {  
  render (){
    console.log(this.props);
    return (
      <Query query={query}>
        {
          ({ data, loading, error }) => {
            if (loading) return <div>LOADING.. .</div>
            return (
              <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">Home</Link>
                <ul className="right">
                  { 
                    data.user ? 
                    ( data.user.email && 
                     (<div>
                        <span>{data.user.email}</span>
                        <Mutation mutation={mutation}>
                          {
                            (logout, { data }) => <span onClick={()=>logout({refetchQueries: [{query}]})}> logout</span>
                          }
                        </Mutation>
                      </div>)
                    ) 
                    :
                    <div onClick={()=>console.log('logout')}>
                      <li>
                        <Link to="/signup">Singup</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </div>
                  }
                </ul>
              </div>
              </nav>
            );
        }
      }
        
      </Query>
    )
  }
}

export default Header;