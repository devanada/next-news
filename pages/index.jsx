import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://inshortsapi.vercel.app/news?category=all");
  const data = await res.json();
  data.data.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: { news: data.data },
    revalidate: 3,
  };
}

export default function Home({ news }) {
  const [data, setData] = useState(news);
  const [searchVal, setSearchVal] = useState("");

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const requestSearch = (searchValue) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredData = news.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field] ? row[field].toString() : null);
      });
    });
    setData(filteredData);
  };

  return (
    <Layout
      headerTitle="Next News"
      headerDesc="Next News App"
      onChange={(e) => setSearchVal(e.target.value)}
      onClick={() => requestSearch(searchVal)}
    >
      <h1 className="text-3xl font-bold text-white">Latest News</h1>
      {data.map((item) => (
        <div key={item.id} className="flex flex-row w-full my-5">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={200}
            height={200}
          />
          <div className="ml-5 w-6/12">
            <h2 className="text-xl font-bold text-black dark:text-white">
              {item.title}
            </h2>
            <div className="flex flex-row my-2">
              <p className="font-this text-neutral-500 dark:text-white">
                {item.author} | {item.date}
              </p>
            </div>
            <p className="font-normal text-neutral-500 dark:text-white">
              {item.content.substring(0, 250) + "..."}
            </p>
          </div>
        </div>
      ))}
    </Layout>
  );
}
