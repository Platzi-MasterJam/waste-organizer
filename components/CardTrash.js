const CardTrash = ({ name = 'nombre', bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-xl py-2`}
      style={{
        width: '200px',
        height: '240px',
      }}
    >
      <h2 className="text-green-dark text-lg font-bold text-center">{name}</h2>
      <div className="w-full">
        <img
          className="w-9/12 mx-auto"
          src="https://dl.dropboxusercontent.com/s/7bb6ghvn3svp7tu/bote-basura.png"
          alt="basura"
        />
      </div>
    </div>
  )
}

export default CardTrash
