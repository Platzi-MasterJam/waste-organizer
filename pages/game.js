import { useState, useEffect } from 'react'
import CardTrash from 'components/CardTrash'
import axios from 'axios'

export default function Juego() {
  const [counter, setCounter] = useState(0)
  // const [value, setValue] = useState()
  // const [incorrect, setIncorrect] = useState(false)
  // const [correct, setCorrect] = useState(false)
  const [status, setStatus] = useState('idle')
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchWaste()
  }, [])

  async function fetchWaste() {
    const result = await axios.get('https://69xlj1.deta.dev/products')
    console.log(result)
    setProducts(result.data)
  }

  return (
    <section className="w-6/12 mx-auto">
      <div className="pt-8 pr-5 flex items-center justify-center">
        <h2 className="mr-26 text-center text-4xl">
          Arrastra los residuos en el bote correspondiente
        </h2>
        <p className="w-20 h-20 rounded-full border-green-dark text-green-dark border-4 flex items-center justify-center text-lg">
          1:00
        </p>
      </div>
      <div className="flex justify-between pt-32">
        <div>
          <CardTrash
            value={products && products.length  && products[0].type}
            bgColor="bg-green-own"
            name="organic"
            id="organic"
            setStatus={setStatus}
            // setIncorrect={setIncorrect}
            // setCorrect={setCorrect}
            setCounter={setCounter}
          />
        </div>
        <div className="flex items-center justify-center">
          {status === 'correct' && (
            <img
              // className={`${correct ? 'block' : 'hidden'}`}
              src="https://dl.dropboxusercontent.com/s/5c3uzuc955igtdn/correcto.png"
              alt="correcto"
              style={{
                width: '125px',
              }}
            />
          )}
          {status === 'incorrect' && (
            <img
              // className={`${incorrect ? 'block' : 'hidden'}`}
              src="https://dl.dropboxusercontent.com/s/kgegl1ni2hpupk7/incorrecto.png"
              alt="incorrecto"
              style={{
                width: '125px',
              }}
            />
          )}
        </div>
        <div>
          <CardTrash
            setValue={products && products.length  && products[0].type}
            bgColor="bg-gray-own"
            name="inorganic"
            id="inorganic"
            setStatus={setStatus}
            // setIncorrect={setIncorrect}
            // setCorrect={setCorrect}
            setCounter={setCounter}
          />
        </div>
      </div>

      {products && products.length && (
        <img
          /* onDragStart={() => {
            setValue(products[0].type)
          }} */
          onDragEnd={() => {
            setProducts(products.filter((p) => p.key !== products[0].key))
            if (status === 'correct') {
              setCounter(counter + 1)
            }
          }}
          className="bg-transparent block mx-auto mt-8"
          draggable={true}
          src={products[0].image}
          alt=""
          style={{
            width: '150px',
          }}
        />
      )}
    </section>
  )
}
