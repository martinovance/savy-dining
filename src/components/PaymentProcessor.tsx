const PaymentProcessor = () => {
  return (
    <div className="max-w-md mx-auto bg-stone-900 text-white p-10 rounded-lg shadow-2xl text-center space-y-6 animate-in zoom-in duration-500">
      <div className="bg-amber-100/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h2 className="text-2xl font-serif">Confirm Your Reservation</h2>
      <p className="text-stone-400 text-sm leading-relaxed">
        A temporary hold of $50 will be placed on your card to guarantee your booking. 
        This is fully refundable up to 24 hours before your reservation.
      </p>
      
      <div className="bg-white/5 p-4 rounded border border-white/10 text-left">
        <div className="text-[10px] uppercase text-stone-500 font-bold mb-2">Secure Payment Gateway</div>
        <div className="h-10 bg-stone-800/50 rounded flex items-center px-4 text-sm text-stone-400 italic">
          Card details (Stripe Integration Placeholder)
        </div>
      </div>

      <button className="w-full bg-amber-600 hover:bg-amber-700 p-4 rounded font-bold uppercase tracking-widest text-xs transition-all">
        Complete Booking
      </button>
    </div>
  );
};

export default PaymentProcessor;