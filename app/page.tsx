import Image from "next/image";
import Content from "./sections/Content";

export const metadata = {
  title: "Krystian Figiela",
  description: "Portfolio of Krystian Figiela",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-4 gap-4 xl:gap-6 xl:pt-24 xl:flex-row xl:items-start xl:justify-center xl:max-w-7xl xl:mx-auto xl:px-4" >
      <section className="left-section_desktop sticky h-fit top-16" >
        <img src="/icons/man-avatar.png" alt="Zdjęcie" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <h2 className="text-2xl font-bold">Krystian Figiela</h2>
        <div className="status">Student at Rzeszów University of Technology</div>

        <div className="divider"></div>

        <div className="left-block">
          <a href="mailto:krystian.figiela000@gmail.com" target="_blank"><img src="/icons/email.png" alt="email"/></a>
          <div className="left-block-info">
            <h3>EMAIL</h3>
            <a href="mailto:krystian.figiela000@gmail.com" target="_blank">krystian.figiela000@gmail.com</a>
          </div>
        </div>
        <div className="left-block">
        <a href="tel:+48696273167"><img src="/icons/phone.png" alt="phone"/></a>
          <div className="left-block-info">
            <h3>PHONE</h3>
            <a href="tel:+48696273167">+48 696 273 167</a>
          </div>
        </div>
        <div className="left-block">
          <a href="https://www.google.com/maps/place/Rakszawa" target="_blank"><img src="/icons/location.png" alt="location"/></a>
          <div className="left-block-info">
            <h3>LOCATION</h3>
            <a href="https://www.google.com/maps/place/Rakszawa" target="_blank">Rakszawa, Poland</a>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center my-3">
          <a href="https://www.linkedin.com/in/krystian-figiela/" target="_blank"><img src="/icons/linkedin.png" alt="linkedin" className="social-logo"/></a>
          <a href="https://github.com/kris-devv" target="_blank"><img src="/icons/github.png" alt="github" className="social-logo"/></a>
          <a href="https://www.instagram.com/kris.figiela/" target="_blank"><img src="/icons/instagram.png" alt="instagram" className="social-logo"/></a>
        </div>
      </section>


      <section className="left-section_mobile relative" >
        <div className="flex flex-row">
          <img src="/smile.png" alt="Zdjęcie" className=" w-30 h-30 bg-[#353536] ml-8 mt-8 mb-4 rounded-xl"/>
          <div className="my-auto ml-6">
            <h2 className="text-2xl font-bold mb-3">Krystian Figiela</h2>
            <div className="status">Student at Rzeszów University of Technology</div>
          </div>
        </div>

        <a href="" className="show-contact">Show contact</a>

        <div className="divider"></div>

        <div className="flex flex-row flex-wrap">
        <div className="left-block">
        <a href="mailto:krystian.figiela000@gmail.com" target="_blank"><img src="/icons/email.png" alt="email"/></a>
          <div className="left-block-info">
            <h3>EMAIL</h3>
            <a href="mailto:krystian.figiela000@gmail.com" target="_blank">krystian.figiela000@gmail.com</a>
          </div>
        </div>
        <div className="left-block">
          <a href="tel:+48696273167"><img src="/icons/phone.png" alt="phone"/></a>
          <div className="left-block-info">
            <h3>PHONE</h3>
            <a href="tel:+48696273167">+48 696 273 167</a>
          </div>
        </div>
        <div className="left-block">
        <a href="https://www.google.com/maps/place/Rakszawa" target="_blank"><img src="/icons/location.png" alt="location"/></a>
          <div className="left-block-info">
            <h3>LOCATION</h3>
            <a href="https://www.google.com/maps/place/Rakszawa" target="_blank">Rakszawa, Poland</a>
          </div>
        </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-row gap-4 my-3 mb-6 ml-8 xl:justify-center xl:mb-0">
          <a href="https://www.linkedin.com/in/krystian-figiela/" target="_blank"><img src="/icons/linkedin.png" alt="linkedin" className="social-logo"/></a>
          <a href="https://github.com/kris-devv" target="_blank"><img src="/icons/github.png" alt="github" className="social-logo"/></a>
          <a href="https://www.instagram.com/kris.figiela/" target="_blank"><img src="/icons/instagram.png" alt="instagram" className="social-logo"/></a>
        </div>
      </section>
      <Content />
    </div>
  );
}
