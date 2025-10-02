import '../CSS/contact.css';

function Contact() {
  return (
    <section id="contact" className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2>Contact Us!</h2>
          <p>
            We’d love to hear from you! Whether you’re looking for boarding, 
            grooming, or just want more information, reach out to us using the 
            details below.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-section">
        <h3>General Information</h3>
        <p>
          <strong>Address:</strong><br />
          13389 Murphy Road<br />
          Stafford, TX 77477
        </p>

        <p>
          <strong>Phone:</strong> <a href="tel:8329871881">832-987-1881</a><br />
          <strong>Email:</strong> <a href="mailto:ruffruffparadise@gmail.com">ruffruffparadise@gmail.com</a>
        </p>
      </div>

      {/* Business Hours */}
      <div className="contact-section">
        <h3>Business Hours</h3>
        <ul>
          <li>Monday – Friday: 9:00 AM – 4:00 PM</li>
          <li>Saturday: 10:00 AM – 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Directions */}
      <div className="contact-section">
        <h3>Directions</h3>
        <p>
          We’re near the intersection of Murphy Road (1092) and Cash Road. 
          From the intersection, turn east onto Cash Road. After about 0.1 
          left. Right after the church, make a left turn and continue to 
          the end of the road. You’ll see the GPi company straight ahead—Ruff
          Ruff Paradise is located just to the right.
        </p>
      </div>

      {/* Google Map */}
      <div className="contact-section">
        <h3>Find Us on the Map</h3>
        <div className="map-container">
          <iframe
            title="Ruff Ruff Paradise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11193.77707298481!2d-95.58531785!3d29.627231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c13e12f6aee3%3A0x15e91d38451e5e62!2s13389%20Murphy%20Rd%2C%20Stafford%2C%20TX%2077477!5e0!3m2!1sen!2sus!4v1696272000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;