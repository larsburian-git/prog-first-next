import Link from 'next/link';
import './RestaurantHeader.css';

const RestaurantHeader = () => {
  return (
    <div className="restaurant-header">
      <div className="restaurant-nav">
        <Link href="/impressum">Impressum</Link>
      </div>
    </div>
  );
};

export default RestaurantHeader;
