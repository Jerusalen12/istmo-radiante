import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "Detrás de la Puntada: Conoce a las Artesanas", slug: "artesanas-flor-radiante", tag: "Nuestras artesanas" },
];

const ZapotecoVestimentaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="La Vestimenta Tradicional Zapoteca del Istmo | Flor Radiante"
      description="Explora la vestimenta tradicional zapoteca del Istmo de Tehuantepec y su importancia cultural en Oaxaca."
      keywords="vestimenta zapoteca, traje zapoteco, ropa tradicional oaxaca,
      vestimenta zapoteca tradicional, traje zapoteco Oaxaca, ropa tipica zapoteca, historia vestimenta Oaxaca"
    />
    <BlogArticleLayout
      title="El zapoteco y su influencia en la vestimenta tradicional del Istmo"
      tag="Historia"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 9 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres llevar contigo este legado zapoteca?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante, cada prenda es una expresión viva de la cultura zapoteca.
            Trabajamos con <Link to="/nosotros" className="text-primary hover:underline">artesanas del Istmo</Link> que heredaron estas técnicas de sus abuelas.
            Conoce nuestra colección o personaliza un huipil con los motivos que cuenten tu historia.
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
              label="Quiero un huipil con historia"
              message="Hola, leí el artículo sobre la influencia zapoteca en la vestimenta del Istmo y me gustaría adquirir o personalizar una prenda que refleje esta tradición. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        La civilización <strong>zapoteca</strong> es una de las más antiguas y sofisticadas de Mesoamérica. Su legado no solo se encuentra en las pirámides de Monte Albán o en las grecas de Mitla: se refleja vívidamente en la <strong>indumentaria tradicional del Istmo de Tehuantepec</strong>, donde la lengua, la cosmogonía y la estética zapoteca siguen vivas en cada prenda.
      </p>
      <div className="h-4" />
      <h2><strong>Los zapotecas: constructores de civilización</strong></h2>
      <div className="h-4" />
      <p>
        Los zapotecas —o <em>binnizá</em> ("la gente de las nubes" en zapoteco)— desarrollaron una de las primeras escrituras de Mesoamérica, un calendario propio y una arquitectura monumental. Su influencia cultural se extendió por todo el Valle de Oaxaca y el Istmo de Tehuantepec, donde sus descendientes mantienen vivas las tradiciones hasta hoy.
      </p>
      <div className="h-4" />
      <h2><strong>La lengua zapoteca en la vestimenta</strong></h2>
      <div className="h-4" />
      <p>
        La lengua zapoteca (didxazá) está intrínsecamente ligada a la indumentaria. Muchos términos textiles no tienen traducción exacta al español porque describen conceptos que solo existen en el contexto cultural zapoteco:
      </p>
      <ul>
        <li><strong>Bidaani':</strong> Aunque la palabra proviene del náhuatl (<em>huipilli</em>), las mujeres zapotecas del Istmo le imprimieron un carácter propio, convirtiéndolo en la prenda más elaborada de su indumentaria.</li>
        <li><strong>Bizuudi':</strong> La enagua o falda tradicional, cuyo nombre evoca la idea de envolver y proteger.</li>
        <li><strong>Xhiga:</strong> Jícara, el recipiente lacado que las mujeres llevan en ceremonias, relacionado con la abundancia y la ofrenda.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Cosmogonía zapoteca y simbolismo textil</strong></h2>
      <div className="h-4" />
      <p>
        La cosmovisión zapoteca se expresa en cada bordado. Los cuatro elementos, los ciclos de la naturaleza y la dualidad (vida-muerte, día-noche, masculino-femenino) aparecen codificados en los motivos de las prendas:
      </p>
      <ul>
        <li><strong>Las flores:</strong> Representan la conexión con la tierra (guie' en zapoteco). Cada tipo de flor tiene un significado específico.</li>
        <li><strong>Las grecas de Mitla:</strong> Patrones geométricos que simbolizan el movimiento cíclico del tiempo y la conexión entre el mundo de los vivos y el de los ancestros.</li>
        <li><strong>Los colores:</strong> Relacionados con los puntos cardinales, los elementos naturales y las emociones.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>La sociedad matriarcal del Istmo</strong></h2>
      <div className="h-4" />
      <p>
        El Istmo de Tehuantepec es conocido por su estructura social donde las mujeres tienen un papel central en la economía, la familia y la vida comunitaria. Esta fortaleza femenina se refleja directamente en la indumentaria: el traje de tehuana es un <strong>símbolo de poder, identidad y autonomía</strong>. Las mujeres istmeñas no se visten para otros; se visten para sí mismas, con orgullo y determinación.
      </p>
      <div className="h-4" />
      <h2><strong>Las velas: donde la indumentaria cobra vida</strong></h2>
      <div className="h-4" />
      <p>
        Las <strong>velas istmeñas</strong> son fiestas comunitarias (de origen religioso y social) donde la indumentaria tradicional alcanza su máxima expresión. En cada vela, las mujeres estrenan huipiles nuevos, compitiendo amistosamente en elegancia y creatividad. Es el escenario donde la tradición textil se renueva y donde las artesanas muestran sus últimas creaciones.
      </p>
      <div className="h-4" />
      <h2><strong>La influencia de otras culturas</strong></h2>
      <div className="h-4" />
      <p>
        La indumentaria istmeña no es estática. A lo largo de los siglos, ha incorporado elementos de otras culturas que llegaron al Istmo por su posición geográfica estratégica:
      </p>
      <ul>
        <li><strong>Influencia española:</strong> Los encajes, las telas de importación y ciertos cortes de la enagua.</li>
        <li><strong>Influencia china y filipina:</strong> Las telas de seda y los mantones que llegaron a través de la Nao de China influyeron en los materiales y técnicas.</li>
        <li><strong>Influencia contemporánea:</strong> Hoy, las artesanas incorporan nuevos materiales (hilos sintéticos brillantes, telas importadas) y adaptan los diseños a las tendencias actuales sin perder la esencia zapoteca.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Un legado vivo</strong></h2>
      <div className="h-4" />
      <p>
        La influencia zapoteca en la vestimenta del Istmo no es un vestigio del pasado: es una realidad presente. Cada vez que una artesana se sienta a bordar, cada vez que una mujer se viste con su huipil para ir al mercado o a una vela, está <strong>perpetuando una tradición milenaria</strong>. En Flor Radiante, nos sentimos honrados de ser parte de esta cadena de transmisión cultural.
      </p>

       <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
      "Guie' sti' binni" — "La flor de la persona" (refrán zapoteca que expresa que cada persona es única y valiosa, como una flor en la tierra).
    </blockquote>
    
    </BlogArticleLayout>
  </React.Fragment>
);

export default ZapotecoVestimentaArticle;
