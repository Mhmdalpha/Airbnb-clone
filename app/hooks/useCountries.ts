// @ts-ignore
import countries from "world-countries";

type CountryType = {
   cca2: string;
   name: { common: string };
   flag: string;
   latlng: [number, number];
   region: string;
};

const formatedCountries = countries.map((country: CountryType) => ({
   value: country.cca2,
   label: country.name.common,
   flag: country.flag,
   latlng: country.latlng,
   region: country.region,
}));

const useCountries = () => {
   const getAll = () => formatedCountries;

   const getByValue = (value: string) => {
      return formatedCountries.find((item: { value: string }) => item.value === value);
   };

   return {
      getAll,
      getByValue,
   };
};

export default useCountries;
