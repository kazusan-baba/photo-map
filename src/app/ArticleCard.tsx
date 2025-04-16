import {prisma} from "@/components/prisma";
import {Box, Divider, Link as MuiLink, Typography} from "@mui/material";
import Link from "next/link";

const ArticleCards = async () => {
	const article = await prisma.article.findMany();
	
	return (
		<>
			{article.map((item) => (
				<ArticleCard key={item.id} data={item} />
			))}
		</>
	);
};

type ArticleCardProps = {
	data: {
		id: number
		title: string
		thumbnail: string
		description: string
	};
};

const ArticleCard = ({ data }: ArticleCardProps) => {
	return (
		<Box sx={{ boxShadow: 2, mb: 1 }}>
			<MuiLink component={Link} href={`/article/${data.id}`} underline="hover">
				<Typography variant={"h3"} sx={{ p: 1 }}>
					{data.title}
				</Typography>
			</MuiLink>
			<Divider variant={"middle"} />
			<Box sx={{ p: 1, display: "flex", flexWrap: "wrap" }}>
				<Link href={`/article/${data.id}`}>
					<img src={`/sample/${data.thumbnail}`} alt={"タイトルの写真"} />
				</Link>
				<Typography variant={"body1"} sx={{ p: 1 }}>
					{data.description}
				</Typography>
			</Box>
		</Box>
	);
};

export default ArticleCards;
