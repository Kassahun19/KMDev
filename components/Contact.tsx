import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const clearField = (field: keyof typeof formData) => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after showing success message
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const renderInput = (id: keyof typeof formData, type: string, label: string, placeholder: string, required = false) => (
    <div className="space-y-2 relative group">
      <label htmlFor={id} className="text-sm font-medium text-slate-300 ml-1">{label}</label>
      <div className="relative">
        <input 
          type={type} 
          id={id} 
          value={formData[id]}
          onChange={handleChange}
          required={required}
          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 pr-10 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder:text-slate-500 text-sm sm:text-base"
          placeholder={placeholder}
        />
        {formData[id] && (
          <button
            type="button"
            onClick={() => clearField(id)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-700"
          >
             {/* Close Button */}
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-all shadow-lg"
             >
                <X size={24} />
             </button>

            <div className="grid lg:grid-cols-2">
              
              {/* Info Side */}
              <div className="p-6 md:p-12 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                    Get in Touch
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Let's Work Together</h2>
                  <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
                    Have a project in mind or need a tutor? I'm always open to discussing new opportunities.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-5 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Call Me</p>
                        <p className="text-base sm:text-lg font-semibold tracking-tight text-white">{PERSONAL_INFO.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Email Me</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-primary transition-colors break-all">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Location</p>
                        <p className="text-base sm:text-lg font-semibold tracking-tight text-white">{PERSONAL_INFO.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-6 md:p-12 bg-slate-900">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="h-[300px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-primary font-medium hover:text-blue-400"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {renderInput('name', 'text', 'Name', 'John Doe', true)}
                      {renderInput('phone', 'tel', 'Phone', '+251...')}
                    </div>
                    
                    {renderInput('email', 'email', 'Email', 'john@example.com', true)}
                    
                    <div className="space-y-2 relative">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                      <div className="relative">
                        <textarea 
                          id="message" 
                          rows={4} 
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 pr-10 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all placeholder:text-slate-500 resize-none text-sm sm:text-base"
                          placeholder="Tell me about your project..."
                        ></textarea>
                        {formData.message && (
                            <button
                              type="button"
                              onClick={() => clearField('message')}
                              className="absolute right-3 top-3 text-slate-500 hover:text-white transition-colors p-1"
                            >
                              <X size={16} />
                            </button>
                          )}
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 text-sm sm:text-base"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Contact;