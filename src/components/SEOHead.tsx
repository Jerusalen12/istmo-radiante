import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

const BASE_URL = "https://florradiante.com";

const SEOHead = ({ title, description, canonical, keywords }: SEOHeadProps) => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const resolvedCanonical = canonical || `${BASE_URL}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", resolvedCanonical, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Flor Radiante", "property");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = resolvedCanonical;
  }, [title, description, resolvedCanonical, keywords]);

  return null;
};

export default SEOHead;
