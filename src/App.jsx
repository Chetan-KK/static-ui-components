import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar4";
import Hero from "./components/hero/Hero";
import DoubleColumnHero from "./components/hero/DoubleColumnHero";
import LargeContent from "./components/centerContent/CenterContent1";
import SmallContent from "./components/centerContent/CenterContent2";
import IconContent from "./components/centerContent/CenterContent3";
import ComponentsWrapper from "./components/ComponentsWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <main className="bg-white dark:bg-black dark:text-white text-black">
      <ComponentsWrapper />
      {/* <Navbar />
      <Hero />
      <DoubleColumnHero />
      <LargeContent />
      <SmallContent />
      <IconContent /> */}
    </main>
  );
}

export default App;
