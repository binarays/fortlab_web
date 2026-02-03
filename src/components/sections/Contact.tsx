import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
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
    <section className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-[#E7E8BF]">Touch</span>
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-gray-800 text-white placeholder-gray-600 focus:border-[#E7E8BF] focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-transparent border-2 border-gray-800 text-white placeholder-gray-600 focus:border-[#E7E8BF] focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-transparent border-2 border-gray-800 text-white placeholder-gray-600 focus:border-[#E7E8BF] focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
              className="w-full py-4 bg-[#E7E8BF] text-black font-semibold tracking-wider hover:bg-[#d4b86b] transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>Message Sent!</>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </SectionWrapper>
      </div>
    </section>
  );
}
