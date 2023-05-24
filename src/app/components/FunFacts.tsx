import React from 'react';
import AboutExtraCard from './FunFactsCard';

type Props = {}

const funfacts = [
  {
    title: ' ⚽️ Sports lover',
    content: 'I love sports, games and everything related to this atmosphere. Call me to watch a match?!'
  },
  {
    title: '🍺 Beer taster',
    content: 'Got a beer to taste? Send it to me, I love discovering new brands.'
  },
  {
    title: '🩸 Blood and narrow bone donor',
    content: 'Start donating blood at 21, and I am a narrow bone donor since 2019. Join me in this cause!'
  },
  {
    title: 'Beer taster',
    content: 'Got a beer to taste? Send it to me, I love discovering new brands.'
  },
  {
    title: 'Beer taster',
    content: 'Got a beer to taste? Send it to me, I love discovering new brands.'
  },
]

export default function FunFacts({}: Props) {
  return (
    <section className='flex flex-col min-h-[400px] w-screen md:w-full items-center justify-around mt-6'>
      <h1 className='font-semibold tracking-wide text-xl m-6'>Fun facts about me!</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          funfacts.map((funfact, index) => (<AboutExtraCard key={index} data={funfact} />))
        }
      </div>
    </section>
    )
}