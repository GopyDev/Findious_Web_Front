import React from 'react';
import {Weather} from '../inc/weather';
import {OverlayBox} from '../inc/overlayBox';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                    <div className="col-md-6 col-xs-5">
                        <a href="index.html"><img className="logo" src="images/logo.png" alt="Findious" /></a>
                    </div>
                <div className="col-xs-7 col-md-6 text-right">
                    <button className="plus-btn" id="menu-trigger"><i className="fa fa-plus"></i></button>
                    <OverlayBox />
                    <Weather />
                </div>
            </div>
        </div>    
  </header>
);

export {Header};