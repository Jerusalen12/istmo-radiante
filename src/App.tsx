import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Collection = lazy(() => import("./pages/Collection"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy-loaded blog articles
const GuiaTrajeTehuanaArticle = lazy(() => import("./pages/blog/GuiaTrajeTehuanaArticle"));
const SignificadoBordadosArticle = lazy(() => import("./pages/blog/SignificadoBordadosArticle"));
const ComoElegirHuipilArticle = lazy(() => import("./pages/blog/ComoElegirHuipilArticle"));
const ArtesanasFlorRadianteArticle = lazy(() => import("./pages/blog/ArtesanasFlorRadianteArticle"));
const TrajeIstmenoModernoArticle = lazy(() => import("./pages/blog/TrajeIstmenoModernoArticle"));
const CuidadoPrendasArticle = lazy(() => import("./pages/blog/CuidadoPrendasArticle"));
const TrajeIstmoBodasArticle = lazy(() => import("./pages/blog/TrajeIstmoBodasArticle"));
const HuipilAutenticoArticle = lazy(() => import("./pages/blog/HuipilAutenticoArticle"));
const ZapotecoVestimentaArticle = lazy(() => import("./pages/blog/ZapotecoVestimentaArticle"));
const GuelaguetzaTrajeIstmenoArticle = lazy(() => import("./pages/blog/GuelaguetzaTrajeIstmenoArticle"));
const JoyeriaIstmenaArticle = lazy(() => import("./pages/blog/JoyeriaIstmenaArticle"));
const AccesoriosTrajeTehuanaArticle = lazy(() => import("./pages/blog/AccesoriosTrajeTehuanaArticle"));
const SanBlasAtempaArticle = lazy(() => import("./pages/blog/SanBlasAtempaArticle"));
const VelasIstmenasArticle = lazy(() => import("./pages/blog/VelasIstmenasArticle"));
const ProcesoHuipilArticle = lazy(() => import("./pages/blog/ProcesoHuipilArticle"));
const TiposDeGuayaberasArticle = lazy(() => import("./pages/blog/TiposDeGuayaberasArticle"));
const DiferenciasEnaguaRabonaArticle = lazy(() => import("./pages/blog/DiferenciasEnaguaRabonaArticle"));
const FlorPeinadoIstmenoArticle = lazy(() => import("./pages/blog/FlorPeinadoIstmenoArticle"));
const ReinasIstmoArticle = lazy(() => import("./pages/blog/ReinasIstmoArticle"));
const TiposDeTrajesIstmoArticle = lazy(() => import("./pages/blog/TiposDeTrajesIstmoArticles"));
const TiposDeTrenzasIstmoArticle = lazy(() => import("./pages/blog/TiposDeTrenzasIstmoArticle"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/coleccion" element={<Collection />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/guia-traje-tehuana" element={<GuiaTrajeTehuanaArticle />} />
            <Route path="/blog/significado-bordados-zapotecas" element={<SignificadoBordadosArticle />} />
            <Route path="/blog/como-elegir-huipil" element={<ComoElegirHuipilArticle />} />
            <Route path="/blog/artesanas-flor-radiante" element={<ArtesanasFlorRadianteArticle />} />
            <Route path="/blog/traje-istmeno-moderno" element={<TrajeIstmenoModernoArticle />} />
            <Route path="/blog/cuidado-prendas-artesanales" element={<CuidadoPrendasArticle />} />
            <Route path="/blog/traje-istmo-bodas" element={<TrajeIstmoBodasArticle />} />
            <Route path="/blog/huipil-autentico-o-imitacion" element={<HuipilAutenticoArticle />} />
            <Route path="/blog/zapoteco-vestimenta-tradicional" element={<ZapotecoVestimentaArticle />} />
            <Route path="/blog/guelaguetza-traje-istmeno" element={<GuelaguetzaTrajeIstmenoArticle />} />
            <Route path="/blog/joyeria-istmena" element={<JoyeriaIstmenaArticle />} />
            <Route path="/blog/accesorios-traje-tehuana" element={<AccesoriosTrajeTehuanaArticle />} />
            <Route path="/blog/san-blas-atempa" element={<SanBlasAtempaArticle />} />
            <Route path="/blog/velas-istmenas" element={<VelasIstmenasArticle />} />
            <Route path="/blog/proceso-huipil-artesanal" element={<ProcesoHuipilArticle />} />
            <Route path="/blog/tipos-guayaberas-hombres" element={<TiposDeGuayaberasArticle />} />
            <Route path="/blog/diferencias-enagua-rabona" element={<DiferenciasEnaguaRabonaArticle />} />
            <Route path="/blog/flor-peinado-istmeno" element={<FlorPeinadoIstmenoArticle />} />
            <Route path="/blog/reinas-istmo" element={<ReinasIstmoArticle />} />
            <Route path="/blog/tipos-trajes-istmo" element={<TiposDeTrajesIstmoArticle/>} />
            <Route path="/blog/tipos-trenzas-istmo" element={<TiposDeTrenzasIstmoArticle />} />
            <Route path="/testimonios" element={<Testimonials />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;