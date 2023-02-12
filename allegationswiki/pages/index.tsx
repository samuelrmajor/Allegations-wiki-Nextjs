import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SearchBigForm from "../components/homepage/SearchBigForm";
import Footer from '@/components/Layout/Footer';
import HomeHeader from '@/components/Layout/HomeHeader';
import { ReactElement } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-header">
          <h1>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href="/"
            >
              <span
                style={{ color: "rgba(189, 4, 4, 0.863)" }}
                className="home-allegations-header"
              >
                Allegations
              </span>
              .wiki
            </Link>
          </h1>
        </div>
        <div className="home-search-form">
          <SearchBigForm />
        </div>
      </div>
      <div className="bodyGap"></div>
      <div className="main-footer"></div>
    </>
  );
}

Home.getLayout = function PageLayout(page: ReactElement){
  return (

<div className="appbody">
      <div className="main-app">
        <HomeHeader />
        {page}
      </div>
      <Footer />
  </div>

    

  )
}