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

  console.log('name2', name2);

  return (
    <div>
      <div>
        <InputWithName 
          title='Vaccine One'
          name='vacName'
          setState={setName1}
          state={name1}
          inputType='text'
        />
      </div>

      <div style={{display: 'flex'}}>
        <InputWithName 
          title='Vaccine Two'
          name='vacName'
          setState={setName2}
          state={name2}
          inputType='text'
        />
        <div>
          <InputWithName 
            title='Interval 1'
            name='intervalOne'
            intervalOne={name2.intervalOne}
            setState={setName2}
            state={name2}
            inputType='number'
          />
          <InputWithName 
            name='intervalOne'
            intervalOne={name2.intervalOne}
            setState={setName2}
            state={name2}
            inputType='number'
          />
        </div>
      </div>

    </div>
  )
}
