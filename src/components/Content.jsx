import React, {useState} from 'react';

import InputWithName from './helpers/Input'

// main content that includes all big portion components
export default function Content() {
  const [name1, setName1] = useState({
    vacName: "",
  });
  const [name2, setName2] = useState({
    vacName: "",
    intervalOne: [],
  });

  return (
    <div>
      <div>
        <InputWithName 
          title='Vaccine Name'
          name='vacName'
          setName={setName1}
          state={name1}
        />
      </div>

      {/* <div>
        <InputWithName 
          setName={setName2}
        />
        <InputWithName 
          title='Interval 1'
          setInterval={setMin1}
        />
        <InputWithName 
          setInterval={setMin2}
        />
      </div> */}

    </div>
  )
}
