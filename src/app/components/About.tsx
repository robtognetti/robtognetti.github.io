'use client'
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}
type State = {}

class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='min-h-[88vh] flex flex-col lg:flex-row justify-between items-center w-full bg-slate-100'>
        <div className='my-16 mx-8 min-w-[400px]'>
          <div className='div-img'>
            <div className='about-img'>
              <Image src='/mewithasuit.png' alt='This is me' width={ 500 } height={ 500 } />
            </div>
          </div>
        </div>
        <div className='mx-8'>
          <div className='flex flex-col gap-4 tracking-wide md:text-normal'>
            <h1 className='font-bold text-xl'>Hello again, world.</h1>
            <p className='indent-6'>
              My first contact with programming was creating shortcuts with <a href="https://pt.wikipedia.org/wiki/QBasic" target="blank">Qbasic</a> on my father&apos;s Pentium 386. Growing up like any other teenager, I enjoyed sports and computers, so I started writing and designing <a href="http://www.mirc.com" target='blank'>mIRC scripts</a> sports themed.
            </p>
            <p className='indent-6'>
              After that, I was asked to integrate some PHP snippets and MySQL queries into my friend&apos;s website. Then I started using <a href="https://www.joomla.org/" target="blank">Joomla</a>, <a href="https://simplemachines.org/" target="blank">SMF</a> and <a href="https://wordpress.org/" target="blank">Wordpress</a>, developing themes and tweaking plugins for myself and my friends as my managed online communities grew and grew.
            </p>
            <p className='indent-6'>
              Then a drunk driver hit me in my parked car. After hours in the hospital, I woke up and realized I was missing some of my memories, triggering me to become a criminal law attorney.
            </p>
            <p className='indent-6'>
              A few years later, I understood my old hobbies as something I really wanted to do for life. So I decided to join <a href="https://www.betrybe.com/" target="blank">Trybe bootcamp</a> and focus my studies on learning and understanding Javascript and Typescript.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About