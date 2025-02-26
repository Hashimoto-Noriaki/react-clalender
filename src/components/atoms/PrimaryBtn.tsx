import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode
}

export const PrimaryBtn = ({ children }: PropsType) => {
  return (
    <button className="bg-lime-800 text-white rounded-lg text-lg p-4">
        { children }
    </button >
  )
}

export default PrimaryBtn