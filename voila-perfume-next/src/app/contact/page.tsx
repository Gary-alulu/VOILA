'use client';
import React from 'react';
import ContactIntro from "@/components/ContactIntro";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-off-white text-text-primary-light p-4 md:p-8 lg:p-12">
      <ContactIntro />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;