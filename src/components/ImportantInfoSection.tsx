export const ImportantInfoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-navy text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Važne informacije
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">💳 Načini plaćanja</h4>
              <ul className="space-y-1 text-white/90">
                <li>• Gotovina</li>
                <li>• Bankovna transakcija</li>
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
        </div>
      </div>
    </section>
  );
}; 