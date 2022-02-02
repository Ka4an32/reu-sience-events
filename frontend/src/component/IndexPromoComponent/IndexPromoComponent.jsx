// STYLE
import './IndexPromoComponent.scss';

// COMPONENT
import IndexTapeComponent from './TapeComponent/TapeComponent';
import Header from '../Header/Header';

function IndexPromoComponent() {
  return (
    <div className='main-promo-block'>
      <Header />
      <IndexTapeComponent />
    </div>
  );
}

export default IndexPromoComponent;
