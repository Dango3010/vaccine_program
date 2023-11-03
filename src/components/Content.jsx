import React, {useState} from 'react';

import InputWithName from './helpers/Input'
import data from './data/data'

// main content that includes all big portion components
export default function Content() {  
  const [name1, setName1] = useState({
    vacName: "",
  });
  const [name2, setName2] = useState({
    vacName: "",
    intervalOne: [],
  });
  const [name3, setName3] = useState({
    vacName: "",
    intervalOne: [],
    intervalTwo: [],
  });

  return (
    <div>
      <div>
        <InputWithName 
          title='Vaccine One'
          name='vacName'
          placeholder="Enter a vaccine name"
          setState={setName1}
          state={name1}
          inputType='text'
        />
      </div>

      <div style={{display: 'flex'}}>
        <InputWithName 
          title='Vaccine Two'
          name='vacName'
          placeholder="Enter a vaccine name"
          setState={setName2}
          state={name2}
          inputType='text'
        />
        <div>
          <InputWithName 
            title='Interval one min value'
            name='intervalOne'
            placeholder='Enter a number'
            intervalOne={name2.intervalOne}
            setState={setName2}
            state={name2}
            inputType='number'
          />
          <InputWithName 
            title='Interval one max value'
            name='intervalOne'
            placeholder='Enter a number'
            intervalOne={name2.intervalOne}
            setState={setName2}
            state={name2}
            inputType='number'
          />
        </div>
      </div>

      <div style={{display: 'flex'}}>
        <InputWithName 
          title='Vaccine Three'
          name='vacName'
          placeholder="Enter a vaccine name"
          setState={setName3}
          state={name3}
          inputType='text'
        />
        <div>
          <InputWithName 
            title='Interval one min value'
            name='intervalOne'
            placeholder='Enter a number'
            intervalOne={name3.intervalOne}
            setState={setName3}
            state={name3}
            inputType='number'
          />
          <InputWithName 
            title='Interval one max value'
            name='intervalOne'
            placeholder='Enter a number'
            intervalOne={name3.intervalOne}
            setState={setName3}
            state={name3}
            inputType='number'
          />

          <InputWithName 
            title='Interval two min value'
            name='intervalTwo'
            placeholder='Enter a number'
            intervalTwo={name3.intervalTwo}
            setState={setName3}
            state={name3}
            inputType='number'
          />
          <InputWithName 
            title='Interval two max value'
            name='intervalTwo'
            placeholder='Enter a number'
            intervalTwo={name3.intervalTwo}
            setState={setName3}
            state={name3}
            inputType='number'
          />
        </div>
      </div>

    </div>
  )
}
