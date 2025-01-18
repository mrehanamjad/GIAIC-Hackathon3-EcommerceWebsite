import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Calendar, Clock, Tag, User } from 'lucide-react'

function BlogCard({imagePath}:{imagePath:string}) {
  return (
    <div className='h-[32rem] w-[22rem] max-md:w-72 max-md:h-[26rem] rounded-xl flex flex-col items-center justify-between '>
        <Image src={imagePath} alt={'blog image'} width={1000} height={1000} className='' />
        <p className='md:mt-4 text-lg text-black/80'>Going all-in with millennial design</p>
        <Button className='' variant={'fBtn1'}>Read More</Button>
        <div className='flex  justify-center items-center gap-4 md:mt-3 text-sm text-gray-600'>
            <span className='flex gap-1 justify-center items-center'><Clock  size={15} color='black' className='mb-[2px]' /> 5 min</span>
            <span className='flex gap-1 justify-center items-center'><Calendar size={15}  color='black' className='mb-[2px]' /> 12th Oct 2022</span>
        </div>
    </div>
  )
}

export default BlogCard


export const BlogCardLg = ({imagePath,title,tag}:{imagePath:string;title:string;tag:string}) => {
  return (
    <div className='w-full h-full min-h-[35rem] p-4'>
        <Image src={imagePath} alt={'blog image'} width={1000} height={1000} className=' w-full rounded-lg' />
        <div className='flex gap-2 text-sm mt-2 text-[#9F9F9F] items-center'>
          <User  size={14}/> Admin
          <Calendar size={14} /> 24 Oct 2022
          <Tag  size={14}/> {tag}
        </div>
        <h1 className='font-medium text-3xl mt-6'>{title}</h1>
        <p className='text-[#9F9F9F] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <Button variant={'fBtn1'}>Read More</Button>
    </div>
  );
}

export const BlogCardSm = ({imagePath,title}:{imagePath:string;title:string}) => {
  return (
    <div className='w-56 flex gap-2 items-center justify-between h-20'>
      <Image src={imagePath} alt={'blog image'} width={1000} height={1000} className=' w-2/5 rounded-lg' />
      <div >
      <h1 className='font-medium text-base '>{title}</h1>
      <span className='text-[#9F9F9F] text-sm font-light'>03 Aug 2022</span>
      </div>
    </div>
  );
}