import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Heart, Crown, Palette, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import embroideryImg from "@/assets/embroidery-detail.webp";
import tejido from "@/assets/tejido.webp";
import guayabera from "@/assets/guayabera.webp";
import joyeria1 from "@/assets/joyeria1.webp";
import principal from "@/assets/Principal.webp";
import costura1 from "@/assets/costura1.webp";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  { icon: Heart, title: "Tradición Viva", desc: "Cada puntada lleva siglos de sabiduría artesanal zapoteca." },
  { icon: Sparkles, title: "Artesanía Única", desc: "Bordados a mano que hacen de cada prenda una pieza irrepetible." },
  { icon: Crown, title: "Elegancia Atemporal", desc: "La sofisticación del traje istmeño trasciende modas y épocas." },
  { icon: Star, title: "Identidad Orgullosa", desc: "Viste con la historia y el orgullo del Istmo de Tehuantepec." },
  { icon: Palette, title: "Personalización Exclusiva", desc: "Elige colores, medidas y detalles. Tu prenda, hecha para ti." },
];

const featuredProducts = [
  { name: "Huipil de Terciopelo Bordado", image: tejido, desc: "Bordado floral a mano sobre terciopelo negro. Una obra de arte para portar con orgullo." },
  { name: "Guayabera Istmeña", image: guayabera, desc: "Elegancia masculina del Istmo. Confección fina con detalles personalizables." },
  { name: "Accesorios", image: joyeria1, desc: "Complementa tu estilo con toques auténticos que resaltan la identidad y el encanto de la tradición istmeña." },
  ];

const testimonials = [
  { name: "María G.", city: "Juchitán, Oaxaca", text: "Mi huipil personalizado para la boda fue espectacular. La calidad y atención de Flor Radiante no tiene comparación.", occasion: "Boda tradicional" },
  { name: "Lucía R.", city: "Ciudad de México", text: "Compré un huipil para la Guelaguetza y recibí cientos de elogios. Es una pieza de museo que puedo vestir.", occasion: "Guelaguetza" },
  { name: "Carmen T.", city: "Oaxaca, Oaxaca", text: "La personalización es increíble. Eligieron los colores exactos que quería. Es mi segunda compra y no será la última.", occasion: "Vela istmeña" },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Flor Radiante | Huipiles, Trajes y Ropa Artesanal del Istmo de Tehuantepec"
        description="Huipiles bordados a mano, trajes istmeños, guayaberas y accesorios artesanales del Istmo de Tehuantepec, Oaxaca. Personaliza tu prenda con tradición zapoteca."
        canonical="https://florradiante.com/"
        keywords="huipil, traje istmeño, ropa artesanal, Istmo de Tehuantepec, bordado zapoteco, guayabera, Oaxaca, 
        huipiles artesanales Oaxaca, huipiles Istmo de Tehuantepec, comprar huipil artesanal, huipiles bordados a mano, 
        traje istmeño original, ropa artesanal mexicana, huipiles auténticos Oaxaca, tienda de huipiles, huipiles hechos a mano San Blas Atempa, Flor Radiante huipiles"
      />
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
        <img
            src={principal}
            alt="Mujer vistiendo huipil tradicional del Istmo de Tehuantepec con bordado floral artesanal"
            className="h-full w-full object-cover"
            fetchPriority="high"
            width={1920}
            height={1080}
            decoding="async"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeInUp} className="font-body text-sm font-medium uppercase tracking-[0.3em] text-white">
              ROPA Y JOYERÍA ARTESANAL DEL ISTMO DE TEHUANTEPEC
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-4 font-display text-4xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
              Huipiles artesanales: el alma del Istmo en cada puntada
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 font-body text-base leading-relaxed text-cream/80 md:text-lg">
              Huipiles, trajes istmeños, enaguas, guayaberas, refajos, vestidos y joyería artesanal. Cada prenda está hecha a mano por bordadoras de San Blas Atempa, Oaxaca. Descubre nuestro catálogo y personaliza la tuya.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/coleccion"
                className="inline-flex items-center rounded-md bg-primary px-8 py-4 font-body text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-warm"
              >
                Explorar Colección
              </Link>
              <WhatsAppButton variant="hero" label="Personaliza tu prenda" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="flex items-center justify-center py-8">
        <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
      </div>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Más que ropa, una herencia viva
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
              Cada prenda de Flor Radiante encarna el orgullo, la técnica y la identidad del Istmo de Tehuantepec.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid gap-8 md:grid-cols-5"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Prendas Destacadas
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              Descubre piezas únicas, bordadas a mano por maestras artesanas. Disponibles para personalización.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={fadeInUp}
                className="group overflow-hidden rounded-lg border border-border bg-background shadow-elegant transition-shadow hover:shadow-warm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - artesanía del Istmo de Tehuantepec`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                  <div className="mt-4">
                    <WhatsAppButton productName={product.name} label="Consultar disponibilidad" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customization CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={embroideryImg} alt="Detalle de bordado zapoteca artesanal" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-cream md:text-5xl">
              ¿Buscas algo único y hecho a tu medida?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl font-body text-base text-cream/80 md:text-lg">
              Personaliza tu tradición: elige colores, medidas y detalles que te representen. Cada prenda es creada especialmente para ti por nuestras artesanas.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <WhatsAppButton
                variant="hero"
                label="Contáctanos para personalizar"
                message="Hola, me gustaría una prenda personalizada. ¿Podrían asesorarme sobre opciones de colores, medidas y diseños?"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Artisan */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <img
                src={costura1}
                alt="Manos de artesana oaxaqueña bordando un huipil tradicional con técnica zapoteca"
                className="rounded-lg shadow-elegant"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Detrás de cada puntada, una artesana
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Nuestras bordadoras son guardianas de una tradición centenaria. Con sus manos, transforman hilos en historias, colores en emociones y tela en herencia. Conocerlas es entender por qué cada prenda vale mucho más que su precio.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-6">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center font-body text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Conoce a nuestras artesanas →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center font-display text-3xl font-bold text-foreground md:text-4xl"
          >
            Lo que dicen nuestras clientas
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                className="rounded-lg border border-border bg-background p-8"
              >
                <p className="font-body text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.city} · {t.occasion}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
