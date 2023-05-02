import BottomNav from "./BottomNav"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>

      <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 p-14 bg-gray-100">
        <div className="capitalize space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="">How airbnb works</p>
          <p className="">news room</p>
          <p className="">investors</p>
          <p className="">airbnb plus</p>
          <p className="">airbnb luxe</p>
        </div>
        <div className="capitalize space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="">How airbnb works</p>
          <p className="">news room</p>
          <p className="">investors</p>
          <p className="">airbnb plus</p>
          <p className="">airbnb luxe</p>
        </div>
        <div className="capitalize space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="">How airbnb works</p>
          <p className="">news room</p>
          <p className="">investors</p>
          <p className="">airbnb plus</p>
          <p className="">airbnb luxe</p>
        </div>
        <div className="capitalize space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="">How airbnb works</p>
          <p className="">news room</p>
          <p className="">investors</p>
          <p className="">airbnb plus</p>
          <p className="">airbnb luxe</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
