import { useParams } from 'react-router-dom';
import logo from '../../assets/react.svg';

function VideoDetail() {
    let { id } = useParams();

    return (
        <div className='container h-screen p-4 flex mx-auto'>
            <div className='flex-initial w-3/4 h-3/4'>
                <iframe className='w-full h-full' src="https://www.youtube.com/embed/-ptSuDKQuvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='new-comment flex-1 mt-10'>
                    <input type="text" id='username' name='username' className='p-2 border border-rose-500' placeholder='Username' />
                    <textarea class="w-full p-2" name="new-comment" id="" placeholder='Add a comment...'></textarea>
                    <div className='text-end'>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
                            Comment
                        </button>
                    </div>
                </div>
                <div className='recent-comment'>
                    <h3 className='mb-4'>1,001 Comments</h3>
                    <div className='flex mb-6'>
                        <div className='w-10 h-10 rounded-full bg-white'></div>
                        <div className='ml-4'>
                            <p className='text-sm font-bold'>Nama</p>
                            <p className='text-sm'>Comment</p>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <div className='w-10 h-10 rounded-full bg-white'></div>
                        <div className='ml-4'>
                            <p className='text-sm font-bold'>Nama</p>
                            <p className='text-sm'>Comment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products w-1/4 ml-4 flex-initial'>
                <div className='flex flex-wrap px-2 py-2 justify-evenly'>
                    <div class="w-2/5 py-4 rounded overflow-hidden shadow-lg border bg-white text-black mt-2">
                        <img class="w-1/2 mx-auto" src={logo} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Rp20.000
                            </p>
                        </div>
                    </div>
                    <div class="w-2/5 py-4 rounded overflow-hidden shadow-lg border bg-white text-black mt-2">
                        <img class="w-1/2 mx-auto" src={logo} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Rp20.000
                            </p>
                        </div>
                    </div>
                    <div class="w-2/5 py-4 rounded overflow-hidden shadow-lg border bg-white text-black mt-2">
                        <img class="w-1/2 mx-auto" src={logo} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Rp20.000
                            </p>
                        </div>
                    </div>
                    <div class="w-2/5 py-4 rounded overflow-hidden shadow-lg border bg-white text-black mt-2">
                        <img class="w-1/2 mx-auto" src={logo} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Rp20.000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;