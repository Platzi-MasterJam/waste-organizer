import { useState } from 'react'
import CardTrash from 'components/CardTrash'

export default function Juego() {
  const [incorrect, setIncorrect] = useState(false)
  const [correct, setCorrect] = useState(false)

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
          <CardTrash bgColor="bg-green-own" name="orgánico" />
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
          <CardTrash bgColor="bg-gray-own" name="inorgánico" />
        </div>
      </div>
      <div
        className="mx-auto mt-8"
        style={{
          width: '150px',
        }}
      >
        <img
          src="https://dl.dropboxusercontent.com/s/n6b3hc9eoew0a4h/incorrecto.png"
          alt=""
        />
      </div>
    </section>
  )
}
