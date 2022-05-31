import * as React from 'react';
import axios from "axios";

export default function Search () {
  const [imageName, setImageName] = React.useState("ditto");
  const [isShiny, setIsShiny] = React.useState(true);
  const [imageUrl, setImageUrl] = React.useState("");

  const processImage = (data: any) => {
    console.log(data);
    
    if(!data.sprites) {
       alert("Image not found");
       return;
    }

    console.log(isShiny ? data.sprites.front_shiny : data.sprites.front_dafault);
    setImageUrl(isShiny ? data.sprites.front_shiny : data.sprites.front_dafault);
  }
  
  const onSearch = ( event: any)  => {
    setImageUrl("");
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios.get(`${url + imageName}`)
      .then((response) => {
        processImage(response.data)
      })
      .catch(err => { 
        console.log(err); 
        alert("Image not found")
      });
  }

  const onName = ( event: any) => {
    setImageName(event.target.value);
  }

  const onType = ( event: any) => {
    setIsShiny(event.target.checked);
  }

  const onAdd = ( event: any)  => {
    console.log(event.target.value);    
  }

  return (
    <div>
      <div>
        <label htmlFor="imageName">Image Name</label>
        <input type="search" id="imageName" value={imageName} onChange={onName}/>
        <label htmlFor="imageType">Shiny</label>
        <input type="checkbox" id="imageType" checked={isShiny} onChange={onType}/>
        <input type="button" value="Search" onClick={onSearch}></input>
      <div>
  
      </div>
        {imageUrl !== "" && 
        <>
          <img src = {imageUrl} alt = {imageName}  /> 
          <input type="button" value="Add" onClick={onAdd}></input> 
        </>}
      </div>

    </div>
  );
}
