'use client'
import React from 'react';
import { FunFactSingle } from './FunFactSingle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ImDroplet, ImMusic, ImAndroid } from 'react-icons/im';
import { FaMedal } from 'react-icons/fa';
import { MdSportsMartialArts, MdGirl } from 'react-icons/md'
import { IoIosBeer } from 'react-icons/io';
import { BiGlassesAlt } from 'react-icons/bi';

type Props = {}

const funfacts = [
  {
    title: <MdSportsMartialArts />,
    content: 'I love sports, games and everything related to this atmosphere. Green belt in karate, 1st places as gk in soccer and losing a chess match in 10 moves made me who I am today.'
  },
  {
    title: <ImAndroid />,
    content: 'Despite my first smartphone runned with Symbian, I am a Android user ever since, and don\'t plan to change it.'
  },
  {
    title: <ImDroplet />,
    content: 'Start donating blood at 21, and I am a narrow bone donor since 2019. Join me in this cause!'
  },
  {
    title: <IoIosBeer />,
    content: 'Got a beer to taste? Send it to me, I love discovering new brands.'
  },
  {
    title: <FaMedal />,
    content: 'When I was a kid, I used to collect medals from sports competitions, such as soccer, swimming, karate, chess and volley. My mom threw it away thinking it was computer trash!'
  },
  {
    title: <ImMusic />,
    content: 'Played in a couple bands, not only guitar, but also bass, drums and also was a singer for a punk rock band based in Florianópolis 😅'
  },
  {
    title: <BiGlassesAlt />,
    content: 'Or not that much, since even after my Lasik surgery, I still use glasses to correct my 0.5 degree myopia.'
  },
  {
    title: <MdGirl />,
    content: 'My best two projects by far are my daughters. I love them so much!'
  },
]

export default function FunFacts({ }: Props) {
  return (
    <section>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {funfacts.map((fact, idx) => (<FunFactSingle key={idx} fun={fact} />))}
      </Carousel>
    </section>
  )
}