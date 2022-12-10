import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Feed from '../Feed';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/news/:page" element={<Feed feedType="news" />} />
          <Route path="/newest/:page" element={<Feed feedType="newest" />} />
          <Route path="/show/:page" element={<Feed feedType="show" />} />
          <Route path="/ask/:page" element={<Feed feedType="ask" />} />
          <Route path="/jobs/:page" element={<Feed feedType="jobs" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
