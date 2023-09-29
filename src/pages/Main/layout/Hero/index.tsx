import logo from "@/assets/svg/Logo.svg";
import { heroDecor, heroGlobus } from "../../images";
import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";

interface Props {}

const Hero = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <section className="section">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { bounce: false } }}
        className="container mx-4 rounded-2xl shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)] mt-4 min-h-[40rem] overflow-hidden relative pb-8 md:min-h-0 lg:px-8 lg:mx-auto"
      >
        <img
          className="absolute top-0 right-0"
          src={heroDecor}
          alt="Hero image"
        />
        {/* HEADER */}
        <div className="relative z-10 flex items-center justify-between py-7">
          <img className="max-w-[50%] max-h-12" src={logo} alt="Logo" />
          <nav className="hidden lg:flex">
            <ul className="flex gap-7">
              <li>
                <a href="#about">какие задачи мы решаем</a>
              </li>
              <li>
                <a href="#directions">направления</a>
              </li>
              <li>
                <a href="#methods">методы</a>
              </li>
              <li>
                <a href="#priceList">цены</a>
              </li>
            </ul>
          </nav>
          <a href="#form" className="hidden Button--fullfilled lg:flex">
            заказать услуги
            <img src={buttonArrow} alt="@" />
          </a>
          <button
            onClick={() => {
              setMobileMenu(true);
            }}
            className="text-accent-2 lg:hidden"
          >
            <svg
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="2" rx="1" fill="currentColor" />
              <rect y="8" width="30" height="2" rx="1" fill="currentColor" />
              <rect y="16" width="30" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/*  */}

        <div className="relative flex flex-col items-start md:flex-row-reverse md:items-center md:justify-between">
          <img
            className="xs:max-w-[18rem] md:max-w-[50%]"
            src={heroGlobus}
            alt="Hero image"
          />
          <div className="max-w-md mt-4">
            <h1 className="Heading">
              Контакт центр <br /> для людей
            </h1>
            <p className="mt-5">
              это надежный катализатор для разрешения множества ситуаций, будь
              то вопросы, заказы, жалобы или запросы на техническую поддержку,
              обеспечивая клиентам качественное обслуживание и удовлетворение их
              потребностей.
            </p>
            <a href="#form" className="mt-10 Button--fullfilled w-fit">
              заказать обратный звонок
              <img src={buttonArrow} alt="@" />
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenu && (
          <MobileMenu
            close={() => {
              setMobileMenu(false);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
