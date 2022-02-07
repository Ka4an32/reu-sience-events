import {Routes, Route} from 'react-router-dom';
import FirstPreloader from '../component/Preloader/FirstPreloader';

// LAYOUT
import IndexLayoutPage from '../pages/IndexLayoutPage';

// STYLES
import './IndexRouter.scss';

// PAGES
import MainPage from '../pages/MainPage/MainPage';

function IndexRouter() {
  return (
    <>
      <FirstPreloader />
      <Routes>
        <Route
          exate path='/'
          element={
            <IndexLayoutPage>
              <MainPage />
            </IndexLayoutPage>
          }
        />
      </Routes>
    </>
  );
}

export default IndexRouter;
