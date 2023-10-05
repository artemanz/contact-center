import About from "./layout/About";
import Hero from "./layout/Hero";

import { lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SuccessPopup from "./SuccessPopup";
import ModalForm from "./ModalForm";

const Clients = lazy(() => import("./layout/Clients"));
const Directions = lazy(() => import("./layout/Directions"));
const Form = lazy(() => import("./layout/Form"));
const Methods = lazy(() => import("./layout/Methods"));
const PriceList = lazy(() => import("./layout/PriceList"));

interface Props {}

const Main = (props: Props) => {
  const [form, setForm] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  useEffect(() => {
    if (form || successPopup) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [form, successPopup]);

  return (
    <main>
      <Hero setForm={setForm} />
      <About />
      <Directions setForm={setForm} />
      <Methods />
      <PriceList />
      <Clients />
      <Form successPopup={successPopup} setSuccessPopup={setSuccessPopup} />

      <AnimatePresence>
        {form && (
          <ModalForm setModal={setForm} setSuccessPopup={setSuccessPopup} />
        )}
        {successPopup && <SuccessPopup setSuccessPopup={setSuccessPopup} />}
      </AnimatePresence>
    </main>
  );
};

export default Main;
