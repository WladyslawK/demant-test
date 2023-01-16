import React, {useState, useEffect} from 'react';
import s from './Navbar.module.css'
import menuIcon from '../../assests/icons/burger-bar.png'
import closeIcon from '../../assests/icons/close.png'
import {Button} from "../button/Button";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const menuImage = <img onClick={handleClick} className={s.menuIcon} src={click ? closeIcon : menuIcon} alt="menu"/>

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.menuContainer}>
          <h2 className={s.logo}>LOGO</h2>
          <nav>
            <ul className={click ? `${s.navMenu} ${s.navMenuActive}` : s.navMenu}>
              <li className={s.navItem}><a href="#">Customers</a></li>
              <li className={s.navItem}><a href="#">Products</a></li>
              <li className={s.navItem}><a href="#">Features</a></li>
              <li className={s.navItem}><a href="#">Contact us</a></li>
              {click ?
                <>
                  <li className={s.navItem}><a href="#">Log in</a></li>
                  <li className={s.navItem}><a href="#">Get Started</a></li>
                </>
                : ''

              }
            </ul>
          </nav>

        </div>

        <div className={s.actionContainer}>
          {
            button ?
              <>
                <a className={s.login} href="#">Log in</a>
                <Button size={'medium'} buttonStyle={'primary'}>Get Started</Button>
              </>
              : menuImage
          }
        </div>

      </div>
    </header>
  )
}