import pattern6 from "../assets/images/pattern6.png"
import pattern7 from "../assets/images/pattern7.png"

const Player = ({ name, index, children }) => {
  return (
    <div
      // style={{
      //   backgroundImage: ` ${name ? `url(${pattern6})` : `url(${pattern7})`} `,
      // }}
      className={`flex flex-col items-center   md:gap-3 bg-contain  rounded-2xl w-fit h-fit md:p-2 md:w-60 md:h-60 `}>
      {name ? (
        <button className="bg-cyan-600 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 flex items-center justify-center hover:scale-110 hover:brightness-75 ">
          <p className="font-extrabold text-gray-200 text-6xl italic animate-pulse ">
            {index}
          </p>
        </button>
      ) : (
        <div className=" w-20 h-20 md:w-24 md:h-24 rounded-full border-4 flex items-center justify-center hover:scale-110 hover:brightness-75 ">
          <p className="font-extrabold text-gray-200 text-6xl italic  animate-pulse">
            {index}
          </p>
        </div>
      )}

      <h1 className=" font-semibold text-red-700   rounded-full tracking-wide capitalize   ">
        <span className="text-gray-200 text-3xl md:tracking-widest   px-2 ">
          {name || "Available"}
        </span>
      </h1>
      {children}
    </div>
  )
}

export default Player
