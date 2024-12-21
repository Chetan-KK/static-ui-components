import { Route, Routes } from "react-router-dom";
import "./App.css";
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
