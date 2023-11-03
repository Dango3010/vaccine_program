import data from './data/data'
import '../styles/contentTwoStyle.css'

function ContentTwo({setChangePage}) {

  function reset () {
    data.splice(0, data.length);
    setChangePage(false);
  }

  console.log('data', data);

  return (
    <>
      <div id='text'>
        <table>
          <thead>
            <tr style={{color: 'blue'}}>
              <th>Vaccine Names</th>
              <th>Appointment Dates</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='pad'>{data[0].vacName}, {data[1].vacName}, {data[2].vacName}</td>
              <td className='pad'>Nov 3rd 2023</td>
              <td>
                <select id='text'>
                  <option value='completed'>completed</option>
                  <option value='incompleted'>incompleted</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className='pad'>{data[1].vacName}, {data[2].vacName}</td>
              <td className='pad'>Dec 3rd 2023 - Jan 3rd 2023</td>
              <td>
                <select id='text'>
                  <option value='completed'>completed</option>
                  <option value='incompleted'>incompleted</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className='pad'>{data[2].vacName}</td>
              <td className='pad'>Jun 3rd 2023 - July 3rd 2023</td>
              <td>
                <select id='text'>
                  <option value='completed'>completed</option>
                  <option value='incompleted'>incompleted</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id='info'>Vaccine Information</h2>
      <div style={{color: 'black', fontSize: '22px', textAlign: 'left'}}>
        <div>- {data[0].vacName} has one dose</div>
        <div>- {data[1].vacName} has two doses with one dosing interval: {data[1].intervalOne[0]}-{data[1].intervalOne[1]} weeks</div>
        <div>- {data[2].vacName} has three doses with two dosing intervals: {data[2].intervalOne[0]}-{data[2].intervalOne[1]} weeks (1st dosing interval) and {data[2].intervalTwo[0]}-{data[2].intervalTwo[1]} weeks (2nd dosing interval)</div>
        <div style={{color: 'black', fontSize: '22px', textAlign: 'left'}}>
          Edited by Nurse:
          <input
            style={{color: 'black', fontSize: '22px', textAlign: 'left', marginLeft: '10px'}}
            placeholder='John'
          />
        </div>
      </div>

      <div style={{marginTop: '50px'}}>
        <button 
          className='button'
          onClick={reset}
        >
          <div id='text'>Go Back</div>
        </button>
      </div>
    </>
  )
}

export default ContentTwo;
