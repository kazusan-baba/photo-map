import MapViewer from "@/components/MapViewer";
import {prisma} from "@/components/prisma";
import {Box, Divider, Link as MuiLink, Typography} from "@mui/material";
import Link from "next/link";
import {notFound} from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const isAuthor = true;
	
	const article = await prisma.article.findUnique({
		where: {
			id: Number.parseInt(id)
		}
	});
	const images = await prisma.article_image.findMany({
		where: {
			article_id: Number.parseInt(id)
		}
	});
	if (!article) return notFound();

	return (
		<Box sx={{p: 2}}>
			<Box sx={{display: "flex",flexWrap: "nowrap", justifyContent: "space-between", alignItems: "baseline"}}>
				<Typography variant={"h2"}>{article.title}</Typography>
				{isAuthor && (<MuiLink component={Link} href={`/edit?id=${id}`} underline={"hover"}>編集</MuiLink>)}
			</Box>
			<Box sx={{display: "flex", justifyContent: "center", background: "#020202"}}>
				{images.map(image => <img src={`/sample/${image.image_path}`} alt={""} style={{width: "75%"}} key={image.id} />)}
			</Box>
			<Divider sx={{my: 2}}/>
			<Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
				<Box>
					<Typography variant={"h3"}>紹介</Typography>
					<Typography>{article.description}</Typography>
				</Box>
				<Box sx={{width: "500px"}}>
					<MapViewer location={{lng: article.longitude, lat: article.latitude}}/>
				</Box>
			</Box>
		</Box>
	);
};
export default Page;