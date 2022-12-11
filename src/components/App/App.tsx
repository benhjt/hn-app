import React from 'react';

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../Header';
import Feed from '../Feed';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/news/1" />} />
            <Route path="/news/:page" element={<Feed feedType="news" />} />
            <Route path="/newest/:page" element={<Feed feedType="newest" />} />
            <Route path="/show/:page" element={<Feed feedType="show" />} />
            <Route path="/ask/:page" element={<Feed feedType="ask" />} />
            <Route path="/jobs/:page" element={<Feed feedType="jobs" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
