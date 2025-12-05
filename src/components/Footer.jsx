import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer"> 
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-contact">
          <p>
            📍 13389 Murphy Road, Stafford, TX 77477
          </p>
          <p>
            📞 <a href="tel:8329871881">832-987-1881</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;