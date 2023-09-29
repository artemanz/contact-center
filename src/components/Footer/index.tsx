import logo from "@/assets/svg/Logo.svg";
import { Tg, Vk } from "./svg";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="mt-24 mb-12">
      <div className="container">
        <div className="flex items-start justify-between">
          <a className="max-w-[40%]" href="/">
            <img className="" src={logo} alt="Logo" />
          </a>
          <div className="flex flex-col items-end gap-5 md:flex-row md:gap-8">
            <div className="flex gap-4">
              <a href="#">
                <Vk />
              </a>
              <a href="#">
                <Tg />
              </a>
            </div>
            <div className="flex flex-col text-right text-accent-1">
              <a href="mailto:info@servizoria.ru">info@servizoria.ru</a>
              <a href="mailto:sales@servizoria.ru">sales@servizoria.ru</a>
              <a href="tel:+74952680244">+7 (495) 268 02 44</a>
            </div>
          </div>
        </div>

        <hr className="my-5 border border-neutral-200" />
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <a className="underline" href="#">
            политика конфиденциальности
          </a>
          <a className="underline" href="#">
            пользовательское соглашение
          </a>
          <p className="text-center text-neutral-400">
            контакт центр © 2023 все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
