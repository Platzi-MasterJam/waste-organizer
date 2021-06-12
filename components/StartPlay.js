import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Container = ({ children }) => (
  <div className="min-h-screen bg-white-own flex flex-col justify-center py-12 px-6 lg:px-8">
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className="bg-white py-8 shadow rounded-xl px-10">{children}</div>
    </div>
  </div>
)

export default function StartPlay() {
  const router = useRouter()

  const [user, setUser] = useState('')
  const [logged, setLogged] = useState('')

  useEffect(() => {
    const logged = window.localStorage.getItem('user')
    if (logged) {
      setLogged(logged)
    }
  }, [])

  const handleChange = ({ target }) => {
    const { value } = target
    setUser(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user) {
      window.localStorage.setItem('user', user)
      router.push('/game')
    }
  }

  const logOut = () => {
    window.localStorage.removeItem('user')
    setLogged('')
  }

  if (logged) {
    return (
      <Container>
        <p className="block text-sm text-green-dark font-bold">
          Bienvenid@ de nuevo {logged}
        </p>
        <br/>
        <button
          onClick={() => router.push('/game')}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-green-own hover:bg-green-rgb focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
        >
          Jugar
        </button>
        <br/>
        <button
          onClick={logOut}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-gray-own hover:bg-gray-rgb focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
        >
          Cambiar usuario
        </button>
      </Container>
    )
  }

  return (
    <Container>
      <img
        className="mx-auto mb-4"
        src="https://dl.dropboxusercontent.com/s/7bb6ghvn3svp7tu/bote-basura.png"
        alt="logo"
        width="100"
        height="125"
      />
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-green-dark font-bold"
          >
            Usuario
          </label>
          <div className="mt-1">
            <input
              onChange={handleChange}
              id="user"
              name="user"
              type="text"
              autoFocus
              placeholder="Ingresa un nombre"
              className="appearance-none block w-full px-3 py-2 border border-green-own rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            disabled={!user}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-green-own hover:bg-green-rgb focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
          >
            Jugar
          </button>
        </div>
      </form>
    </Container>
  )
}
