import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const LazyMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-lg border border-border" style={{ minHeight: 250 }}>
      {show && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1665.2048700132073!2d-95.219245!3d16.324269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85bffb0053993391%3A0xcce78a779a02a4cc!2sFlor%20radiante!5e1!3m2!1ses-419!2smx!4v1772604126866!5m2!1ses-419!2smx"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Flor Radiante en San Blas Atempa, Oaxaca"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.name}. ${form.message} Mi email: ${form.email}${form.phone ? `, Tel: ${form.phone}` : ""}`;
    window.open(`https://wa.me/529712092134?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      <SEOHead
        title="Contacto - Flor Radiante | Pide tu Prenda Artesanal"
        description="Contáctanos para personalizar tu huipil, guayabera o traje istmeño. Envíos a toda la República Mexicana desde San Blas Atempa, Oaxaca."
        canonical="https://florradiante.com/contacto"
        keywords="contacto Flor Radiante, pedidos huipil, ropa artesanal personalizada, envíos Oaxaca,
        comprar huipil Oaxaca contacto, pedidos huipiles personalizados, tienda huipiles Mexico envio, huipil artesanal"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
            <motion.h1 variants={fadeInUp} className="font-display text-4xl font-bold text-foreground md:text-6xl">
              Contacto
            </motion.h1>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
              ¿Tienes dudas, quieres una prenda hecha especialmente para ti o prefieres visitarnos? Escríbenos o pasa por el local.
            </motion.p>
          </motion.div>

          <div className="flex items-center justify-center py-8">
            <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold text-foreground">
                Envíanos un mensaje
              </motion.h2>
              <motion.form variants={stagger} onSubmit={handleSubmit} className="mt-6 space-y-4">
                <motion.div variants={fadeInUp}>
                  <label className="font-body text-sm font-medium text-foreground">Nombre *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tu nombre" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="font-body text-sm font-medium text-foreground">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="tu@email.com" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="font-body text-sm font-medium text-foreground">Teléfono</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+52 ..." />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="font-body text-sm font-medium text-foreground">Mensaje *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Cuéntanos qué estás buscando..." />
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <button type="submit" className="rounded-md bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-warm">
                    Enviar mensaje
                  </button>
                  <motion.div variants={fadeInUp} className="mt-2">
                    <p className="font-body text-xs text-muted-foreground">
                      Al enviar este mensaje, serás redirigido a WhatsApp para completar tu consulta.
                      Respondemos en menos de 24 horas.
                    </p>
                  </motion.div>
                  <WhatsAppButton variant="inline" label="Iniciar chat por WhatsApp" />
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold text-foreground">
                Visítanos
              </motion.h2>
              <motion.div variants={stagger} className="mt-6 space-y-6">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Dirección</p>
                    <p className="font-body text-sm text-muted-foreground">Prolongación Francisco Cortes, Col. Genico, San Blas Atempa, Oaxaca, México. CP 70786</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Horario</p>
                    <p className="font-body text-sm text-muted-foreground">Lunes a Miércoles y Viernes: 9:00 AM – 7:00 PM</p>
                    <p className="font-body text-sm text-muted-foreground">Jueves: 9:00 AM – 4:00 PM</p>
                    <p className="font-body text-sm text-muted-foreground">Sabado: 12:00 PM – 6:00 PM</p>
                    <p className="font-body text-sm text-muted-foreground">Domingo: Cerrado</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Teléfono</p>
                    <p className="font-body text-sm text-muted-foreground">+52 971 209 2134</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Email</p>
                    <p className="font-body text-sm text-muted-foreground">florradiantemx@gmail.com</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <p className="font-body text-sm font-semibold text-foreground">Síguenos</p>
                <div className="mt-3 flex gap-4">
                  <a href="https://www.facebook.com/p/Flor-Radiante-100063848443342/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    <Facebook className="h-5 w-5" /> Facebook
                  </a>
                  <a href="https://www.instagram.com/flor_radiante.mx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    <Instagram className="h-5 w-5" /> Instagram
                  </a>
                </div>
              </motion.div>

              {/* Lazy-loaded Map */}
              <motion.div variants={fadeInUp} className="mt-8">
                <LazyMap />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;