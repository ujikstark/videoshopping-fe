import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVideoById } from '../../requests/videos';
import { createComment, getCommentsByVideoId } from '../../requests/comments';
import { getProductsByVideoId } from '../../requests/products';
import validateCommentForm from '../../helper/validationCommentForm';

function VideoDetail() {
    let { id } = useParams();

    const [video, setVideo] = useState({});
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);
    const [products, setProducts] = useState([]);

    // form
    const [currentComment, setCurrentComment] = useState({
        username: '',
        comment: '',
        videoId: id
    });
    const [errors, setErrors] = useState({});


    const handleChange = e => {
        let { name, value } = e.target;

        setCurrentComment({
            ...currentComment,
            [name]: value
        });
    };

    const sendComment = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            const newComment = await createComment(currentComment);
            setComments([...comments, newComment]);
            setCurrentComment({ ...currentComment, comment: '' });
        }


    }

    // realtime validation on comment form
    useEffect(() => {
        setErrors(validateCommentForm(currentComment));
    }, [currentComment]);

    useEffect(() => {
        (async () => {
            const video = await getVideoById(id);
            setUser(video.user);
            setVideo(video);
        })();
    }, []);


    useEffect(() => {
        (async () => {
            const comments = await getCommentsByVideoId(id);
            setComments(comments);
        })();
    }, [video]);

    useEffect(() => {
        (async () => {
            const products = await getProductsByVideoId(id);
            setProducts(products);
        })();
    }, [video]);



    return (
        <div className='h-screen p-4 md:flex mx-auto'>
            <div className='left flex-initial w-full md:w-3/4 md:h-3/4'>
                <iframe className='w-full h-full' src={video.videoUrl} title="YouTube video player"></iframe>
                <div className='title font-bold text-2xl mt-4 mb-4'>{video.title}</div>
                <div className='flex mb-6'>
                    <img className='w-10 h-10 rounded-full bg-white' src={user.photoUrl} />
                    <div className='ml-4'>
                        <p className='text-sm font-bold'>{user.name}</p>
                        <p className='text-sm font-light'>207 followers</p>
                    </div>
                </div>
                <div className='new-comment flex-1 mt-10 hidden md:block'>
                    <input type="text" id='username' name='username' className='p-2 border border-gray-500' placeholder='Username' disabled />
                    <textarea className="w-full p-2" name="new-comment" id="" placeholder='Add a comment...' disabled></textarea>
                    <div className='text-end'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded" disabled>
                            Comment
                        </button>
                    </div>
                </div>
                <div className='recent-comment hidden md:block'>
                    <h3 className='mb-4'>1,001 Comments</h3>
                    <div className='flex mb-6'>
                        <div className='w-10 h-10 rounded-full bg-white'></div>
                        <div className='ml-4'>
                            <p className='text-sm font-bold'>Sugiono<span className='font-light ml-3 text-xs'>20 hours ago</span></p>
                            <p className='text-sm'>Halo brad</p>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <div className='w-10 h-10 rounded-full bg-white'></div>
                        <div className='ml-4'>
                            <p className='text-sm font-bold'>Anak senja<span className='font-light ml-3 text-xs'>1 hours ago</span></p>
                            <p className='text-sm'>Sangat recomended</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right w-full md:w-2/4 lg:w-1/4 md:ml-10 border-gray-500 flex-initial rounded-md'>
                <div className='border w-full md:h-3/4'>
                    <div className='live-comments border-b border-gray-500 h-3/4 p-4 overflow-y-scroll flex-col-reverse'>
                        {comments.map((comment, index) => {
                            return (
                                <div className='flex mb-6' key={index}>
                                    <div className='w-6 h-6 rounded-full bg-white'></div>
                                    <div className='ml-4'>
                                        <p className='text-sm text-gray-400'>{comment.username}<span className='text-white ml-3 text-sm'>{comment.comment}</span></p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='new-comment h-1/4'>
                        <input type="text" id='username' name='username' value={currentComment.username} onChange={handleChange} className='w-full p-2 mb-2' placeholder='Username' />
                        <input className="w-full bg-transparent border-b p-2" value={currentComment.comment} onChange={handleChange} name="comment" id="" placeholder='Add a comment...' />
                        <div className='text-end m-4'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded" onClick={sendComment}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>


                <div className='products flex flex-wrap justify-around mt-10 mb-10 gap-2'>
                    {products.map((product, index) => {
                        return (
                            <a href={product.productUrl} className="w-1/4 md:w-1/3 pt-4 pl-4 pr-4 rounded overflow-hidden shadow-lg border bg-white text-black mt-2" target='_blank' key={index}>
                                <img className="w-1/2 mx-auto" src={product.productImageUrl} alt="Sunset in the mountains" />
                                <div className="pb-2 mt-2 text-center">
                                    <div className="font-bold sm:text-xs text-sm mb-2">{product.title}</div>
                                    <p className="text-gray-700 text-base">
                                        Rp. {product.price}
                                    </p>
                                </div>
                            </a>

                        )
                    })}



                </div>
            </div>
        </div>
    )
}

function dateFormat(date) {
    return new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric", hour: "numeric" });
}



export default VideoDetail;