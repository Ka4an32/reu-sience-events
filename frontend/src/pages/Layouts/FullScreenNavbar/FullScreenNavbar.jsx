function FullScreenNavbar() {
  return (
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
  )
}