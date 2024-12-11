import MapViewer from "@/components/MapViewer";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const isAuthor = true;

	return (
		<div>
			<h2>仮タイトル</h2>
			<img src={"/sample/download.jpg"} alt={""}/>
			{isAuthor && (<Link href={`/edit?id=${id}`}>編集</Link>)}
			<p>記事ID:{id}</p>
			<h3>紹介</h3>
			<p>詳細</p>
			<MapViewer/>
		</div>
	);
};
export default Page;