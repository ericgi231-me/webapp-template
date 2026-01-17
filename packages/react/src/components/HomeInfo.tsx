import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function HomeInfo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} width={120} height={120} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} width={120} height={120} alt="React logo" className="animate-[spin_20s_linear_infinite]" />
        </a>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Web-App Template
      </h1>
      <dl className=" w-full space-y-6 flex flex-col md:flex-row md:space-x-8 md:space-y-0 md:justify-center">
        <div className="border-l-4 border-blue-500 pl-4 pr-4 py-3 bg-gray-800 rounded">
          <dt className="text-xl font-semibold mb-2 text-white">Frontend</dt>
          <dd className="ml-4 text-gray-100 list-disc list-item">Vite build engine</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">React library</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">Tailwind CSS</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">TypeScript</dd>
        </div>
        <div className="border-l-4 border-green-500 pl-4 pr-4 py-3 bg-gray-800 rounded">
          <dt className="text-xl font-semibold mb-2 text-white">Backend</dt>
          <dd className="ml-4 text-gray-100 list-disc list-item">Fastify web framework</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">TypeScript</dd>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 pr-4 py-3 bg-gray-800 rounded">
          <dt className="text-xl font-semibold mb-2 text-white">Deployment</dt>
          <dd className="ml-4 text-gray-100 list-disc list-item">Docker</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">Nginx</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">GitHub Actions</dd>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 pr-4 py-3 bg-gray-800 rounded">
          <dt className="text-xl font-semibold mb-2 text-white">Development</dt>
          <dd className="ml-4 text-gray-100 list-disc list-item">Vitest</dd>
          <dd className="ml-4 text-gray-100 list-disc list-item">Eslint</dd>
        </div>
      </dl>
    </div>
  )
}

export default HomeInfo