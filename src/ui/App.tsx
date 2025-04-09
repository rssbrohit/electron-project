import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useStatistics } from './useStatistics';
import { Chart } from './Chart';
function App() {
  const [count, setCount] = useState(0)

  const statistics = useStatistics(10); 
  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );
  // console.log(statistics); 
  
  //@ts-ignore
  // window.electron.getStaticData();

  // useEffect(()=>{
    
  //  const unsub = window.electron.subscribeStatistics((stats) => console.log(stats) );
  //  return unsub;
  // })


  return (
    <>
    <div style={{height: 120}}>
    <Chart data={cpuUsages} maxDataPoints={10} />
      {/* <BaseChart
          data={[{ value: 25 }, { value: 30 }, { value: 100 }]} fill= {'red'} stroke={'white'}     
       ></BaseChart> */}
       </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
