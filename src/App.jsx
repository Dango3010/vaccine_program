import {useState} from 'react';
import './App.css'
import Content from './components/Content';
import ContentTwo from './components/ContentTwo';

function App() {
  const [changePage, setChangePage] = useState(false);

  return (
    <>
      {changePage 
      ? <ContentTwo
          setChangePage={setChangePage}
        />
      : <Content 
          setChangePage={setChangePage}
        />
      }
    </>
  )
}

export default App
