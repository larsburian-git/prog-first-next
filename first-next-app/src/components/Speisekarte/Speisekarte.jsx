import './Speisekarte.css';

const gerichtsdaten = [
  { name: "Japanaisch 1", preis: "30€" },
  { name: "Koreanatisch 1", preis: "29,99€" },
  { name: "Chinesatisch 1", preis: "22€" },
  { name: "Japanaisch 2", preis: "31,50€" },
  { name: "Koreanatisch 2", preis: "28,00€" },
  { name: "Chinesatisch 2", preis: "23€" },
  { name: "Japanaisch 3", preis: "32€" },
  { name: "Koreanatisch 3", preis: "27,50€" },
  { name: "Chinesatisch 3", preis: "21,90€" },
];

const Speisekarte = () => {
  return (
    <div className="speisekarte">
      <h3>Speisekarte</h3>
      <ul>
        {gerichtsdaten.map((gericht, index) => (
          <li key={index}>
            {gericht.name} – {gericht.preis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Speisekarte;
