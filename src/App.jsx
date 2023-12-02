import { useState } from "react";
import CoreConcepts from "./Core-Concept";
import Header from "./Header";
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
            <CoreConcepts
              {...CORE_CONCEPTS[0]}
              
            />
            <CoreConcepts
              title="components"
              description="The Core UI Building Block"
              {...CORE_CONCEPTS[1]}

              
            />
            <CoreConcepts
              title="components"
              description="The Core UI Building Block"
              {...CORE_CONCEPTS[2]}

              
            />
            <CoreConcepts
              title="components"
              description="The Core UI Building Block"
              {...CORE_CONCEPTS[3]}

              
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
