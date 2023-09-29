import About from "./layout/About";
import Hero from "./layout/Hero";

import { lazy } from "react";

const Clients = lazy(() => import("./layout/Clients"));
const Directions = lazy(() => import("./layout/Directions"));
const Form = lazy(() => import("./layout/Form"));
const Methods = lazy(() => import("./layout/Methods"));
const PriceList = lazy(() => import("./layout/PriceList"));

interface Props {}

const Main = (props: Props) => {
  return (
    <main>
      <Hero />
      <About />
      <Directions />
      <Methods />
      <PriceList />
      <Clients />
      <Form />
    </main>
  );
};

export default Main;
