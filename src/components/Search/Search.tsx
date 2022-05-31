import * as React from "react";
import axios from "axios";
import { addImage, selectImages } from "../../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { IImage } from "../../interfaces";

export default function Search() {
  const [imageName, setImageName] = React.useState("ditto");
  const [isShiny, setIsShiny] = React.useState(true);
  const [imageUrl, setImageUrl] = React.useState("");
  const dispatch = useDispatch();
  const {images} = useSelector(selectImages);

  const processImage = (data: any) => {
    console.log(data);

    if (!data.sprites) {
      alert("Image not found");
      return;
    }

    console.log(
      isShiny ? data.sprites.front_shiny : data.sprites.front_default
    );
    setImageUrl(
      isShiny ? data.sprites.front_shiny : data.sprites.front_default
    );
  };

  const onSearch = (event: any) => {
    setImageUrl("");
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios
      .get(`${url + imageName}`)
      .then((response) => {
        processImage(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Image not found");
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
        (image:IImage) => image.name === imageName && image.isShiny === isShiny
      )
    ) {
      alert("Image already was saved!");
    } else {
      const image: IImage = {
        name: imageName,
        isShiny: isShiny,
        url: imageUrl,
      };

      dispatch(addImage(image));
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
        <label htmlFor="imageType">Shiny</label>
        <input
          type="checkbox"
          id="imageType"
          checked={isShiny}
          onChange={onType}
        />
        <input type="button" value="Search" onClick={onSearch}></input>
        <div></div>
        {imageUrl !== "" && (
          <>
            <img src={imageUrl} alt={imageName} />
            <input type="button" value="Add" onClick={onAdd}></input>
          </>
        )}
      </div>
    </div>
  );
}
