import * as React from 'react';
import {useSelector} from 'react-redux'
import { IImage } from '../../interfaces';
import { selectImages } from '../../redux/imageSlice';


export default function List () {
  const {images} = useSelector(selectImages);
  const imageList = images.map( (image: IImage) => {
      return (
        <li>
            <h4>{image.name}</h4>
            <img src={image.url}></img> 
        </li>
      )
    })
  return (
    <div>
      <ul>
        {imageList}
      </ul>
    </div>
  );
}
