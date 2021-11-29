// STYLE
import './IndexPromoComponent.scss';

// IMAGE
import reuLogo from '../../assets/image/main-promo/reu_logo.png';

// DATA
import MenuListData from '../../common/menu-list.json';
// const MenuList = JSON.parse(MenuListData);
// console.log(MenuList);

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
        <div className='promo-content__wrapper'>
          <div className='head-title'>
            <h1 className='title'>
              <span className='sience'>НАУКА</span>
              <span className='unite'>
                ОБЪЕДИНЯЕТ
              </span>
              <div className='bottom-row'>
                <span className='and'>И</span>
                <span className='do-strong'>ДЕЛАЕТ НАС <br /> СИЛЬНЕЕ</span>
              </div>
            </h1>
          </div>
          <div className='head-menu'>
            <nav className='nav-menu'>
              {MenuListData.map((item, key) => (
                <div key={key} className='menu-item'>
                  {item.Name}
                </div>
              ))}
            </nav>
            <div className='text-block'>
              <svg width="297" height="5" viewBox="0 0 297 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4.97835" height="5" rx="2.48918" fill="#A51A2F"/>
                <rect x="7.96533" width="4.97835" height="5" rx="2.48918" fill="#A51A2F"/>
                <rect x="15.9307" width="4.97835" height="5" rx="2.48918" fill="#A51A2F"/>
                <rect x="26.8831" y="2" width="270" height="1" fill="#A51A2F"/>
              </svg>
              <p className='greeting-text'>
                {`
                  Сегодня Российский экономический Университет 
                  им. Г. В. Плеханова является одним из ведущих научно-методических и 
                  учебных центров России, осуществляющих подготовку научно-педагогических и научных кадров через аспирантуру. 
                  Научно-исследовательская деятельность 
                  профессорско-преподавательского состава 
                  РЭУ им. Г. В. Плеханова направлена на 
                  достижение основной цели — подготовки 
                  специалистов, обладающих современными 
                  профессиональными навыками и квалификацией 
                  в областях экономики, товароведения, техники и 
                  технологии. 
                `}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndexPromoComponent;
