import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

    const Header = (props) =>{
       return <header className={s.header}>
           <img src='https://rubberdam.club/wp-content/uploads/2016/03/User-Icon-01.png'/>

       <div className={s.loginBlock}>
           { props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink> }
       </div>

       </header>
    }

    export default Header;