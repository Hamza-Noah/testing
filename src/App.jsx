import { useState } from "react";
import CoreConcepts from "./components/Core-Concept/index.jsx";
import Header from "./components/Header/index.jsx";
import TabButton from "./components/TabButton";
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

  const [selecteTopic, setSelecteTopic] = useState("Please select a topic");

  function handleClick(selectedButton) {
    setSelecteTopic(selectedButton);  
    console.log(selectedButton);
  }

  return (
    <div>
      {/* <button onClick={handleClick}>this</button> */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concpets</h2>
          <ul>
            {CORE_CONCEPTS.map((core_concept) => {
              return (
                <CoreConcepts key={core_concept.title} {...core_concept} />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              onSelect={(_) => {
                handleClick("Components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={(_) => {
                handleClick("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={(_) => {
                handleClick("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={(_) => {
                handleClick("State");
              }}
            >
              State
            </TabButton>
          </menu>
          <p>{selecteTopic}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
