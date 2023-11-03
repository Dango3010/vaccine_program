import {useState} from 'react';
import data from './data/data'

function ContentTwo({setChangePage}) {

  function reset () {
    data.splice(0, data.length);
    setChangePage(false);
  }

  console.log('data', data);

  return (
    <>
      <div>
        HIII
      </div>
      
      <button 
        className='button'
        onClick={reset}
      >
        <div id='text'>Go Back</div>
      </button>
    </>
  )
}

export default ContentTwo;
