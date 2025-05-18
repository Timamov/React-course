// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


import Count from './Count.jsx';
import Button from './Button.jsx';

function App(){
    // const numbers = [5, 3, 10];
    // const newNumbers = [numbers, 50]
    // console.log(newNumbers);
    // console.log(numbers.map((number) => {return number * 2}));

    return (
     <div className="App">
        {/* {
            numbers.map((number, index) => {
                return <Count key={index} number = {number} />
            })
        } */}
        <Count />
        <Button />
    </div>
    );
}
export default App