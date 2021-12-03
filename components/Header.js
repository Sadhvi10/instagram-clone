import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className='bg-white shadow-sm border-b sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto py-5 md:py-0'>
        {/* Instagram logo */}
        <div className='hidden lg:inline-grid relative w-24  cursor-pointer'>
          <Image
            src='https://links.papareact.com/ocw'
            objectFit='contain'
            layout='fill'
          />
        </div>

        <div className='lg:hidden relative w-8  flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            objectFit='contain'
            layout='fill'
          />
        </div>

        {/* Search bar */}
        <div className='max-w-xs mx-auto hidden md:block'>
          <div className='relative mt-1 p-3 rounded-md  '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400 ' />
            </div>
            <input
              className='bg-gray-50 w-[120%] pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              type='text'
              placeholder='Search'
            />
          </div>
        </div>

        {/* Icons */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <div className='relative navBtn'>
            <img
              className=' navBtn'
              src='/icons/messenger-line.svg'
              alt='messenger'
            />
            <span className='absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white'>
              3
            </span>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img
            src='https://i.ibb.co/Ch7KMJS/studdy-spotify.png'
            alt='me'
            className='h-10 rounded-full cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
