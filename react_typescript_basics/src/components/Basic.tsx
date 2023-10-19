import { ReactNode } from "react";

type PropsType = {
    heading: string,
    count?: number,
    funct1: (num: number) => void,
    children: ReactNode
} 

const Box = ({children, heading, count = 5, funct1}: PropsType) => {
    funct1(123);
  return (
    <div>
        <h1>{heading}</h1>
        <p>{count}</p>
        <h2>{children}</h2>
    </div>
  )
}

export default Box