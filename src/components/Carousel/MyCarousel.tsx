"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CarouselItemProps from "@/interfaces/CarouselItem";

const MyCarousel = ({ items }: { items: CarouselItemProps[] }) => {
    return (
        <Carousel className="myCarousel" autoPlay={true} interval={5000} showStatus={false} showArrows={false} infiniteLoop={true}>
            {items.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', aspectRatio: item.aspectRatio ? `${item.aspectRatio}` : '16/9', maxWidth: item.maxWidth ? `${item.maxWidth}px` : '1200px', margin: '0 auto' }} />
                </div>
            ))}
        </Carousel>
    );
}

export default MyCarousel;