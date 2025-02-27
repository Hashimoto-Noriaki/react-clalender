import { ComponentProps } from 'react-router-dom'

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input
        {...props}
        className="w-full border-lime-800 border-4 border-solid p-2"
    />
  )
}