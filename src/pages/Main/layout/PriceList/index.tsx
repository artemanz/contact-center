interface Props {}

const PriceList = (props: Props) => {
  const priceList = [
    {
      id: 1,
      title: "ВНУТРЕННЯЯ ОЦЕНКА ЗВОНКОВ",
      info: (
        <>
          длительность
          <br />
          от 2 до 8 мин
        </>
      ),
      price: (
        <>
          от <span>45</span> ₽
        </>
      ),
    },
    {
      id: 2,
      title: "ВНУТРЕННЯЯ ОЦЕНКА ПИСЬМЕННЫХ ОБРАЩЕНИЙ",
      price: (
        <>
          от <span>35</span> ₽
        </>
      ),
    },
    {
      id: 3,
      title: "ВНЕШНЯЯ ОЦЕНКА ЗВОНКОВ",
      info: <>тайный покупатель, сценарии не более 20 мин</>,
      price: (
        <>
          от <span>290</span> ₽
        </>
      ),
    },
    {
      id: 4,
      title: "ВНЕШНЯЯ ОЦЕНКА ПИСЬМЕННОЙ КОММУНИКАЦИИ",

      price: (
        <>
          от <span>80</span> ₽
        </>
      ),
    },
    {
      id: 5,
      title: "ОБРАБОТКА ОТЗЫВОВ, ПОСТУПАЮЩИХ ИЗ РАЗНЫХ КАНАЛОВ",
      info: (
        <>
          e-mail, социальные сети и мессенджеры, внешние площадки, AppStore,
          Google Play
        </>
      ),
      price: (
        <>
          от <span>35</span> ₽
        </>
      ),
    },
    {
      id: 6,
      title: "МОДЕРАЦИЯ ОТЗЫВОВ",
      price: (
        <>
          от <span>25</span> ₽
        </>
      ),
    },
    {
      id: 7,
      title: "СТОИМОСТЬ CATI ОПРОСОВ",
      price: (
        <>
          от <span>190</span> ₽
        </>
      ),
    },
    {
      id: 8,
      title: "СТОИМОСТЬ РАБОТЫ ОПЕРАТОРА ПОД ПРОЕКТ",
      price: (
        <>
          от <span>9</span> ₽ / мин
        </>
      ),
    },
  ];

  return (
    <section className="my-24 section" id="priceList">
      <div className="container">
        <h2 className="Heading">стоимость услуг</h2>
        <ul className="mt-10">
          {priceList.map((price) => (
            <li
              className="py-5 lowercase border-b border-neutral-300 first:border-t md:flex md:gap-5 md:justify-between md:px-5"
              key={price.id}
            >
              <p className="max-w-sm text-xl lowercase md:text-2xl text-accent-1 grow">
                {price.title}
              </p>
              <div className="flex items-end justify-between flex-none gap-8 mt-5 md:mt-0 basis-1/2 lg:basis-1/3">
                <p className="text-xs leading-none md:text-base text-neutral-1 max-w-[10.5rem]">
                  {price.info}
                </p>
                <p className="[&_span]:text-4xl font-semibold text-xl shrink-0">
                  {price.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PriceList;
