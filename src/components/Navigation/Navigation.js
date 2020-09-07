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
      </ul>
    </div>
  );
}
