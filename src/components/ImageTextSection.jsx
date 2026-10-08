import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageTextSection({ 
  title, 
  subtitle, 
  content, 
  image, 
  imageAlt = "Tamanya Health", 
  reverse = false, 
  btnText, 
  btnLink,
  bgClass = "bg-white"
}) {
  return (
    <section className={`py-24 lg:py-32 px-6 ${bgClass} overflow-hidden`}>
      <div className={`max-w-[1500px] mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 px-4 md:px-8`}>
        
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="relative w-full aspect-[4/5] bg-stone overflow-hidden rounded-sm group">
            <img 
              src={image} 
              alt={imageAlt} 
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {subtitle && (
            <span className="text-accent uppercase tracking-[0.2em] text-[10px] font-medium mb-6 block">
              {subtitle}
            </span>
          )}
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-primary-dark mb-10 leading-[1.1]">
            {title}
          </h2>
          
          <div className="text-lg text-primary-dark/70 font-light space-y-6 leading-relaxed mb-12 max-w-lg">
            {content}
          </div>
          
          {btnText && btnLink && (
            <div className="mt-2">
              <Link to={btnLink} className="inline-block border-b border-primary-dark pb-1 text-xs uppercase tracking-widest font-medium text-primary-dark hover:text-primary hover:border-primary transition-colors">
                {btnText}
              </Link>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}
