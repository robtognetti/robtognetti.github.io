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
        <div className="flip-card-back flex items-center justify-center">
          <div className='max-w-[220px] h-[200px] flex flex-col'>
            <h1 className='font-semibold text-sm text-zinc-50 shadow-md uppercase mt-6'>{ data.title }</h1>
            <p className='text-xs text-white mt-2 text-center tracking-wide leading-5'>{ data.content }</p>
          </div>
        </div>
      </div>
    </div>
  )
}