import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons'

type Props = {
  fun: {
    title: ReactNode,
    content: string,
  }
}


export const FunFactSingle = ({ fun }: Props) => {
  return (
    <div className='flex items-center justify-center max-w-full gap-y-4 my-6 h-60'>
      <IconContext.Provider value={{ size: '8em', color: '#757575' }}>
        <div className='flex flex-col justify-center gap-y-4 items-center max-w-sm'>
          {fun.title}
          {fun.content}
        </div>
      </IconContext.Provider>
    </div>
  )
}