import React, { FC } from "react";
interface Country {
  country: any;
}
const Card: FC<Country> = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h2>{country.capital}</h2>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
