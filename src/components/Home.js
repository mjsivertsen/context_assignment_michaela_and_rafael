import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Image, Card } from "semantic-ui-react";

const Home = () => {
const [catImages, setCatImages] = useState([])

const getCatImages = async () => {
  try{
    let kitties = []
  for (let a = 0; a < 5; a++) {
    let res = await axios.get("https://api.thecatapi.com/v1/images/search")
    kitties.push(res.data[0].url)
  }
  console.log(catImages)
  setCatImages(kitties)
  console.log(kitties)
  console.log(catImages)
}
  catch(err) {
    alert(err)
  }
}

useEffect(() => {
  getCatImages()
}, []);

const catsReducer = (state, action) => {
switch (action.type) {
  case "ADD_CAT":
    return [...state, action.cat];
    case "DELETE_CAT":
      return state.filter((cat) => cat.id != action.id);
      case "SORT_CATS":
        return [...state].sort((a, b) => b.age - a.age);
      default:
        return state;
  }
};

const [cats, dispatch] = useReducer(catsReducer, [
  { id: 1, name: "Tony", age: 3},
  { id: 2, name: "Persephone", age: .5},
  { id: 3, name: "Pelusa", age: 7},
  { id: 4, name: "Nico", age: 4},
  { id: 5, name: "Gizmo", age: 19}
]);

  return (
  <>
    <h1>Home</h1> 
    {cats.map((cat, index) => {
      return (
        <div>
          <Card key={cat.id}>
          <Card.Header>{cat.name}</Card.Header>
          <Card.Meta>{cat.age} years old</Card.Meta>
          <Card.Description>
          <img src={catImages[index]} wrapped ui={false} width="250px"/>
          </Card.Description>
        </Card>
        </div>
      )
    })}

  </>
)

}

export default Home;