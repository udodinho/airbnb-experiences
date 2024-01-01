import React from "react";
import Navbar from "./components/Navbar";
import "./style.css"
import Hero from "./components/Hero";
import Card from "./components/Card";
import datas from "./data"

const App = () => {
    const card = datas.map((data) => {
      return  <Card 
            key={data.id}
            data={data}
        />

    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
                {card}
            </section>
        </div>
    );
}

export default App;
