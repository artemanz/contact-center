import { Variants, motion } from "framer-motion";
import logo from "@/assets/svg/Logo.svg";
import decor from "@/assets/images/mobileMenu.webp";
import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Props {
  close: () => void;
  children: ReactNode;
}

const variants: Variants = {
  visible: { y: "0" },
  invisible: { y: "-100vh" },
};

const MobileMenu = ({ close, children }: Props) => {
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
            <Link className="max-w-[50%]" to="/" onClick={close}>
              <img src={logo} alt="Logo" />
            </Link>
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

          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
