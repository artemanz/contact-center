import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { AnimatePresence, motion } from "framer-motion";
import IMask from "imask";
import {
  Dispatch,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  successPopup: boolean;
  setSuccessPopup: Dispatch<boolean>;
}

interface IForm {
  name: string;
  phone: string;
  email: string;
  company: string;
  text: string;
}

const Form = ({ successPopup, setSuccessPopup }: Props) => {
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
      text: "",
    },
  });
  const submit: SubmitHandler<IForm> = async (data) => {
    const $data = JSON.stringify(data);

    fetch("/api/mail.php", {
      body: $data,
      method: "POST"
    })

    reset();
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
    <section className="section" id="form">
      <div className="container">
        <form
          onSubmit={handleSubmit(submit)}
          className="p-5 bg-neutral-100 rounded-2xl lg:flex lg:gap-6 lg:p-8 lg:px-12"
        >
          <div className="basis-[50%] shrink-0">
            <h2 className="Heading">
              Остались вопросы? <br />
              Не нашли то, что искали?
            </h2>
            <p className="mt-4 lowercase">
              СВЯЖИТЕСЬ С НАМИ И МЫ ПРЕДЛОЖИМ ВАМ РЕШЕНИЕ
            </p>
            <div className="flex flex-col mt-10">
              <a href="mailto:info@servizoria.ru">info@servizoria.ru</a>
              <a href="mailto:sales@servizoria.ru">sales@servizoria.ru</a>
              <a href="tel:+74952680244">+7 (495) 268 02 44</a>
            </div>
          </div>

          <div>
            <div className="flex flex-col grid-cols-2 gap-5 mt-10 lg:grid lg:mt-0">
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
              <textarea
                aria-invalid={errors.text ? true : false}
                {...register("text")}
                onInput={(e) => {
                  const textarea = e.target as HTMLTextAreaElement;
                  textarea.style.height = "auto";
                  textarea.style.height = `${textarea.scrollHeight}px`;
                }}
                className="overflow-hidden resize-none Input lg:col-span-2"
                placeholder="напишите ваш вопрос"
                rows={1}
              />
            </div>
            <div className="items-center gap-12 lg:flex">
              <p className="mt-8 text-xs lowercase text-neutral-1 md:text-base">
                Нажимая на кнопку, я соглашаюсь с{" "}
                <a className="underline" href="#">
                  политикой обработки персональных данных
                </a>
              </p>

              <button className="w-full mt-5 Button--fullfilled max-w-[20rem]">
                отправить
                <img src={buttonArrow} alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
