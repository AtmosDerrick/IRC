import NavBar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
//images
import development from "../assets/development.jpg";
export default function Home() {
  return (
    <main className="w-full mx-auto">
      <NavBar />
      <div>
        <div className="  ">
          <div className="absolute z-20 w-full  justify-center mx-auto h-[60vh] flex  items-center">
            <div className="">
              {" "}
              <h2 className="text-xl lg:text-4xl text-center font-bold text-white drop-shadow-xl">
                Empowering Communities, Enriching Lives
              </h2>
              <p className="text-gray-200 text-center text-xs lg:text-base">
                intergrity Research and Consultancy -{" "}
                <span>Your Partner in Sustainable Development</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="landingimage1.png"
            alt="intergrity research and consultancy"
            className="w-full h-[80vh]"
          />
        </div>
      </div>
      <div className="w-full px-4 lg:px-0 lg:w-3/4 xl:w-2/4 mx-auto text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">
          Welcome to intergrity Research and Consultancy
        </h3>
        <p className="font-italic">
          Welcome to Integrity Research and Consultancy (IRC)! We're delighted
          to have you here as we embark on a journey of positive impact and
          growth. Explore our services, meet our dedicated team, and discover
          how we're shaping a better future for communities in Ghana and Africa.
          Thank you for joining us on this inspiring path.
        </p>
        <div className="mx-auto h-[2px] bg-blue-500 w-40 mt-4"></div>
      </div>
      <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto mt-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="h-[30rem] bg-gray-50 border-b-4 border-blue-500">
            <div>
              <img src="education.jpg" alt="education" />
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 text-xl font-extrabold flex justify-center items-center mt-[-30px] z-20">
                01
              </div>
            </div>

            <h2 className="text-center font-semibold text-xl mt-2">
              {" "}
              Education and Human Development{" "}
            </h2>
            <p className="text-sm text-justify p-2">
              IRC's focus is on improving education at all levels, both formal
              and informal, empowering individuals with knowledge and skills to
              foster personal and community growth through training programs and
              educational projects.
            </p>
          </div>

          <div className="h-[30rem] bg-gray-50 border-b-4 border-blue-500">
            <div>
              <img src="skills.jpg" alt="education" />
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 text-xl font-extrabold flex justify-center items-center mt-[-30px] z-20">
                02
              </div>
            </div>
            <h2 className="text-center font-semibold text-xl mt-2">
              {" "}
              Skill and Entrepreneurship
            </h2>
            <p className="text-sm text-justify p-2">
              IRC is dedicated to fostering sustainable community growth and
              well-being by implementing impactful projects and engaging
              communities for lasting positive change.
            </p>
          </div>
          <div className="h-[30rem] bg-gray-50 border-b-4 border-blue-500">
            <div>
              <img src="agriculture.jpg" alt="education" />
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 text-xl font-extrabold flex justify-center items-center mt-[-30px] z-20">
                03
              </div>
            </div>
            <h2 className="text-center font-semibold text-xl mt-2">
              {" "}
              Agriculture and Rural Development
            </h2>
            <p className="text-sm text-justify p-2">
              Elevating agriculture as an economic driver and enhancing rural
              livelihoods through initiatives like agriculture project
              management, post-harvest technology, and rural development
              projects is our primary purpose.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 pt-[60px] mt-24 py-8">
        <div className="w-full xl:w-3/4 px-4 xl:px-0 mx-auto">
          <div className="w-full lg:w-2/4 mx-auto text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">what we do</h3>
            <p className="font-italic">
              At IRC, we specialize in empowering communities through education,
              sustainable development, agriculture enhancement, and skill
              development. Our initiatives include agriculture project
              management, post-harvest technology, and rural development
              projects, all aimed at improving the quality of life in Ghana and
              Africa
            </p>
            <div className="mx-auto h-[4px] bg-blue-500 w-40 mt-4"></div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            <div className="relative h-[22rem] pt-8 bg-white shadow-xl rounded-2xl">
              <div className="w-full flex justify-center items-center  h-16 ">
                <div className="rounded-full p-[10px]   border-2 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-center font-semibold text-xl mt-2">
                {" "}
                Education and Human Development{" "}
              </h2>
              <p className="text-xs mt-4 text-center p-2">
                Empowering individuals and organizations through educational
                programs and training to enhance their capabilities and
                opportunities.
              </p>
              <div className="w-full flex absolute  justify-center  bottom-5">
                {" "}
                <button className="bg-blue-500 text-white rounded-xl px-4 text-sm py-1 ">
                  Read More
                </button>
              </div>
            </div>

            <div className="relative h-[22rem] pt-8 bg-white shadow-xl rounded-2xl">
              <div className="w-full flex justify-center items-center  h-16 ">
                <div className="rounded-full p-[10px]   border-2 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-center font-semibold text-xl mt-2">
                {" "}
                Research and Innovation
              </h2>
              <p className="text-xs mt-4 text-center p-2">
                Conducting research to gather valuable insights, inform
                strategic decisions, and fostering innovation to address complex
                challenges effectively.
              </p>
              <div className="w-full flex absolute  justify-center  bottom-5">
                {" "}
                <button className="bg-blue-500 text-white rounded-xl px-4 text-sm py-1 ">
                  Read More
                </button>
              </div>
            </div>
            <div className="relative h-[22rem] pt-8 bg-white shadow-xl rounded-2xl">
              <div className="w-full flex justify-center items-center  h-16 ">
                <div className="rounded-full p-[10px]   border-2 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-center font-semibold text-xl mt-2">
                {" "}
                Sustainable Agriculture
              </h2>
              <p className="text-xs mt-4 text-center p-2">
                Promoting sustainable farming practices, including crop and
                animal production, while also improving post-harvest technology
                to maximize agricultural productivity and economic growth.
              </p>
              <div className="w-full flex absolute  justify-center  bottom-5">
                {" "}
                <button className="bg-blue-500 text-white rounded-xl px-4 text-sm py-1 ">
                  Read More
                </button>
              </div>
            </div>
            <div className=" relative h-[22rem] pt-8 bg-white shadow-xl rounded-2xl">
              <div className="w-full flex justify-center items-center  h-16 ">
                <div className="rounded-full p-[10px]   border-2 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-center font-semibold text-xl mt-2">
                {" "}
                Project Management and Capacity Building
              </h2>
              <p className="text-xs mt-4 text-center p-2">
                Expertly managing projects, conducting feasibility studies, and
                providing capacity-building services to individuals, government
                entities, and international organizations, ensuring successful
                and impactful initiatives.
              </p>
              <div className="w-full flex absolute  justify-center  bottom-5">
                {" "}
                <button className="bg-blue-500 text-white rounded-xl px-4 text-sm py-1 ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}

`1. Education and Capacity Building:

Focus: Empowering individuals through education and skill development.
Initiatives: Formal and informal education programs, vocational training, and capacity-building initiatives.
2. Sustainable Community Development:

Focus: Enhancing the overall well-being of communities.
Initiatives: Implementing sustainable development projects, community engagement, and resource management.
3. Agriculture and Rural Empowerment:

Focus: Elevating agriculture as an economic driver and improving rural areas.
Initiatives: Agriculture project management, value chain enhancement, post-harvest technology, and rural development projects.
4. Entrepreneurship and Employment:

Focus: Reducing unemployment and fostering entrepreneurship.
Initiatives: Skill development programs, microenterprise support, and job creation initiatives.`;
