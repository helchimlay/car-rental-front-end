import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <main className='privacy-policy'>
      <h2>Polityka prywatności</h2>
      <div className='privacy-policy-paragraphs'>
        <h3>1. Informacje ogólne</h3>
        <p>
          1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem
          url: carrental.pl
        </p>
        <p>
          2. Operatorem serwisu oraz Administratorem danych osobowych jest: Jan
          Nowak Orzeszkowa 00-001 Warszawa
        </p>
        <p>
          3. Adres kontaktowy poczty elektronicznej operatora:
          jannowak@gmail.com
        </p>
        <p>
          4. Operator jest Administratorem Twoich danych osobowych w odniesieniu
          do danych podanych dobrowolnie w Serwisie.
        </p>
        <p>
          5. Serwis wykorzystuje dane osobowe w następujących celach:
          <ol>
            <li>Wyświetlanie ogłoszeń użytkowników</li>
            <li>Obsługa zapytań przez formularz</li>
            <li>Realizacja zamówionych usług</li>
            <li>Prezentacja oferty lub informacji</li>
          </ol>
        </p>
        <h3>2. Wybrane metody ochrony danych stosowane przez Operatora</h3>
        <p>
          1. Miejsca logowania i wprowadzania danych osobowych są chronione w
          warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
          logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
          użytkownika i mogą być odczytane jedynie na docelowym serwerze.
        </p>
        <p>
          2. Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja
          hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej
          działania, co stanowi obecnie współczesny standard w zakresie
          przechowywania haseł użytkowników.
        </p>
        <p>
          3. Istotnym elementem ochrony danych jest regularna aktualizacja
          wszelkiego oprogramowania, wykorzystywanego przez Operatora do
          przetwarzania danych osobowych, co w szczególności oznacza regularne
          aktualizacje komponentów programistycznych.
        </p>
        <h3>3. Hosting</h3>
        <p>
          1. Serwis jest hostowany (technicznie utrzymywany) na serwerach
          operatora: cyberFolks.pl
        </p>
        <h3>
          4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
        </h3>
        <p>
          1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
          dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
          zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
          Administratorze. Dotyczy to takich grup odbiorców:
          <ol>
            <li>kurierzy</li>

            <li>banki</li>
            <li>
              upoważnieni pracownicy i współpracownicy, którzy korzystają z
              danych w celu realizacji celu działania strony
            </li>
            <li>firmy, świadczące usługi marketingu na rzecz Administratora</li>
          </ol>
        </p>
        <p>
          2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
          niż jest to konieczne do wykonania związanych z nimi czynności
          określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
          odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej
          niż przez 3 lata.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
