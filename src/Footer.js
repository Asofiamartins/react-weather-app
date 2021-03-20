import React from "react";
import "./Footer.css"




export default function Footer() {
  return (
    <footer>
      <p><a
        href="https://github.com/Asofiamartins/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code{" "}
      </a>
      by
      <a href="http://www.linkedin.com/in/asofia-martins" target="_blank" rel="noreferrer">
        {" "}
        Sofia Martins
      </a></p>
      <p>{" "} Icons by  and Illustrations by {" "} 
      <a href="https://vectorforfree.com/product/colorful-plant-illustration/" target="_blank" rel="noreferrer">vector for free</a>, {" "} 
      <a href="https://vectorforfree.com/product/potted_plant_illustration_vectorforfree/" target="_blank" rel="noreferrer">vector for free</a>,{" "} gstudioimagen|Freepik, pch.vector|Freepik, {" "} 
      <a src="https://www.freepik.com/free-vector/christmas-theme-with-christmas-tree-winter_6409360.htm#page=1&query=pine%C2%B4tree&position=14">Freepik</a>
      </p>
    </footer>
  );
}
