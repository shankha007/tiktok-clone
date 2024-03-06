import React, { useEffect, useState } from 'react'
import Video from './Video'
import './App.css'

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

export default function App() {
	const [videos, setVideos] = useState([])
	const [playing, setPlaying] = useState(0);

	useEffect(() => {
		fetch(API_URL)
			.then((data) => data.json())
			.then((data) => setVideos(data))
	}, [])

	return (
		<div className="app">
			<div className="container" onScroll={() => setPlaying(null)}>
				{videos.map((video, index) => {
					return (
						<Video
							id={index}
							key={video.url}
							channel={video.channel}
							description={video.description}
							song={video.song}
							playing={playing}
							setPlaying={setPlaying}
							likes={video.likes}
							shares={video.shares}
							messages={video.messages}
							url={video.url}
						/>
					)
				})}
			</div>
		</div>
	)
}
