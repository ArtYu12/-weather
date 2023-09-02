import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Div from './components/div/div';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './store/redux-store';
const App = (props) => {
  const dispatch = useDispatch()

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apikey = '35651bff673244bb9be2efcae3abcb99';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apikey}&no_annotations=1`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const city = data.results[0].components.city;
        dispatch(actions.setCity(city));
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    getLocation();
  },[])
  return (
    <div>
        <Header />
        <Main />
        <Div />
    </div>
    
  );
}

export default App;
