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
        src="https://cdn.sanity.io/images/b2azodur/production/075f90cc60b8e43ba745972f13de7ced733cb055-656x664.png"
      />
      <Section
        sh="Jetzt Geöffnet"
        heading="Für mehr Verbundenheit
      wir kümmern uns!"
        descr="Für mehr Verbundenheit wir kümmern uns!"
        CTA="Unsere Services"
        link="/"
        image="https://cdn.sanity.io/images/b2azodur/production/075f90cc60b8e43ba745972f13de7ced733cb055-656x664.png"
      />
      <CardSection sh="Vertrauen" h="vertraucen" />
    </div>
  );
}
