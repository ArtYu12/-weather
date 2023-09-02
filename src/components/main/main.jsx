import stylesForMain from './main.module.css';
import {useSelector } from 'react-redux';
import React,{useEffect,useRef, useState} from 'react';
import axios from 'axios';



const Main = () => {
  const city = useSelector(state => state.city);
  const lang = useSelector(state => state.language);
  const audio_lang = useSelector(state => state.audio_lang);

  const [weatherData,setWeatherData] = useState({})

  async function showWeather(position) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.longitude}&lon=${position.coords.latitude}&appid=b6c189871e989fe04143f028de1ad187`)
    if(response.status === 200 ) setWeatherData(response)
  }

  useEffect(()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeather);
      
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },[])
  let audioNode = useRef();
  let pNode = useRef();

  let audioNode1 = useRef();
  let pNode1 = useRef();
  
  let audioNode2 = useRef();
  let pNode2 = useRef();

  let audioNode3 = useRef();
  let pNode3 = useRef();

  useEffect(() => {
    if(Object.keys(weatherData).length === 0) return 
    pNode1.current.addEventListener("click", function () {
      audioNode1.current.src = '/audio-clarity/'+'clarity'+audio_lang+'.mp3';
      audioNode1.current.play();

  });
  },[audio_lang]);

  useEffect(() => {
    if(Object.keys(weatherData).length === 0) return 
    pNode2.current.addEventListener("click", function () {
      audioNode2.current.src = '/audio-actuality/'+'actuality'+audio_lang+'.mp3';
      audioNode2.current.play();
  });
  },[audio_lang]);
  useEffect(() => {
    if(Object.keys(weatherData).length === 0) return 
    pNode3.current.addEventListener("click", function () {
      audioNode3.current.src = '/audio-weakness/'+'weakness'+audio_lang+'.mp3';
      audioNode3.current.play();
  });
  },[audio_lang]);

  useEffect(() => {
    if(Object.keys(weatherData).length === 0) return 
    pNode.current.addEventListener("click", function () {
      audioNode.current.src = '/audio-par/'+'par'+audio_lang+'.mp3';
      audioNode.current.play();
  });
  },[audio_lang]);


  const video = useRef();


  useEffect(() => {
    if(Object.keys(weatherData).length === 0) return 
      video.current.addEventListener("ended", function () {
      video.current.pause();
      video.current.time = 0;
      video.current.play();
  });
  },[]);
  let load = () => {
    audioNode.current.currentTime = 0;
    audioNode.current.pause();

    audioNode1.current.currentTime = 0;
    audioNode1.current.pause();

    audioNode2.current.currentTime = 0;
    audioNode2.current.pause();

    audioNode3.current.currentTime = 0;
    audioNode3.current.pause();
  }
  if(Object.keys(weatherData).length === 0 ) {
    return
  }
  return (
    <main className={stylesForMain.main}>
      <div className={stylesForMain.div}>
        <button className={stylesForMain.button} onClick={load} title={lang.title}>| |</button>
    </div>
      <nav className={stylesForMain.nav}>
        <ul className={stylesForMain.ul}>
          <li>
            <a tabIndex="0" href="#weather" className={stylesForMain.a}>{lang.weather}</a>
          </li>
          <li>
            <a tabIndex="0" href="#importance" className={stylesForMain.a}>{lang.importance}</a>
          </li>
          <li>
            <a tabIndex="0" href="#features" className={stylesForMain.a}>{lang.features}</a>
          </li>
        </ul>
      </nav>
      <h2 id="weather">{lang.weather}</h2>
      <figure>
        <figcaption>
          <h4>{city}</h4>
          <b>{Math.floor(weatherData.data.main.temp - 273)}°</b>
          <span>Чувствуется как {Math.floor(weatherData.data.main.feels_like - 273)}°</span>
          <ul>
            <li>Влажность: {weatherData.data.main.humidity}</li>
            <li>Давление: {weatherData.data.main.pressure}</li>
            <li>Скорость ветра: {weatherData.data.wind.speed}</li>
            
          </ul>
        </figcaption>
        <video ref={video} autoPlay="autoplay" src="/weather.mp4" width="640" height="360" muted="muted"></video>
      </figure>
      
      <h2 id="importance">{lang.importance}</h2>
      <article ref={pNode} className='wow animate__animated animate__bounceIn'>
        <p>{lang.par}</p>
        <ul>
            <li>{lang.parli1}</li>
            <li>{lang.parli2}</li>
            <li>{lang.parli3}</li>
            <li>{lang.parli4}</li>
        </ul>
        <p>{lang.parend}</p>
        <audio ref={audioNode}></audio>
      </article>
      
      <h2 id="features">{lang.features}</h2>
      <ul className={stylesForMain.info}>
        <li className='wow animate__animated animate__backInUp'>
          <h3 className={stylesForMain.infoh}>{lang.weakness}</h3>
          <p ref={pNode3} className={stylesForMain.infop}>{lang.weaknessp}<audio ref={audioNode3}></audio></p>
        </li>
        <li className='wow animate__animated animate__backInUp'>
          <h3 className={stylesForMain.infoh}>{lang.actuality}</h3>
          <p ref={pNode2} className={stylesForMain.infop}>{lang.actualityp}<audio ref={audioNode2}></audio></p>
        </li>
        <li className='wow animate__animated animate__backInUp'>
          <h3 className={stylesForMain.infoh}>{lang.сlarity}</h3>
          <p ref={pNode1} className={stylesForMain.infop}>{lang.сlarityp} <audio ref={audioNode1}></audio> </p>
        </li>
      </ul>
    </main>
  );
}
export default Main;