import { useState } from 'react'
import { useRouter } from 'next/router'


export default function Example() {
  const router = useRouter()

  const [user, setUser] = useState('')
  const [error, setError] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setUser(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user) {
      window.localStorage.setItem('user', user);
      router.push('/game')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <img className="mx-auto mb-4" src='https://dl.dropboxusercontent.com/s/7bb6ghvn3svp7tu/bote-basura.png' alt="logo" width="100" height="125" />
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de usuario
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="user"
                  name="user"
                  type="text"
                  autoFocus
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                disabled={!user}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                Jugar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
