import React, {useState, useEffect} from 'react';
import{
   MenuItem,
   FormControl,
   Select,
   Card,
   CardContent,
} from "@material-ui/core"
import './App.css';

function App() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] =  useState('worldwide');

//https://disease.sh/v3/covid-19/countries
useEffect(()  => {
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
            .then ((response) => response.json())
            .then((data) => {
              const countries = data.map((country)=> (
                  {
                      name: country.country,
                      value: country.countryInfo.iso2


                  }
              ));
              setCountries(countries);
        });
    };
    getCountriesData();
}, []);

const onCountryChange = async (event) => {
    const countryCode = event.targe.value;
    console.log(countryCode);
    setCountry(countryCode);
}

  return (
    <div className="App">
        <div className="app__header">
            <h1>Covid 19 Tracker App</h1>
            <FormControl className="app__dropdown">

                <Select variant = "outlined" onChange={onCountryChange}
                        value="abc">
                    <MenuItem value={"worldwide"}>WorldWide</MenuItem>


                    {countries.map(country => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))}

                    {/*<MenuItem value="worldwide">WorldWide</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Option 2</MenuItem>*/}
                    {/*<MenuItem value="worldwide">option 3</MenuItem>*/}
                    {/*<MenuItem value="worldwide">option 4</MenuItem>*/}
                </Select>
            </FormControl>
        </div>



      {/*Header*/}
      {/*Title + select input dropdown*/}

      {/*InfoBox*/}
      {/*InfoBox*/}
      {/*InfoBox*/}


      {/*Table*/}
      {/*Graph*/}


      {/*Map*/}

    </div>

  );
}

export default App;
