import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Note from './components/Note/Note';
import LabAction from './components/LabAction/LabAction';
import Message from './components/Message/Message';
import Lab from './components/Lab/Lab';


const App = () => {
  return(
    <>
    < LabAction />
    <main className = "main">
      < Lab />
      < Sidebar />
      < Home />
      < Note />
      < Message />
    </main>
    </>
    );
}

export default App;
