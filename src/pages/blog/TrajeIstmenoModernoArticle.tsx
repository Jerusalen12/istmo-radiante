import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
  { title: "Traje de Istmo para bodas", slug: "traje-istmo-bodas", tag: "Bodas" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
];

const TrajeIstmenoModernoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="El Traje Istmeño Moderno: Tradición y Moda Contemporánea | Flor Radiante"
      description="Descubre cómo el traje istmeño ha evolucionado hacia la moda moderna sin perder su esencia cultural."
      keywords="traje istmeño moderno, moda oaxaqueña, huipil moderno, vestimenta zapoteca,
      huipil moderno Oaxaca, traje istmeño moderno, moda artesanal mexicana actual, ropa tradicional moderna"
    />
    <BlogArticleLayout
      title="El traje istmeño en el México moderno: ¿Cómo usarlo hoy?"
      tag="Estilo"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 7 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Te inspiró algún look?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante creamos huipiles y guayaberas personalizados para que
            luzcas la tradición istmeña con tu estilo único. Elige colores,
            bordados y medidas que se adapten a ti.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/coleccion"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explorar colección
            </Link>
            <WhatsAppButton
              variant="inline"
              label="Quiero crear mi look"
              message="Hola, leí el artículo sobre cómo usar el traje istmeño en el México moderno y me gustaría crear una prenda personalizada para mi estilo. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        La moda mexicana contemporánea vive un momento de revalorización de lo artesanal. Los <strong>huipiles del Istmo de Tehuantepec</strong> han trascendido las fronteras de Oaxaca para convertirse en piezas codiciadas por amantes de la moda con identidad. Pero, ¿cómo integrar una prenda tan cargada de tradición en un guardarropa moderno?
      </p>
      <div className="h-4" />
      <h2><strong>El huipil como pieza statement</strong></h2>
      <div className="h-4" />
      <p>
        Un huipil bordado es, por sí solo, una declaración. Su riqueza visual lo convierte en la pieza protagonista de cualquier outfit. La clave está en <strong>dejar que el huipil brille</strong> y complementarlo con prendas sobrias que no compitan con sus colores y texturas.
      </p>
      <div className="h-4" />
      <h3><strong>Look 1: Huipil + jeans</strong></h3>
      <div className="h-4" />
      <p>
        La combinación más accesible y versátil. Un huipil de algodón con bordados coloridos sobre unos <strong>jeans de corte recto o mom fit</strong> crea un look casual pero con personalidad. Completa con sandalias artesanales o sneakers blancos. Ideal para el día a día, reuniones informales o paseos culturales.
      </p>
      <div className="h-4" />
      <h3><strong>Look 2: Huipil como vestido</strong></h3>
      <div className="h-4" />
      <p>
        Los huipiles más largos pueden usarse como <strong>vestidos midi o mini</strong>, dependiendo de tu estatura. Ciñe la cintura con un cinturón de cuero o un fajín artesanal para definir la silueta. Añade aretes de filigrana oaxaqueña para un look completamente mexicano.
      </p>
      <div className="h-4" />
      <h3><strong>Look 3: Huipil de gala para eventos</strong></h3>
      <div className="h-4" />
      <p>
        Para galas, cenas formales o eventos culturales, un <strong>huipil de terciopelo bordado</strong> combinado con una falda larga y lisa (en negro, vino o dorado) es una opción espectacular. Es una alternativa sofisticada y con identidad al vestido de noche convencional.
      </p>
      <div className="h-4" />
      <h3><strong>Look 4: Mezcla de texturas</strong></h3>
      <div className="h-4" />
      <p>
        Combina un huipil con prendas de <strong>lino, cuero o mezclilla</strong> para crear contrastes interesantes. Un huipil de satín sobre una falda de cuero, por ejemplo, mezcla lo artesanal con lo contemporáneo de manera elegante.
      </p>
      <div className="h-4" />
      <h2><strong>Consejos de estilo</strong></h2>
      <div className="h-4" />
      <ul>
        <li><strong>Menos es más:</strong> Si el huipil es colorido, usa accesorios neutros. Si es de un solo tono, puedes jugar más con los complementos.</li>
        <li><strong>Respeta la prenda:</strong> El huipil tiene historia. Úsalo con respeto y conocimiento de su origen. Eso lo hace aún más poderoso.</li>
        <li><strong>Personaliza:</strong> En Flor Radiante puedes solicitar un huipil con los colores y motivos que mejor se adapten a tu estilo personal.</li>
        <li><strong>Cuida tu inversión:</strong> Sigue las recomendaciones de cuidado para que tu huipil luzca perfecto por años.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>La guayabera: elegancia masculina con raíz</strong></h2>
      <div className="h-4" />
      <p>
        Los hombres también pueden incorporar la indumentaria istmeña en su estilo. Una <strong>guayabera tradicional</strong> —con bordados sutiles o acabados artesanales— es perfecta para bodas, eventos culturales o simplemente para vestir con identidad mexicana. En Flor Radiante personalizamos guayaberas en colores, telas y detalles de bordado.
      </p>
      <div className="h-4" />
      <h2><strong>Viste con identidad</strong></h2>
      <div className="h-4" />
      <p>
        Usar una prenda artesanal del Istmo no es solo vestir bien: es llevar una parte de la historia de México contigo. Es apoyar a las artesanas, preservar una tradición milenaria y, al mismo tiempo, expresar tu estilo único.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default TrajeIstmenoModernoArticle;
