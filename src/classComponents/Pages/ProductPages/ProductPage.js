import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
	const [product, setProduct] = useState([]);
	// console.log(useParams())
	const { productID } = useParams();

	useEffect(() => {
		fetch("http://localhost:1234/iphones")
			.then((res) => res.json())
			.then((data) => {
				const productList = data.products2;
				// console.log(productList)
				const SingleProduct = productList.filter(
					(product) => product.product_url === productID
				);
				setProduct(SingleProduct);
			})
			.catch(() => console.log("Error:unable to fetch"));
	}, [productID]);

	console.log(product);

	return <div></div>;
}

export default ProductPage;
