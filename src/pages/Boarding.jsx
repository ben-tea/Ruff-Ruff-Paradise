import '../CSS/boarding.css';
import boardingImage from '../Images/daycare-image.jfif'
import dogboarding1 from '../Images/dogboarding1.avif'
import dogboarding2 from '../Images/dogboarding2.avif'
import catboarding1 from '../Images/catboarding1.avif'
import catboarding2 from '../Images/catboarding2.avif'

function Boarding() {
  return (
    <section id="daycare" className="info-section">
      <div className="info-content reverse">
        <div className="info-text">
          <h2>OvernightBoarding Services</h2>
          <p>
            Our spacious facility and 1-acre playground are a true paradise for dogs and
            cats! With professional, insured caretakers, your pet will enjoy a safe,
            comfortable, and fun stay — almost like a vacation of their own.
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src={boardingImage}
            alt="Dogs playing"
            className="info-image"
          />
        </div>
      </div>

      {/* Requirements */}
      <div className="boarding-section">
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
              Leukemia (required if your cat goes outdoors or has ever been outdoors)
            </li>
          </ul>
        </div>

        <div className="requirement-block">
          <h4>Flea & Tick Policy</h4>
          <p>
            All pets are required to be on a veterinarian-approved flea and tick preventative to keep
            everyone safe and healthy.
          </p>
        </div>
      </div>

      {/* Dog Boarding */}
      <div className="pricing-section">
        <h3>Dog Boarding</h3>
        <p>
          Includes 2 free petting sessions, 2 free daily walks, 3 outdoor potty breaks, and
          1 hour of playtime. Puppies are given potty breaks every 1–2 hours.
        </p>
        <ul>
          <li>30" Small – $30</li>
          <li>36" Medium – $35</li>
          <li>42" X-Large – $40</li>
          <li>48" 3X-Large – $45</li>
          <li>4' x 6' Suite – $50</li>
          <li>Second pet in same enclosure – $25</li>
        </ul>

              <div className="photo-section">
        <div className="photo-content">
          <div className="photo-item">
            <img src={dogboarding1} alt="Dog Boarding 1"/>
          </div>
          <div className="photo-item">
            <img src={dogboarding2} alt="Dog Boarding 2"/>
          </div>
        </div>
      </div>

      </div>

      {/* Cat Boarding */}
      <div className="pricing-section">
        <h3>Cat Boarding</h3>
        <p>
          $26 per night – Includes free roam in our cat room most of the day, with cozy,
          safe overnight housing and plenty of personal attention.
        </p>

        <div className="photo-section">
        <div className="photo-content">
          <div className="photo-item">
            <img src={catboarding1} alt="Cat Boarding 1"/>
          </div>
          <div className="photo-item">
            <img src={catboarding2} alt="Cat Boarding 2"/>
          </div>
        </div>
      </div>
      </div>



      {/* Combined Playtime & Extras */}
      <div className="pricing-section">
        <h3>Playtime Add-Ons & Extra Services</h3>

        <h4>Playtime</h4>
        <ul>
          <li>Individual Playtime – $10 for 20 minutes</li>
          <li>Cuddle Time – $10 for 20 minutes</li>
          <li>Group Play – $20 for 1 hour</li>
          <li>Individual Walks – $10 for 10 minutes | $20 for 20 minutes</li>
        </ul>

        <h4>Extra Services</h4>
        <ul>
          <li>$6/day – Feeding with our food</li>
          <li>$6/day – Administer medication as requested</li>
          <li>$10/day – Special needs care (assessed by staff)</li>
          <li>$25/day – Each additional pet in same cage or suite</li>
          <li>Exit Bath & Nail Service – See Grooming Price List</li>
        </ul>
      </div>
    </section>
  );
}

export default Boarding;