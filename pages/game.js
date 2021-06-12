import { useState, useEffect } from 'react'
import CardTrash from 'components/CardTrash'

export default function Juego() {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState()
  const [incorrect, setIncorrect] = useState(false)
  const [correct, setCorrect] = useState(false)

  useEffect(() => {}, [])

  return (
    <section className="w-6/12 mx-auto">
      <div className="pt-8 pr-5 flex items-center justify-center">
        <h2 className="mr-26 text-center text-4xl">Organiza los residuos</h2>
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
          <img
            className={`${correct ? 'block' : 'hidden'}`}
            src="https://dl.dropboxusercontent.com/s/5c3uzuc955igtdn/correcto.png"
            alt="correcto"
            style={{
              width: '125px',
            }}
          />
          <img
            className={`${incorrect ? 'block' : 'hidden'}`}
            src="https://dl.dropboxusercontent.com/s/kgegl1ni2hpupk7/incorrecto.png"
            alt="incorrecto"
            style={{
              width: '125px',
            }}
          />
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

      <img
        id="organico"
        onDragStart={(e) => {
          setValue(e.target.id)
        }}
        onDragEnd={() => {
          if (correct) {
            setCounter(counter + 1)
          }
          console.log(counter)
        }}
        className="bg-transparent block mx-auto mt-8"
        draggable={true}
        src="https://dl.dropboxusercontent.com/s/n6b3hc9eoew0a4h/huevo.png"
        alt=""
        style={{
          width: '150px',
        }}
      />
    </section>
  )
}
