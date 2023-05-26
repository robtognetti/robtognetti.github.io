import React from 'react';
import AboutExtraCard from './FunFactsCard';

type Props = {}

const funfacts = [
  {
    title: '⚽️ Sports lover',
    content: 'I love sports, games and everything related to this atmosphere. My favorites are soccer, american football and baseball.'
  },
  {
    title: '🤖 Android user',
    content: 'Despirte my first \'smartphone\' ran Symbian, I am a Android user ever since, and don\'t plan to change it.'
  },
  {
    title: '🩸 Blood/narrow bone donor',
    content: 'Start donating blood at 21, and I am a narrow bone donor since 2019. Join me in this cause!'
  },
  {
    title: '🍺 Beer taster',
    content: 'Got a beer to taste? Send it to me, I love discovering new brands.'
  },
  {
    title: 'Mom, where is my 🏅 box?',
    content: 'When I was a kid, I used to collect medals from sports competitions, such as soccer, swimming, karate, chess and volley. My mom threw it away thinking it was computer trash!'
  },
  {
    title: '🎤 Amateur musician',
    content: 'Played in a couple bands, not only guitar, but also bass, drums and also was a singer for a punk rock band based in Florianópolis 😅'
  },
  {
    title: '🤓 Ex-myopic',
    content: 'Or not that much, since even after my Lasik surgery, I still use glasses to correct my 0.5 degree myopia.'
  },
  {
    title: 'Father of 2 👯‍♀️',
    content: 'My best two projects by far are my daughters. I love them so much!'
  },
]

export default function FunFacts({}: Props) {
  return (
    <section className='flex flex-col min-h-[400px] w-screen items-center mt-6'>
      <h1 className='font-semibold tracking-wide text-xl m-6'>Know me in a few cards</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-around'>
        { funfacts.map((funfact, index) => (<AboutExtraCard key={index} data={funfact} />)) }
      </div>
    </section>
    )
}