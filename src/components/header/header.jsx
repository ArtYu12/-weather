import stylesForHeader from './header.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
const dispatch = useDispatch()
const lang = useSelector(state => state.language);
const city = useSelector(state => state.city);

const switchLang = (lang) => {
  dispatch({type:'SWITCH_LANG',lang:lang});
}

let newPostElement = React.useRef(null);
let speak = (e)  => {
    let text = e.target.innerText;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}    

  return (
    <header className={stylesForHeader.header}>
        <h1 className={stylesForHeader.h1}>Weather</h1>
        <p className={stylesForHeader.p} ref={newPostElement}>{lang.motto}</p>
        <ul className={stylesForHeader.ul}>
          <li className={stylesForHeader.a} onClick={() => switchLang('ru')}>Русский</li>
          <li className={stylesForHeader.a} onClick={() => switchLang('en')}>English</li>
          <li className={stylesForHeader.a} onClick={() => switchLang('kz')}>Қазақ</li>
        </ul>
      <span className={stylesForHeader.span}>{city}</span>
    </header>
  );
}

export default Header;