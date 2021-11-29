import {Routes, Route} from 'react-router-dom';

// PAGES
import IndexPage from '../pages/IndexPage';

// STYLES
import './IndexRouter.scss';

function IndexRouter() {
  return (
    <Routes>
      <Route exate path='/' element={<IndexPage/>} />
    </Routes>
  );
}

export default IndexRouter;
