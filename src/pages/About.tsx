import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import embroideryImg from "@/assets/embroidery-detail.webp";
import costura from "@/assets/costura.webp";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const artisans = [
  { name: "Doña Karla", specialty: "Bordado a mano", years: "5 años de experiencia", desc: "Maestra del bordado a mano floral. Sus manos han creado cientos de huipiles que hoy son tesoros familiares en todo el Istmo." },
  { name: "Doña Rosa", specialty: "Cadenilla", years: "5 años de experiencia", desc: "Especialista en la técnica de cadenilla, Rosa plasma en cada puntada los diseños heredados de su abuela." },
  { name: "Doña Estela", specialty: "Confección de enaguas", years: "5 años de experiencia", desc: "La gran maestra de las enaguas. Su precisión en los pliegues y su ojo para los detalles son legendarios en San Blas." },
];

const About = () => (
  <Layout>
    <SEOHead
      title="Nosotros - Flor Radiante | Artesanas del Istmo de Tehuantepec"
      description="Conoce a las artesanas de Flor Radiante en San Blas Atempa, Oaxaca. Mujeres zapotecas que preservan la tradición del bordado istmeño con cada puntada."
      canonical="https://florradiante.com/nosotros"
      keywords="artesanas oaxaqueñas, San Blas Atempa, bordadoras zapotecas, tradición istmeña,
      artesanas de Oaxaca huipiles, bordadoras zapotecas San Blas Atempa, historia huipil istmeño, 
      tradición textil Oaxaca, quienes hacen huipiles artesanales, cultura zapoteca vestimenta"
    />
    {/* Hero */}
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0">
        <img src={embroideryImg} alt="Detalle de bordado zapoteca del Istmo de Tehuantepec" className="h-full w-full object-cover" fetchPriority="high" width={1920} height={1080} decoding="async" />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="font-display text-4xl font-bold text-cream md:text-6xl">
          Nuestra Historia
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="mx-auto mt-6 max-w-2xl font-body text-lg text-cream/80">
          Más que un negocio, somos guardianes de una tradición viva.
        </motion.p>
      </div>
    </section>

    <div className="flex items-center justify-center py-8">
      <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
    </div>
    
      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                El origen de Flor Radiante
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Flor Radiante nació del amor profundo por la cultura zapoteca del Istmo de Tehuantepec y del deseo de compartir con el mundo la extraordinaria belleza de su indumentaria tradicional. Lo que comenzó como un sueño entre hilos y bordados, hoy es un negocio consolidado que conecta a las manos artesanas de Oaxaca con personas que valoran la autenticidad, la historia y la calidad.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Cada huipil, cada enagua, cada refajo que ofrecemos es el resultado de semanas de trabajo dedicado: desde la selección de los materiales más finos hasta el último bordado que da vida a cada diseño. No vendemos prendas; ofrecemos pedazos de historia viva que puedes vestir con orgullo.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.img
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              src={costura}
              alt="Artesana zapoteca bordando a mano un huipil en San Blas Atempa, Oaxaca"
              className="rounded-lg shadow-elegant"
              loading="lazy"
              width={800}
              height={600}
            />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Nuestro Propósito
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Creemos en el comercio justo, en la preservación de las técnicas ancestrales y en que cada artesana merece que su talento sea reconocido y valorado. Por eso trabajamos directamente con bordadoras y costureras del Istmo, asegurándonos de que cada peso invertido en una prenda llega a las manos que la crearon.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Nuestro compromiso va más allá de la moda: buscamos que cada cliente se convierta en un embajador de la cultura istmeña, llevando con orgullo una prenda que conecta pasado, presente y futuro.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Nuestras Artesanas
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mx-auto mt-4 max-w-xl text-center font-body text-muted-foreground">
            Las manos que dan vida a cada prenda. Maestras del bordado con décadas de experiencia.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-8 md:grid-cols-3">
            {artisans.map((a) => (
              <motion.div key={a.name} variants={fadeInUp} className="rounded-lg border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-display text-2xl font-bold text-primary">{a.name.charAt(5)}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{a.name}</h3>
                <p className="mt-1 font-body text-sm font-medium text-primary">{a.specialty}</p>
                <p className="font-body text-xs text-muted-foreground">{a.years}</p>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  </Layout>
);

export default About;
