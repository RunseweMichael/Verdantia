import React from 'react';

export default function Guide() {
  return (
    <div className='pt-5 bg-dark text-white text-left'>
    <div className="container pb-3">
      <h1 className="mb-4 pt-5 text-success fw-bold titles text-center">🌱 AUGUST GARDEN GUIDE</h1>
      <p className="text-white mb-5 explore">
        August is a month of abundance, but also of preparation. As a farmer, I like to think of August as
        the month where summer’s hard work pays off, and the fields begin to give generously.
        But it’s also the time to plan ahead — cooler months are on the horizon.
      </p>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">🌞 Weather & Climate</h3>
        <p className="mb-3 text-white highlight-text">
          In most regions, August is still warm: sometimes uncomfortably so. 
          That heat can be both a blessing and a challenge. While warm soil accelerates growth for many crops,
          it can also cause stress, especially for tender greens and thirsty fruiting plants.
          I like to check my irrigation systems daily and water deeply early in the morning.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">🥕 Crops to Harvest</h3>
        <ul className="mb-3 text-white highlight-text">
          <li><strong className='text-success'>Tomatoes</strong> : Peak flavor this month, especially for heirlooms. Harvest fully ripe to avoid cracking.</li>
          <li><strong className='text-success'>Sweet corn</strong> : Kernels should be plump and milky when pressed.</li>
          <li><strong className='text-success'>Peppers & Chilies</strong> : Both green and ripe varieties are in abundance.</li>
          <li><strong className='text-success'>Summer squash</strong> : Pick young for tender texture.</li>
          <li><strong className='text-success'>Herbs</strong> : Basil, oregano, and thyme are bursting with essential oils now.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">🌱 Planting for Fall</h3>
        <p className="mb-3 text-white highlight-text">
          Believe it or not, August is prime time for sowing fall crops. 
          In my fields, I direct-seed carrots, beets, radishes, and spinach. 
          I also start brassicas like broccoli and cauliflower indoors or under shade to transplant in early September.
          For those with limited space, a few containers of lettuce can give fresh greens well into October.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">💧 Watering & Soil Care</h3>
        <p className="mb-3 text-white highlight-text">
          Heat and long daylight hours mean evaporation rates are high. 
          Deep watering — letting moisture soak well below the surface — encourages deeper root growth.
          Mulching around plants not only keeps moisture in but also suppresses weeds.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">🐛 Pest & Disease Watch</h3>
        <p className="mb-3 text-white highlight-text">
          August is prime time for pests like aphids, whiteflies, and hornworms. 
          I make a habit of inspecting my plants daily in the early morning when pests are slow-moving.
          If I spot a problem early, I can hand-pick or spray with organic treatments before it spreads.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-bold highlight-head text-success">🛠 Farmer’s Tip</h3>
        <blockquote className="blockquote mb-3 text-white highlight-text">
          “August is the month to be both a harvester and a strategist.
          Eat well from the land now, but remember to plant seeds for the meals you’ll enjoy when the frost arrives.”
        </blockquote>
      </section>
    </div>
    </div>
  );
}
