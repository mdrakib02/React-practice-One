import { IoMdCheckmarkCircle } from "react-icons/io";


export default function Features({feature}) {
  return (
    <div>
        <p className="text-xl font-bold flex gap-x-2 items-center">
            <span className="text-green-500"><IoMdCheckmarkCircle></IoMdCheckmarkCircle></span>
            <span className="text-white">{feature}</span>

        </p>
    </div>
  )
}
