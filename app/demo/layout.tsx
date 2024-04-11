import React from 'react';
import {ModeToggle} from '@/components/ModeToggle';

export default function Layout({ children }: React.PropsWithChildren) {
  return <div className='mx-auto p-10'>
    <ModeToggle></ModeToggle>  
    {children}
  </div>;
}
