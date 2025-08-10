import React from "react";  
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function PlantOfTheMonth() {
  return (
    <div className="bg-dark text-left text-white pt-5">
        <Navbar />
    <div
      className="card bg-dark text-white shadow-lg p-4 pt-5"
      style={{ borderRadius: "15px", maxWidth: "800px", margin: "auto", border:'2px solid green'}}
    >
      <img
        src="/catalogImg/lavender.jpg"
        className="card-img-top rounded"
        alt="Lavender Plant"
        style={{ borderRadius: "10px", objectFit: "cover", height: "350px" }}
      />
      <div className="card-body">
        <h2 className="fw-bold highlight-head text-success">
          🌿 Plant of the Month: Lavender
        </h2>
        <p className="card-text text-white highlight-text">
          As a farmer who’s grown lavender for years, I can tell you this plant
          is much more than just a pretty face. Lavender is a tough, fragrant
          perennial that thrives in hot, dry conditions — the kind that make
          other plants wilt. Once established, it asks for very little, yet
          gives so much in return.
        </p>
        <h4 className="fw-bold highlight-head text-success">🌱 Growing Conditions</h4>
        <p className="card-text text-white highlight-text">
          Lavender loves{" "}
          <strong>full sun and well-drained, sandy or loamy soil</strong>. If
          your soil stays soggy after rain, you’ll want to amend it with sand or
          gravel. I plant my rows on slightly raised beds so water drains away
          from the roots. The plant dislikes “wet feet,” and too much moisture
          can cause root rot.
        </p>
        <h4 className="fw-bold highlight-head text-success">💧 Watering & Care</h4>
        <p className="card-text text-white highlight-text">
          In its first year, water regularly so the roots can get a strong
          start. After that, lavender becomes drought-tolerant. I water my
          mature plants only during long dry spells. A yearly trim after
          flowering keeps the bushes neat and encourages more blooms the
          following season.
        </p>
        <h4 className="fw-bold highlight-head text-success">🌸 Harvest & Uses</h4>
        <p className="card-text text-white highlight-text">
          I harvest lavender when about half the buds on the stem have opened —
          that’s when the fragrance is at its peak. Tie the stems in small
          bundles and hang them upside down in a cool, dark place to dry. Dried
          lavender makes excellent sachets, wreaths, and potpourri. The flowers
          and leaves can also be distilled for{" "}
          <strong>lavender essential oil</strong>, prized for its calming and
          antiseptic qualities.
        </p>
        <h4 className="fw-bold highlight-head text-success">🐝 Benefits to the Farm</h4>
        <p className="card-text text-white highlight-text">
          Lavender is a pollinator magnet. Bees, butterflies, and even
          beneficial wasps flock to it in bloom. This makes it a wonderful
          companion plant for vegetables and fruit trees. Plus, its strong scent
          naturally repels some pests like moths and fleas.
        </p>
        <h4 className="fw-bold highlight-head text-success">👨‍🌾 Farmer’s Tip</h4>
        <p className="card-text text-white highlight-text">
          Don’t overfertilize. Lavender prefers lean soil — too much nitrogen
          will give you lots of leafy growth but fewer flowers. And remember:
          give it space to breathe. Good air circulation prevents fungal
          diseases and keeps your plants healthy for years.
        </p>
        <p className="mt-4 text-success fst-italic">
          “Lavender is proof that beauty and resilience can grow side by side —
          a reminder for every farmer that sometimes the low-maintenance crops
          are the most rewarding.”
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
}
