import { useState } from "react";
import CoreConcepts from "./components/Core-Concept/index.jsx";
import Header from "./components/Header/index.jsx";
// import ComponentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  // const [pizza, setPizza] = useState({
  //   name: "margreta",
  //   toppings: ["mushrom"],
  // });

  // const handleClick = (_) => {
  //   // const newPizza = {...pizza}
  //   // newPizza.toppings.push("cheese");

  //   setPizza({
  //     ...pizza,
  //     toppings: [...pizza.toppings, "cheese"],
  //   });
  //   console.log(pizza);
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>this</button> */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concpets</h2>
          <ul>
            {CORE_CONCEPTS.map((core_concept) => {
              return <CoreConcepts {...core_concept} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
