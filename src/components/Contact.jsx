const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Want to chat? Feel free to reach out via{' '}
        <a href="mailto:alyanasmat13@gmail.com" className="contact-link">
          email
        </a>{' '}
        or{' '}
        <a href="https://linkedin.com/in/muhammad-alyan-asmat" className="contact-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        if you're looking for a developer, have a question, or just want to connect.
      </p>
    </section>
  );
};

export default Contact;