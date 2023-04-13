import React from "react";

import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className="bg-my-blue-500 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Louis Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I&rsquo;m Louis</h1>
        <p className="text-lg font-medium mb-8">Technologist, Founder, Human</p>
        <div className="grid font-bold grid-cols-3 gap-4">
          My Projects
          <Link href="https://yeanah.vercel.app/" className="text-md font-light mb-8">Yana AI (Decision-Making Assistant)</Link>
          <Link href="songnos-mvp.vercel.app/" className="text-md font-light mb-8">Songnos (Custom-made songs)</Link>
        </div>
        <div className="bg-gray-100 p-4">
        <div className="grid font-bold grid-cols-4 gap-4">
        </div>
    </div>

      <div className="grid font-bold grid-cols-4 gap-4">
        <Link href="https://github.com/" className="text-md font-light mb-8">
          <FontAwesomeIcon style={{fontSize:"26px"}} icon={faLinkedin}></FontAwesomeIcon>
        </Link>
        <Link href="https://linkedin.com/" className="text-md font-light mb-8">
          <FontAwesomeIcon style={{fontSize:"26px"}} icon={faGithub}></FontAwesomeIcon>
        </Link>
        <Link href="https://twitter.com/" className="text-md font-light mb-8">
          <FontAwesomeIcon style={{fontSize:"26px"}} icon={faTwitter}></FontAwesomeIcon>
        </Link>
      </div>
      </main>
    </div>
  );
}
