import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Documents({}: Props) {
  return (
    <section className='my-6'>
      <div className='flex flex-row flex-wrap items-center justify-evenly gap-5 w-full h-[500px] bg-[#F7F7F7]'>

        <Link href='/artigo-osriscosdaindustria40.jpg' className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-noticiasdodia.png' alt='Artigo escrito no jornal Notícias do Dia' width='300' height='300' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Os riscos da indústria 4.0</h2>
            <p className='text-sm'>Article written to newspaper Notícias do Dia</p>
          </legend>
        </Link>

        <Link href='https://www.youtube.com/watch?v=fcIlWzzfmU8&pp' target='blank' className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-visaoprofissional.png' alt='Interview to radio show Professional View' width='300' height='300' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Professional View show</h2>
            <p className='text-sm'>Interview about data privacy law in Brazil</p>
          </legend>
        </Link>

        <a href='/cv/fullstack-cv-en.pdf' download className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-curriculumvitae.png' alt='My curriculum vitae' width='230' height='280' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Download my curriculum vitae</h2>
            <a href='/cv/fullstack-cv-ptbr.pdf' download className='text-sm'>Click here if you prefer portuguese</a>
          </legend>
        </a>
      </div>
    </section>
  )
}