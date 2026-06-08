import '../CSS/grooming.css';
import groomingImage from "../Images/grooming-image.avif"
import grooming1 from "../Images/grooming1.avif"
import grooming2 from "../Images/grooming2.avif"

function Grooming() {
  return (
    <section id="grooming" className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2>Grooming</h2>
          <p>
            Pamper your pets with our grooming services! From baths to stylish cuts, our
            experienced professionals make sure your furry friend looks and feels their very best.
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src={groomingImage}
            alt="Dog grooming"
            className="info-image"
          />
        </div>
      </div>


      {/* Promotion */}
      <div className="promo-block">
        <h3>Special Promotion</h3>
        <p>
          Get <strong>10% off grooming</strong> for <strong>new customers</strong> on{" "}
          <strong>Wednesdays and Fridays</strong>! Limited availability – call{" "}
          <a href="tel:8329871881">832-987-1881</a> to book your appointment today.
        </p>
        <p>
          <em>
            Note: Promotion dates may change without notice. Please call for the latest
            details.
          </em>
        </p>
      </div>

      {/* Services */}
      <div className="grooming-section">
        <h3>Our Services</h3>
        <h4>Bathing Service Includes:</h4>
        <p>
          Organic shampoo wash, blow dry and hand dry, nail trim, ear cleaning, and anal
          gland cleaning.
        </p>

        <h4>Grooming Service Includes:</h4>
        <p>
          Organic shampoo wash, blow dry and hand dry, brush out, haircut or trim, nail
          trim, ear cleaning, and anal gland cleaning.
        </p>

        <p>
          <strong>
            We use only all-natural, organic, professional-grade shampoos and conditioners
            – no harsh chemicals, dyes, or parabens.
          </strong>
        </p>
        <p>
          Our groomers have <strong>10–30 years of professional experience</strong> – work
          you can trust!
        </p>
      </div>

            {/* Requirements */}
      <div className="grooming-section">
        <h3>Requirements: For the Health and Safety of All Dogs and Cats</h3>
        <div className="requirement-block">
          <h4>Dog Vaccination Requirements</h4>
          <ul>
            <li>Rabies (RV)</li>
            <li>DHPP</li>
            <li>Bordetella (BV)</li>
          </ul>
          <p>
            <em>Canine Influenza (CI) is also recommended.</em>
          </p>
        </div>

        <div className="requirement-block">
          <h4>Cat Vaccination Requirements</h4>
          <ul>
            <li>FVRCP</li>
            <li>Rabies (RV)</li>
            <li>
              Leukemia (required if your cat goes outside or has ever been outdoors)
            </li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="pricing-section">
        <h3>Grooming & Bathing Prices</h3>

        <h4>Bath</h4>
        <p>
          (Includes organic shampoo, nail trim, ear cleaning, and anal gland cleaning)
        </p>
        <ul>
          <li>Small Dog (&lt;10 lbs, Short Breed) – $22</li>
          <li>Small Dog (10-19 lbs, Short Breed) – $25</li>
          <li>Small Dog (&lt;20 lbs, Long Breed) – $29</li>
          <li>Medium Dog (20–29 lbs) – $34</li>

          <li>
            Large Dog 
              <ul style={{ paddingLeft: '20px' }}>
                <li>30–39 lbs – $45</li>
                <li>40–49 lbs – $47</li>
                <li>50–59 lbs – $58</li>
                <li>60–69 lbs – $68</li> 
              </ul>
          </li>
          <li>
            Extra Large Dog
            <ul style={{ paddingLeft: '20px' }}>
              <li>70–79 lbs – $78</li>
              <li>80–89 lbs – $90</li>
              <li>90–100 lbs – $100</li>
              <li>100–110 lbs – $120</li>
              <li>Over 110 lbs – $130</li>
            </ul>
          </li>
        </ul>

        <h4>Grooming</h4>
        <p>
          (Includes organic shampoo, blow dry, brush out, haircut/trim, nail trim, ear
          cleaning, and anal gland cleaning)
        </p>
        <ul>
          <li>Small Dog (&lt;10 lbs) – $45</li>
          <li>Small Dog (10-19 lbs) – $47</li>
          <li>Medium Dog (20–29 lbs) – $57</li>
          <li>
            Large Dog 
              <ul style={{ paddingLeft: '20px' }}>
                <li>30–39 lbs – $67</li>
                <li>40–49 lbs – $72</li>
                <li>50–59 lbs – $85</li>
                <li>60–69 lbs – $95</li>
              </ul>
          </li>
          <li>
            Extra Large Dog 
            <ul style={{ paddingLeft: '20px' }}>
              <li>70–79 lbs – $105</li>
              <li>80–89 lbs – $115</li>
              <li>90–100 lbs – $130</li>
              <li>100–110 lbs – $150</li>
              <li>Over 110 lbs – $160</li>
            </ul>
          </li>
        </ul>

        <h4>Additional Services</h4>
        <ul>
          <li>Anal Gland Cleaning – $12</li>
          <li>De-Matting (20 min) – $15</li>
          <li>Teeth Brushing – $10</li>
          <li>Nail Buff – $8</li>
          <li>
            Shampoo/Conditioner Upgrade – $6+ (Whitening, Medicated, Allergy Relief, Flea & Tick, Shed
            Control)
          </li>
          <li>Nail Clipping – $12</li>
        </ul>

        <p>
          <strong>
            Our shampoos and conditioners are all-natural and organic, with no chemical
            dyes or parabens – premium products trusted in professional grooming.
          </strong>
        </p>

                <div className="photo-section">
        <div className="photo-content">
          <div className="photo-item">
            <img
              src={grooming1}
            />
          </div>
          <div className="photo-item">
            <img
              src={grooming2}
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Grooming;