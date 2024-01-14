import React, { Component } from "react";

export default class FooterMap extends Component {
	render() {
		let ListItems = this.props.items;
		return (
			<>
				<h3>{this.props.title}</h3>
				<ul>
					{ListItems.map((el, index) => (
						<li key={index}>
							<a href="#"> {el}</a>
						</li>
					))}
				</ul>
			</>
		);
	}
}
