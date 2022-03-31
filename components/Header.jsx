import React from "react";
import Link from "next/link";

export default function Header(props) {
  return (
    <div className="header-container top-0 left- right-0 bg-zinc-800">
      <Link href="/">
        <a>
          <h1 className="text-white text-2xl font-bold">Next News</h1>
        </a>
      </Link>
      <div className="flex">
        <input placeholder="Search News" onChange={props.onChange} />
        <button onClick={props.onClick}>Search</button>
      </div>
    </div>
  );
}
