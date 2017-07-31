import React from 'react';
import { Link } from 'react-router-dom'

const SuggestionBox = (props) => (
     <div className="suggestion-box">
        <div className="search">
            <h1 className="hidden">Heading for SEO</h1>
            <h2 className="hidden">Heading for SEO</h2>
            <h3 className="hidden">Heading for SEO</h3>
            <h4>Search suggestions</h4>
            <ul>
                <li><Link to={`${process.env.PUBLIC_URL}/landing`}>Cafe</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/result`}>Result</Link></li>
            </ul>
        </div>
        <div className="business">
            <h4>Business suggestions</h4>
                <ul>
                    <li><Link to={`${process.env.PUBLIC_URL}/landing`}>K's Cafe</Link></li>
                    <li><a href="">Bookwiz Bookstore & Cafe</a></li>
                    <li><a href="">Sinclair Computer Cafe, Electronics and Accessories</a></li>
                    <li><a href="">Natural Gloves Tour & Internet Cafe</a></li>
                    <li><a href="">Rituals Coffe House </a></li>
                </ul>
        </div>
    </div>
);

export {SuggestionBox};