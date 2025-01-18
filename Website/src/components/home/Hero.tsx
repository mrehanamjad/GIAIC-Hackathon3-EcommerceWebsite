import Image from "next/image"
import { Button } from "../ui/button"
import Container from "../Container"

function Hero() {
  return (
    <section className="bg-[#FBEBB5]">
    <Container>
    <div className="w-full h-[35rem] max-lg:flex max-md:flex-col max-lg:justify-center max-lg:items-center lg:relative  lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_3fr]  lg:row-span-2">
        <div className="col-span-2 row-span-1 max-lg:hidden"></div>
        <div className="md:w-[27.5rem] w-full z-10 lg:ml-auto lg:mr-5 lg:mb-auto max-lg:flex max-lg:justify-center max-lg:pl-4 max-md:items-center max-lg:flex-col">
            <h1 className="font-medium max-md:text-center max-md:mt-10 text-5xl lg:text-[4rem] lg:leading-[1.3]">Rocket single seater</h1>
            <Button variant={'fBtn1'} className="mt-6 w-fit">Shop Now</Button>
        </div>
        <Image 
        src={'/Rocket single seater 1.png'} 
        alt={'white sofa chair'}
        width={1000}
        height={1000}
        priority
        className="lg:absolute flex-1 w-80 lg:w-[38rem] lg:right-3 lg:-bottom-52"
        />
    </div>
    </Container>
    </section>
  )
}

export default Hero