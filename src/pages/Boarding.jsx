import '../CSS/boarding.css';

function Boarding() {
  return (
    <section id="daycare" className="info-section">
      <div className="info-content reverse">
        <div className="info-text">
          <h2>Daycare & Boarding Services</h2>
          <p>
            Our spacious facility and 1-acre playground are a true paradise for dogs and
            cats! With professional, insured caretakers, your pet will enjoy a safe,
            comfortable, and fun stay — almost like a vacation of their own.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
          alt="Dogs playing"
          className="info-image"
        />
      </div>

      {/* Combined Info Section */}
      <div className="boarding-section">
        <h3>Daycare Information</h3>

        <h4>Evaluation</h4>
        <p>
          To ensure the health, safety, and happiness of all pets, each dog undergoes an
          evaluation to assess social skills in a group setting. This is the first step in
          helping your dog have a fun, positive experience that will have them excited to
          return for more playtime at Ruff Ruff Paradise!
        </p>

        <h4>Reservations</h4>
        <p>
          Due to high demand, advance reservations are strongly recommended. You can even
          secure a spot in your dog’s favorite playgroup with a standing reservation.
          Individual daily reservations can be made during business hours or online.
          Walk-ins are welcome as space allows.
        </p>

        <h4>Feeding</h4>
        <p>
          We recommend feeding your dog at least one hour before drop-off. While we do not
          provide meals during daycare, our staff is happy to accommodate special requests.
          We’ll care for your pet like they are our own.
        </p>

        <h4>Flea & Tick Policy</h4>
        <p>
          Since pets enjoy plenty of outdoor play in our 1-acre playground, all dogs are
          required to be on a veterinarian-approved flea and tick preventative to keep
          everyone safe and healthy.
        </p>
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
      </div>

      {/* Dog Boarding */}
      <div className="pricing-section">
        <h3>Dog Boarding</h3>
        <p>
          Includes 2 free petting sessions, 2 free daily walks, 3 outdoor potty breaks, and
          1 hour of playtime. Puppies are given potty breaks every 1–2 hours.
        </p>
        <ul>
          <li>30" Small – $28</li>
          <li>36" Medium – $33</li>
          <li>42" X-Large – $38</li>
          <li>48" 3X-Large – $43</li>
          <li>4' x 6' Suite – $48</li>
          <li>Second pet in same enclosure – $20</li>
        </ul>
      </div>

      {/* Cat Boarding */}
      <div className="pricing-section">
        <h3>Cat Boarding</h3>
        <p>
          $26 per night – Includes free roam in our cat room most of the day, with cozy,
          safe overnight housing and plenty of personal attention.
        </p>
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
          <li>$8/day – Special needs care (assessed by staff)</li>
          <li>$15/day – Each additional family pet in same cage or suite</li>
          <li>Exit Bath & Nail Service – See Grooming Price List</li>
        </ul>
      </div>
    </section>
  );
}

export default Boarding;