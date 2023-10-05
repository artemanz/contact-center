import { Dispatch, useEffect, useImperativeHandle, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IMask from "imask/holder";
import { motion } from "framer-motion";
import { buttonArrow } from "@/assets";

interface Props {
  setModal: Dispatch<boolean>;
  setSuccessPopup: Dispatch<boolean>;
}

interface IForm {
  name: string;
  phone: string;
  email: string;
  company: string;
  connectionType: "call_phone" | "call_telegram" | "call_WhatsApp" | "";
}

const ModalForm = ({ setModal, setSuccessPopup }: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<IForm>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      connectionType: "",
    },
  });
  const submit: SubmitHandler<IForm> = (data) => {
    if (data.connectionType === "") data.connectionType = "call_phone";
    const $data = JSON.stringify(data);
    console.log($data);

    reset();
    setModal(false);
    setSuccessPopup(true);
  };
  const phoneRef = useRef<HTMLInputElement>(null);

  const { ref, ...rest } = register("phone", {
    required: true,
    pattern: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
  });

  useEffect(() => {
    if (phoneRef.current) {
      IMask(phoneRef.current, {
        mask: "+{7}(000)000-00-00",
      });
    }
  }, []);

  useImperativeHandle(ref, () => phoneRef.current);

  return (
    <div
      className="fixed inset-0 z-10 grid content-center p-4"
      onClick={() => {
        setModal(false);
      }}
    >
      <div className="fixed inset-0 bg-black opacity-80" />
      <motion.form
        onSubmit={handleSubmit(submit)}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="container relative px-4 py-12 overflow-hidden overflow-y-auto bg-white rounded-2xl md:px-20"
      >
        <h2 className="text-2xl font-bold text-center">Оставить заявку</h2>

        <div className="max-w-lg">
          <div className="flex flex-col gap-5 mt-10">
            <input
              aria-invalid={errors.name ? true : false}
              {...register("name", {
                required: true,
              })}
              className="Input"
              type="text"
              placeholder="имя*"
            />
            <input
              aria-invalid={errors.email ? true : false}
              {...register("email", {
                required: true,
                pattern: /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
              })}
              className="Input"
              type="text"
              placeholder="email*"
            />
            <input
              aria-invalid={errors.phone ? true : false}
              {...rest}
              ref={phoneRef}
              className="Input"
              type="text"
              placeholder="номер телефона*"
            />
            <input
              aria-invalid={errors.company ? true : false}
              {...register("company", { required: true })}
              className="Input"
              type="text"
              placeholder="компания*"
            />
            <select
              aria-invalid={errors.connectionType ? true : false}
              {...register("connectionType", { required: true })}
              className="Select"
            >
              <option value="">Выберите удобный тип связи</option>
              <option value="call_phone">Звонок</option>
              <option value="call_telegram">Звонок Telegram</option>
              <option value="call_WhatsApp">Звонок WhatsApp</option>
            </select>
          </div>
          <div className="flex-col items-center gap-4 lg:flex">
            <p className="mt-8 text-xs lowercase text-neutral-1 md:text-base">
              Нажимая на кнопку, я соглашаюсь с{" "}
              <a className="underline" href="#">
                политикой обработки персональных данных
              </a>
            </p>

            <button className="w-full mt-5 Button--fullfilled xs:text-xl">
              отправить
              <img src={buttonArrow} alt="" />
            </button>
          </div>
        </div>
        <button
          className="absolute w-6 h-6 xs:w-auto xs:h-auto top-4 right-4"
          onClick={() => setModal(false)}
        >
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6437 14.9984L29.4489 3.21194C29.8018 2.85909 30 2.38052 30 1.88151C30 1.3825 29.8018 0.903933 29.4489 0.551081C29.0961 0.19823 28.6175 0 28.1185 0C27.6195 0 27.1409 0.19823 26.7881 0.551081L15.0016 12.3563L3.21513 0.551081C2.86228 0.19823 2.38371 4.43041e-07 1.88471 4.46759e-07C1.3857 4.50477e-07 0.907131 0.19823 0.554279 0.551081C0.201428 0.903933 0.00319835 1.3825 0.00319835 1.88151C0.00319834 2.38052 0.201428 2.85909 0.554279 3.21194L12.3595 14.9984L0.554279 26.7849C0.378647 26.9591 0.239244 27.1663 0.144112 27.3947C0.0489794 27.623 0 27.8679 0 28.1153C0 28.3627 0.0489794 28.6076 0.144112 28.8359C0.239244 29.0643 0.378647 29.2715 0.554279 29.4457C0.728477 29.6214 0.935726 29.7608 1.16407 29.8559C1.39242 29.951 1.63734 30 1.88471 30C2.13208 30 2.377 29.951 2.60534 29.8559C2.83369 29.7608 3.04094 29.6214 3.21513 29.4457L15.0016 17.6405L26.7881 29.4457C26.9623 29.6214 27.1695 29.7608 27.3979 29.8559C27.6262 29.951 27.8711 30 28.1185 30C28.3659 30 28.6108 29.951 28.8391 29.8559C29.0675 29.7608 29.2747 29.6214 29.4489 29.4457C29.6245 29.2715 29.764 29.0643 29.8591 28.8359C29.9542 28.6076 30.0032 28.3627 30.0032 28.1153C30.0032 27.8679 29.9542 27.623 29.8591 27.3947C29.764 27.1663 29.6245 26.9591 29.4489 26.7849L17.6437 14.9984Z"
              fill="black"
            />
          </svg>
        </button>
      </motion.form>
    </div>
  );
};

export default ModalForm;
