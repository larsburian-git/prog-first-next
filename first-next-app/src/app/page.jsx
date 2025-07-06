import Link from "next/link";
import styles from "./page.module.css";
import Forms from "@/components/Forms/Forms";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import RestaurantMain from "@/components/RestaurantMain/RestaurantMain";
import RestaurantFooter from "@/components/RestaurantFooter/RestaurantFooter";
import LoginForm from "@/components/LoginForm/LoginForm";
import Checkout from "@/components/Checkout/Checkout";


export default function Home() {
  const OPENING_HOURS = {
    start: '16:00',
    end: '22:00',
    closedDays: [2], // Mittwoch (0 = Montag)
    days: [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag',
    ],
  };

  // Login-Handler für Formular
  const handleLogin = (credentials) => {
    console.log("Login-Daten:", credentials);
  };
  return (
    <div>
      <main>
        <RestaurantHeader />
        <RestaurantMain />
        {/* <LoginForm onSubmit={handleLogin} /> */}
        <Checkout openingHours={OPENING_HOURS} />

        <RestaurantFooter openingHours={OPENING_HOURS} />
      </main>
    </div>
  );
}
