import {TEST_DATA} from "@/components/Article";
import MapViewer from "@/components/MapViewer";
import Link from "next/link";
import {notFound} from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const isAuthor = true;
	
	const article = TEST_DATA.find((article) => article.id === Number.parseInt(id));
	if (!article) return notFound();

	return (
		<div>
			<h2>{article.title}</h2>
			<img src={article.image[0]} alt={""}/>
			{isAuthor && (<Link href={`/edit?id=${id}`}>編集</Link>)}
			<p>記事ID:{id}</p>
			<h3>紹介</h3>
			<p>{article.description}</p>
			<MapViewer location={{lng: article.longitude, lat: article.latitude}}/>
		</div>
	);
};
export default Page;