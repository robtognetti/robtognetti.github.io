'use client'
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}

type State = {}

class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='h-[88vh] flex flex-row justify-between items-center w-full'>
        <div>
          <Image src='/mewithasuit.png' alt='This is me' width={800} height={800} />
        </div>
        <div>
          <div className='flex flex-col gap-4 tracking-wide text-sm md:text-normal'>
            <h1 className='font-bold text-xl'>Hello again, world.</h1>
            <p className='indent-6'>
              My first contact with programming was creating shortcuts with <a href="https://pt.wikipedia.org/wiki/QBasic" target="blank">Qbasic</a> on my father's Pentium 386. Growing up like any other teenager, I enjoyed chatting on mIRC and making new friends. Suddenly I was writing and designing mIRC scripts (mostly sports related).
            </p>
            <p>
              After that, I was asked to integrate some PHP snippets and MySQL queries into my friend's website. Then I started using Joomla, Simple Machines Forums and Wordpress, developing themes and tweaking plugins for myself and my friends as my managed online communities grew and grew.
            </p>
            <p>
              Then a drunk driver hit my stationary car. After hours in the hospital, I woke up and realized I was missing some of my memories, which could affect my professional life as a lawyer.
            </p>
            <p>
              A few years later, I understood my old hobbies as something I really wanted to do for life. So I decided to join Trybe's bootcamp and focus my studies on learning and understanding Javascript and Typescript.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About