import React from 'react';
import { DefaultSession } from 'next-auth';

export default function UserCard({ user } : { user: DefaultSession['user'] }) {
  return (
    <div>
      <h5>Logged in as <span>{ user?.name }</span></h5>
      <p>{ user?.email }</p>
      <p>{ user?.image }</p>
    </div>
  )
}