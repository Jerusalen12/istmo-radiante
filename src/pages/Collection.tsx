import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import embroideryImg from "@/assets/embroidery-detail.webp";
import guaya from "@/assets/guayabera1.webp";
import refajo from "@/assets/refajo.webp";
import huipil from "@/assets/huipil.webp";
import accesorios from "@/assets/joyeria2.webp";
import vestidos from "@/assets/vestido.webp";
import traje from "@/assets/trajetipico.webp";
import enagua from "@/assets/enagua.webp";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const categories = [
  {
    id: "huipiles",
    name: "Huipiles",
    tagline: "Prendas que cuentan historias",
    desc: "El huipil istmeño es la joya de la corona de la indumentaria zapoteca. Bordado a mano sobre terciopelo, toque de seda o tela rayon, cada pieza es una obra de arte única que puede tardar semanas o meses en completarse. Los diseños florales representan la exuberancia de la naturaleza del Istmo.",
    technique: "Bordado a mano con técnica de cadenilla y relleno sobre terciopelo, toque de seda o tela rayon de primera calidad.",
    tip: "Ideal para velas istmeñas, bodas tradicionales y eventos formales. También puede portarse con jeans para un estilo contemporáneo con raíces.",
    image: huipil,
    customNote: "Disponibles en diseños personalizados. Elige tus colores, flores y medidas.",
  },
  {
    id: "enaguas",
    name: "Enaguas",
    tagline: "Vuelo y tradición",
    desc: "La enagua es la falda amplia que enmarca la danza y el movimiento de la mujer istmeña. Con cenefas bordadas en la parte inferior, cada enagua es una declaración de elegancia y orgullo cultural.",
    technique: "Confección en tela de algodón o satín con bordado artesanal en la cenefa. Vuelo amplio y caída impecable.",
    tip: "Se combina con el huipil para el traje completo. Para un look moderno, prueba con una blusa sencilla.",
    image: enagua,
    customNote: "Consulta medidas especiales y opciones de largo y vuelo.",
  },
  {
    id: "coordinados",
    name: "Coordinados",
    tagline: "La esencia del Istmo",
    desc: "El traje istmeño completo combina huipil, enagua y refajo en una expresión de identidad y tradición. Cada pieza es una obra de arte que representa la riqueza cultural de la región.",
    technique: "Confección artesanal con tejidos de alta calidad y bordados tradicionales.",
    tip: "Ideal para eventos especiales y ocasiones formales. Combina con accesorios para un look completo.",
    image: traje,
    customNote: "Disponibles en diseños personalizados. Elige tus colores, flores y medidas.",
  },
  {
    id: "vestidos",
    name: "Vestidos",
    tagline: "Elegancia y tradición",
    desc: "Los vestidos istmeños son la expresión más completa de la cultura zapoteca. Confeccionados con tejidos de alta calidad y bordados artesanales, cada pieza es una obra de arte única.",
    technique: "Confección en tela de algodón o satín con bordado artesanal en la cenefa. Vuelo amplio y caída impecable.",
    tip: "Ideales para velas istmeñas, bodas tradicionales y eventos formales. También pueden portarse con jeans para un estilo contemporáneo con raíces.",
    image: vestidos,
    customNote: "Consulta medidas especiales y opciones de largo y vuelo.",
  },
  {
    id: "refajos",
    name: "Refajos",
    tagline: "El secreto mejor guardado",
    desc: "El refajo es la prenda interior que da estructura y volumen a la enagua. Elaborado con encaje y tela fina, es una pieza esencial del traje istmeño completo que pocas personas fuera de la región conocen.",
    technique: "Confección artesanal con encajes, bordados y tela popelina. Cada refajo es una pieza de arte textil.",
    tip: "Pieza esencial para lucir el traje istmeño completo. Su calidad se nota en la caída de la enagua.",
    image: refajo,
    customNote: "Base y arte en una sola prenda.",
  },
  {
    id: "guayaberas",
    name: "Guayaberas",
    tagline: "Elegancia istmeña para el hombre",
    desc: "La guayabera del Istmo es la expresión de la elegancia masculina zapoteca. Confeccionada en lino o algodón fino, con detalles bordados que reflejan la misma tradición artesanal de los huipiles femeninos.",
    technique: "Confección en lino.",
    tip: "Perfecta para eventos formales, velas istmeñas y bodas. Un básico de la elegancia mexicana.",
    image: guaya, 
    customNote: "Personalizamos colores, tallas y detalles de bordado.",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    tagline: "Detalles que refuerzan la identidad",
    desc: "Complementa tu traje istmeño con accesorios artesanales que resaltan la tradición y el estilo único de la región. El toque final. Joyería y detalles que completan tu identidad istmeña. Pregunta por aretes, collares, moños y tocados tradicionales.",
    tip: "Perfectos para completar tu look y destacar en eventos especiales. Combina con cualquier prenda de nuestra colección.",
    image: accesorios,
    customNote: "Colores, materiales y diseños para que tu accesorio sea único.",
  },
];

const Collection = () => (
  <Layout>
    <SEOHead
      title="Colección de Ropa Artesanal | Flor Radiante - Istmo de Tehuantepec"
      description="Explora nuestra colección de huipiles, enaguas, guayaberas, vestidos y accesorios artesanales del Istmo de Tehuantepec. Cada prenda bordada a mano por artesanas zapotecas."
      canonical="https://florradiante.com/coleccion"
      keywords="huipiles bordados, enaguas istmeñas, guayaberas, vestidos oaxaqueños, accesorios artesanales, traje tehuana, 
      comprar huipiles artesanales, huipiles bordados a mano Oaxaca, huipiles precio, trajes istmeños en venta, enaguas istmeñas, 
      guayaberas artesanales, ropa tradicional mexicana venta, huipiles personalizados, tienda de ropa artesanal Oaxaca"
    />
    {/* Hero */}
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0">
        <img src={embroideryImg} alt="Bordado artesanal zapoteca, detalle de flores bordadas a mano" className="h-full w-full object-cover" fetchPriority="high" width={1920} height={1080} decoding="async" />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="font-display text-4xl font-bold text-cream md:text-6xl">
          Nuestra Colección
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="mx-auto mt-6 max-w-2xl font-body text-lg text-cream/80">
          Cada prenda es una historia tejida con hilos de tradición, bordada con las manos de artesanas que han dedicado su vida a este arte. Explora nuestras categorías y encuentra la pieza que hable a tu corazón. ¿Quieres algo único? Personaliza tu prenda con nosotros.
        </motion.p>
      </div>
    </section>

    <div className="flex items-center justify-center py-8">
      <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
    </div>

    {/* Categories */}
    {categories.map((cat, i) => (
      <section key={cat.id} className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-card" : ""}`} id={cat.id}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:direction-ltr" : ""}`}
          >
            <motion.div variants={fadeInUp} className="overflow-hidden rounded-lg shadow-elegant">
              <img
                src={cat.image}
                alt={`${cat.name} istmeño de terciopelo negro con bordado floral artesanal en hilos de colores - ${cat.tagline}`}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={stagger}>
              <motion.p variants={fadeInUp} className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {cat.tagline}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                {cat.name}
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                {cat.desc}
              </motion.p>
              {cat.technique && (
                <motion.div variants={fadeInUp} className="mt-6 rounded-md border-l-4 border-gold bg-muted/50 p-4">
                  <p className="font-body text-sm font-semibold text-foreground">Técnica de elaboración</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{cat.technique}</p>
                </motion.div>
              )}
              <motion.div variants={fadeInUp} className="mt-4 rounded-md border-l-4 border-primary bg-muted/50 p-4">
                <p className="font-body text-sm font-semibold text-foreground">Consejo de uso</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">{cat.tip}</p>
              </motion.div>
              {cat.customNote && (
                <motion.p variants={fadeInUp} className="mt-4 font-body text-sm font-medium italic text-primary">
                  ✨ {cat.customNote}
                </motion.p>
              )}
              <motion.div variants={fadeInUp} className="mt-6">
                <WhatsAppButton productName={cat.name} label="Consultar disponibilidad y precio" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Collection;
