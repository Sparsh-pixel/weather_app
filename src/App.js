import React, { useEffect, useState } from 'react';
import "./App.css";



function App() {

  const [search , setSearch] = useState("ranchi");
  const [city, setCity] = useState(null);

  // url :- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=64c3dbf77aefe8a61213edf00c042ba2

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=64c3dbf77aefe8a61213edf00c042ba2`
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
    }
    fetchApi();

  }, [search])


  return (
<>
    <div className="box">
      <div className="search-box">
        <input
        type='search'
        value={search}
        className='input-field'
        onChange = {(e) => setSearch(e.target.value)}
        />
    </div>  

     {/*  condition for if the doesn't found */}

    {!city ?  (
      <p>No city found</p>
    ) : (
      <div className='info'>
      <h2 className='location'>
      <i className="fa-solid fa-street-view "></i>{search}
      </h2>
      <h1 className='temp'>
        {city.temp}&#xB0; Cel
      </h1>
      <h2 className='feels_like'>feels_like : {city.feels_like}</h2>
      <h3 className='tempmin_max'> Min : {city.temp_min}&deg; Cel | Max : {city.temp_max}&#xB0; Cel</h3>
      <div className='humid_pressure'>
        <h4 className='humid'> humidity : {city.humidity}</h4>
        <h4 className='pressure'>Pressure : {city.pressure}</h4>

      </div>
    </div>
)}

     
    
    </div>
    </>
  );
}

export default App;
