export const ImportantInfoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-navy text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Važne informacije
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">💳 Načini plaćanja</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Gotovina</li>
                <li>• Prenos sredstava na račun (ne primamo kartice)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">📅 Politika otkazivanja</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Besplatno otkazivanje 24h unapred</li>
                <li>• Molimo vas da nas blagovremeno obavestite</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mb-6">
            <h4 className="font-semibold mb-3">🪖 Vojni osiguranici — SOVO</h4>
            <p className="text-white/90">
              Vojni osiguranici uz važeći uput mogu koristiti naše usluge o trošku Fonda za socijalno osiguranje vojnih osiguranika.
            </p>
          </div>
          <div className="border-t border-white/20 pt-8">
            <h4 className="font-semibold mb-3">⚡ Zakazivanje danas za danas</h4>
            <p className="text-white/90">
              Zakazivanje danas za danas moguće je uz dodatnu naknadu od 2.500 RSD na osnovnu cenu usluge. Ova usluga se isključivo plaća uplatom na račun unapred.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 