import React from "react";

import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import MyScene from '../components/3d/MyScene'


export default function Home() {
  return (
    <div className="bg-my-blue-500 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Louis Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hola, I&rsquo;m Louis <MyScene /></h1>
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
          <FontAwesomeIcon icon={faLinkedin} size={'1x'}></FontAwesomeIcon>
        </Link>
        <Link href="https://linkedin.com/" className="text-md font-light mb-8">
          <FontAwesomeIcon icon={faGithub} size={'1x'}></FontAwesomeIcon>
        </Link>
        <Link href="https://twitter.com/" className="text-md font-light mb-8">
          <FontAwesomeIcon icon={faTwitter} size={'1x'}></FontAwesomeIcon>
        </Link>
      </div>
      </main>
    </div>
  );
}
