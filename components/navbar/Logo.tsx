import Image from 'next/image';
import logo from "./../../Assets/logo.png"
import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button variant={'outline'} size={'icon'} asChild>
      <Link href="/"><Image src={logo} alt="company-logo" className=''/></Link>
    </Button>
  )
}

export default Logo
