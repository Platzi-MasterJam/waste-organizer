import { useState, useEffect } from 'react'

const mock = [
  {
    user: 'Gerardo',
    score: 21,
    created_at: '2020-06-12',
  },
  {
    user: 'Angel',
    score: 22,
    created_at: '2020-06-11',
  },
  {
    user: 'Osvaldo',
    score: 23,
    created_at: '2020-06-10',
  },
  {
    user: 'Wilson',
    score: 24,
    created_at: '2020-06-09',
  },
]

function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  )
}

export default function Table() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    setPeople(mock)
  }, [])

  return (
    <Container>
      <div className="flex flex-col mt-10">
        <h1>Puntajes</h1>
        <br />
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Aciertos
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr
                      key={`${person.name}-${person.created_at}`}
                      className={
                        personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.score}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
