import { motion, AnimatePresence  } from "framer-motion";
import { useState, useEffect  } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import grecaDivider from "@/assets/greca-divider.webp";
import artesanal from "@/assets/artesanal.webp";
import artesanal1 from "@/assets/artesanal1.webp";
import artesanal2 from "@/assets/artesanal2.webp";
import artesanal3 from "@/assets/artesanal3.webp";
import artesanal4 from "@/assets/artesanal4.webp";
import artesanal5 from "@/assets/artesanal5.webp";
import artesanal6 from "@/assets/artesanal6.webp";
import artesanal7 from "@/assets/artesanal7.webp";
import artesanal8 from "@/assets/artesanal8.webp";
import coordinado from "@/assets/coordinado.webp";
import coordinado1 from "@/assets/coordinado1.webp";
import coordinado2 from "@/assets/coordinado2.webp";
import coordinado3 from "@/assets/coordinado3.webp";
import coordinado4 from "@/assets/coordinado4.webp";
import coordinado5 from "@/assets/coordinado5.webp";
import coordinado6 from "@/assets/coordinado6.webp";
import coordinado7 from "@/assets/coordinado7.webp";
import coordinado8 from "@/assets/coordinado8.webp";
import coordinado9 from "@/assets/coordinado9.webp";
import coordinado10 from "@/assets/coordinado10.webp";
import coordinado11 from "@/assets/coordinado11.webp";
import coordinado12 from "@/assets/coordinado12.webp";
import coordinado13 from "@/assets/coordinado13.webp";
import coordinado14 from "@/assets/coordinado14.webp";
import coordinado15 from "@/assets/coordinado15.webp";
import coordinado16 from "@/assets/coordinado16.webp";
import coordinado17 from "@/assets/coordinado17.webp";
import coordinado18 from "@/assets/coordinado18.webp";
import coordinado19 from "@/assets/coordinado19.webp";
import coordinado20 from "@/assets/coordinado20.webp";
import coordinado21 from "@/assets/coordinado21.webp";
import costura from "@/assets/costura.webp";
import costura1 from "@/assets/costura1.webp";
import diseño from "@/assets/diseño.webp";
import enagua from "@/assets/enagua.webp";
import guayabera from "@/assets/guayabera.webp";
import guayabera1 from "@/assets/guayabera1.webp";
import guayabera2 from "@/assets/guayabera2.webp";
import guayabera3 from "@/assets/guayabera3.webp";
import guayabera4 from "@/assets/guayabera4.webp";
import guayabera5 from "@/assets/guayabera5.webp";
import guayabera6 from "@/assets/guayabera6.webp";
import guayabera7 from "@/assets/guayabera7.webp";
import huipil from "@/assets/huipil.webp";
import joyeria from "@/assets/joyeria.webp";
import joyeria1 from "@/assets/joyeria1.webp";
import joyeria2 from "@/assets/joyeria2.webp";
import joyeria3 from "@/assets/joyeria3.webp";
import joyeria4 from "@/assets/joyeria4.webp";
import joyeria5 from "@/assets/joyeria5.webp";
import joyeria6 from "@/assets/joyeria6.webp";
import joyeria7 from "@/assets/joyeria7.webp";
import joyeria8 from "@/assets/joyeria8.webp";
import joyeria9 from "@/assets/joyeria9.webp";
import joyeria10 from "@/assets/joyeria10.webp";
import joyeria11 from "@/assets/joyeria11.webp";
import joyeria12 from "@/assets/joyeria12.webp";
import joyeria13 from "@/assets/joyeria13.webp";
import joyeria14 from "@/assets/joyeria14.webp";
import joyeria15 from "@/assets/joyeria15.webp";
import joyeria16 from "@/assets/joyeria16.webp";
import moño from "@/assets/moño.webp";
import moño1 from "@/assets/moño1.webp";
import moño2 from "@/assets/moño2.webp";
import moño3 from "@/assets/moño3.webp";
import moño4 from "@/assets/moño4.webp";
import moño5 from "@/assets/moño5.webp";
import moño6 from "@/assets/moño6.webp";
import moño7 from "@/assets/moño7.webp";
import moño8 from "@/assets/moño8.webp";
import refajo from "@/assets/refajo.webp";
import tejido from "@/assets/tejido.webp";
import tejido1 from "@/assets/tejido1.webp";
import traje from "@/assets/traje.webp";
import trajetipico from "@/assets/trajetipico.webp";
import vestido from "@/assets/vestido.webp";
import vestido1 from "@/assets/vestido1.webp";
import vestido2 from "@/assets/vestido2.webp";
import vestido3 from "@/assets/vestido3.webp";
import vestido4 from "@/assets/vestido4.webp";
import vestido5 from "@/assets/vestido5.webp";
import vestido6 from "@/assets/vestido6.webp";
import vestido7 from "@/assets/vestido7.webp";
import vestido8 from "@/assets/vestido8.webp";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const galleryItems = [
  { src: traje, alt: "Mujer tehuana vistiendo huipil bordado con orgullo en evento cultural", size: "lg" },
  { src: costura1, alt: "Manos artesanas bordando un huipil tradicional con aguja", size: "md" },  
  { src: diseño, alt: "Macro de bordado floral zapoteca sobre terciopelo negro", size: "sm" },
  { src: coordinado15, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: enagua, alt: "Enagua bordada tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera, alt: "Guayabera tradicional del Istmo para el hombre moderno", size: "sm" },
  { src: refajo, alt: "Refajo bordado personalizado con encaje artesanal", size: "md" },
  { src: vestido, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: costura, alt: "Manos artesanas bordando un huipil tradicional con aguja", size: "md" },
  { src: vestido1, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "lg" },
  { src: artesanal, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: joyeria, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: artesanal1, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "md" },
  { src: coordinado1, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera1, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "sm" }, 
  { src: joyeria1, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido2, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado18, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: moño, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: artesanal2, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado2, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: guayabera2, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado17, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria2, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: moño1, alt: "Moño tradicional del Istmo de Tehuantepec", size: "md" },
  { src: artesanal3, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado5, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado3, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera4, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria3, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: moño6, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado16, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido8, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: artesanal4, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "md" },
  { src: coordinado7, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: artesanal5, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria11, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera7, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado10, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria13, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: moño4, alt: "Moño tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado19, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: artesanal6, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "md" },
  { src: moño7, alt: "Moño tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera5, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado8, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido3, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria5, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado20, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: artesanal7, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria7, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria16, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido7, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado4, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: moño2, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido4, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "md" },
  { src: artesanal8, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado6, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: joyeria14, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado9, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: joyeria4, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: guayabera3, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado12, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado11, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: trajetipico, alt: "Traje típico del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria8, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: moño5, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: coordinado13, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria9, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado14, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera3, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "md" },
  { src: guayabera6, alt: "Guayabera tradicional del Istmo de Tehuantepec", size: "md" },
  { src: huipil, alt: "Huipil artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria6, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: moño3, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria10, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: vestido6, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: joyeria12, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: joyeria15, alt: "Joyeria tradicional del Istmo de Tehuantepec", size: "md" },
  { src: coordinado21, alt: "Coordinado tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: moño8, alt: "Moño tradicional del Istmo de Tehuantepec", size: "sm" },
  { src: tejido1, alt: "Tejido artesanal del Istmo de Tehuantepec", size: "sm" },
  { src: vestido5, alt: "Vestido tradicional del Istmo de Tehuantepec", size: "md" },
  { src: tejido, alt: "Tejido artesanal del Istmo de Tehuantepec", size: "md" },
];

const sizeClasses: Record<string, string> = {
  sm: "aspect-[4/5]",
  md: "aspect-[3/4]",
  lg: "aspect-[16/10]  md:col-span-2",
};

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  // Manejar teclas de navegación
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex !== null) {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    }
  };

  // Agregar event listener para teclas
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <Layout>
      <SEOHead
        title="Galería de Artesanías del Istmo | Flor Radiante"
        description="Galería fotográfica de huipiles, trajes istmeños, guayaberas, joyería y bordados artesanales del Istmo de Tehuantepec, Oaxaca."
        canonical="https://florradiante.com/galeria"
        keywords="galería huipiles, fotos traje istmeño, artesanías Oaxaca, bordados zapotecas, fotos de huipiles artesanales, 
        galería trajes istmeños, imágenes huipil bordado, diseños de huipiles Oaxaca, bordados zapotecos fotos, ropa artesanal mexicana galería"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
            <motion.h1 variants={fadeIn} className="font-display text-4xl font-bold text-foreground md:text-6xl">
              Galería
            </motion.h1>
            <motion.p variants={fadeIn} className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
              Un lienzo visual de la artesanía, la tradición y la belleza del Istmo de Tehuantepec.
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
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
          >
            {galleryItems.map((img, index) => (
              <motion.div
                key={img.src + index}
                variants={fadeIn}
                className={`group relative overflow-hidden rounded-xl shadow-elegant cursor-pointer ${sizeClasses[img.size]}`}
                onClick={() => setSelectedIndex(index)} // 👈 Agregar onClick aquí
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  width={600}
                  height={img.size === "lg" ? 375 : img.size === "md" ? 800 : 750}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-full px-5 py-4 font-body text-sm leading-snug text-primary-foreground transition-transform duration-500 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-muted/80 p-2 text-foreground transition-colors hover:bg-muted z-10"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 rounded-full bg-muted/80 p-2 text-foreground transition-colors hover:bg-muted z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-elegant cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 rounded-full bg-muted/80 p-2 text-foreground transition-colors hover:bg-muted z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Caption */}
            <p className="absolute bottom-6 left-1/2 max-w-lg -translate-x-1/2 text-center font-body text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full">
              {galleryItems[selectedIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
