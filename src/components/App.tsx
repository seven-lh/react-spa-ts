import * as React from 'react';
import Header from '../components/Header'
const App =( props )=>{
  return(
    <div className="container">
      <Header />
      {props.children}
    </div>
  )
}
export default App;