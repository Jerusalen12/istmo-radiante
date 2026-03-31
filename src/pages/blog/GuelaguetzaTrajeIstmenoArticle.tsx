import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
  { title: "El traje istmeño en el México moderno", slug: "traje-istmeno-moderno", tag: "Estilo" },
];

const GuelaguetzaTrajeIstmenoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="El Traje Istmeño en la Guelaguetza: Historia y Significado | Flor Radiante"
      description="Descubre el papel del traje istmeño en la Guelaguetza y su representación cultural en Oaxaca."
      keywords="traje istmeño guelaguetza, traje tehuana guelaguetza, cultura oaxaca, trajes istmeños guelaguetza, 
      traje de tehuana guelaguetza, vestimenta tradicional Oaxaca fiestas, ropa tipica guelaguetza"
    />
    <BlogArticleLayout
      title="La Guelaguetza: La fiesta más grande de Oaxaca y el protagonismo del traje istmeño"
      tag="Cultura"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 9 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Te inspiró la Guelaguetza?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante creamos huipiles y trajes istmeños personalizados para que vivas la tradición con orgullo.
            Diseñamos contigo cada detalle: colores, bordados y medidas.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/coleccion"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explorar colección
            </Link>
            <WhatsAppButton
              variant="hero"
              label="Quiero mi traje istmeño personalizado"
              message="Hola, leí el artículo sobre la Guelaguetza y me interesaría crear un traje istmeño personalizado para una celebración. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        Cada julio, la ciudad de Oaxaca se convierte en el escenario de una de las celebraciones más espectaculares de México: la <strong>Guelaguetza</strong>. Durante dos lunes consecutivos, delegaciones de las ocho regiones del estado suben al cerro del Fortín para compartir su música, sus danzas y sus tradiciones. Y entre todas las estampas que conforman este mosaico cultural, pocas son tan impactantes como la delegación del <strong>Istmo de Tehuantepec</strong>, cuyas mujeres desfilan con sus majestuosos trajes bordados.
      </p>
      <div className="h-4" />
      <h2><strong>¿Qué es la Guelaguetza?</strong></h2>
      <div className="h-4" />
      <p>
        La palabra <strong>Guelaguetza</strong> proviene del zapoteco y significa <em>"ofrenda"</em> o <em>"acto recíproco de dar y recibir"</em>. Es un concepto profundamente arraigado en la vida comunitaria de los pueblos indígenas de Oaxaca: cuando alguien necesita ayuda —para una boda, una construcción, una fiesta— la comunidad contribuye con trabajo, alimentos o recursos, con la certeza de que ese gesto será correspondido en el futuro.
      </p>
      <p>
        La fiesta que hoy conocemos como Guelaguetza tiene raíces prehispánicas ligadas a ceremonias en honor a Centéotl, la diosa del maíz. Con el paso de los siglos, estas celebraciones se fusionaron con las festividades católicas de la Virgen del Carmen, dando origen al evento cultural que cada año atrae a miles de visitantes nacionales e internacionales.
      </p>
      <div className="h-4" />
      <h2><strong>¿Cómo se celebra?</strong></h2>
      <div className="h-4" />

      <p>
        La Guelaguetza se celebra los <strong>dos lunes posteriores al 16 de julio</strong> en el auditorio al aire libre del cerro del Fortín, con vista panorámica a la ciudad de Oaxaca. Durante el evento:
      </p>
      <ul>
        <li><strong>Delegaciones de las 8 regiones</strong> de Oaxaca presentan sus danzas tradicionales, cada una con su vestimenta, música y coreografía propias.</li>
        <li>Al finalizar cada presentación, los participantes <strong>lanzan ofrendas al público</strong>: frutas, pan, mezcal, artesanías y productos típicos de su región.</li>
        <li>Se elige a la <strong>Diosa Centéotl</strong>, una joven que representa la fertilidad y la abundancia, y que preside la ceremonia ataviada con un traje regional.</li>
      </ul>
      <p>
        Además del evento principal, la ciudad se llena de actividades paralelas: conciertos, exposiciones de arte, muestras gastronómicas, desfiles de delegaciones por el centro histórico y la tradicional <strong>Calenda</strong>, una procesión nocturna con música, marmotas gigantes y fuegos artificiales.
      </p>
      <div className="h-4" />
      <h2><strong>El Istmo de Tehuantepec en la Guelaguetza</strong></h2>
      <div className="h-4" />
      <p>
        De todas las delegaciones, la del <strong>Istmo de Tehuantepec</strong> es una de las más esperadas. Las mujeres istmeñas irrumpen en el escenario con una presencia imponente: portan el <strong>traje de tehuana completo</strong> —huipil ricamente bordado, enagua de vuelo amplio y accesorios de oro— y ejecutan danzas llenas de gracia y fuerza, como el <em>Son Istmeño</em> y la <em>Sandunga</em>.
      </p>
      <p>
        El momento más icónico es cuando las tehuanas, con sus trajes resplandecientes, lanzan al público las ofrendas de su tierra: totopo, queso, camarones secos, frutas tropicales y artesanías bordadas. Es un acto de generosidad que encarna el espíritu mismo de la Guelaguetza.
      </p>
      <div className="h-4" />
      <h2><strong>El papel del traje istmeño en la fiesta</strong></h2>
      <div className="h-4" />
      <p>
        El traje de tehuana no es un simple "disfraz" para la ocasión. Es la <strong>identidad hecha tela</strong>. Cada mujer que participa en la Guelaguetza lleva un traje que puede tener un significado profundamente personal:
      </p>
      <ul>
        <li><strong>Trajes heredados:</strong> Muchas participantes portan huipiles que pertenecieron a sus madres o abuelas, conectando generaciones en un solo acto.</li>
        <li><strong>Trajes nuevos para la ocasión:</strong> Algunas mandan a bordar un huipil especialmente para la Guelaguetza, eligiendo diseños y colores que las representen.</li>
        <li><strong>Joyería de oro:</strong> Los collares de monedas, aretes de filigrana y cadenas de oro son parte esencial del atuendo y reflejan la tradición orfebre del Istmo.</li>
        <li><strong>El resplandor:</strong> En ocasiones especiales, se usa el <em>huipil grande</em> o resplandor sobre la cabeza, creando la silueta más emblemática del traje de tehuana.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Más que folclor: una declaración cultural</strong></h2>
      <div className="h-4" />
      <p>
        En un mundo globalizado, la Guelaguetza y el traje istmeño representan un acto de <strong>resistencia cultural</strong>. Las mujeres del Istmo no usan el traje solo para la fiesta: lo portan en su vida diaria, en bodas, en velorios, en el mercado. La Guelaguetza es simplemente el escenario donde esa identidad se comparte con el resto del mundo.
      </p>
      <p>
        Cuando una tehuana sube al escenario del cerro del Fortín, no está actuando: está siendo ella misma frente a miles de personas. Esa autenticidad es lo que hace que la delegación del Istmo sea, año tras año, una de las más ovacionadas.
      </p>
      <div className="h-4" />
      <h2><strong>¿Cómo vivir la Guelaguetza?</strong></h2>
      <div className="h-4" />
      <p>
        Si planeas asistir a la Guelaguetza, te recomendamos:
      </p>
      <ul>
        <li><strong>Reservar con anticipación:</strong> Los boletos para el auditorio del Fortín se agotan rápidamente. También hay zonas gratuitas, pero es necesario llegar temprano.</li>
        <li><strong>Disfrutar las actividades paralelas:</strong> La Calenda, los mezcales, la comida oaxaqueña y las exposiciones artesanales son experiencias imperdibles.</li>
        <li><strong>Adquirir artesanía auténtica:</strong> La Guelaguetza es una excelente oportunidad para conocer y comprar prendas artesanales directamente de las comunidades productoras.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Lleva un pedazo del Istmo contigo</strong></h2>
      <div className="h-4" />
      <p>
        En <strong>Flor Radiante</strong>, celebramos el mismo espíritu de la Guelaguetza: compartir lo mejor de nuestra tierra. Cada huipil, enagua y refajo que ofrecemos está hecho por artesanas del Istmo de Tehuantepec, las mismas manos que bordan los trajes que brillan en el cerro del Fortín. Inspirada por la Guelaguetza? En Flor Radiante creamos huipiles y trajes istmeños personalizados para que luzcas con orgullo la tradición del Istmo en tu próxima celebración, " <strong>Contáctanos y comienza a diseñar tu prenda.</strong>.
      </p>


    </BlogArticleLayout>
  </React.Fragment>
);

export default GuelaguetzaTrajeIstmenoArticle;
