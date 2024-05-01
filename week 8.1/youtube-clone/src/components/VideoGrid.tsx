import { VideoCard } from "./VideoCard"
import { VIDEOS } from "./videos"

export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                VIDEOS.map((video, index) => {
                    return <div>
                        <VideoCard
                            key={index}
                            title={video.title}
                            thumbImage={video.thumbImage}
                            profileImage={video.profileImage}
                            author={video.author}
                            views={video.views}
                            timestamp={video.timestamp}
                        />
                    </div>
                })
            }
        </div>
    )
}