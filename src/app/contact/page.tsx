import React from "react";
import SocialMediaContainer from "./socialmedia_container";

export default function ContactPage() {
  return (
    <section className="contact">
      <h2>Find me in</h2>
      <p>I mainly use LinkedIn but you may also find me in Github.</p>
      <SocialMediaContainer />
    </section>
  );
}