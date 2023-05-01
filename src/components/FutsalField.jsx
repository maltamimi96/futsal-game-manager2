import { useState } from "react"
import Player from "./Player"
import Modal from "./Modal"
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa"

const FutsalField = () => {
  const [players, setPlayers] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ])

  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState()

  const handlePlayerChange = (id, input) => {
    const updatedArray = [...players]
    updatedArray[id] = input
    setPlayers(updatedArray)
  }

  const handleReset = () => {
    setPlayers(["", "", "", "", "", "", "", "", "", ""])
    setDate(new Date())
    setTime("")
  }
  const handleDropOut = (id) => {
    handlePlayerChange(id, "")
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
  }
  const handleNewPlayer = () => {
    setPlayers([...players, ""])
  }
  return (
    <div className="relative  ">
      <div
        className=" md:bg-cover bg-center p-2  "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80")`,
        }}>
        {/* //reset button */}
        <div className=" fixed bottom-0 right-2 rounded-lg flex flex-col md:flex-row w-fit">
          <button
            className="md:ml-4 md:px-4 py-1 rounded-sm md:text-2xl text-red-600  flex items-center gap-6"
            onClick={handleNewPlayer}>
            <FaPlusCircle className="text-6xl text-green-500 border-4 rounded-full  " />
          </button>
          <button
            className="md:ml-4 md:px-4 py-1 rounded-sm md:text-2xl text-red-600  flex items-center gap-6"
            onClick={handleReset}>
            <FaTrashAlt className="text-6xl   opacity-75" />
          </button>
        </div>

        <div className="text-4xl  w-full flex justify-between gap-2 mb-5 overflow-hidden xl:px-10">
          <div className="w-fit border p-2 flex-shrink-0 ">
            <h1 className="text-gray-100 italic font-bold bg-red-500 w-fit px-2 mb-2 ">
              Kick Off
            </h1>
            <h1 className="text-2xl text-gray-200 italic font-bold bg-purple-500 w-fit px-2 ">
              {time}
            </h1>
          </div>
          <div className="flex gap-2 text-gray-200 items-center flex-wrap">
            <h1 className="text-xl font-bold italic border p-2  ">
              Set Game Time
            </h1>
            <div className="text-xl space-x-2 p-2  ">
              <input
                type="date"
                className="bg-sky-500/80 rounded p-2"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="text-xl space-x-2 p-2 ">
              <input
                type="time"
                className="bg-sky-500/80 rounded p-2"
                value={time}
                onChange={handleTimeChange}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center ">
            {players.map((player, index) => (
              <Player key={index} name={players[index]} index={index + 1}>
                {players[index] === "" ? (
                  <Modal
                    text={"Join"}
                    setName={handlePlayerChange}
                    index={index}
                  />
                ) : (
                  <button
                    className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => handleDropOut(index)}>
                    Drop Out
                  </button>
                )}
              </Player>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutsalField
