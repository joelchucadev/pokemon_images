import * as React from 'react';

export interface ISearchProps {
}

export default function Search (props: ISearchProps) {
  const [imageName, setImageName] = React.useState("");
  const [imageType, setImageType] = React.useState("");

  const onSearch = ( event: any)  => {
    console.log(event.target.value);
    
  }

  const onName = ( event: any) => {
    console.log(event.target.value);
    setImageName(event.target.value);
  }

  const onType = ( event: any) => {
    console.log(event.target.checked);
    setImageType(event.target.value);
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
        <input type="checkbox" id="imageType" value="shiny" onChange={onType}/>
        <input type="button" value="Search" onClick={onSearch}></input>
      <div>
  
      </div>
        <img src = ""
          alt = {imageName} height = "250" width = "270" />
        <input type="button" value="Add" onClick={onAdd}></input>
      </div>

    </div>
  );
}
