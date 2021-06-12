const CardTrash = ({
  setCorrect,
  setIncorrect,
  value,
  name = 'nombre',
  bgColor,
  id,
}) => {
  return (
    <div
      className={`${bgColor} block rounded-xl py-2 hover:scale-150 transition-colors`}
      style={{
        width: '200px',
        height: '240px',
      }}
    >
      <h2 className="text-green-dark text-lg font-bold text-center">{name}</h2>
      <div className="w-full">
        <img
          className="transition-transform w-9/12 mx-auto"
          id={id}
          onDragOver={(e) => {
            e.preventDefault()
            e.target.style = 'transform: scale(1.1)'
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            e.target.style = 'transform: scale(1)'
          }}
          onDrop={(e) => {
            e.preventDefault()
            const isCorrect = value === e.target.id
            if (isCorrect) {
              setCorrect(isCorrect)
            } else {
              setIncorrect(true)
            }
            e.target.style = 'transform: scale(1)'
          }}
          src="https://dl.dropboxusercontent.com/s/7bb6ghvn3svp7tu/bote-basura.png"
          alt="basura"
        />
      </div>
    </div>
  )
}

export default CardTrash
