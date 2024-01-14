import React from "react";
import Topthree from "./Topthree";

function MergeTopthree() {
	return (
		<div>
			<Topthree
				hightlightwrapper="first-hightlight-wrapper"
				newAlert="new-alert"
				New1="New"
				titlewraperBold="title-wraper bold black"
				title="iPad Pro"
				LearnMore="Learn more"
				Buy="Order"
				iPadPro="	iPad Pro available starting 3.25"
				Magic="Magic Keyboard coming in May"
			/>

<Topthree
					hightlightwrapper="second-hightlight-wrapper"
					newAlert="new-alert"
					New1="New"
					titlewraperBold="title-wraper bold black"
					title="MacBook Air"
					descriptionwrapper="description-wrapper black"
					description="Twice the speed. Twice the storage."
					pricewrapper="price-wrapper grey"
					price="From $999."
					LearnMore="Learn more"
					Buy="Buy"
				/>

				<Topthree
					hightlightwrapper="third-hightlight-wrapper"
					titlewraperBold="title-wraper bold"
					title="iPhone 11 Pro"
					descriptionwrapper="description-wrapper"
					description="Pro cameras. Pro display. Pro performance."
					pricewrapper="price-wrapper"
					price="From $24.95/mo. or $599 with trade‑in."
					LearnMore="Learn more"
					Buy="Buy"
				/>
		</div>
	);
}

export default MergeTopthree;
