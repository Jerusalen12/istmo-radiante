import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import grecaDivider from "@/assets/greca-divider.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface RelatedArticle {
  title: string;
  slug: string;
  tag: string;
}

interface BlogArticleLayoutProps {
  title: string;
  tag: string;
  metaDate: string;
  heroImage?: string;
  heroAlt?: string;
  children: ReactNode;
  related?: RelatedArticle[];
}

const BlogArticleLayout = ({
  title,
  tag,
  metaDate,
  heroImage,
  heroAlt,
  children,
  related = [],
}: BlogArticleLayoutProps) => (
  <Layout>
    <SEOHead
      title={`${title} | Flor Radiante`}
      description={`${title} — Artículo del blog de Flor Radiante sobre tradición, cultura e indumentaria artesanal del Istmo de Tehuantepec.`}
      keywords="huipil, traje istmeño, Istmo de Tehuantepec, bordado zapoteco, Oaxaca, Flor Radiante"
    />
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl">
          {/* Header */}
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
            {tag}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 font-body text-sm text-muted-foreground">{metaDate}</p>

          <div className="flex items-center justify-center py-6">
            <img src={grecaDivider} alt="" className="h-8 w-48 object-contain opacity-40 md:h-10 md:w-64" aria-hidden="true" />
          </div>

          {/* Hero image */}
          {heroImage && (
            <div className="mb-10 overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt={heroAlt || title}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none font-body text-foreground prose-headings:font-display prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
            <p className="font-display text-xl font-semibold text-foreground">
              ¿Te gustaría una prenda artesanal personalizada?
            </p>
            <p className="mt-2 font-body text-muted-foreground">
              Escríbenos por WhatsApp y diseñamos juntos la prenda perfecta para ti.
            </p>
            <div className="mt-4">
              <WhatsAppButton variant="inline" />
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-semibold text-foreground">Artículos relacionados</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-warm"
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 font-body text-xs text-primary">
                      {r.tag}
                    </span>
                    <p className="mt-2 font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </article>
  </Layout>
);

export default BlogArticleLayout;
