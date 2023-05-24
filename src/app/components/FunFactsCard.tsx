import React from 'react';

type Props = {
  data: {
    title: string,
    content: string,
  }
}

export default function FunFactsCard({ data }: Props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          
        </div>
        <div className="flip-card-back">
          <div className='p-4'>
            <h1 className='font-semibold text-zinc-50 shadow-md uppercase'>{ data.title }</h1>
            <p className='text-sm text-white mt-2 text-left tracking-wide'>{ data.content }</p>
          </div>
        </div>
      </div>
    </div>
  )
}