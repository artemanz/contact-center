import { logos } from "../../images";

interface Props {}

const Clients = (props: Props) => {
  return (
    <section className="my-24 section">
      <div className="container">
        <h2 className="Heading">наши клиенты</h2>
      </div>
      <img
        className="mt-24 origin-top-left max-w-none animate-slide"
        src={logos}
        alt=""
      />
    </section>
  );
};

export default Clients;
