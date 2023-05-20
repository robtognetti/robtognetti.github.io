'use client'
import React, { Component } from 'react'
import GoogleButton from 'react-google-button';
import signIn from '@/firebase/auth/signin';

type Props = {}
type State = {}

export default class Login extends Component<Props, State> {
  state = {
    user: null
  }

  public loginComGoogle = () => {
    signIn().then((response) => {
      this.setState({
        user: response.result.user
      });
      console.log('logado!');
    })
  }

  render() {
    return (
      <main className='flex items-center justify-center w-full h-[100vh]'>
        {
          this.state.user && (<div>Olá, bem vindo.</div>)
        }
        <GoogleButton
          type='light'
          label='Conectar com Google'
          onClick={ this.loginComGoogle }
        />
      </main>
    )
  }
}