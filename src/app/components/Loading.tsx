import React from 'react';
import style from './Loading.module.css';

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className={ style.loading }>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}