import React, { Component } from "react";
import HeaderLink from "./HeaderLink";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div>
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button
								className="navbar-toggler navbar-toggler-right"
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse"
							>
								☰
							</button>
							<Link className="navbar-brand mx-auto" to="/">
								<img src={logo} />
							</Link>

							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<HeaderLink Linkurl="/mac" linkName="Mac" />
									<HeaderLink Linkurl="/iphone" linkName="iphone" />
									<HeaderLink Linkurl="/ipad" linkName="ipad" />
									<HeaderLink Linkurl="/watch" linkName="watch" />
									<HeaderLink Linkurl="/tv" linkName="tv" />
									<HeaderLink Linkurl="/music" linkName="Music" />
									<HeaderLink Linkurl="/support" linkName="support" />
									<HeaderLink Linkurl="/" linkName={<img src={search} />} />
									<HeaderLink Linkurl="/" linkName={<img src={cart} />} />
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
