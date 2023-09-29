import { useEffect, useState } from "react";
import { direction1, direction2, direction3, direction4 } from "../../images";
import buttonArrow from "@/assets/svg/buttonArrow.svg";
import { motion } from "framer-motion";

interface Props {}

const Directions = (props: Props) => {
  const popupContents = [
    {
      id: 1,
      title: "Исходящая линия",
      img: direction1,
      content: (
        <ul className="flex flex-col gap-8">
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Тайный звонящий
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Оценка выполнения стандартов через звонок на горячую линию.
              Заполнение чек-листа
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Информирование
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Оперативное оповещение Ваших клиентов/сотрудников об
              акциях/изменениях
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Генерация лидов
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Сбор контактных данных потенциальных клиентов, заинтересованных в
              приобретении ваших продуктов/услуг
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">ivr</p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Многоуровневый настраиваемый IVR
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Маркетинговые исследования
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Проведем опрос для интересующей вас целевой аудитории. Исследуем
              долю рынка, сервис и продукты ваших конкурентов
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 1,
      title: "входящая линия",
      img: direction2,
      content: (
        <ul className="flex flex-col gap-8">
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Входящая линиия
            </p>
            <ul className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              <li className="ListItem">
                Многоканальная телефонная связь для входящих звонков с целью
                консультации клиентов.
              </li>
              <li className="ListItem">
                Организация работы интернет магазина: согласование
                доставки/работа с заказами (прием и подтверждение)
              </li>
              <li className="ListItem">
                Техническая поддержка письменных обращений
              </li>
            </ul>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Решение задач
            </p>
            <ul className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              <li className="ListItem">
                Охват необходимого объема респондентов в любой точке страны
              </li>
              <li className="ListItem">Предоставление и сбор обратной связи</li>
              <li className="ListItem">Консультации и помощь клиентам</li>
              <li className="ListItem">
                Увеличение NPS благодаря отличному сервису и поддержке
                специалиста контакт-центра
              </li>
              <li className="ListItem">
                Многоканальная телефонная связь для входящих звонков
              </li>
            </ul>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Выполнение KPI
            </p>
            <ul className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              <li className="ListItem">
                Мы стабильно удерживаем качественные показатели запрашиваемые
                заказчиком
              </li>
              <li className="ListItem">SL не менее 80%</li>
              <li className="ListItem">
                Количество пропущенных звонков не более 3%
              </li>
              <li className="ListItem">
                Среднее время разговора не более 180 сек
              </li>
              <li className="ListItem">
                Оценка оператора клиентом не менее 4,85 баллов из 5
              </li>
              <li className="ListItem">Скрытая покупка не менее 98%</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "ПОДДЕРЖКА В ЧАТАХ",
      img: direction3,
      content: (
        <ul className="flex flex-col gap-8">
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Оперативное сопровождение клиентов
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Решение любых вопросов клиента в одном окне
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Омникальность
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Программа Flomni собирает запросы из всех мессенджеров и
              популярных соц сетей
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Круглосуточная поддержка
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Специалисты работают 24/7
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Чат-бот
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Позволяет снизить нагрузку на линии, быстро решить вопрос клиента
              без оператора
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Многоканальность
            </p>
            <p className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Один оператор может обрабатывать до 4х клиентских запросов
              одновременно и до 11 чатов в час
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "МНОГОУРОВНЕВЫЙ ivr",
      img: direction4,
      content: (
        <ul className="flex flex-col gap-8">
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              IVR опрос
            </p>
            <p className="pl-5 mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              Как правило это короткие вопросы, которые зачитываются роботом,
              ответы клиент дает при помощи клавиатуры на телефоне, выбрав
              нужную цифру
            </p>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Автоинформирование
            </p>
            <ul className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              <li className="ListItem">
                Использование IVR, означает что после ответа клиента, будет
                проигран заранее записанный ролик.
              </li>
              <li className="ListItem">
                Звонки в режиме real-time, с использованием заранее
                подготовленного сценария-скрипта, осуществляет оператор.
              </li>
            </ul>
          </li>
          <li className="gap-8 xl:flex xl:items-start">
            <p className="md:text-xl basis-[25%] shrink-0 leading-none">
              Обработка входящих вызовов
            </p>
            <ul className="mt-2 text-xs text-neutral-400 md:text-base xl:mt-0">
              <li className="ListItem">
                Полная обработка вызовов с использованием голосовой навигации.
              </li>
              <li className="ListItem">
                Обработка с привлечением оператора контакт центра, который в
                режиме реального времени оперативно решит вопрос клиента.
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
  ];
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(popupContents[0]);

  useEffect(() => {
    if (popup) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
  }, [popup]);

  return (
    <section className="my-24 section" id="directions">
      <div className="container">
        <h2 className="Heading">
          Направления <br /> деятельности
        </h2>
        <ul className="flex flex-wrap gap-5 mt-10">
          {[
            { id: 0, img: direction1, text: "Исходящая линия" },
            { id: 1, img: direction2, text: "входящая линия" },
            { id: 2, img: direction3, text: "Поддержка в чатах" },
            { id: 3, img: direction4, text: "многоуровневый ivr" },
          ].map((_) => (
            <li
              key={_.id}
              className="rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] flex flex-col items-center px-2 py-4 cursor-pointer md:flex-grow md:px-5 md:py-8 lg:max-w-[55%]"
              onClick={() => {
                setPopupContent(popupContents[_.id]);
                setPopup(true);
              }}
            >
              <img className="md:h-[22rem]" src={_.img} alt="Image" />
              <div className="flex items-center justify-between w-full mt-5 text-2xl lowercase md:text-4xl">
                {_.text}
                <svg
                  className="w-4 h-4 mt-1 md:w-6 md:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M0.514708 3.31051C0.514708 3.9949 0.786582 4.65126 1.27052 5.1352C1.75446 5.61914 2.41082 5.89101 3.09521 5.89101L22.6812 5.89101L1.26305 27.2833C0.777136 27.7693 0.50415 28.4283 0.50415 29.1155C0.50415 29.8027 0.777136 30.4617 1.26305 30.9476C1.74897 31.4336 2.40802 31.7065 3.09521 31.7065C3.7824 31.7065 4.44144 31.4336 4.92736 30.9476L26.3197 9.52951L26.3197 29.1155C26.3197 29.7999 26.5916 30.4562 27.0755 30.9402C27.5594 31.4241 28.2158 31.696 28.9002 31.696C29.5846 31.696 30.2409 31.4241 30.7249 30.9402C31.2088 30.4562 31.4807 29.7999 31.4807 29.1155L31.4807 3.31051C31.4766 2.9733 31.4065 2.64016 31.2742 2.32992C31.0124 1.69938 30.5113 1.19831 29.8808 0.936452C29.5705 0.804225 29.2374 0.734088 28.9002 0.730012L3.09521 0.730013C2.41082 0.730013 1.75446 1.00188 1.27052 1.48582C0.786581 1.96976 0.514708 2.62612 0.514708 3.31051Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 z-10 grid content-center p-4">
          <div
            className="fixed inset-0 bg-black opacity-80"
            onClick={() => {
              setPopup(false);
            }}
          ></div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="container relative w-full p-4 overflow-hidden overflow-y-auto lowercase bg-white rounded-2xl md:p-10"
          >
            <img
              className={`absolute left-0 hidden lg:block w-[38rem] -translate-x-1/2 bottom-0 ${
                popupContent.id !== 3 ? "-scale-x-100" : ""
              }`}
              src={popupContent.img}
              alt="Image"
            />
            <div className="relative lg:pl-[32%]">
              <div className="flex items-center justify-between">
                <p className="Heading">{popupContent.title}</p>
                <button onClick={() => setPopup(false)}>
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
              </div>

              <div className="mt-10">{popupContent.content}</div>

              <a
                href="#form"
                className="mt-10 Button--fullfilled w-fit"
                onClick={() => setPopup(false)}
              >
                Заказать услугу <img src={buttonArrow} alt="@" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Directions;
