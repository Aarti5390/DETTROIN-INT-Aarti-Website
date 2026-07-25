import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What Curricula does Pavna School offer?',
      answer: 'Pavna School offers academic pathways to cater to diverse learning needs. Students can choose the Central Board of Secondary Education (CBSE) for a robust national curriculum.'
    },
    {
      question: 'Is boarding mandatory for all students?',
      answer: 'While we pride ourselves on our world-class residential facilities, boarding is not mandatory for all grades. We offer Day Boarding (Class VII to XII – 7 AM – 1 PM & Class PG to VI – 8:30 AM – 2:30 PM), Weekly Boarding (Mon-Saturday), and Full Boarding options to provide flexibility for families.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'To ensure personalized attention and mentorship, we maintain a strict student-teacher ratio of 1:12 across all grades. In our Early Years program, this ratio is even lower at 1:8 to support developmental needs.'
    },
    {
      question: 'How does the admission process work?',
      answer: 'All processes regarding the admission process can be found on our Admissions page. We encourage you to visit the school campus or contact our admissions office for a personalized guidance session.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <span className="subtitle">✦ FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about Pavna School</p>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;