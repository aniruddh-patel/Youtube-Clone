import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
          <div className="leftpart">
              <button className="menulogo"></button>
              <button className="logo"></button>
          </div>

          <div className="midpart">
              <div className="searchbar">
                  <input type="text" placeholder="    Search" /><button type="submit"></button>
              </div>
              <button className="mic"></button>
          </div>
          

          <div className="rightpart">
            <button className="createbutton"></button>
            <button className="notificationbutton"></button>
            <button className="profilebutton"></button>
          </div>
    </div>
  )
}

export default Header;