import {useState} from 'react';

// STYLE
import './IndexPromoComponent.scss';

// IMAGE
import reuLogo from '../../assets/image/main-promo/reu_logo.png';

// DATA
// const MenuList = JSON.parse(MenuListData);
// console.log(MenuList);

function IndexPromoComponent() {
  let [scroll, setScroll] = useState(0);
  window.onscroll = () => {
    scroll = setScroll(window.scrollY);
  };

  return (
    <div className='main-promo-block' style={{top: `${scroll*0.3}px`}}>
      <header>
        <div className='logo-block'>
          <img src={reuLogo} alt="REU" />
          <p className='logo-block__text'>
            <span>РОССИЙСКИЙ</span>
            <span>ЭКОНОМИЧЕСКИЙ</span>
            <span>УНИВЕРСИТЕТ</span>
          </p>
        </div>
      </header>
      <main className='promo-content'>
        <div className='promo-content__wrapper' style={{top: `${scroll*0.1}px`}}>
          <div className='head-title'>
            <h1 className='title'>
              <span className='sience light'>
                НАУКА
              </span>
              <span className='and-reu light'>
                и <span className='reu'>РЭУ</span>
              </span>
              <span className='united bold'>
                объединяет
              </span>
              <span className='thousand light'>
                тысячи
              </span>
              <span className='brains light'>
                умов
              </span>
              <span className='in-good bold'>
                во благо
              </span>
              <span className='light bold'>
                светлого будущего
              </span>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndexPromoComponent;
