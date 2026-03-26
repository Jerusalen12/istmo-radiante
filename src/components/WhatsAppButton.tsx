import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  productName?: string;
  className?: string;
  variant?: "floating" | "inline" | "hero";
  label?: string;
}

const WHATSAPP_NUMBER = "529712092134"; // Replace with actual number

const WhatsAppButton = ({
  message,
  productName,
  className = "",
  variant = "inline",
  label,
}: WhatsAppButtonProps) => {
  const defaultMessage = productName
    ? `Hola, me interesa la prenda: ${productName}. ¿Podrían darme más información sobre disponibilidad, precio y opciones de personalización?`
    : "Hola, me gustaría conocer más sobre sus prendas artesanales. ¿Podrían asesorarme?";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a7f37] shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current text-background md:h-8 md:w-8" />
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-md bg-[#1a7f37] px-8 py-4 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#15692e] hover:shadow-lg ${className}`}
      >
        <MessageCircle className="h-5 w-5" />
        {label || "Contáctanos por WhatsApp"}
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md bg-[#1a7f37] px-5 py-2.5 font-body text-sm font-medium text-white transition-all hover:bg-[#15692e] hover:shadow-md ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label || "Consultar por WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;
