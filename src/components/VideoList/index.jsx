import { Link } from 'react-router-dom';


function VideoList() {
    return (

        <div className='grid gap-4 grid-cols-fluid h-full w-full'>
            <Link to="/videos/1">
                <div class="video-item rounded-2xl h-96 shadow-lg relative">    
                    <img class="object-cover w-full h-full rounded-2xl" src="https://i3.ytimg.com/vi/6eyWxcR72KI/maxresdefault.jpg" alt="Card Image" />
                    <div class="absolute inset-x-0 bottom-0 h-16 px-6 py-2 bg-black bg-opacity-50 text-white rounded-2xl">
                        <div className='text-md'>Card Title</div>
                        <div className='font-light text-sm'>Ujik ganteng</div>
                    </div>
                </div>
            </Link>
            <div class="video-item rounded-2xl h-96 shadow-lg relative">
                <img class="object-cover w-full h-full rounded-2xl" src="https://i3.ytimg.com/vi/cuHDJJIGwfE/maxresdefault.jpg" alt="Card Image" />
                <div class="absolute inset-x-0 bottom-0 h-16 px-6 py-2 bg-black bg-opacity-50 text-white rounded-2xl">
                    <div className='text-md'>Card Title</div>
                    <div className='font-light text-sm'>Ujik ganteng</div>
                </div>
            </div>
        </div>
    )
}

export default VideoList;