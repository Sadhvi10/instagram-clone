const Story = ({ img, username }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[65px] bg-gradient-to-tr from-purple-400 via-red-400 to-yellow-600 p-[1.5px] rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out'>
        <a className='block bg-white p-[1.5px] rounded-full' href='#'>
          <img
            className='w-[60px] h-[60px] rounded-full'
            src={img}
            alt='profile photo'
          />
        </a>
      </div>
      <p className='text-xs w-14 truncate text-center tracking-tighter'>
        {username}
      </p>
    </div>
  );
};

export default Story;
