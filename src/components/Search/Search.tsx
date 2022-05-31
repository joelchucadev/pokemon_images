import * as React from "react";
import axios from "axios";
import { addImage, selectImages } from "../../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { IImage } from "../../interfaces";

export default function Search() {
  const [imageName, setImageName] = React.useState("");
  const [isShiny, setIsShiny] = React.useState(false);
  const [searchedImage, setSearchedImage] = React.useState({
    name: "",
    isShiny:false,
    url: ""
  })
  const dispatch = useDispatch();
  const {images} = useSelector(selectImages);

  const processImage = (data: any) => {
    console.log(data);
    setSearchedImage({name: "", isShiny:false, url: ""});
    
    if (!data.sprites) {
      alert("Image not found");
      return;
    }

    setSearchedImage({
      name: imageName,
      isShiny: isShiny,
      url: isShiny ? data.sprites.front_shiny : data.sprites.front_default
    });
  };

  const onSearch = (event: any) => {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios
      .get(`${url + imageName}`)
      .then((response) => {
        processImage(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("ERROR: Image not found");
      });
  };

  const onName = (event: any) => {
    setImageName(event.target.value);
  };

  const onType = (event: any) => {
    setIsShiny(event.target.checked);
  };

  const onAdd = (event: any) => {
    console.log(event.target.value);

    if (
      images?.find(
        (image:IImage) => image.name === searchedImage.name && image.isShiny === searchedImage.isShiny
      )
    ) {
      alert("Error: Image already was saved!");
    } else {
      const image: IImage = {
        name: searchedImage.name,
        isShiny: searchedImage.isShiny,
        url: searchedImage.url,
      };

      dispatch(addImage(image));
      alert(`Image "${searchedImage.name}" was saved!!`);
      setSearchedImage({
        name: "",
        isShiny:false,
        url: ""
      });
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="imageName">Image Name</label>
        <input
          type="search"
          id="imageName"
          value={imageName}
          onChange={onName}
        />
        <br/>
        <label htmlFor="imageType">Shiny</label>
        <input
          type="checkbox"
          id="imageType"
          checked={isShiny}
          onChange={onType}
        />
        <br/>
        <input type="button" value="Search" onClick={onSearch}></input>
        <hr />
        <br />
        {searchedImage.url !== "" && (
          <>
            <h4>{searchedImage.name}</h4>
            <img src={searchedImage.url} alt={searchedImage.name} />
            <br />
            <input type="button" value="Add" onClick={onAdd}></input>
          </>
        )}
      </div>
    </div>
  );
}
