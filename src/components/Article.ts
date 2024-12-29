type CreateArticle = {
  title: string,
  latitude: number;
  longitude: number;
  image?: File[];
  description: string;
}

type Article = CreateArticle & {
  id: number;
  thumbnail: string;
};

const TEST_DATA: Article[] = [
  {
    id: 0,
    title: "中央大橋",
    thumbnail: "/sample/download.jpg",
    latitude: 35.67164174274727,
    longitude: 139.78442788124087,
    description: "中央区佃にあるよ",
  },
  {
    id: 1,
    title: "中央大橋",
    thumbnail: "/sample/download.jpg",
    description: "中央区新川にあるよ",
    latitude: 35.67164174274727,
    longitude: 139.78442788124087,
  },
];

export { TEST_DATA, type Article, type CreateArticle };