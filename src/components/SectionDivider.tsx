import grecaDivider from "@/assets/greca-divider.webp";

const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center py-4 ${className}`}>
    <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
  </div>
);

export default SectionDivider; 
