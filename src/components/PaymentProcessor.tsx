import { useState } from 'react';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

const PaymentProcessor = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handlePayment = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50 animate-in fade-in duration-500">
        <div className="bg-stone-900 text-white p-12 rounded-2xl shadow-2xl text-center space-y-6 max-w-sm mx-4 border border-white/10">
          <CheckCircle2 className="h-20 w-20 text-emerald-500 mx-auto animate-bounce" />
          <h2 className="text-3xl font-serif">Booking Confirmed!</h2>
          <p className="text-stone-400">
            A confirmation has been sent to your WhatsApp number. We look forward to serving you.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-white text-stone-900 py-4 rounded-full font-bold uppercase tracking-tighter text-sm hover:bg-stone-200 transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-stone-900 text-white p-10 rounded-2xl shadow-2xl text-center space-y-8 animate-in zoom-in duration-700 relative overflow-hidden border border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/20" />
      
      <div className="bg-amber-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-500/5">
        <ShieldCheck className="h-10 w-10 text-amber-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-serif">Secure Hold</h2>
        <p className="text-stone-400 text-sm leading-relaxed px-4">
          A temporary hold of $50 will be placed on your card to guarantee your booking. 
          <span className="text-amber-500/80 block mt-2 italic font-serif">Refundable up to 24 hours prior.</span>
        </p>
      </div>
      
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-left space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-[10px] uppercase text-stone-500 font-bold tracking-widest">Payment Method</div>
          <CreditCard className="h-4 w-4 text-stone-500" />
        </div>
        <div className="h-12 bg-stone-800/80 rounded-lg flex items-center px-4 text-sm text-stone-500 italic border border-white/5">
          •••• •••• •••• 4242
        </div>
      </div>

      <button 
        onClick={handlePayment}
        disabled={status === 'processing'}
        className="w-full bg-amber-600 hover:bg-amber-700 p-5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === 'processing' ? (
          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : 'Complete Booking'}
      </button>

      <p className="text-[10px] text-stone-600 uppercase tracking-tighter">
        PCI-DSS Compliant Encryption
      </p>
    </div>
  );
};

export default PaymentProcessor;