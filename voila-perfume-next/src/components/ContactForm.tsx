import React from 'react';
import dynamic from 'next/dynamic';
import { useForm, Controller } from 'react-hook-form';
import FormField from "@/components/FormField";

const MotionSection = dynamic(() => import('framer-motion').then(mod => mod.motion.section), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <MotionSection
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="card-base lg:w-2/3"
    >
      <h2 className="text-3xl font-playfair-display font-semibold text-charcoal-black mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => (
              <FormField
                label="First Name"
                id="firstName"
                ariaLabel="First Name"
                {...field}
              />
            )}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => (
              <FormField
                label="Last Name"
                id="lastName"
                ariaLabel="Last Name"
                {...field}
              />
            )}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <FormField
              label="Email Address"
              id="email"
              type="email"
              ariaLabel="Email Address"
              {...field}
            />
          )}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <FormField
              label="Subject (Optional)"
              id="subject"
              as="select"
              ariaLabel="Subject"
              {...field}
            >
              <div className="bg-light-bg dark:bg-dark-bg">
  
</div>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
            </FormField>
          )}
        />

        <Controller
          name="message"
          control={control}
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <FormField
              label="Message"
              id="message"
              as="textarea"
              rows={6}
              ariaLabel="Message"
              {...field}
            />
          )}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <MotionButton
          type="submit"
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 192, 203, 0.6)" }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary"
        >
          Send Message
        </MotionButton>
      </form>
    </MotionSection>
  );
};

export default ContactForm;
