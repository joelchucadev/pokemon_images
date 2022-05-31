export interface IImageState {
  images: IImage[]
}

export interface IImage {
    name: string;
    isShiny: boolean;
    url: string;
}