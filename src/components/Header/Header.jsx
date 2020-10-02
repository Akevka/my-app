import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

    const Header = (props) =>{
       return <header className={s.header}>
           <div className={s.soc}><h1 className={s.h11}>SociaN</h1><h1 className={s.h12}>Network</h1></div>
           <img src='https://rubberdam.club/wp-content/uploads/2016/03/User-Icon-01.png'/>

       <div className={s.loginBlock}>
           { props.isAuth
               ? <div className={s.name}>{props.login} - <button class="btn btn-outline-warning" type="submit" value="Submit" onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
       </div>

       </header>
    }

    export default Header;