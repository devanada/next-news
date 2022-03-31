import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import styles from "../styles/Home.module.css";

export default function Layout(props) {
  return (
    <main role="main">
      {props.preContainer && props.preContainer}
      <Head>
        <title>{props.headerTitle}</title>
        <meta name="description" content={props.headerDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout-container bg-white dark:bg-neutral-800">
        <Header onChange={props.onChange} onClick={props.onClick} />
        <div className="layout-subcon">{props.children}</div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </main>
  );
}
