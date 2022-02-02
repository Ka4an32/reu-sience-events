import './Header.scss';

// IMAGE
import reuLogo from '../../assets/image/main-promo/reu_logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo-block'>
        <img src={reuLogo} alt="REU" />
        <div>
          <p className='logo-block__text'>
            <span>РОССИЙСКИЙ</span>
            <span>ЭКОНОМИЧЕСКИЙ</span>
            <span>УНИВЕРСИТЕТ</span>
          </p>
          <span className='logo-block__filial'>
            БРЯНСКИЙ ФИЛИАЛ
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
