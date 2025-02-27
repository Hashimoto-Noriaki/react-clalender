import { ReactNode } from 'react'

type PropsType = {
    onClick:() => void;
    children:ReactNode
}

export const PrimaryBtn = ({ onClick,children }: PropsType) => {
  return (
    <button className="bg-lime-800 text-white rounded-lg text-lg p-4" onClick={onClick}>
        { children }
    </button >
  )
}

export default PrimaryBtn