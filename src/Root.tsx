import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PeoplePage } from './pages/PeoplePage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="home" element={<Navigate to=".." replace />} />

          <Route index element={<HomePage />} />
          <Route path="people">
            <Route path=":slug?" element={<PeoplePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
