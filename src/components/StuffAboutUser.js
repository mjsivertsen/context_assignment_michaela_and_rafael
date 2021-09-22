import React, { useContext,  } from "react";
import { Card } from "semantic-ui-react";
import { StuffAboutUserContext } from "../providers/StuffAboutUserProvider";
import User from "./User";
import '../App.css';



const StuffAboutUser = () => {
  const {car, favoriteFruit, currentlyWatching, pets} = useContext(StuffAboutUserContext)

  return(
 <>
<User />
<Card fluid>
 <table class="ui very basic collapsing celled table">
  <thead>
    <tr>
      <th>Stuff About User</th>
      <th></th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="https://m.media-amazon.com/images/I/41RORFSdPrL._AC_SS450_.jpg" class="ui mini rounded image"/>
          <div class="content">
            Car
        </div>
      </h4></td>
      <td>
        {car}
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="https://m.media-amazon.com/images/I/41RORFSdPrL._AC_SS450_.jpg" class="ui mini rounded image"/>
          <div class="content">
            Favorite Fruit
        </div>
      </h4></td>
      <td>
        {favoriteFruit}
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="https://m.media-amazon.com/images/I/41RORFSdPrL._AC_SS450_.jpg" class="ui mini rounded image"/>
          <div class="content">
            Currrently Watching
        </div>
      </h4>
      </td>
      <td>
        {currentlyWatching}
      </td>
    </tr>
    <tr>
      <td>
        <h4 class="ui image header">
          <img src="https://m.media-amazon.com/images/I/41RORFSdPrL._AC_SS450_.jpg" class="ui mini rounded image"/>
          <div class="content">
            Pets
        </div>
      </h4></td>
      <td>
        {pets}
      </td>
    </tr>
  </tbody>
</table>
</Card>
 </>
)
}

export default StuffAboutUser