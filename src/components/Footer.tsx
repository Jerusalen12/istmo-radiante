import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-flor.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div>
              <img src={logo} alt="Flor Radiante" className="h-10 w-30" />
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-cream/70">
              Donde la tradición florece en cada puntada. Indumentaria tradicional del Istmo de Tehuantepec, hecha a mano con amor y orgullo.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/share/1BvDkyXSrs/" target="_blank" rel="noopener noreferrer" className="text-cream/60 transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/flor_radiante.mx" target="_blank" rel="noopener noreferrer" className="text-cream/60 transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-display text-lg font-semibold">Explorar</p>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { href: "/coleccion", label: "Colección" },
                { href: "/galeria", label: "Galería" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="font-body text-sm text-cream/60 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-lg font-semibold">Visítanos</p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="font-body text-sm text-cream/70">Prolongación Francisco Cortes, Col. Genico, San Blas Atempa, Oaxaca, México.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <p className="font-body text-sm text-cream/70">+52 971 209 2134</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <p className="font-body text-sm text-cream/70">florradiantemx@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/70">
            © {new Date().getFullYear()} Flor Radiante. Todos los derechos reservados. Ropa artesanal del Istmo de Tehuantepec.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
