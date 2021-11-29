// STYLE
import './IndexPromoComponent.scss';

// IMAGE
import reuLogo from '../../assets/image/main-promo/reu_logo.png';

function IndexPromoComponent() {
  return (
    <div className='main-promo-block'>
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
        {/*  */}
      </main>
    </div>
  );
}

export default IndexPromoComponent;
