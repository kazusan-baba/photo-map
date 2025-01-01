import ArticleCards from "@/app/ArticleCard";
import { Box, Divider, Typography } from "@mui/material";

const Home = () => (
	<Box sx={{ p: 2 }}>
		<Typography variant={"subtitle1"}>フォトスポット一覧</Typography>
		<Divider sx={{ my: 2 }} />
		<ArticleCards />
	</Box>
);

export default Home;
