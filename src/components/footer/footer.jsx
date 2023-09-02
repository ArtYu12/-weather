import stylesForFooter from './footer.module.css';

const Footer = () => {
  return (
    <footer className={stylesForFooter.footer}>
        <img className={stylesForFooter.schools} src="footer/school8.jpg" alt="school8"/>
        <img className={stylesForFooter.schools}src="footer/schoolAB.jpg" alt="schoolAB"/>
        <img className={stylesForFooter.schools}src="footer/kz.jpg" alt="kaz"/>
    </footer>  
  );
}

export default Footer;