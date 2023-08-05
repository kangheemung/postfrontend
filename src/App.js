import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Modal from './componets/Modal';
import Header from './Header';
import Post from './componets/Post';
import Hellow from './componets/Hellow';
import PostIndex from './componets/PostIndex';
import PostShow from './componets/PostShow';

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModalHandler() {
    setShowModal((isShowing) => !isShowing);
  }

  return (
    <Router>
      <>
        <Header />
        <main className="main">
          <h1>ここはAPPの場所</h1>
          <Hellow />
          <Routes>
            <Route
              path="/posts/new"
              element={<Post onContact={toggleModalHandler} />}
            />
            {showModal && <Modal onClose={toggleModalHandler} />}
            <Route path="/index" element={<PostIndex />} />
            <Route path="/posts/:id" element={<PostShow />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
