import Dog from "../public/dog.svg";

export default function Home() {
  return (
    <>
      <div className="container">
        <Dog />
        <p className="title">PetFeeder</p>
        <div className="amountContainer">
          <p>Amount</p>
          <div className="number">
            <span className="bigNumber">64</span>
            <span className="smallNumber">/100</span>
          </div>
        </div>
        <button className="button">Feed Now!</button>
      </div>
    </>
  );
}
