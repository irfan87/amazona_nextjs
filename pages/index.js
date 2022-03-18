import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Link,
} from "@material-ui/core";

import NextLink from "next/link";

import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
	return (
		<Layout>
			<h1>Products</h1>
			<Grid container spacing={3}>
				{data.products.map((product) => (
					<Grid item md={4} key={product.name}>
						<Card>
							<NextLink href={`/products/${product.slug}`} passHref>
								<CardActionArea>
									<CardMedia
										component="img"
										image={product.image}
										title={product.name}
									/>
									<CardContent>
										<Typography>{product.name}</Typography>
									</CardContent>
								</CardActionArea>
							</NextLink>
							<CardActions>
								<Typography>$ {product.price}</Typography>
								<Button size="small" color="primary">
									Add To Cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Layout>
	);
}
