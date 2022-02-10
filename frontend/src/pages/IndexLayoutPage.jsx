import { useState } from 'react';
import Header from '../component/Header/Header';
import './IndexLayoutPage.scss';
import FullScreenNavbar from './Layouts/FullScreenNavbar/FullScreenNavbar';

function IndexLayoutPage() {
  window.innerWidth;
  const [isFullScreen, setFullScreen] = useState(innerWidth < 1460 ? false : true);

  window.onresize = () => {
    setFullScreen(window.innerWidth < 1460 ? false : true);
  };

  return (
    <div
      className='main-promo-block'
      style={
        {
          flexDirection: isFullScreen ? 'row' : 'column',
          alignItems: isFullScreen ? 'flex-start' : 'center',
        }
      }
    >
      {
        isFullScreen ? (
          <FullScreenNavbar />
        ) : (
          <Header />
        )
      }
      <div className='content-wrapper'>
        <div className='static-block'>
          <div className='block working-arrow'>
            <h3 className='title'>
              <span className='first-row'>
                направление
              </span>
              <span className='second-row'>
                работы
              </span>
            </h3>
          </div>
          <div className='block strategy'>
            {/*  */}
          </div>
          <div className='block strategy'>
            {/*  */}
          </div>
          <div className='block facts'>
            {/*  */}
          </div>
          <div className='block slider'>
            {/*  */}
          </div>
          <div className='block tape'>
            {/*  */}
          </div>
        </div>
        <div className='block sticky-block'>

        </div>
      </div>
    </div>
  );
}

export default IndexLayoutPage;
