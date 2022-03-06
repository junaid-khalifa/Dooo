import { CgDanger } from "react-icons/cg"
import { OptimizationProps } from "../../types"
import Toggle from "../Toggle"

const Optimization = (props: OptimizationProps) => {
    return (
        <div className='flex gap-2 items-center'>
            <Toggle />
            <h1 className='font-bold'>{props.text}</h1>
            <CgDanger className='items-center text-black' />
        </div>
    )
}

export default Optimization