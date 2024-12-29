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
    latitude: 35.68,
    longitude: 139.76,
    description: "中央区佃にあるよ",
  },
  {
    id: 1,
    title: "中央大橋",
    thumbnail: "/sample/download.jpg",
    description: "中央区新川にあるよ",
    latitude: 35.68,
    longitude: 139.76,
  },
];

export { TEST_DATA, type Article, type CreateArticle };