import { useState, useEffect } from 'react'
import CardTrash from 'components/CardTrash'
import axios from 'axios'

export default function Juego() {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState()
  const [incorrect, setIncorrect] = useState(false)
  const [correct, setCorrect] = useState(false)
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
            value={value}
            bgColor="bg-green-own"
            name="organico"
            id="organico"
            setIncorrect={setIncorrect}
            setCorrect={setCorrect}
            setCounter={setCounter}
          />
        </div>
        <div className="flex items-center justify-center">
          {correct ? (
            <img
              className={`${correct ? 'block' : 'hidden'}`}
              src="https://dl.dropboxusercontent.com/s/5c3uzuc955igtdn/correcto.png"
              alt="correcto"
              style={{
                width: '125px',
              }}
            />
          ) : (
            <img
              className={`${incorrect ? 'block' : 'hidden'}`}
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
            setValue={value}
            bgColor="bg-gray-own"
            name="inorganico"
            id="inorganico"
            setIncorrect={setIncorrect}
            setCorrect={setCorrect}
            setCounter={setCounter}
          />
        </div>
      </div>

      {products && products.length && (
        <img
          id="organico"
          onDragStart={() => {
            setValue(products[0].type)
          }}
          onDragEnd={() => {
            if (correct) {
              setCounter(counter + 1)
              setProducts(products.filter(p => p.key !== products[0].key))
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
