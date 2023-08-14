import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getVideos } from '../../requests/videos';


function VideoList() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const currentVideos = await getVideos();
            console.log(currentVideos);
            setVideos(currentVideos);
        })();

        // return () => setLoading(false);
    }, []);

    return (

        <div className='grid gap-4 grid-cols-fluid h-full w-full'>
            {videos.map((video, index) => {
                return <Link to={`/videos/`+video._id} key={index}>
                    <div className="video-item rounded-2xl h-96 shadow-lg relative overflow-hidden">
                        <img className="object-cover w-full h-full rounded-2xl" src={video.thumbnailImageUrl} alt="Card Image" />
                        <div className="absolute inset-x-0 bottom-0 h-16 px-6 py-2 bg-black bg-opacity-50 text-white rounded-2xl">
                            <div className='text-md'>{video.title.slice(0, 33)+'....'}</div>
                            <div className='font-light text-sm'>{video.user.name}</div>
                        </div>
                    </div>
                </Link>
            })}

            
        </div>
    )
}

export default VideoList;