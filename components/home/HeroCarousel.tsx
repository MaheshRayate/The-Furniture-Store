import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';

import Hero1 from '@/public/Images/Hero1.jpg';
import Hero2 from '@/public/Images/Hero2.jpg';
import Hero3 from '@/public/Images/Hero3.jpg';
import Hero4 from '@/public/Images/Hero4.jpg';
import Hero5 from '@/public/Images/Hero5.jpg';

const carouselImages = [Hero1, Hero2, Hero3, Hero4,Hero5];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;