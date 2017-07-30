import React from 'react';
import {SuggestionBox} from './suggestionBox';

const SearchBar = () => (
    <div className="wrapper-inner hidden-xs hidden-sm">
                    <div className="input-group">
                      <input type="text" id="searchInput" className="form-control" placeholder="Cafe in Montego Bay" />
                      <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                      </span> </div>
                      <SuggestionBox />
    </div>
);

export {SearchBar};