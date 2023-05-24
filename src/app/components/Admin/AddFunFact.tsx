import React from 'react';

type Props = {}

export default function AddFunFacts({}: Props) {
  return (
    <section className='flex flex-col w-full items-center justify-center mt-10'>
      <h1 className='text-xl uppercase font-extrabold'>
        WRITE YOUR FUN FACTS!
      </h1>
      <div className='mt-6'>
        <form className='flex flex-col gap-y-4'>

          <div className='flex flex-row gap-x-4'>
            <label htmlFor='funfact1title' className='flex flex-col text-xs'>
              Title:
              <input
                id='funfact1title'
                type='text'
                maxLength={50}
                placeholder='Example: Linux user'
                className='w-60 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
              />
            </label>
            <label htmlFor='funfact1content' className='flex flex-col text-xs'>
              Content:
              <input
                required
                id='funfact1content'
                type='text'
                placeholder='Example: My favorite IDE is VSCode'
                className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
              />
            </label>
          </div>

        </form>
      </div>
    </section>
  )
}