import React from "react";
import HeroSection from "../../components/HeroSection";
import Section from "../../components/Section";
import CardSection from "../../components/CardSection";

export default function Homepage() {
  return (
    <div>
      <HeroSection
        heading="Kompetente Beratung vor Ort"
        sh="Verträge, Handys, Laptobs, Smart Home,..."
        cta="Termin Holen"
        href="/"
        src="/../public/assets/Phone.png"
      />
      <Section
        sh="Jetzt Geöffnet"
        heading="Für mehr Verbundenheit
      wir kümmern uns!"
        descr="Für mehr Verbundenheit wir kümmern uns!"
        CTA="Unsere Services"
        link="/"
        image="/../public/assets/Phone.png"
      />
      <CardSection sh="Vertrauen" h="vertraucen" />
    </div>
  );
}
