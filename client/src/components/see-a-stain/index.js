import React from "react";
import "../../App.css";

function View({ apiResponse }) {
  //console.log("6: " + apiResponse);
  console.log(apiResponse);

  function createStainList(object) {
    return (
      <li>
        <p>{object.stain_name}</p>
        <img
          src={object.stain_image}
          width="200px"
          height="250px"
          alt="stain"
        ></img>
      </li>
    );
  }

  return (
    <div>
      <ul>{apiResponse.map(createStainList)}</ul>
    </div>
  );
}

export default View;
