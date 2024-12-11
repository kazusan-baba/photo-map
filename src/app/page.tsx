import Link from "next/link";

const Home = () => (
  <div>
    <main>
      <h2>フォトスポット一覧</h2>
      <div>
        <Link href={"/articles/0"}>
          <h3>仮 タイトル</h3>
          <div>
            <img src={"/sample/download.jpg"} alt={"タイトルの写真"}/>
            <p>詳細</p>
          </div>
        </Link>
        <Link href={"/articles/1"}>
          <h3>仮 タイトル</h3>
          <div>
            <img src={"/sample/download.jpg"} alt={"タイトルの写真"}/>
            <p>詳細</p>
          </div>
        </Link>
    </div>
    </main>
  </div>
);
export default Home