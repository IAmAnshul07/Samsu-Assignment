import { useSelector } from "react-redux";
import BlogCard from "../../components/Card";
import Carousel from "../../components/carousel";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col w-2/3 p-4">
          <div className="w-full mx-auto">
            <Carousel />
          </div>

          {blogs.length === 0 && (
            <h1 className="text-center mt-10">No blogs found</h1>
          )}
          {!!blogs.length && (
            <div className="flex flex-col items-center w-4/5 mx-auto">
              {blogs.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  body={post.body}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-px bg-neutral-300 mx-4" />

        <div className="flex flex-col w-1/2 p-4">
          <div className="flex">
            <div className="w-80 p-4 bg-white">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Staff Picks</h2>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:96:96/1*ZCHil2J5kKDmeDpLygApHA.jpeg"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>

                  <div>
                    <a
                      href="#"
                      className="text-sm  text-black font-light hover:underline"
                    >
                      Jeffery Smith
                    </a>
                    <h3 className="text-md font-medium">
                      <a href="#" className="hover:underline">
                        The Impact of Remote Work on My Children
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:96:96/1*2fqJoMNihNVFYRyJD2IUQA@2x.jpeg"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>
                  <div>
                    <a
                      href="#"
                      className="text-sm  text-black font-light hover:underline"
                    >
                      Yutong Xue
                    </a>
                    <h3 className="text-md font-medium">
                      <a href="#" className="hover:underline">
                        How to become a Senior Designer
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:96:96/1*4P6-QbfT-akzj_QF4beKKQ@2x.jpeg"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>
                  <div>
                    <a
                      href="#"
                      className="text-sm  text-black font-light hover:underline"
                    >
                      Grace Loh Prasad
                    </a>
                    <h3 className="text-md font-medium">
                      <a href="#" className="hover:underline">
                        It is OK If Your Writing it is for Everyone
                      </a>
                    </h3>
                  </div>
                </div>
                <a href="#" className="text-green-600 ">
                  See the full list
                </a>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  Recommended Topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Ethereum
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Product Management
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Data Visualization
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Feminism
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Equality
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Freelancing
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-300"
                  >
                    Climate Change
                  </a>
                </div>
                <a href="#" className="text-green-600  mt-2 block">
                  See more topics
                </a>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Who to Follow</h2>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:96:96/1*FA3WVwaJysEb3DpF-zDceA.jpeg"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-md font-medium text-black  hover:underline"
                    >
                      smoul
                    </a>
                    <p className="text-sm text-gray-600">
                      3X Top Writer | Writing about audience building,
                      productivity and growth.
                    </p>
                  </div>
                  <button className="btn btn-outline btn-sm rounded-full">
                    Follow
                  </button>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:64:64/1*Z5dMY4-vS6G69lMMdn3xIQ.jpeg"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-md font-medium text-black hover:underline"
                    >
                      Liu Zuo Lin
                    </a>
                    <p className="text-sm text-gray-600">
                      SWE, Technical Writer, Python Fanatic
                    </p>
                  </div>
                  <button className="btn btn-outline btn-sm rounded-full">
                    Follow
                  </button>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    alt="Anshul Patidar"
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://miro.medium.com/v2/resize:fill:96:96/1*CqITj4Cs8XSIKyHICtkKyA.png"
                    width="32"
                    height="32"
                    loading="lazy"
                  ></img>
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-md font-medium text-black hover:underline"
                    >
                      Alexander obidiegwu
                    </a>
                    <p className="text-sm text-gray-600">
                      Explaining foundational concepts and principles of Python,
                      SQL and Mathematics.
                    </p>
                  </div>
                  <button className="btn btn-outline btn-sm rounded-full">
                    Follow
                  </button>
                </div>
                <a href="#" className="text-green-600 hover:underline">
                  See more suggestions
                </a>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Reading List</h2>
                <div className="flex items-center mb-4">
                  <p className="text-sm text-gray-600">
                    Click the
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    on any story to easily add it to your reading list or a
                    custom list that you can share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
