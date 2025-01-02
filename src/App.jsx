/**
 * @copyright 2024 Senoussi Al-Nadjib
 * @license Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";

const App = () => {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Project />
    </main>
    </>
  )

}

export default App;