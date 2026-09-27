import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I start looking for a property?',
    answer: 'Simply browse our listings, filter by type and location, and contact us to schedule a viewing. Our team is ready to help you find your perfect match.'
  },
  {
    question: 'What documents do I need to buy a property?',
    answer: 'You will need a valid ID, proof of income, bank statements, and pre-approval for a mortgage if applicable. We guide you through the entire process.'
  },
  {
    question: 'Can I negotiate the property price?',
    answer: 'Yes! Our experts will help you make competitive offers and negotiate the best possible price. We work in your best interest.'
  },
  {
    question: 'How long does the buying process take?',
    answer: 'Typically 30-60 days from offer acceptance to closing. We ensure a smooth and efficient process every step of the way.'
  },
  {
    question: 'Do you offer property management services?',
    answer: 'Yes, we provide comprehensive property management services for investors, including tenant screening, maintenance, and rent collection.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve major metropolitan areas and surrounding suburbs. Contact us to confirm availability in your desired location.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-layout">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Find answers to common questions about buying, selling, and renting properties with us.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openIndex === index ? 'active' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
