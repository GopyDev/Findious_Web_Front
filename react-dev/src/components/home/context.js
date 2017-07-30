import React from 'react';
import { Link } from 'react-router-dom';
import {SuggestionBox} from '../inc/suggestionBox';

const Context = () => (
    <div className="content-wrapper">
        <div className="container text-center">
            <div className="banner-text">
                <h1>Easy, Elegant local Search</h1>
                <h2><b>Findious</b> discovering local busineses and experiences.</h2>
            </div>
            <div className="input-wrapper">
                <div className="wrapper-inner">
                    <div className="input-group">
                        <input type="text" id="searchInput" className="form-control" placeholder="Coffee shop in Negril" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </span> 
                    </div>
                </div>
                <SuggestionBox />
            </div>
        <p className="big-text">findious</p>
        </div>
    </div>
);

export {Context};