
import useRest from '../hooks/useRest';

function RestExamples() {
  const { addResult, subResult, handleAdd, handleSubtract } = useRest();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <h1 className='text-3xl md:text-4xl font-semibold text-center mb-8'>REST Examples</h1>
      
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
        <button 
          onClick={() => handleAdd(5, 10)}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
        >
          Add 5 and 10
        </button>
        {addResult !== null && (
          <p className="mt-4 text-lg font-semibold text-gray-800">Result: {addResult}</p>
        )}
      </div>

      <form onSubmit={handleSubtract} className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
        <div className="space-y-4">
          <input 
            type="number" 
            name="num1" 
            placeholder="Number 1" 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="number" 
            name="num2" 
            placeholder="Number 2" 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
          >
            Subtract
          </button>
        </div>
        {subResult !== null && (
          <p className="mt-4 text-lg font-semibold text-gray-800">Result: {subResult}</p>
        )}
      </form>
    </div>
  )
}

export default RestExamples