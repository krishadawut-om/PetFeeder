import Dog from "../public/dog.svg";
import axios from 'axios';
import { Fragment, useState, useEffect } from 'react'


export default function Home(services) {
  const [food, setFood] = useState(0)
  const [render, setRender] = useState(false)
  const initialFood = services.services
  console.log(initialFood)


  const getPercentage = async () => {
    // Update every 5 seconds
    const interval = setInterval(async function() {
      try {
        const response = await axios.get('http://localhost:8080/foodLeft')
        setFood(response.data)
        setRender(true)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }, 5000);
    interval
  }
  

  const updatePercentage = async () => {
    // Tell servo to feed the doggo
    try {
      const response = await axios.get('http://localhost:8080/updateFood')
      setFood(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      <div className="container">
        <Dog />
        <p className="title">PetFeeder</p>
        <div className="amountContainer">
          <p>Amount</p>
          <div className="number">
            <span className="bigNumber">{render ? food.percent : initialFood.percent}</span>
            <span className="smallNumber">/100</span>
          </div>
        </div>
        <div style={{width: "400px",display: "flex", justifyContent: "space-between"}}>
        <button className="button" onClick={getPercentage}>Update</button>
        <button className="button" onClick={updatePercentage}>Feed Now!</button>
        </div>
      </div>
    </Fragment>
  );
}

Home.getInitialProps = async (ctx) => {
  let services = null;
  try {
    const response = await axios.get('http://localhost:8080/foodLeft')
    services = response.data
  } catch (err) {
    console.log(err)
  }
  return {services}
}
