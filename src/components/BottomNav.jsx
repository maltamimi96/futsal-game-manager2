import Navbar from "./Navbar"
import {
  BeakerIcon,
  PlusCircleIcon,
  TrashIcon,
  ArrowPathIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/solid"
function BottomNav({ children, add, remove, reload }) {
  return (
    <div className=" h-20 fixed bottom-0 md:right-2 inline-flex   px-8 w-full md:w-fit drop-shadow-md  ">
      <div className="bg-gray-700/90 w-full rounded-2xl mb-4 flex justify-around md:gap-8 md:p-4">
        <button className=" hover:scale-105  " onClick={add}>
          <PlusCircleIcon className="w-10 h-10 text-cyan-400" />
        </button>

        <button className=" hover:scale-105" onClick={reload}>
          <ArrowPathIcon className="w-10 h-10 text-cyan-400" />
        </button>
        <button className="hover:scale-105 " onClick={remove}>
          <MinusCircleIcon className="w-10 h-10 text-cyan-400" />
        </button>
      </div>
    </div>
  )
}

export default BottomNav
