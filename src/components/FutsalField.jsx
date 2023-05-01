import { useState } from "react"
import Player from "./Player"
import Modal from "./Modal"
import pattern5 from "../assets/images/pattern5.png"

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
    setPlayers(["", "", "", "", "", "", "", "", "", "", "", ""])
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

  return (
    <div className="h-fit w-full border-gray-700 bg-cyan-500   ">
      <section
        className="p-6"
        style={{
          backgroundImage: `url(${pattern5})`,
        }}>
        <div className="flex gap-4 justify-between items-center md:items-start flex-col md:flex-row ">
          <div className=" rounded-lg flex flex-col md:flex-row">
            <button
              className=" px-4 py-2 text-red-900 font-semibold   rounded-full"
              onClick={handleReset}>
              Clear All
            </button>
            <button
              className=" text-2xl px-4  text-sky-800 font-bold   rounded-full border hover:bg-sky-500"
              onClick={handleReset}>
              Submit
            </button>
          </div>
          <div className="flex items-center flex-col md:flex-row px-4 border-2  gap-4 font-bold rounded-md">
            <h1>DATE AND TIME</h1>
            <input
              type="date"
              value={date.toLocaleString()}
              onChange={handleDateChange}
            />
            <input type="time" value={time} onChange={handleTimeChange} />

            <h1>Date {date.toLocaleString()}</h1>

            <h1>Time {time}</h1>
          </div>
        </div>
      </section>

      <section
        className="bg-green-500 flex flex-col gap-6 md:gap-20 justify-between items-center h-full mx-auto drop-shadow-2xl border-b-8 border-white"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80")`,
        }}>
        {/* team 1 */}
        <div className="flex flex-col justify-center items-center gap-6 md:gap-20">
          {/* keeper */}
          <div className="border-4 rounded-full p-2 md:p-10">
            <Player name={players[0]} index={1}>
              {players[0] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={0} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(0)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
          {/* <cbs/ */}
          <div className="flex items-center gap-2 md:gap-40 border-4 rounded-full p-2 md:p-10 justify-between">
            <Player name={players[1]} index={2}>
              {players[1] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={1} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(1)}>
                  Drop Out
                </button>
              )}
            </Player>
            <Player name={players[2]} index={3}>
              {players[2] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={2} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(2)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
          {/* attack */}
          <div className="flex items-center gap-2 md:gap-40 border-4 rounded-full p-2 md:p-10">
            <Player name={players[3]} index={4}>
              {players[3] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={3} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(3)}>
                  Drop Out
                </button>
              )}
            </Player>
            <Player name={players[4]} index={5}>
              {players[4] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={4} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(4)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
        </div>
        <div className="bg-gray-300 opacity-75 w-full h-fit border-t-2 md:border-t-8 border-b-2 md:border-b-8 border-gray-700 flex justify-around">
          <div>
            <Player name={players[10]} index={11}>
              {players[10] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={10} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(10)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
          <div className="flex items-center uppercase">
            <h1 className="text-2xl md:text-4xl text-center my-auto font-extrabold">
              Game Made BY TEST
            </h1>
          </div>
          <div>
            <Player name={players[11]} index={12}>
              {players[11] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={11} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(11)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
        </div>
        {/* team 2 */}
        <div className="flex flex-col justify-center items-center gap-6 md:gap-20">
          {/* attack */}
          <div className="flex items-center gap-2 md:gap-40 border-4 rounded-full p-2 md:p-10">
            <Player name={players[5]} index={6}>
              {" "}
              {players[5] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={5} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(5)}>
                  Drop Out
                </button>
              )}
            </Player>
            <Player name={players[6]} index={7}>
              {" "}
              {players[6] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={6} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(6)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
          {/* <cbs/ */}
          <div className="flex items-center gap-2 md:gap-40 border-4 rounded-full p-2 md:p-10">
            <Player name={players[7]} index={8}>
              {" "}
              {players[7] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={7} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(7)}>
                  Drop Out
                </button>
              )}
            </Player>
            <Player name={players[8]} index={9}>
              {" "}
              {players[8] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={8} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(8)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
          {/* keeper */}
          <div className="border-4 rounded-full p-2 md:p-10">
            <Player name={players[9]} index={10}>
              {" "}
              {players[9] === "" ? (
                <Modal text={"Join"} setName={handlePlayerChange} index={9} />
              ) : (
                <button
                  className="text-white bg-green-500 rounded-full active:bg-pink-600 font-bold  md:text-xl px-8 py-1  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDropOut(9)}>
                  Drop Out
                </button>
              )}
            </Player>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FutsalField
