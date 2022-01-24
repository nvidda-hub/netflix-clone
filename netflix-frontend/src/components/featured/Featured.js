import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({type}) {
  return <div className='h-90v '>
      {type && (
          <div className='absolute top-20 left-12 text-xl font-medium text-white flex items-center'>
              <span>{type === "movie" ? "Movies":"Series"}</span>
              <select name='genre' id='genre' className='cursor-pointer bg-gray-900 border border-solid text-white ml-5 p-1 rounded'>
                  <option>Genre</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="crime">Crime</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="historical">Historical</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="thriller">Thriller</option>
                  <option value="western">Western</option>
                  <option value="adventure">Adventure</option>
                  <option value="animation">Animation</option>
                  <option value="adventure">Adventure</option>
                  <option value="drama">Drama</option>
                  <option value="adventure">Adventure</option>
                  <option value="adventure">Adventure</option>
                  <option value="adventure">Adventure</option>
                  <option value="adventure">Adventure</option>
                  <option value="adventure">Adventure</option>
                  <option value="adventure">Adventure</option>
              </select>
          </div>
      )}
      <img 
            src='https://www.3blmedia.com/sites/www.3blmedia.com/files/images/KTG_Movie_Title_1.jpg'
            alt='...'
            className='w-full h-full object-cover'
        />
        <div className='flex flex-col w-4/12 absolute left-12 bottom-32'>
            <img 
                src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/BEST-85-MOVIES-ON-NETFLIX.jpg' 
                alt=''
                className='w-auto'
            />
            <span className='my-3'>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between.</span>
            <div className='flex items-center space-x-2 '>
                <button className='cursor-pointer px-5 py-2 text-black rounded-md bg-gray-50 hover:bg-orange-500 hover:text-white'>
                    <PlayArrowIcon />
                    <span className='font-medium text-sm'>Play</span>
                </button>
                <button className='cursor-pointer px-5 py-2 text-white rounded-md bg-gray-700 hover:bg-orange-500 hover:text-white'>
                    <InfoOutlinedIcon className='mr-2'/>
                    <span className='font-medium text-sm'>Info</span>
                </button>
            </div>
        </div>

  </div>;
}

export default Featured;
