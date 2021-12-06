const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='rounded-full border p-[2px] w-16 h-16'
        src='https://i.ibb.co/Ch7KMJS/studdy-spotify.png'
        alt='mini-profile'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>sadhvipugaonkar</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-blue-400 font-semibold text-sm'>Sign Out</button>
    </div>
  );
};

export default MiniProfile;
