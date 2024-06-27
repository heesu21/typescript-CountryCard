import React from "react";
import { Country } from "../types/country";
import { getCountryList } from "../api/api";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountryList();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);
  console.log("countries :", countries);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <div>
      <h1>선택된 목록</h1>
      <div>
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1>나라 목록</h1>
      <div>
        {countries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
//heesu---
