import './RestaurantFooter.css';

const RestaurantFooter = ({ openingHours }) => {
  const renderTimes = () => {
    return openingHours.days.map((day, index) => {
      const isClosed = openingHours.closedDays.includes(index);
      return (
        <li key={index}>
          {day}: {isClosed ? 'geschlossen' : `${openingHours.start} - ${openingHours.end}`}
        </li>
      );
    });
  };

  return (
    <footer>
      <div>
        <ul>Öffnungszeiten
          {renderTimes()}
        </ul>

        <p>
          Adresse:{" "}
          <a
            href="https://www.google.com/maps/search/Erlenmeierkolbenstraße+187"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erlenmeierkolbenstraße 187
          </a>
        </p>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
