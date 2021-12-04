import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, username, userImg, caption, img }) => {
  return (
    <div className='bg-white my-7 rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          className='h-12 w-12 mr-3 rounded-full object-contain p-[1.5px] border border-gray-200'
          src={userImg}
          alt='user-image'
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 w-5' />
      </div>

      {/* Image */}
      <img className='object-cover w-full' src={img} alt='post-image' />

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn rotate-12' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Captions */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span> {caption}
      </p>

      {/* Comments */}
      {/* Input Box */}
      <form className='flex items-center p-4 border-t'>
        <EmojiHappyIcon className='h-7 text-gray-700' />
        <input
          className=' placeholder-gray-500 border-none flex-1 focus:ring-0 outline-none tracking-tight'
          type='text'
          placeholder='Add a comment...'
        />
        <button className='font-semibold text-blue-400 '>Post</button>
      </form>
    </div>
  );
};

export default Post;
