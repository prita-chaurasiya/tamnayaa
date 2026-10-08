import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from './components/PageHero';

export default function BookAppointment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [patientType, setPatientType] = useState('new'); // 'new' | 'returning'
  const [selectedService, setSelectedService] = useState('Physiotherapy & Rehabilitation');
  const [painLevel, setPainLevel] = useState(1); // 1 to 6
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  
  const [patientDetails, setPatientDetails] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [bookingStatus, setBookingStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const painScale = [
    { level: 1, label: 'No Pain', emoji: '😊', color: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-500' },
    { level: 2, label: 'Mild Pain', emoji: '🙂', color: 'bg-lime-500', text: 'text-lime-600', border: 'border-lime-500' },
    { level: 3, label: 'Moderate Pain', emoji: '😐', color: 'bg-amber-400', text: 'text-amber-600', border: 'border-amber-400' },
    { level: 4, label: 'Severe Pain', emoji: '☹️', color: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500' },
    { level: 5, label: 'Very Severe Pain', emoji: '😫', color: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-500' },
    { level: 6, label: 'Worst Pain Possible', emoji: '😭', color: 'bg-red-600', text: 'text-red-700', border: 'border-red-600' },
  ];

  const services = [
    {
      id: 'Physiotherapy & Rehabilitation',
      title: 'Physiotherapy & Rehab',
      desc: 'Personalised assessment, movement therapy, post-op recovery & pain relief.',
      icon: (
        <svg className="w-8 h-8 text-[#B79657]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      )
    },
    {
      id: "Women's Health & Pelvic Rehab",
      title: "Women's Health",
      desc: 'Pelvic floor rehab, PCOD/PCOS support, antenatal & postnatal recovery.',
      icon: (
        <svg className="w-8 h-8 text-[#B79657]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6m-3-3h6" />
        </svg>
      )
    },
    {
      id: 'Skin Care & Rejuvenation',
      title: 'Skin Care',
      desc: 'Clinical skin treatments, facial rejuvenation, acne & scar therapies.',
      icon: (
        <svg className="w-8 h-8 text-[#B79657]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      )
    },
    {
      id: 'Slimming & Body Shaping',
      title: 'Slimming & Body Shaping',
      desc: 'Targeted fat reduction, Vacuum Cavitation, Body Shaper & G-5 therapy.',
      icon: (
        <svg className="w-8 h-8 text-[#B79657]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
  ];

  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
    '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'
  ];

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    setBookingStatus('loading');
    setTimeout(() => {
      setBookingStatus('success');
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#17242D]">
      
      {/* Full Image Page Hero */}
      <PageHero 
        title="Book Your Consultation"
        category="ONLINE SCHEDULING PORTAL"
        subtitle="Select your preferred service, time slot, and consultation details for your visit to Tamanya Health in Pandeypur, Varanasi."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
        pageName="BOOK APPOINTMENT"
      />

      <div className="py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <span className="text-[#B79657] uppercase tracking-[0.25em] text-xs font-bold block mb-3">PRIVATE CLINIC REGISTRATION</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#17242D] mb-4">
              Schedule Your Visit
            </h1>
            <p className="text-[#17242D]/75 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Select your consultation type, date, and preferred time slot below for a seamless clinic experience.
            </p>
          </div>

        {/* 3-Step Wizard Navigation */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8E5DF] mb-10">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            {/* Connecting Bar */}
            <div className="absolute top-5 left-8 right-8 h-0.5 bg-[#E8E5DF] -z-0">
              <div 
                className="h-full bg-[#B79657] transition-all duration-300"
                style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
              ></div>
            </div>

            {/* Step 1 Circle */}
            <button 
              onClick={() => setCurrentStep(1)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                currentStep === 1 
                  ? 'bg-[#B79657] text-[#17242D] shadow-md ring-4 ring-[#B79657]/20 scale-110' 
                  : currentStep > 1 
                  ? 'bg-[#17242D] text-white' 
                  : 'bg-[#E8E5DF] text-[#17242D]/60'
              }`}>
                1
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wider mt-2 transition-colors ${
                currentStep === 1 ? 'text-[#B79657]' : 'text-[#17242D]/70'
              }`}>
                Appointment Type
              </span>
            </button>

            {/* Step 2 Circle */}
            <button 
              onClick={() => setCurrentStep(2)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                currentStep === 2 
                  ? 'bg-[#B79657] text-[#17242D] shadow-md ring-4 ring-[#B79657]/20 scale-110' 
                  : currentStep > 2 
                  ? 'bg-[#17242D] text-white' 
                  : 'bg-[#E8E5DF] text-[#17242D]/60'
              }`}>
                2
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wider mt-2 transition-colors ${
                currentStep === 2 ? 'text-[#B79657]' : 'text-[#17242D]/70'
              }`}>
                Pick a Time
              </span>
            </button>

            {/* Step 3 Circle */}
            <button 
              onClick={() => setCurrentStep(3)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                currentStep === 3 
                  ? 'bg-[#B79657] text-[#17242D] shadow-md ring-4 ring-[#B79657]/20 scale-110' 
                  : 'bg-[#E8E5DF] text-[#17242D]/60'
              }`}>
                3
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wider mt-2 transition-colors ${
                currentStep === 3 ? 'text-[#B79657]' : 'text-[#17242D]/70'
              }`}>
                Complete Booking
              </span>
            </button>
          </div>
        </div>

        {/* STEP 1 CONTENT */}
        {currentStep === 1 && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Patient Type Selector (New vs Returning) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E5DF] text-center">
              <h3 className="font-serif text-2xl font-bold mb-6 text-[#17242D]">
                Are you a new or returning patient?
              </h3>
              
              <div className="inline-flex p-1.5 bg-[#F8F9FA] rounded-2xl border border-[#E8E5DF] max-w-md w-full">
                <button
                  type="button"
                  onClick={() => setPatientType('new')}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    patientType === 'new'
                      ? 'bg-[#17242D] text-white shadow-md'
                      : 'text-[#17242D]/70 hover:text-[#17242D]'
                  }`}
                >
                  I am a New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setPatientType('returning')}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    patientType === 'returning'
                      ? 'bg-[#17242D] text-white shadow-md'
                      : 'text-[#17242D]/70 hover:text-[#17242D]'
                  }`}
                >
                  I am a Returning Patient
                </button>
              </div>
            </div>

            {/* Select Appointment Type Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E5DF]">
              <h3 className="font-serif text-2xl font-bold mb-6 text-[#17242D] text-center">
                Select your appointment type
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((item) => {
                  const isSelected = selectedService === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedService(item.id)}
                      className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between hover:shadow-md ${
                        isSelected 
                          ? 'border-[#B79657] bg-[#B79657]/5 shadow-lg -translate-y-1' 
                          : 'border-[#E8E5DF] bg-white hover:border-[#B79657]/50'
                      }`}
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h4 className="font-serif text-lg font-bold text-[#17242D] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#17242D]/70 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#E8E5DF]/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#B79657]">
                        <span>{isSelected ? 'Selected ✓' : 'Select Service'}</span>
                        <span>→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pain Rating Scale */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E5DF] text-center">
              <h3 className="font-serif text-2xl font-bold mb-2 text-[#17242D]">
                Please Rate Your Discomfort / Pain Level
              </h3>
              <p className="text-xs text-[#17242D]/60 mb-8 font-light">
                Help Dr. Neha & our clinical team evaluate your initial discomfort severity (1 = None, 6 = Severe)
              </p>

              {/* Interactive Pain Scale Bar */}
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-6 gap-3 mb-6">
                  {painScale.map((item) => {
                    const isSelected = painLevel === item.level;
                    return (
                      <button
                        key={item.level}
                        type="button"
                        onClick={() => setPainLevel(item.level)}
                        className={`flex flex-col items-center p-3 rounded-2xl transition-all border-2 ${
                          isSelected 
                            ? `${item.border} bg-[#F8F9FA] ring-4 ring-black/5 scale-105 shadow-md` 
                            : 'border-transparent hover:bg-stone-50'
                        }`}
                      >
                        <span className="text-3xl mb-2">{item.emoji}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1 ${item.color}`}>
                          {item.level}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${item.text}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Banner */}
              <p className="text-xs text-[#17242D]/60 italic mt-6">
                If you are experiencing severe trauma or urgent clinical symptoms, please dial <a href="tel:+917007667808" className="text-red-600 font-bold underline">+91 70076 67808</a> directly.
              </p>
            </div>

            {/* Next Step Button */}
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="bg-[#B79657] hover:bg-[#a38346] text-[#17242D] font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3"
              >
                <span>Next: Select Preferred Time</span>
                <span>→</span>
              </button>
            </div>

          </div>
        )}

        {/* STEP 2 CONTENT */}
        {currentStep === 2 && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#E8E5DF]">
              <h3 className="font-serif text-2xl font-bold mb-2 text-[#17242D] text-center">
                Pick Date & Available Time Slot
              </h3>
              <p className="text-xs text-[#17242D]/60 text-center mb-8 font-light">
                Clinic hours: Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 2:00 PM
              </p>

              {/* Date Input */}
              <div className="max-w-md mx-auto mb-10">
                <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D] mb-2 text-center">
                  Select Preferred Consultation Date *
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#F8F9FA] border border-[#E8E5DF] p-4 rounded-xl text-center text-sm font-semibold text-[#17242D] focus:outline-none focus:border-[#B79657]"
                />
              </div>

              {/* Available Time Slots Grid */}
              <div className="max-w-3xl mx-auto">
                <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D] mb-4 text-center">
                  Select Available Time Slot *
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border ${
                          isSelected
                            ? 'bg-[#17242D] text-white border-[#17242D] shadow-md scale-105'
                            : 'bg-[#F8F9FA] text-[#17242D] border-[#E8E5DF] hover:border-[#B79657]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2 Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="bg-[#E8E5DF] hover:bg-[#dcd8d0] text-[#17242D] font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="bg-[#B79657] hover:bg-[#a38346] text-[#17242D] font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3"
              >
                <span>Next: Patient Details</span>
                <span>→</span>
              </button>
            </div>

          </div>
        )}

        {/* STEP 3 CONTENT */}
        {currentStep === 3 && (
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#E8E5DF] max-w-3xl mx-auto animate-fadeIn">
            
            {bookingStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[#B79657]/20 border-2 border-[#B79657] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B79657]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-3xl font-bold text-[#17242D] mb-3">
                  Appointment Requested Successfully!
                </h3>
                <p className="text-[#17242D]/75 text-sm font-light leading-relaxed max-w-md mx-auto mb-8">
                  Thank you, <span className="font-bold text-[#17242D]">{patientDetails.fullName || 'Valued Patient'}</span>. Our clinical coordinator at Pandeypur, Varanasi will contact you shortly to confirm your visit.
                </p>

                {/* Summary Card */}
                <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#E8E5DF] text-left max-w-md mx-auto mb-8 text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-[#E8E5DF] pb-2">
                    <span className="text-[#17242D]/60 uppercase tracking-wider font-bold">Service:</span>
                    <span className="font-bold text-[#17242D]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E5DF] pb-2">
                    <span className="text-[#17242D]/60 uppercase tracking-wider font-bold">Patient Type:</span>
                    <span className="font-bold text-[#17242D] capitalize">{patientType} Patient</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E5DF] pb-2">
                    <span className="text-[#17242D]/60 uppercase tracking-wider font-bold">Scheduled Time:</span>
                    <span className="font-bold text-[#B79657]">{selectedDate || 'Selected Date'} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#17242D]/60 uppercase tracking-wider font-bold">Clinic Location:</span>
                    <span className="font-bold text-[#17242D]">Pandeypur, Varanasi</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setBookingStatus('idle');
                    setCurrentStep(1);
                  }}
                  className="bg-[#17242D] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-[#202B31] transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleCompleteBooking} className="space-y-6">
                
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-[#17242D] mb-2">
                    Complete Your Information
                  </h3>
                  <p className="text-xs text-[#17242D]/60 font-light">
                    Please provide contact details so Dr. Neha's team can finalize your slot.
                  </p>
                </div>

                {/* Selected Summary Badge */}
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#E8E5DF] flex flex-wrap justify-between items-center text-xs text-[#17242D]/80">
                  <span><strong>Service:</strong> {selectedService}</span>
                  <span><strong>Slot:</strong> {selectedTime}</span>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={patientDetails.fullName}
                    onChange={(e) => setPatientDetails({ ...patientDetails, fullName: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-[#E8E5DF] p-3.5 rounded-xl text-sm font-medium text-[#17242D] focus:outline-none focus:border-[#B79657]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={patientDetails.phone}
                      onChange={(e) => setPatientDetails({ ...patientDetails, phone: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-[#E8E5DF] p-3.5 rounded-xl text-sm font-medium text-[#17242D] focus:outline-none focus:border-[#B79657]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={patientDetails.email}
                      onChange={(e) => setPatientDetails({ ...patientDetails, email: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-[#E8E5DF] p-3.5 rounded-xl text-sm font-medium text-[#17242D] focus:outline-none focus:border-[#B79657]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#17242D]">
                    Chief Symptoms / Notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your symptoms or history..."
                    value={patientDetails.notes}
                    onChange={(e) => setPatientDetails({ ...patientDetails, notes: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-[#E8E5DF] p-3.5 rounded-xl text-sm font-medium text-[#17242D] focus:outline-none focus:border-[#B79657] resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="bg-[#E8E5DF] hover:bg-[#dcd8d0] text-[#17242D] font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    disabled={bookingStatus === 'loading'}
                    className="bg-[#B79657] hover:bg-[#a38346] text-[#17242D] font-bold px-9 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3 disabled:opacity-50"
                  >
                    <span>{bookingStatus === 'loading' ? 'Processing...' : 'Complete Booking'}</span>
                    <span>✓</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

        </div>
      </div>
    </div>
  );
}
