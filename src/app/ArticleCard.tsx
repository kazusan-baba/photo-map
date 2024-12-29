import { type Article, TEST_DATA } from "@/components/Article";
import Link from "next/link";

const ArticleCards = () => {
	return (
		<>
			{TEST_DATA.map((item) => (
				<ArticleCard key={item.id} data={item} />
			))}
		</>
	);
};

type ArticleCardProps = {
	data: Article;
};

const ArticleCard = ({ data }: ArticleCardProps) => {
	return (
		<div>
			<Link href={`/article/${data.id}`}>
				<h3>{data.title}</h3>
			</Link>
			<div>
				<Link href={`/article/${data.id}`}>
					<img src={data.thumbnail} alt={"タイトルの写真"} />
				</Link>
				<p>{data.description}</p>
			</div>
		</div>
	);
};

export default ArticleCards;
