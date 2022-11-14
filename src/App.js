import React from "react";
import "./App.css";
import Chart from "./Components/Elements_Chart";
import Form from "./Components/Form";
import About from "./Components/Aboutpage";
import ReadMore from "./Components/ReadMorepage";
import { pokemonLogo } from "./Components/Types";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{pokemonLogo}</header>
        <div className="Content">
          <Chart></Chart>
          <div className="Form">
            <Form></Form>
          </div>
        </div>
        <section className="About">
          <About></About> <br></br>
        </section>
        <div className="ReadMore">
          {" "}
          <ReadMore></ReadMore>{" "}
        </div>
      </div>
    );
  }
}

export default App;
