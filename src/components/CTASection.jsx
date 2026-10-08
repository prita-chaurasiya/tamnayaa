import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection({ title, subtitle, btnText = "Book an Appointment", btnLink = "/book-appointment" }) {
  return (
    <section className="py-24 md:py-32 px-6 bg-white text-center border-t border-stone/50">
      <div className="max-w-[800px] mx-auto">
        <span className="text-accent uppercase tracking-[0.2em] text-[10px] font-medium mb-6 block">Ready to take the next step?</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] mb-8 leading-[1.1] text-primary-dark">{title}</h2>
        
        {subtitle && (
          <p className="text-lg mb-12 text-primary-dark/60 font-light max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <Link to={btnLink} className="btn-primary">
          {btnText}
        </Link>
      </div>
    </section>
  );
}
