import React, { Component } from "react";
import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";

import Header from "./classComponents/Header/Header";

import AlertSection from "./classComponents/AlertSection/AlertSection";
import MergeTopthree from "./classComponents/Topthree/MergeTopthree";
import FourthSection from "./classComponents/FourthSection/FourthSection";
import FifthSection from "./classComponents/FifthSection/FifthSection";
import SixthSection from "./classComponents/SixthSection/SixthSection";

import Main from "./classComponents/Main/Main";

import FooterSection from "./classComponents/FooterSection/FooterSection";
import Mac from "./classComponents/Pages/Mac/Mac";
import Ipad from "./classComponents/Pages/Ipad/Ipad";
import Fouro4 from "./classComponents/Pages/Fouro4/Fouro4";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./classComponents/Pages/SharedLayout";
import Iphone from "./classComponents/Pages/Iphone/Iphone";
import ProductPage from "./classComponents/Pages/ProductPages/ProductPage";

class App extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route path="/" element={<Main />} />
						<Route path="iphone" element={<Iphone />} />
						<Route path="iphone/:productID" element={<ProductPage/>}/>
						<Route path="Mac" element={<Mac />} />
						<Route path="ipad" element={<Ipad />} />
						<Route path="*" element={<Fouro4 />} />
					</Route>
				</Routes>
			</div>
		);
	}
}

export default App;
