import * as React from 'react';

interface InquiryEmailProps {
  name: string;
  email: string;
  message: string;
}

const InquiryEmail: React.FC<Readonly<InquiryEmailProps>> = ({ name, email, message }) => (
  <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
    <h1 style={{ color: '#1a1a1a', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      New Inquiry from Prestige Leather Website
    </h1>
    <p>You have received a new message from your website contact form.</p>
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
      This email was sent from the contact form on your Prestige Leather website.
    </p>
  </div>
);

export default InquiryEmail;
