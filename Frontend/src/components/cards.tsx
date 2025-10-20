interface Props{
    text:string
    image:any
}

function Cards({text,image}:Props) {
  return (
    <div className="w-40 items-center gap-x-5 rounded-lg flex p-1 shadow-lg inset-shadow-xs">
      <div className="w-10 rounded-full"><img className="w-full" src={image} alt="image" /></div>
      <p>{text}</p>
    </div>
  )
}

export default Cards
