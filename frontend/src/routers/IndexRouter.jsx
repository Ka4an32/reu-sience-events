import {Routes, Route} from 'react-router-dom';
import FirstPreloader from '../component/Preloader/FirstPreloader';

// PAGES
import IndexPage from '../pages/IndexPage';

// STYLES
import './IndexRouter.scss';

function IndexRouter() {
  return (
    <>
      <FirstPreloader />
      <Routes>
        <Route exate path='/' element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default IndexRouter;
