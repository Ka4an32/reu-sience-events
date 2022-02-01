// STYLE
import './IndexPromoComponent.scss';

// IMAGE
import reuLogo from '../../assets/image/main-promo/reu_logo.png';

// DATA
// const MenuList = JSON.parse(MenuListData);
// console.log(MenuList);

function IndexPromoComponent() {
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
    </div>
  );
}

export default IndexPromoComponent;
