import { motion } from "framer-motion";
import { Dispatch } from "react";

interface Props {
  setSuccessPopup: Dispatch<boolean>;
}

const SuccessPopup = ({ setSuccessPopup }: Props) => {
  return (
    <div
      className="fixed inset-0 z-10 grid content-center p-4"
      onClick={() => {
        setSuccessPopup(false);
      }}
    >
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="container relative px-4 py-12 overflow-hidden overflow-y-auto bg-white rounded-2xl md:px-20"
      >
        <div className="relative">
          <div className="flex flex-col items-center">
            <p className="text-4xl">Спасибо за ваше обращение!</p>
            <p className="mt-4 text-xl">
              Наш менеджер свяжется с вами в ближайшее время!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPopup;
