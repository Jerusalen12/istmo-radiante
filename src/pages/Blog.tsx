import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import costura from "@/assets/costura.webp";
import huipil from "@/assets/huipil.webp";
import tejido from "@/assets/tejido.webp";
import traje from "@/assets/traje.webp";
import sanblas from "@/assets/sanblas.webp";
import vela from "@/assets/velas.webp";
import diseño from "@/assets/diseño.webp";
import vestido2 from "@/assets/vestido2.webp";
import joyeria from "@/assets/joyeria.webp";
import zapoteco from "@/assets/zapoteco.webp";
import guelaguetza from "@/assets/guelaguetza.webp";
import tipico from "@/assets/tipico.webp";
import cuidado from "@/assets/cuidados.webp";
import moderno from "@/assets/moderno.webp";
import costura1 from "@/assets/costura1.webp";
import grecaDivider from "@/assets/greca-divider.webp";
import guayabera from "@/assets/guayabera4.webp";
import enagua from "@/assets/enagua.webp"
import mono from "@/assets/trenza.webp";
import trajeistmo from "@/assets/trajetipico.webp";
import trenzaverde from "@/assets/trenzaverde.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const articles = [
  { title: "La Guelaguetza y el protagonismo del traje istmeño", excerpt: "Descubre qué es la Guelaguetza, cómo se celebra y por qué el traje de tehuana es protagonista absoluto de la fiesta más grande de Oaxaca.", image: guelaguetza, tag: "Cultura", slug: "guelaguetza-traje-istmeno" },
  { title: "La Guía Definitiva del Traje de Tehuana: Huipil, Enagua y Refajo", excerpt: "Todo lo que necesitas saber sobre las piezas que conforman el traje istmeño tradicional, sus variantes y cómo se combinan para cada ocasión.", image: traje, tag: "Guía completa", slug: "guia-traje-tehuana" },
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", excerpt: "Cada flor, cada color y cada forma tiene un significado profundo. Descubre el lenguaje oculto en la indumentaria del Istmo.", image: diseño, tag: "Cultura", slug: "significado-bordados-zapotecas" },
  { title: "¿Cómo elegir tu huipil perfecto? Guía para principiantes", excerpt: "Desde el tipo de tela hasta el estilo de bordado, te ayudamos a encontrar el huipil ideal para ti. Incluye opciones de personalización.", image: huipil, tag: "Guía de compra", slug: "como-elegir-huipil" },
  { title: "Detrás de la Puntada: Conoce a las Artesanas de Flor Radiante", excerpt: "Sus manos cuentan historias de generaciones. Conoce a las mujeres que hacen posible cada prenda.", image: costura, tag: "Nuestras artesanas", slug: "artesanas-flor-radiante" },
  { title: "El traje istmeño en el México moderno: ¿Cómo usarlo hoy?", excerpt: "Ideas de estilo para incorporar las prendas artesanales del Istmo en tu guardarropa contemporáneo.", image: moderno, tag: "Estilo", slug: "traje-istmeno-moderno" },
  { title: "Guía de cuidado para tus prendas artesanales", excerpt: "Cómo preservar un huipil por generaciones: lavado, almacenamiento y restauración.", image: cuidado, tag: "Cuidado", slug: "cuidado-prendas-artesanales" },
  { title: "Traje de Istmo para bodas: Ideas para novias, madrinas e invitadas", excerpt: "Vestidos de novia istmeños, huipiles personalizados y más para el día más especial.", image: tipico, tag: "Bodas", slug: "traje-istmo-bodas" },
  { title: "¿Huipil auténtico o imitación? Claves para identificar la verdadera artesanía", excerpt: "Aprende a reconocer un huipil bordado a mano de una copia industrial. Tu guía para comprar con confianza.", image: costura1, tag: "Educación", slug: "huipil-autentico-o-imitacion" },
  { title: "El zapoteco y su influencia en la vestimenta tradicional del Istmo", excerpt: "La lengua, la cosmogonía y la historia zapoteca se reflejan en cada prenda del Istmo de Tehuantepec.", image: zapoteco, tag: "Historia", slug: "zapoteco-vestimenta-tradicional" },
  { title: "La Joyería Istmeña: Oro, Tradición y Elegancia", excerpt: "Arracadas, semanarios, torsales y filigrana: descubre las piezas de joyería que completan el traje de tehuana y cómo elegir las ideales para tu huipil.", image: joyeria, tag: "Cultura", slug: "joyeria-istmena" },
  { title: "Los Accesorios del Traje de Tehuana: Más Allá del Huipil", excerpt: "Huipil, enagua, refajo, joyería, tocado floral, trenzas y aretes: todas las piezas que conforman el traje típico completo de Oaxaca.", image: vestido2, tag: "Cultura", slug: "accesorios-traje-tehuana" },
  { title: "San Blas Atempa: Cuna de Tradición y Artesanía Istmeña", excerpt: "Historia, tradición textil y cultura zapoteca de la comunidad donde nace Flor Radiante.", image: sanblas, tag: "Historia", slug: "san-blas-atempa" },
  { title: "Velas Istmeñas: Tradición, Fiesta y Elegancia", excerpt: "Qué son las velas istmeñas, cómo se celebran y qué vestimenta usar. Prepárate para la temporada de velas de mayo.", image: vela, tag: "Cultura", slug: "velas-istmenas" },
  { title: "¿Por qué un huipil artesanal puede tardar semanas en elaborarse?", excerpt: "Proceso de bordado, tiempo de elaboración, técnicas artesanales y materiales. Descubre por qué cada huipil es una obra de arte.", image: tejido, tag: "Artesanía", slug: "proceso-huipil-artesanal" },
  { title: "Tipos de Guayaberas: La Guía Completa para el Hombre del Istmo", excerpt: "La magia detras de cada guayabera. Descubre por qué cada guayabera es una obra de arte.", image: guayabera, tag: "Moda masculina", slug: "tipos-guayaberas-hombres" },
  { title: "Diferencias entre Enagua y Rabona: ¿Cuál es Cuál y Para Qué Ocasión?", excerpt: "Descubre las diferencias entre la enagua y la rabona, dos prendas esenciales del Istmo de Tehuantepec que reflejan la identidad, tradición y riqueza cultural zapoteca.", image: enagua, tag: "Cultura", slug: "diferencias-enagua-rabona" },
  { title: "¿De Qué lado va la Flor en el Peinado Istmeño? Significado y Tradición", excerpt: "El lado de la flor en el peinado istmeño no es casualidad. Descubre el mensaje que transmite dentro de la tradición istmeña.", image: mono, tag: "Guía del peinado", slug: "flor-peinado-istmeno" },
  { title: "Las Reinas del Istmo: Costumbres, Trajes y Peinados de una Tradición Viva", excerpt: "Las reinas de las velas del Istmo representan elegancia, tradición y orgullo zapoteca. Descubre su papel dentro de una de las celebraciones más importantes en las fiestas istmeñas.", image: mono, tag: "Cultura", slug: "reinas-istmo" },
  { title: "Tipos de Trajes del Istmo: Bordados, Tejidos, Cadenilla y Flor en Medio", excerpt: "Descubre los distintos tipos de trajes del Istmo de Tehuantepec y cómo cada uno refleja la riqueza, tradición y elegancia", image: trajeistmo, tag: "Guía Completa", slug: "tipos-trajes-istmo" },
  { title: "Tipos de Peinados del Istmo de Tehuantepec: Tradición en Cada Peinado", excerpt: "Descubre los distintos tipos de trenzas del Istmo de Tehuantepec y cómo cada una refleja la tradición y elegancia", image: trenzaverde, tag: "Guía Completa", slug: "tipos-trenzas-istmo" },
];

const Blog = () => (
  <Layout>
    <SEOHead
      title="Blog - Flor Radiante | Cultura, Tradición y Moda del Istmo"
      description="Artículos sobre traje istmeño, bordados zapotecas, huipiles, Guelaguetza y tradiciones del Istmo de Tehuantepec. Guías, historia y consejos de estilo."
      canonical="https://florradiante.com/blog"
      keywords="blog traje istmeño, cultura zapoteca, Guelaguetza, huipil artesanal, bordados oaxaqueños, 
      blog huipiles Oaxaca, cultura zapoteca vestimenta, historia traje istmeño, huipil artesanal significado, 
      tradiciones Istmo de Tehuantepec, moda artesanal mexicana"
    />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
          <motion.p variants={fadeInUp} className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Voces del Istmo
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-2 font-display text-4xl font-bold text-foreground md:text-6xl">
            El Blog de Flor Radiante
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Artículos sobre la indumentaria istmeña, las técnicas artesanales y la riqueza cultural del Istmo de Tehuantepec.
          </motion.p>
        </motion.div>

        <div className="flex items-center justify-center py-8">
          <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((a) => (
            <motion.article
              key={a.title}
              variants={fadeInUp}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-elegant transition-shadow hover:shadow-warm"
            >
              <Link to={`/blog/${a.slug}`} className="block">
                {a.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={a.slug === "guelaguetza-traje-istmeno" ? "eager" : "lazy"}
                      {...(a.slug === "guelaguetza-traje-istmeno" ? { fetchPriority: "high" as const } : {})}
                      width={640}
                      height={360}
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                    {a.tag}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
                    {a.title}
                  </h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <p className="mt-4 font-body text-sm font-semibold text-primary">Leer artículo →</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Blog;