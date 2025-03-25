import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "What types of clay products do you offer?", 
      answer: "We currently offer handmade clay arts for keychain and earrings for your loved ones." 
    },
    { 
      question: "Do you take custom orders?", 
      answer: "Yes! We accept custom orders for personalized clay art. You can share your design ideas, and we’ll craft them for you." 
    },
    { 
      question: "How long does it take to create an art?", 
      answer: "Orders typically take 2-7 days, depending on the complexity of the design. Custom orders might take some long time." 
    },
    { 
      question: "Do you take online payment through website?", 
      answer: "Nope! till now we don't take online payment through website. You can directly pay me through QR." 
    },
    { 
      question: "Do you ship everywhere?", 
      answer: "No, as of currently, I am not shipping my products. You can buy and have to take it directly and outside that delivery charge may apply and should be paid in advance." 
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
