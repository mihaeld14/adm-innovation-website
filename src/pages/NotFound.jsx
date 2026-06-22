import { Link } from "react-router"


function NotFound() {

  return (

    <section
      className="
        mx-auto
        flex
        min-h-screen
        max-w-6xl
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >

      <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
        Error 404
      </p>

      <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
        Page not found.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="
          mt-10
          rounded-xl
          bg-white
          px-6
          py-3
          font-semibold
          text-black
          transition
          hover:bg-gray-200
        "
      >
        Return home
      </Link>

    </section>

  )

}


export default NotFound