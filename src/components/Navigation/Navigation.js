import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <ul className="main-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Categories
          <ul className="sub-navigation">
            <li>
              <Link to="/cakes">Cakes</Link>
            </li>
            <li>
              <Link to="/cupcakes">Cupcakes</Link>
            </li>
            <li>
              <Link to="/pastry">Pastry</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Recipies">Recipies</Link>
        </li>
      </ul>
    </div>
  );
}
