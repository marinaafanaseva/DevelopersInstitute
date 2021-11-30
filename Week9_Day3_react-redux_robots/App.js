import React from 'react';
import './App.css';
import UsersList from './components/UsersList'
import SearchBox from './components/SearchBox'

const App = () => {
    return (
      <>
        <SearchBox />
        <UsersList />
      </>
    );
}

export default App;
