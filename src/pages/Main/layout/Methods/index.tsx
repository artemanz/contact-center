interface Props {}

const Methods = (props: Props) => {
  const methods = [
    {
      id: 1,
      title: "разработка инструментария",
      list: [
        "Изучение стандартов, KPI's и особенности бизнеса",
        "Разработка анкеты",
        "Подготовка обучающего материала",
      ],
    },
    {
      id: 2,
      title: "настройка проекта",
      list: [
        "Интеграция анкетных форм с системой автозвонков Настройка последовательности звонков",
        "Ограничении временным интервалом",
        "Тестирование анкеты",
      ],
    },
    {
      id: 3,
      title: "подготовка операторов",
      list: [
        "Определение целей и задач проектов",
        "Ролевое проигрывание анкеты",
        "Сдача тестовых звонков",
        "Семпл с реальными клиентами",
        "Получение обратной связи от клиента",
      ],
    },
    {
      id: 4,
      title: (
        <>
          контроль операторов <br /> в период мониторинга
        </>
      ),
      list: [
        "Предоставление обратной связи по звонкам",
        "Коучинг операторов",
        "Коллективный разбор нестандартных ситуаций",
        "Контроль соблюдения квоты",
        "Обмен опытом операторов",
      ],
    },
    {
      id: 5,
      title: "Закрытие",
      list: [
        "Валидация анкет до 100%",
        "Максимальное дополнение комментариев Предоставление всех аудио записей",
        "Отчет по каждому переданному контакту",
        "Передача готового к аналитике массива",
      ],
    },
  ];

  return (
    <section className="my-24 section" id="methods">
      <div className="container">
        <h2 className="origin-top-left scale-90 Heading whitespace-nowrap xs:scale-100">
          Методика запуска & <br />
          контроль качества
        </h2>

        <ul className="mt-10">
          {methods.map((_) => (
            <li
              className="py-5 lowercase border-b border-neutral-300 first:border-t md:flex md:gap-5"
              key={_.id}
            >
              <div className="flex items-start gap-8 text-accent-1 md:grow">
                <span className="text-[4rem] leading-none lg:text-[5rem]">
                  {_.id}
                </span>
                <p className="text-lg md:text-xl lg:text-3xl">{_.title}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-5 text-neutral-1 md:mt-0 md:basis-1/2 md:grow-0 md:shrink-0">
                {_.list.map((_) => (
                  <li className="ListItem" key={_}>
                    {_}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Methods;
