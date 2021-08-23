import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} :)</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "samgyeopsal",
    image:
      "https://i.pinimg.com/originals/6c/84/40/6c844009067c1f1301a847f15ee1eaa6.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "jajangmyeon",
    image:
      "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2017/09/Vegan-Jjajangmyeon-11.jpg?fit=1300%2C730&ssl=1",
    rating: 4.7,
  },
];

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      key={dish.key}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
