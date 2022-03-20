import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import {
	Button,
	Card,
	Grid,
	Link,
	List,
	ListItem,
	Typography,
} from "@material-ui/core";

import Layout from "../../components/Layout";
import data from "../../utils/data";
import useStyles from "../../utils/styles";

export default function ProductScreen() {
	const classes = useStyles();
	const router = useRouter();
	const { slug } = router.query;
	const product = data.products.find((a) => a.slug === slug);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<Layout title={product.name} description={product.description}>
			<div className={classes.section}>
				<NextLink href="/" passHref>
					<Link>Back To Products</Link>
				</NextLink>
			</div>
			<Grid container spacing={1}>
				<Grid item md={6} xs={12}>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						layout="responsive"
					/>
				</Grid>
				<Grid item md={3} xs={12}>
					<List>
						<ListItem>
							<Typography component="h1" variant="h1" gutterBottom>
								{product.brand}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography component="h4" variant="strong" gutterBottom>
								Category: {product.category}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography component="h4" variant="strong" gutterBottomy>
								Rating: {product.rating} stars ({product.numReviews} reviews)
							</Typography>
						</ListItem>
						<ListItem>
							<Typography component="h4" variant="strong" gutterBottom>
								Description: {product.description}
							</Typography>
						</ListItem>
					</List>
				</Grid>
				<Grid item md={3} xs={12}>
					<Card>
						<List>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography component="h3" variant="strong">
											Price:
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography component="h4" variant="strong">
											$ {product.price}
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography component="h3" variant="strong">
											Status:
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography component="h4" variant="strong">
											{product.countInStocks > 0
												? "Available"
												: "Out of Stocks"}
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button fullWidth variant="contained" color="primary">
									Add To Cart
								</Button>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
}
