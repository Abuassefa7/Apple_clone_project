import React, { Component } from "react";


class Topthree extends Component {
	render() {
		return (
			<div>
				<section className={this.props.hightlightwrapper}>
					<div className="container">
						<div className={this.props.newAlert}>{this.props.New1}</div>

						<div className={this.props.titlewraperBold}>{this.props.title}</div>

						{this.props.description && (
							<div className={this.props.descriptionwrapper}>
								{this.props.description}
							</div>
						)}

						{this.props.price &&
							<div className={this.props.pricewrapper}>{this.props.price}</div>}

						<div className="links-wrapper">
							<ul>
								<li>
									<a href="">{this.props.LearnMore}</a>
								</li>
								<li>
									<a href="">{this.props.Buy}</a>
								</li>
							</ul>
						</div>

						{this.props.Magic && (
							<div className="ipod-caption row">
								<div className="col-sm-12 col-md-6 text-md-right">
									{this.props.iPadPro}
								</div>
								<div className="col-sm-12 col-md-6 text-md-left">
									{this.props.Magic}
								</div>
							</div>
						)}
					</div>
				</section>
			</div>
		);
	}
}

export default Topthree;
