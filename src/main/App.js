import React from 'react';

import Rotas from './rotas'
import NavBar from '../components/navbar';

import '../style.css'
import '../custom.css'

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div className='container'>
          <Rotas />
        </div>
      </>
    )
  }
}

export default App;
