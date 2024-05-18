import { FC } from "react"

interface CardType {
  data:{
    id: string,
  name: string,
  description: string,
  price: number,
  status: string,
  category_id: string,
  created: string,
  updated: string
  }
}

const Card:FC<CardType> = (props) => {
  return (
    <>
    <div className="card shadow-lg p-8 w-[18rem] rounded-lg border bg-slate-100 cursor-pointer hover:translate-x-2 hover:translate-y-2 hover:shadow-2xl duration-500">
    <h1 className="text-xl font-semibold">Nomi: {props.data.name}</h1>
    <h3>izoh: {props.data.description}</h3>
    <h3>nrxi: {props.data.price}</h3>
    <h3>holati: {props.data.status}</h3>
    </div>
    </>
  )
}

export default Card
