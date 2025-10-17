import { images } from "../types/image"

export default function AboutAppstechLabs() {
  return (
    <div className="flex flex-col w-full">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={images.logo} alt="Appstech Labs Logo" className="h-15 w-25" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 text-sm">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 text-sm">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Internship
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 text-sm">🌐</button>
            <span className="text-sm font-medium">EN</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${images.background})`,
        }}
      >
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AppstechLabs</h1>
          <p className="text-base md:text-lg leading-relaxed">
            AppsTech Labs is a solution center created to showcase existing technologies for our customers as well as
            develop cutting edge ones. lorem ipsum this is even better lets make this mind blowing
          </p>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="py-20 bg-white w-full flex justify-center">
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-[#9B2C3F] text-white rounded-3xl p-12 flex flex-col justify-center items-center shadow-lg relative">
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Lorem Ipsum dolor sit sans</p>
              <p className="text-lg font-semibold">serif</p>
              <p className="text-base mt-4">This is just a dummy text</p>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={images.first} alt="team member" className="rounded-2xl object-cover w-full h-48" />
            <img
              src={images.second}
              alt="team collaboration"
              className="rounded-2xl object-cover w-full h-48"
            />
            <img
              src={images.third}
              alt="team member portrait"
              className="rounded-2xl object-cover w-full h-48"
            />
            <img
              src={images.fourth}
              alt="team member working"
              className="rounded-2xl object-cover w-full h-48"
            />
          </div>
        </div>
      </section>

      {/* How It Started Section */}
      <section className="py-20 bg-[#0052A3] text-white w-full">
        <div className="max-w-4xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Started</h2>

          {/* Jane Doe Badge - Top Right */}
          <div className="absolute -top-4 right-4 md:right-8 flex items-center gap-2">
            <img
              src={images.fifth}
              alt="Jane Doe"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Jane Doe</span>
          </div>

          {/* John Doe Badge - Bottom Left */}
          <div className="absolute -bottom-4 left-4 md:left-8 flex items-center gap-2">
            <img
              src={images.sixth}
              alt="John Doe"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">John Doe</span>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-center px-4 md:px-16">
            AppsTech Labs is a solution center created to showcase existing technologies for our customers as well as
            develop cutting edge ones. lorem ipsum this is even better lets make this mind blowing
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 w-full flex flex-col items-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Founder</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl px-6">
          {/* Profile Images */}
          <div className="relative flex-shrink-0">
            <img
              src={images.seventh}
              alt="Rebecca Enonchong"
              className="w-56 h-56 rounded-full object-cover shadow-xl"
            />
            <img
              src={images.eighth}
              alt="Rebecca Enonchong casual"
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Founder Info */}
          <div className="text-center md:text-left max-w-md mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Rebecca Enonchong</h3>
            <p className="text-gray-700 leading-relaxed">
              a Cameroonian technology entrepreneur and also the founder and CEO of AppsTech. She is best known for her
              work promoting technology in Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
