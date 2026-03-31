import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "La Joyería Istmeña: Oro, Tradición y Elegancia", slug: "joyeria-istmena", tag: "Cultura" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "Traje de Istmo para bodas", slug: "traje-istmo-bodas", tag: "Bodas" },
];

const AccesoriosTrajeTehuanaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Accesorios del Traje de Tehuana: Joyería, Enagua y Tradición | Flor Radiante"
      description="Descubre todos los accesorios del traje de tehuana: huipil, enagua, joyería istmeña, tocado floral y su significado en la cultura del Istmo de Tehuantepec."
      keywords="traje de tehuana accesorios, joyería istmeña, arracadas istmeñas, enagua tehuana, traje istmeño tradicional
      accesorios traje de tehuana, joyeria istmeña completa, enagua tehuana, flores traje istmeño"
    />

    <BlogArticleLayout
      title="Los Accesorios del Traje de Tehuana: Más Allá del Huipil"
      tag="Cultura"
      metaDate="Publicado el 5 de marzo de 2026 · Lectura de 10 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres armar tu traje de tehuana completo?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante te ayudamos a elegir cada pieza: huipil, enagua, refajo y accesorios.
            Trabajamos con artesanas del Istmo para ofrecerte un conjunto auténtico y personalizado
            según tus medidas, colores y ocasión.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/coleccion#accesorios"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explorar colección
            </Link>
            <WhatsAppButton
              variant="inline"
              label="Quiero asesoría para armar mi traje completo"
              message="Hola, leí el artículo sobre los accesorios del traje de tehuana y me gustaría recibir asesoría para armar un conjunto completo. ¿Podrían ayudarme a elegir las piezas adecuadas según mis preferencias?"
            />
          </div>
        </div>
      }
    >
      <p>
        Cuando pensamos en el <strong>traje de tehuana</strong>, la imagen que viene a la mente suele ser el huipil bordado. Sin embargo, el atuendo completo de la mujer istmeña es un conjunto de múltiples piezas, cada una con su función, su significado y su belleza propia. Conocer todas las piezas te permitirá apreciar —y portar— el traje en toda su magnificencia.
      </p>
      <div className="h-4" />
      <h2><strong>El Huipil</strong></h2>
      <div className="h-4" />
      <p>
        Es la pieza central y más reconocida del traje. Una blusa amplia, generalmente de terciopelo o satín, con bordados exuberantes de flores, frutos y motivos geométricos. El huipil puede ser de uso diario (bordado a máquina, colores sobrios) o de gala (bordado a mano, colores vibrantes, hilos de seda).
      </p>
      <p>
        Los bordados no son meramente decorativos: cada flor, cada color y cada disposición tiene un significado cultural que conecta a la mujer con su comunidad y su historia.
      </p>
      <div className="h-4" />
      <h2><strong>La Enagua</strong></h2>
      <div className="h-4" />
      <p>
        La enagua es la falda larga que acompaña al huipil. Tradicionalmente es amplia y llega hasta los tobillos. Puede ser lisa o llevar un holán (volante) en la parte inferior bordado con motivos que complementan los del huipil. La enagua aporta movimiento y gracia al caminar, especialmente durante los bailes tradicionales.
      </p>
      <div className="h-4" />
      <h2><strong>El Refajo</strong></h2>
      <div className="h-4" />
      <p>
        Es una prenda interior que se usa debajo de la enagua para darle volumen y estructura. El refajo tradicional es de algodón almidonado y puede llevar encaje o bordados discretos en el borde inferior, que se asoman sutilmente bajo la enagua. Aunque no es visible directamente, el refajo es esencial para lograr la silueta característica del traje istmeño.
      </p>
      <div className="h-4" />
      <h2><strong>La Joyería</strong></h2>
      <div className="h-4" />
      <p>
        El complemento indispensable del traje. La joyería istmeña incluye:
      </p>
      <ul>
        <li><strong>Arracadas:</strong> Aretes grandes de filigrana de oro, el accesorio más emblemático.</li>
        <li><strong>Cadenas y torzales:</strong> Múltiples cadenas de oro que se superponen sobre el huipil.</li>
        <li><strong>Semanarios:</strong> Conjunto de siete pulseras de filigrana, una por cada día de la semana.</li>
        <li><strong>Dijes y medallas:</strong> Colgantes con motivos religiosos o florales que se suman a las cadenas.</li>
        <li><strong>Anillos:</strong> De filigrana, usados en varios dedos simultáneamente.</li>
      </ul>
      <p>
        La cantidad y elaboración de la joyería varía según la ocasión: discreta para el diario, espléndida para las fiestas.
      </p>
      <div className="h-4" />
      <h2><strong>El Tocado Floral</strong></h2>
      <div className="h-4" />
      <p>
        En las ocasiones de gala, las mujeres istmeñas adornan su cabeza con <strong>flores naturales o artificiales</strong>. Las flores se entrelazan con las trenzas o se colocan sobre el peinado, creando coronas florales que añaden color y fragancia al conjunto. Las flores más comunes son las rosas, los claveles y las flores de temporada de la región.
      </p>
      <p>
        El tocado floral no es un capricho estético: simboliza la conexión con la tierra, la fertilidad y la celebración de la vida.
      </p>
      <div className="h-4" />
      <h2><strong>Las Trenzas</strong></h2>
      <div className="h-4" />
      <p>
        El peinado es una parte integral del traje. Las mujeres del Istmo tradicionalmente llevan el cabello largo trenzado con <strong>listones de colores</strong> que combinan con el huipil. Las trenzas pueden recogerse en un moño alto o dejarse caer sobre los hombros, dependiendo de la ocasión y la preferencia personal.
      </p>
      <p>
        En las fiestas de gala, las trenzas se adornan con listones de seda, flores y, en algunas comunidades, con el <strong>resplandor</strong>: un tocado de encaje blanco almidonado que enmarca el rostro como un halo, utilizado en las ceremonias más solemnes.
      </p>
      <div className="h-4" />
      <h2><strong>Los Aretes (Arracadas)</strong></h2>
      <div className="h-4" />
      <p>
        Aunque ya los mencionamos en la sección de joyería, los aretes merecen una mención especial por su protagonismo visual. Las arracadas istmeñas son obras maestras de la orfebrería en filigrana. Su tamaño y diseño varían:
      </p>
      <ul>
        <div className="h-4" />
        <li><strong>Arracadas de media luna:</strong> Las más clásicas, con forma de media luna decorada con filigrana.</li>
        <li><strong>Arracadas de canasta:</strong> Más voluminosas, con un diseño tridimensional que recuerda una canasta tejida en oro.</li>
        <li><strong>Arracadas florales:</strong> Con motivos de flores y hojas, ideales para complementar huipiles con bordados florales.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>El conjunto completo: una obra de arte integral</strong></h2>
      <div className="h-4" />
      <p>
        Cuando todas las piezas se unen —huipil, enagua, refajo, joyería, tocado floral, trenzas con listones y arracadas—, el resultado es uno de los atuendos más espectaculares y significativos de México. Cada elemento tiene su lugar y su razón de ser, y juntos conforman una expresión de identidad, orgullo y belleza que ha cautivado al mundo entero.
      </p>
      <div className="h-4" />
      <h2><strong>Arma tu atuendo completo</strong></h2>
      <div className="h-4" />
      <p>
        En <strong>Flor Radiante</strong>, te ayudamos a armar tu traje de tehuana completo. Desde el huipil hasta la enagua y el refajo, cada prenda es elaborada por artesanas del Istmo con los más altos estándares de calidad. Escríbenos por WhatsApp y te asesoramos para que tu atuendo sea perfecto en cada detalle.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default AccesoriosTrajeTehuanaArticle;
