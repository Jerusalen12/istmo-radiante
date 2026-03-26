import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const testimonials = [
  { name: "María G.", city: "Juchitán, Oaxaca", occasion: "Boda tradicional", text: "Mi huipil personalizado para la boda fue espectacular. Elegí los colores exactos que quería y el resultado superó todas mis expectativas. La calidad y atención de Flor Radiante no tiene comparación.", stars: 5 },
  { name: "Lucía R.", city: "Ciudad de México", occasion: "Guelaguetza", text: "Compré un huipil para la Guelaguetza y recibí cientos de elogios. Es una pieza de museo que puedo vestir. El bordado es impecable y la tela de primerísima calidad.", stars: 5 },
  { name: "Carmen T.", city: "Oaxaca de Juárez", occasion: "Vela istmeña", text: "La personalización es increíble. Me asesoraron por WhatsApp, eligieron los colores exactos que quería y el resultado fue perfecto. Es mi segunda compra y no será la última.", stars: 5 },
  { name: "Ana Patricia L.", city: "Puebla", occasion: "Regalo especial", text: "Regalé una enagua bordada a mi madre y lloró de emoción. La calidad del bordado y la atención al detalle reflejan un amor genuino por la tradición. Envío seguro y rápido.", stars: 5 },
  { name: "Roberto M.", city: "Guadalajara", occasion: "Evento formal", text: "Mi guayabera istmeña fue la sensación en la cena. Elegante, cómoda y única. El proceso de personalización fue muy sencillo por WhatsApp.", stars: 5 },
  { name: "Sofía V.", city: "Monterrey", occasion: "Colección personal", text: "Soy coleccionista de arte textil mexicano y las prendas de Flor Radiante están entre las mejores que he adquirido. La calidad del bordado es excepcional.", stars: 5 },
];

const Testimonials = () => (
  <Layout>
    <SEOHead
      title="Testimonios - Flor Radiante | Opiniones de Nuestras Clientas"
      description="Lee lo que dicen nuestras clientas sobre sus huipiles, trajes istmeños y prendas artesanales personalizadas de Flor Radiante."
      canonical="https://florradiante.com/testimonios"
      keywords="opiniones Flor Radiante, testimonios huipil, reseñas ropa artesanal, 
      opiniones huipiles artesanales, reseñas ropa artesanal Oaxaca, experiencias compra huipil, comentarios Flor Radiante, clientes huipiles personalizados"
    />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
          <motion.h1 variants={fadeInUp} className="font-display text-4xl font-bold text-foreground md:text-6xl">
            Testimonios
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Las voces de quienes ya visten con orgullo la tradición del Istmo.
          </motion.p>
        </motion.div>

        <div className="flex items-center justify-center py-8">
          <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeInUp} className="rounded-lg border border-border bg-card p-8 shadow-elegant">
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 font-body text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.city} · {t.occasion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-16 text-center">
          <p className="font-display text-xl font-semibold text-foreground">¿Lista para vivir la experiencia Flor Radiante?</p>
          <div className="mt-6">
            <WhatsAppButton variant="hero" label="Escríbenos por WhatsApp" />
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
