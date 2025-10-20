import { Link } from "react-router-dom"
import Cards from "../../components/cards"
import image from "../../types/image"
import { FaArrowCircleRight } from "react-icons/fa"
import ImageSlider from "../../components/swiper"
import { IoChatbubbleOutline, IoCopyOutline, IoShareSocialOutline } from "react-icons/io5"



function Home() {

  const currentURL = window.location.href

  const handlecopy = async () =>{
    try{
      await navigator.clipboard.writeText(currentURL)
      alert("Link Copied successfully")
    }
    catch(err){
       alert("failed to copy link")
    }
  }

    const handleShare = async () => {
    const shareData = {
      title: "Check out this page!",
      text: "I found something interesting!",
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
      console.log("Link shared successfully!");
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  return (
    <div className="">
      {/** header section */}
      <section className="flex flex-col items-center py-6">
        <h1 className="md:text-5xl p-3 sm:text-3xl text-2xl">
            We Nurture Innovation 
        </h1>
        <p className="md:text-xl sm:text-lg text-md text-center p-3 text-black/50">
            AppsTech Labs is a solution center created to showcase existing technologies for our customers 
            <br/>as well as develop cutting edge ones.
        </p>
        <div className="lg:flex lg:gap-x-20 lg:py-20 lg:justify-center md:grid md:grid-cols-3  sm:grid sm:grid-cols-2 sm:gap-6 sm:py-10 grid grid-cols-1 gap-6 py-6">
            <Cards text="SQL Database" image={image.db}/>
            <Cards text="Web Dev" image={image.code}/>
            <Cards text="AI" image={image.AI}/>
            <Cards text="Mobile Dev" image={image.mobile}/>
        </div>
      </section>

      <section className=" flex md:flex md:flex-col  flex-col p-6 items-center lg:flex lg:flex-row lg:items-center md:items-center  lg:justify-between">
        <div className="flex-1 pr-3 flex flex-col gap-y-5">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-medium">Innovation without Boundaries </h1>
          <p className="lg:text-3xl md:text-xl text-black/50">Dive with us into a whole new era where nothing seems impossible</p>
        </div>
        <div className="relative flex-1 flex">
          <div className="w-full md:pl-[10rem] md:pb-[10rem] z-[-1]"><img src={image.innovation} className="lg:w-[90%] md:w-[70%] rounded-xl" alt="" /></div>
          <img className="lg:absolute md:absolute sm:absolute absolute lg:w-[40%] md:w-[30%] sm:w-[30%] w-[30%] md:bottom-0 md:right-0 lg:left-0  md:rounded-xl lg:bottom-0 lg:rounded-xl sm:bottom-0 sm:rounded-lg bottom-0 rounded-lg" src={image.AI_key} alt="" />
        </div>
      </section>

      {/**Intern section */}
      <section className="p-6 lg:flex md:flex sm:flex lg:flex-row md:flex-row sm:flex-col sm:gap-y-6 items-center lg:mt-[3rem]">
        <div className="lg:flex-1 md:flex-1 lg:pr-4 md:pr-3 lg:h-[60vh] md:h-[50vh]">
          <img src={image.interns} alt="interns" className="h-full object-cover rounded-xl" />
        </div>
        <div className="lg:flex md:flex lg:gap-y-3 lg:flex-col md:flex-col lg:flex-1/2 md:flex-1 flex-0 lg:ml-4 md:ml-3 p-6 bg-tertiary rounded-xl">
          <div className="flex flex-col lg:gap-y-5 md:gap-y-4 ">
            <h1 className="lg:text-5xl md:text-3xl sm:text:xl">Intern With Us</h1>
            <p className="lg:text-3xl md:text-xl sm:text-lg text-black/50">We offer a three month internship training for both academic and non academic purposes </p>
          </div>
          <div className="lg:flex lg:flex-row md:flex md:flex-col hidden sm:flex sm:flex-col flex-col self-center lg:items-center md:items-center sm:items-center items-center mt-[2rem] lg:gap-x-[28rem] lg:mt-[3rem]">
            <p className="lg:text-2xl md:text-xl">Some Fields include</p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 ">
              <Cards text="SQL Database" image={image.db}/>
              <Cards text="Web Dev" image={image.code}/>
              <Cards text="AI" image={image.AI}/>
              <Cards text="Mobile Dev" image={image.mobile}/>
            </div>
          </div>
          <div className="text-green-500 md:flex items-center mt-[3rem] gap-x-3 md:self-end flex self-center ">
            <Link className="md:text-xl text-lg" to="/internship">Apply Now</Link>
            <FaArrowCircleRight size={30}/>
          </div>
        </div>
      </section>
      <section className="p-6">
        <ImageSlider/>
      </section>
      <section className="p-6">
        <div className="p-6 bg-primary flex flex-col rounded-xl">
          <p className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg">
            Visit us today  for your Tech solutions<br/>
            email us at : appstechlabs@gmail.com
          </p>
          <div className="flex self-end text-white gap-x-5">
            <IoCopyOutline size={30} onClick={() => handlecopy()} className="cursor-pointer hover:text-secondary"/>
            <IoShareSocialOutline size={30} onClick={() => handleShare()} className="cursor-pointer hover:text-secondary"/>
            <IoChatbubbleOutline size={30} className="cursor-pointer hover:text-secondary"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
