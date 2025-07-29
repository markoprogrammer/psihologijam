import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ljubicaImage from "../assets/ljubica.jpg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>O meni - Ljubica Milosavljević | Privatni Psiholog & Psihoterapeut Kragujevac</title>
        <meta name="description" content="Ljubica Milosavljević - dipl. psiholog i porodični psihoterapeut. Diplomirala na Filozofskom fakultetu u Beogradu 2011. Specijalizovana za rad sa decom i porodičnu terapiju." />
        <link rel="canonical" href="https://psihologijam.rs/o-meni" />
        <meta property="og:url" content="https://psihologijam.rs/o-meni" />
        <meta property="og:title" content="O meni - Ljubica Milosavljević | Privatni Psiholog & Psihoterapeut Kragujevac" />
        <meta property="og:description" content="Ljubica Milosavljević - dipl. psiholog i porodični psihoterapeut. Diplomirala na Filozofskom fakultetu u Beogradu 2011. Specijalizovana za rad sa decom i porodičnu terapiju." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-accent/20 to-secondary pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                    O meni
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-primary font-semibold">
                    Ljubica Milosavljević
                  </h2>
                  <p className="text-lg text-gray-600">
                    dipl. psiholog, porodični psihoterapeut
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <img
                      src={ljubicaImage}
                      alt="Ljubica Milosavljević - dipl. psiholog i porodični psihoterapeut"
                      className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-gray-700">
                  <p>
                    Diplomirala sam 2011. godine na Filozofskom fakultetu, odeljenje za Psihologiju, u Beogradu, 
                    nakon čega sam stekla zvanje dipl. psihologa.
                  </p>

                  <p>
                    Na odeljenju za Psihologiju, u Kragujevcu sam 2 godine kao stručni saradnik držala studentima 
                    vežbe na predmetima Razvojna psihopatologija i Psihologija porodice.
                  </p>

                  <p>
                    Od 2014. godine radila sam kao asistent deteta sa autizmom i kao nastavnik psihologije u 
                    muzičkoj školi "Dr Miloje Milojević" i Drugoj tehničkoj školi u Kragujevcu. 
                    Godine 2016. otišla sam za Ameriku na praksu u Anderson centar za autizam 
                    i tamo sam stekla sertifikate i znanja potrebna za RBT (registrovanog bihejvioralnog tehničara).
                  </p>

                  <p>
                    Po povratku iz Amerike odlučila sam da započnem svoju privatnu praksu. 
                    U oktobru 2017. godine otvorila sam edukativni centar koji je namenjen deci 
                    kojoj je potrebna podrška u razvoju, učenju, ponašanju i emocionalnom reagovanju.
                  </p>

                  <p>
                    2018. godine upisala sam četvorogodišnju edukaciju iz Sistemske porodične terapije 
                    na Institutu za mentalno zdravlje u Beogradu i stekla sertifikat porodičnog terapeuta, 
                    čime sam upotpunila postojeća znanja, poboljšala kvalitet postojećih usluga 
                    i proširila svoje područje rada i na odrasle.
                  </p>

                  <p>
                    Osim toga, aktivno učestvujem na skupovima vezanim za struku. U organizaciji 
                    Centra za primenjenu psihologiju 2020. godine završila sam uvodni kurs: 
                    "Dijagnostika neurorazvojnih problema kod dece" čiji je osnovni cilj unapređenje 
                    kompetencija stručnjaka za rano prepoznavanje, dijagnostiku, tretman i praćenje 
                    dece sa neurorazvojnim problemima.
                  </p>

                  <p>
                    Takođe od 2017. godine aktivno učestvujem u programima za podršku ženama, 
                    žrtvama porodičnog nasilja.
                  </p>
                </div>

                {/* Credentials Section */}
                <div className="mt-12 bg-accent/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy mb-6">Obrazovanje i sertifikati</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-navy">Diplomski studije</h4>
                        <p className="text-gray-600">Filozofski fakultet, Psihologija</p>
                        <p className="text-sm text-gray-500">Beograd, 2011</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-navy">Sistemska porodična terapija</h4>
                        <p className="text-gray-600">Institut za mentalno zdravlje</p>
                        <p className="text-sm text-gray-500">Beograd, 2018</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-navy">RBT sertifikat</h4>
                        <p className="text-gray-600">Anderson centar za autizam</p>
                        <p className="text-sm text-gray-500">Amerika, 2016</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-navy">Dijagnostika neurorazvojnih problema</h4>
                        <p className="text-gray-600">Centar za primenjenu psihologiju</p>
                        <p className="text-sm text-gray-500">2020</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mt-12 bg-secondary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy mb-6">Područja rada</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Individualna psihološka podrška za decu</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Sistemska porodična terapija</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Rad sa decom sa autizmom</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Neuropsihološka procena</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Podrška žrtvama porodičnog nasilja</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-gray-700">Tretman neurorazvojnih problema</span>
                      </div>
                    </div>
                  </div>
                                 </div>
               </div>
             </div>
           </div>
         </section>
        </main>
        <Footer />
       </div>
    </>
  );
} 