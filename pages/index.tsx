import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Rellax from 'rellax'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const rellaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    new Rellax('.rellax', {
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

  return (
    <div className={styles.container}>
      <div style={{
        position: 'relative',
        height: '100px',
        width: '80vw',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>
          I’m slow and smooth
        </p>
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          transform: 'translate(50%, 50%)',
          backgroundColor: 'green',
          zIndex: -1,
          height: '100px',
          width: '100px',
        }} className="rellax" data-rellax-speed="1">
        </div>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'blue',
          height: '100px',
          width: '100px',
        }} className="rellax" data-rellax-speed="-1">
        </div>
      </div>
    </div>
  );
}

export default Home
