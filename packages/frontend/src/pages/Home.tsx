import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)

  const callAddApi = async (a: number, b: number) => {
    try {
      // import.meta.env.BASE_URL is set by Vite and should include the base (e.g. /webapp-template/)
      const base = (import.meta as any).env?.BASE_URL || '/';
      const url = `${base}api/v1/examples/math/add/${a}/${b}`;
      const res = await fetch(url, { method: 'GET' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setSum(Number(data?.result ?? 0));
    } catch (err) {
      // on error, set sum to 0
      // eslint-disable-next-line no-console
      console.error('add api error', err);
      setSum(0);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex space-x-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4"> text </h1>
      <div className="card bg-white shadow-md rounded-lg p-6">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          count is {count}
        </button>
        <button
          onClick={() => callAddApi(2, 3)}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          2 + 3 is {sum}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
