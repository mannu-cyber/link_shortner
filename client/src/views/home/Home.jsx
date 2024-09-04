import { useEffect, useState } from "react";

import axios from "axios";
import LinkCard from "../../components/linkCard/LinkCard";

function Home() {
  const [linkData, setLinkData] = useState({
    title: "",
    url: "",
    slug: "",
  });

  const [links, setLinks] = useState([]);

  const shorten = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/link`,
      linkData
    );

    if (response.data.success) {
      setLinkData({
        title: "",
        url: "",
        slug: "",
      });
    }
  };

  const fetchLinks = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/links`);

    if (response.data.data) {
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-[#132913] to-[#111111] 
  text-[#B1F4AE] w-screen h-screen pt-12"
    >
      <>
        <h1 className=" mb-14 text-center w-full text-2xl font-normal text-[#FEF6F4F4] font-[fira]">
          🔗 Shorten your link in second{" "}
        </h1>

        <div className="container flex justify-between w-full">
          <form
            action=""
            className="flex gap-6 justify-center  flex-col mt-14 border w-[400px] py-10 px-[50px] rounded-md  mx-auto bg-gray-100 backdrop-filter backdrop-blur-m bg-opacity-10 shadow-gray-100"
          >
            <h1 className="font-bold mb-4 text-2xl text-center text-white">
              Link Shortner
            </h1>
            <label className="mb-[-19px] block text-left" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="w-full outline-none border-none focus:outline-[#2AD23A] block	px-7 py-2 text-lg text-[#B1F4AE] bg-[#191C13] rounded-md"
              type="text"
              placeholder="Enter title"
              value={linkData.title}
              onChange={(e) => {
                setLinkData({
                  ...linkData,
                  title: e.target.value,
                });
              }}
            />
            <label className="mb-[-19px] block text-left" htmlFor="url">
              URL
            </label>
            <input
              id="url"
              className="w-full outline-none border-none focus:outline-[#2AD23A] block 	px-7 py-2 text-lg text-[#B1F4AE] bg-[#191C13] rounded-md"
              type="text"
              placeholder="Enter URL"
              value={linkData.url}
              onChange={(e) => {
                setLinkData({
                  ...linkData,
                  url: e.target.value,
                });
              }}
            />
            <label className="mb-[-19px] block text-left" htmlFor="slug">
              Slug
            </label>
            <input
              id="slug"
              className="w-full outline-none border-none focus:outline-[#2AD23A] block 	px-7 py-2 text-lg text-[#B1F4AE] bg-[#191C13] rounded-md"
              type="text"
              placeholder="Enter slug"
              value={linkData.slug}
              onChange={(e) => {
                setLinkData({
                  ...linkData,
                  slug: e.target.value,
                });
              }}
            />

            <button
              type="button"
              className="bg-[#2AD23A] text-[#111111] font-bold py-2 px-10 rounded-3xl "
              onClick={shorten}
            >
              {" "}
              Submit
            </button>
          </form>

          <div className="link-view w-[50%]">
            <h1 className="text-center">all your links here</h1>

            <div>
              {links.map((link, i) => {
                const { title, url, slug, views, createdAt } = link;
                return (
                  <LinkCard
                    key={i}
                    title={title}
                    url={url}
                    slug={slug}
                    views={views}
                    createdAt={createdAt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
