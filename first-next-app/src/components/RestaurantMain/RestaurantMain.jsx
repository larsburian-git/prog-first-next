import './RestaurantMain.css';
import Speisekarte from '../Speisekarte/Speisekarte'
import Image from 'next/image';
import esstaurantImage from './esstaurant.png';


const RestaurantMain = () => {
  return (
    <main>
      <div className="container">
        <div>
          <h1>Restaurant Japakoreanesisch</h1>
          <h2>mmh lecki essen</h2>
        </div>
        <Speisekarte />
        <div>
          <Image
            src={esstaurantImage}
            alt="Restaurant Visual"
          />
        </div>
      </div>
    </main>
  );
};

export default RestaurantMain;
