import { ReactNode, useEffect } from "react";
import c from "./style.module.scss";

interface Props {
  children: ReactNode;
  setModal: Function;
  modal: boolean;
}

const Modal = ({ children, setModal, modal }: Props) => {
  return (
    <div className={c.modal} onClick={() => setModal(false)}>
      <div className={c.container}>
        <div className={c.backdrop} />
        <div className={c.modalWrapper} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
