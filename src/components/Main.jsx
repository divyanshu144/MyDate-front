import React from 'react';
import "./Main.css";
import Sidebar from "./Sidebar";
import Swipe from "./Swipe";
//import Deck from "./Deck"

export default function Main() {
    return (
       
        <div className="app">
            <div className="app_body">
                <Sidebar />
                <Swipe />
            </div>
        </div>
    )
}
