import React from 'react';

export default function ServiceSection({ title, subtitle, services, bgClass = "bg-bg" }) {
  return (
    <section className={`py-24 lg:py-32 px-6 ${bgClass}`}>
      <div className="max-w-[1500px] mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-2xl">
            {subtitle && <span className="text-accent uppercase tracking-[0.2em] text-[10px] font-medium mb-6 block">{subtitle}</span>}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-primary-dark">{title}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-16 border-t border-stone/50 pt-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <span className="font-serif text-3xl text-accent mb-6 block">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl text-primary-dark mb-4">
                {service.name}
              </h3>
              <p className="text-primary-dark/60 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
