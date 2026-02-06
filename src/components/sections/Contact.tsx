import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',

    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <SectionWrapper>
            <div className="space-y-12">
              <div>
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Contact <span className="text-[#E7E8BF]">Us</span>
                </h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                  Contact our studio for bookings, collaborations, and turning your sound into something unforgettable.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[#E7E8BF]/20 bg-[#E7E8BF]/5 group-hover:border-[#E7E8BF] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#E7E8BF]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email us</p>
                    <a href="mailto:hello@fortlab.com" className="text-lg font-medium text-white hover:text-[#E7E8BF] transition-colors">
                      hello@fortlab.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[#E7E8BF]/20 bg-[#E7E8BF]/5 group-hover:border-[#E7E8BF] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#E7E8BF]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Our Location</p>
                    <p className="text-lg font-medium text-white">
                      Negombo<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[#E7E8BF]/20 bg-[#E7E8BF]/5 group-hover:border-[#E7E8BF] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#E7E8BF]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Call us</p>
                    <a href="tel:+441236547890" className="text-lg font-medium text-white hover:text-[#E7E8BF] transition-colors">
                      +94 70 481 3885
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Right Column - Form */}
          <SectionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">
                  Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-md text-white focus:border-[#E7E8BF] focus:ring-1 focus:ring-[#E7E8BF] outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">
                  Email<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-md text-white focus:border-[#E7E8BF] focus:ring-1 focus:ring-[#E7E8BF] outline-none transition-all duration-300"
                />
              </div>



              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-md text-white focus:border-[#E7E8BF] focus:ring-1 focus:ring-[#E7E8BF] outline-none transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: isSubmitting || submitted ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting || submitted ? 1 : 0.99 }}
                className="w-full py-4 bg-[#E7E8BF] text-black font-bold rounded-md shadow-lg shadow-[#E7E8BF]/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Submit
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </motion.button>
            </form>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
