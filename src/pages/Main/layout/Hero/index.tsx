import logo from "@/assets/svg/Logo.svg";
import { heroDecor, heroGlobus } from "../../images";
import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { Dispatch, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";
import { Link } from "react-router-dom";

interface Props {
  setForm: Dispatch<boolean>;
}

const Hero = ({ setForm }: Props) => {
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
                <a
                  className="transition-colors hover:text-accent-2"
                  href="#about"
                >
                  какие задачи мы решаем
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent-2"
                  href="#directions"
                >
                  направления
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent-2"
                  href="#methods"
                >
                  методы
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent-2"
                  href="#priceList"
                >
                  цены
                </a>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="transition-colors hover:text-accent-2"
                >
                  блог
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              setForm(true);
            }}
            className="hidden Button--fullfilled lg:flex"
          >
            заказать услуги
            <img src={buttonArrow} alt="@" />
          </button>
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
            <button
              onClick={() => {
                setForm(true);
              }}
              className="mt-10 Button--fullfilled w-fit"
            >
              заказать обратный звонок
              <img src={buttonArrow} alt="@" />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenu && (
          <MobileMenu
            close={() => {
              setMobileMenu(false);
            }}
          >
            <nav className="text-center">
              <ul className="flex flex-col items-center gap-10 text-2xl">
                <li>
                  <a onClick={() => setMobileMenu(false)} href="#about">
                    какие задачи мы решаем
                  </a>
                </li>
                <li>
                  <a onClick={() => setMobileMenu(false)} href="#directions">
                    направления
                  </a>
                </li>
                <li>
                  <a onClick={() => setMobileMenu(false)} href="#methods">
                    методы
                  </a>
                </li>
                <li>
                  <a onClick={() => setMobileMenu(false)} href="#priceList">
                    цены
                  </a>
                </li>
                <li>
                  <Link onClick={() => setMobileMenu(false)} to="/blog">
                    блог
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className="self-center Button--fullfilled w-[15rem] xs:w-[20rem]"
              onClick={() => {
                setMobileMenu(false);
                setForm(true);
              }}
            >
              заказать услуги <img src={buttonArrow} alt="@" />
            </button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
