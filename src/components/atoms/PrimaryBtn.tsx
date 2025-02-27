import ReactNode from 'react'

type PropsType = {
    children:ReactNode;
}

export const PrimaryBtn = ({ children }: PropsType) => {
  return (
    <div className="pt-[50px]">
      <button className="bg-lime-800 text-white rounded-lg p-4 text-lg">
          { children }
      </button>
    </div>
  )
}