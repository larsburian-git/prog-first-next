'use client';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";


export default function Bestaetigung() {
  const params = useSearchParams();
  const firstName = params.get('firstName');
  const lastName = params.get('lastName');
  const day = params.get('day');
  const time = params.get('time');

  return (
    <div style={{ padding: '2rem' }}>

      <h1>Reservierungsbestätigung</h1>
      <p>Vielen Dank, {firstName} {lastName}!</p>
      <p>Deine Reservierung ist für {day} um {time} eingetragen.</p>
      <Link href="/">Startseite</Link>

    </div>
  );
}
