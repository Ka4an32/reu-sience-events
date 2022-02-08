import Header from '../component/Header/Header';
import './IndexLayoutPage.scss';

import MenuList from '../constants/menu-list.json';
import PhoneList from '../constants/phone-list.json';
import EmailList from '../constants/eMail-list.json';
import AdresList from '../constants/adress-list.json';

import { NavLink } from 'react-router-dom';


const renderPhoneList = () => {
  return PhoneList.map(({ phone }, key) => {
    const country = phone.slice(0, 2);
    const region = phone.slice(2, 5);
    const firstThreeNumber = phone.slice(5, 8);
    const firstTwoNumber = phone.slice(8, 10);
    const secondTwoNumber = phone.slice(10, 12);
    return (
      <a href={`tel:${phone}`} key={key}>
        {`${country} (${region}) ${firstThreeNumber} - ${firstTwoNumber} - ${secondTwoNumber}`}
      </a>
    );
  });
};

const renderMenuList = () => {
  return MenuList.map((item, index) =>
    <li key={index}>
      <NavLink activeClassName={'active'} to={item.path}>{item.title}</NavLink>
    </li>,
  );
};

const renderEmailList = () => {
  return EmailList.map(({ email }, index) => (
    <a href={`mailto:${email}`} className={'mail'} key={index}>{email}</a>
  ),
  );
};

const renderAdresList = () => {
  return AdresList.map(({ adres }, index) => (
    <div className='korpus' key={index}>
      {`Корпус ${index + 1}:`}
      <div className='adres'>
        {adres}
      </div>
    </div>
  ),
  );
};

function IndexLayoutPage() {
  return (
    <div className='main-promo-block'>
      <div className='navbar-menu'>
        <Header />
        <nav className='block nav-menu'>
          <h4 className='title'>МЕНЮ</h4>
          <ul className='nav-link__list'>
            {renderMenuList()}
          </ul>
        </nav>
        <div className='block contact-block'>
          <h4 className='title'>
            Контакты
          </h4>
          <div className='border-block-wrapper'>
            <div className='arrow-border-block'>
              {renderPhoneList()}
            </div>
            <div className='hr' />
            <div className='arrow-border-block'>
              {renderEmailList()}
            </div>
          </div>
        </div>

        <div className='block adres-block'>
          <h4 className='title'>
            Адрес
          </h4>
          <div className='border-block-wrapper'>
            <div className='arrow-border-block'>
              {renderAdresList()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexLayoutPage;
