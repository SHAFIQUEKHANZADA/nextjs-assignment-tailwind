import Image from "next/image";

const Company = () => {
  return (
    <div className="relative w-full lg:w-[80%] md:w-[80%] mx-auto overflow-hidden lg:mt-36 md:mt-36 mt-20 mb-16">
      <div className="flex lg:gap-14 lg:py-14 md:gap-10 gap-1 animate-scroll lg:animate-none md:animate-none items-center">
        {/* Company Logo Containers */}
        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center rounded-lg px-3 py-1 shrink-0">
          <Image
            src={"/images/axon.png"}
            alt="Axon logo"
            width={110}
            height={90}
            className="object-contain lg:h-[180px] lg:w-[280px] md:h-[180px] md:w-[280px]"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/jetstart.png"}
            alt="Jetstart logo"
            width={120}
            height={90}
            className="object-contain lg:h-[180px] lg:w-[280px] md:h-[180px] md:w-[280px]"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/expedia.png"}
            alt="Expedia logo"
            width={120}
            height={90}
            className="object-contain lg:h-[200px] lg:w-[300px] md:h-[200px] md:w-[300px]"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/qantas.png"}
            alt="Qantas logo"
            width={120}
            height={90}
            className="object-contain lg:h-[200px] lg:w-[300px] md:h-[200px] md:w-[300px]"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/alitalia.png"}
            alt="Alitalia logo"
            width={110}
            height={90}
            className="object-contain lg:h-[180px] lg:w-[280px] md:h-[180px] md:w-[280px]"
          />
        </div>

        {/* Repeat the logos to create the infinite scroll effect */}
        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center rounded-lg px-3 py-1 shrink-0">
          <Image
            src={"/images/axon.png"}
            alt="Axon logo"
            width={110}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/jetstart.png"}
            alt="Jetstart logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/expedia.png"}
            alt="Expedia logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/qantas.png"}
            alt="Qantas logo"
            width={120}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="h-[70px] w-[180px] hover:shadow-2xl flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
          <Image
            src={"/images/alitalia.png"}
            alt="Alitalia logo"
            width={110}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
