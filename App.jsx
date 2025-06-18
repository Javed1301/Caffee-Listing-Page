import { useState,useEffect, use } from 'react'
import Card from './components/Card'
import './App.css'
import image from './assets/bg-cafe.jpg'
import curlyimg from './assets/vector.svg'


function App() {
  const [filteredCoffee, setFilteredCoffee] = useState([]);
  const [cofeeData, setCofeeData] = useState([]);
  const [productTag,setProductTag] = useState("allProduct");

  useEffect(() => {
          fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        )
        .then((response) => response.json())
        .then((data) => {
          // Use the data here
          // console.log(data);
          setFilteredCoffee(data);
          setCofeeData(data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error fetching data:", error);
        });
  }, []);

  useEffect(() => {
  if (productTag === "allProduct") {
    setFilteredCoffee(cofeeData);
  } else if (productTag === "available") {
    setFilteredCoffee(cofeeData.filter(item => item.available === true));
  }
}, [productTag, cofeeData]);  // runs when either tag or data changes


  return (
    <div  className="App">
      <div className="header">
        <img src={image} alt="cafeImage" />
      </div>
      <div className="container">
        <img src={curlyimg} alt="" className='curly'/>
        <div className='main'>
        <div className='text'>
          <h2>Our Collection</h2>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className='tags'>
          <button onClick={() => setProductTag("allProduct")}
            className={productTag === "allProduct" ? "active" : ""}
            >
            All Products
          </button>
          <button onClick={() => setProductTag("available")}
            className={productTag === "available" ? "active" : ""}
            >
            Available Now
          </button>
        </div>
        </div>
        
        <div className='card-container'>
          {
            filteredCoffee.map(cofee =>(
              // console.log(cofee);
              <Card
              key={cofee.id}
              availibility={cofee.available}
              name={cofee.name}
              price={cofee.price}
              rating={cofee.rating}
              votes={cofee.votes}
              imgSrc={cofee.image}
              popular ={cofee.popular}
              />
            ))
          }
        </div>
        </div>
      </div>

    </div>
  )
}

export default App
