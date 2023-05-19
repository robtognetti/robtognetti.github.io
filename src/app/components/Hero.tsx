'use client'
import React, { Component } from 'react';
import Typewriter from 'react-ts-typewriter';
import Social from './Social';

type Props = {}

type State = {}

export class Hero extends Component<Props, State> {
  state = {}
  what = ['RODRIGO SAKAE', 'DEVELOPER', 'LAWYER', 'DPO']


  render() {
    return (
      <section className='flex items-center w-full bg-fixed' style={{ backgroundImage: "url('/meinaballpool.jpg')", backgroundSize: "100vw" }}>
        <div className='flex flex-col gap-y-2 h-screen hero justify-center'>
          <h1 className='text-4xl font-extrabold indent-20 tracking-wider'>I'M <Typewriter text={ this.what } loop={ true } delay={ 3000 } speed= { 50 } /></h1>
          <h3 className='text-xs indent-20 tracking-[3px] font-medium'>Fullstack Developer</h3>
          <Social />
        </div>
      </section>
    )
  }
}