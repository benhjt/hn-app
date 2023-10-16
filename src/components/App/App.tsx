import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../Header';
import FeedWrapper from '../Feed';
import UserWrapper from '../User';
import StoryWrapper from '../Story/StoryWrapper';

const App = () => {
  return (
    <div className="container mx-auto">
      <Router>
        <Header />
        <main className="p-2 bg-slate-50 mb-10">
          <Routes>
            <Route path="/" element={<Navigate replace to="/news/1" />} />
            <Route path="/news/:page" element={<FeedWrapper type="news" />} />
            <Route
              path="/newest/:page"
              element={<FeedWrapper type="newest" />}
            />
            <Route path="/show/:page" element={<FeedWrapper type="show" />} />
            <Route path="/ask/:page" element={<FeedWrapper type="ask" />} />
            <Route path="/jobs/:page" element={<FeedWrapper type="jobs" />} />
            <Route path="/story/:id" element={<StoryWrapper />} />
            <Route path="/user/:username" element={<UserWrapper />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
