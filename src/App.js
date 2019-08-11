import React from 'react';
import BookContextProvider from './Context/BookContext';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Booklist from './components/Booklist';
import Bookform from './components/Bookform';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <Booklist/>
        <Bookform/>
      </BookContextProvider>
    </div>
  );
}

export default App;
