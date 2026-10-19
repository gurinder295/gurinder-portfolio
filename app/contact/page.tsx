 'use client';

 import { useState } from 'react';
 import type { FormEvent } from 'react';
 import { useRouter } from 'next/navigation';
 import PageTitle from '../components/pageTitle';

 export default function Contact() {
   const router = useRouter();
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
   const [submitted, setSubmitted] = useState(false);

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
     event.preventDefault();
     setSubmitted(true);
   }

   return (
     <main className="container">
       <PageTitle title="Contact" />
       <section className="page contact-page">
         <p className="eyebrow">LET&apos;S TALK</p>
         <h1>Get in touch</h1>
         <p className="intro">
           Curious about something I&apos;ve worked on, or just want to say hi?
           Send me a note below. This is a demo form, so it will show your
           message here but won&apos;t send it anywhere.
         </p>
         {!submitted ? (
           <form className="contact-form" onSubmit={handleSubmit}>
             <label htmlFor="name">Your name</label>
             <input
               id="name"
               value={name}
               onChange={(event) => setName(event.target.value)}
               required
               placeholder="How should I address you?"
             />
             <label htmlFor="phone">Phone number</label>
             <input
               id="phone"
               type="tel"
               value={phone}
               onChange={(event) => setPhone(event.target.value)}
               required
               placeholder="The best number to reach you"
             />
             <label htmlFor="message">Your message</label>
             <textarea
               id="message"
               value={message}
               onChange={(event) => setMessage(event.target.value)}
               required
               rows={5}
               placeholder="What would you like to talk about?"
             />
             <button className="button" type="submit">
               Send a message
             </button>
           </form>
         ) : (
           <div className="confirmation" role="status">
             <h2>Thank you, {name}!</h2>
             <p>Here&apos;s what you entered:</p>
             <p>
               <strong>Name:</strong> {name}
             </p>
             <p>
               <strong>Phone:</strong> {phone}
             </p>
             <p>
               <strong>Message:</strong> {message}
             </p>
             <p className="note">
               Just a heads-up: this demo form doesn&apos;t send your message.
             </p>
             <button
               className="button"
               type="button"
               onClick={() => router.push('/about')}
             >
               Back to my story <span aria-hidden="true">→</span>
             </button>
           </div>
         )}
       </section>
     </main>
   );
}
