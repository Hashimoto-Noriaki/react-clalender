import { ComponentProps } from 'react'

export const Textarea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea 
    {...props}
    className="w-full border-lime-800 border-solid border-4 p-2 rounded-md"
/>
  )
}
