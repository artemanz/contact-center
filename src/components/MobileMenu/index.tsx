import { Variants, motion } from "framer-motion";
import logo from "@/assets/svg/logo.svg";
import decor from "@/assets/images/mobileMenu.webp";
import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { Dispatch, SetStateAction } from "react";

interface Props {
  close: () => void;
}

const variants: Variants = {
  visible: { y: "0" },
  invisible: { y: "-100vh" },
};

const MobileMenu = ({ close }: Props) => {
  return (
    <motion.div
      transition={{ bounce: false }}
      variants={variants}
      initial="invisible"
      animate="visible"
      exit="invisible"
      className="fixed inset-0 z-10 bg-white lg:hidden"
    >
      <div className="container relative h-full">
        <img
          className="absolute top-0 right-0 object-cover max-w-none"
          src={decor}
          alt="@"
        />
        <div className="relative flex flex-col justify-between h-full pb-8 ">
          <div className="relative flex justify-between py-10">
            <a className="max-w-[50%]" href="#" onClick={close}>
              <img src={logo} alt="Logo" />
            </a>
            <button onClick={close}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.41406"
                  width="28"
                  height="2"
                  rx="1"
                  transform="rotate(45 1.41406 0)"
                  fill="#7D3089"
                />
                <rect
                  x="0.414062"
                  y="20"
                  width="28"
                  height="2"
                  rx="1"
                  transform="rotate(-45 0.414062 20)"
                  fill="#7D3089"
                />
              </svg>
            </button>
          </div>

          <nav className="">
            <ul className="flex flex-col items-center gap-10 text-2xl">
              <li>
                <a onClick={close} href="#about">
                  какие задачи мы решаем
                </a>
              </li>
              <li>
                <a onClick={close} href="#directions">
                  направления
                </a>
              </li>
              <li>
                <a onClick={close} href="#methods">
                  методы
                </a>
              </li>
              <li>
                <a onClick={close} href="#priceList">
                  цены
                </a>
              </li>
            </ul>
          </nav>

          <a
            className="self-center Button--fullfilled w-[15rem] xs:w-[20rem]"
            href="#form"
            onClick={close}
          >
            заказать услуги <img src={buttonArrow} alt="@" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
