import ReactNode from 'react'

type PropsType = {
    onClick:() => void;
    children:ReactNode;
}

export const PrimaryBtn = ({ onClick,children }: PropsType) => {
  return (
    <div className="pt-[50px]">
      <button className="bg-lime-800 text-white rounded-lg p-4 text-lg" onClick={onClick}>
          { children }
      </button>
    </div>
  )
}