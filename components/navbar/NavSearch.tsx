'use client';

import { Input } from '../ui/input'
import { useSearchParams,useRouter } from 'next/navigation';
import {useDebouncedCallback} from "use-debounce"
import {useState,useEffect} from 'react';


function NavSearch() {
  const searchParams=useSearchParams();
  // console.log(searchParams.get('layout'));

  const {replace}=useRouter();
  const [search,setSearch]=useState(searchParams.get('search')?.toString()||"");

  const handleSearch=useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams);

    if(value){
      params.set('search', value);

    }else{
      params.delete('search');

    }
    replace(`/products?${params.toString()}`)
    
  },500);

  return (
    <Input type='search' placeholder='search product...' value={search} className='max-w-xs dark:bg-muted' onChange={(e)=>{
      setSearch(e.target.value);
      handleSearch(e.target.value)
    }}/>
    
  )
}

export default NavSearch
