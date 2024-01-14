import React, { useEffect, useState } from "react";
import "./Youtube.css";

function Youtube9() {
	const [youtubevideo, setyoutube] = useState([]);

	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9XtNqzdA9wSovo_52ZBnu9756yDCIPHI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
		)
			.then((res) => res.json())
			.then((data) => {
				const youtubevideosData = data.items;
				setyoutube(youtubevideosData);
			});
	}, []);

	console.log(youtubevideo);

	return (
		<div className="allVideosWrapper">
			<div className="container">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper bold video-title-wrapper">
							Latest videos
						</div>
					</div>

					{youtubevideo.map((singleVideo, i) => {
						let videoId = singleVideo.id.videoId;
						let VideoLink = `https://www.youtube.com/watch?v=${videoId}`;
						let VideoWrapper = (
							<div key={i} className="col-sm-12 col-md-4">
								<div className="singleVideoWrapper">
									<div className="videoThumbnail">
										<a href={VideoLink} target="-blank">
											<img src={singleVideo.snippet.thumbnails.high.url} />
										</a>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<a href={VideoLink} target="-blank">
												{singleVideo.snippet.title}
											</a>
										</div>
										<div className="videoDesc">
											{singleVideo.snippet.description}
										</div>
									</div>
								</div>
							</div>
						);
						return VideoWrapper;
					})}
				</div>
			</div>
		</div>
	);
}

export default Youtube9;
