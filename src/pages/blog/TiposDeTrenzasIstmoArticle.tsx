import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Cultura" },
  { title: "De qué lado va la flor en el peinado istmeño", slug: "flor-peinado-istmeno", tag: "Tradición" },
  { title: "Costumbres de las Reinas en el Istmo", slug: "reinas-istmo", tag: "Cultura" },
];

const TiposDeTrenzasIstmoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Tipos de peinados del Istmo | Peinados tradicionales del Istmo de Tehuantepec"
      description="Descubre los diferentes tipos de trenzas del Istmo de Tehuantepec, su significado, estilos y cómo forman parte esencial de la identidad y belleza en la cultura zapoteca."
      keywords="tipos de trenzas del istmo, trenzas istmeñas, peinados istmeños, trenzas zapotecas, peinados tradicionales istmo, trenzas de Tehuantepec, 
      cultura istmrña peinados, trenzas con listones istmo, peinado istmeño mujer, identidad zapoteca belleza, tradiciones del Istmo Oaxaca, estilo istmeño, trenza de moño istmo, trenza "
    />
    <BlogArticleLayout
      title="Tipos de Peinados del Istmo de Tehuantepec: Tradición en Cada Peinado"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      tag="Guia Completa"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres lucir un peinado tradicional en tu próxima celebración?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante te ayudamos a completar tu look istmeño con prendas auténticas que armonizan con cada tipo de trenza. Descubre nuestros
            trajes y accesorios.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/coleccion" className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Ver colección
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      }
    >
      <p >
        El peinado es una parte esencial de la identidad de la mujer del Istmo de Tehuantepec. Las trenzas no son solo un estilo: son un lenguaje. Cada tipo
        de trenza comunica algo sobre la ocasión, el estatus y la personalidad de quien la lleva. A continuacion te presentamos los tipos de trenzas más emblemáticos del Istmo.
      </p>

      <div className="h-4" />
      <h2><strong>El Moño</strong></h2>
      <div className="h-4" />

      <p>
        El moño es uno de los peinados más icónicos del Istmo. Consiste en recogerel cabello en trenzas que se enrollan formando un moño compacto en la parte
        posterior o superior de la cabeza. Es un peinado elegante y versátil que se utiliza tanto para el día a día como para celebraciones. Suele adornarse con 
        flores naturales o listones de colores según la ocasión.
      </p>

      <div className="h-4" />
      <h2><strong>El Moño Doble</strong></h2>
      <div className="h-4" />

      <p>
        Como su nombre lo indica, el moño doble duplica la estructura del moño tradicional, creando dos volúmenes que enmarcan la cabeza. Este estilo es
        más elaborado y se reserva generalmente para fiestas, velas y ocasiones especiales. El moño doble requiere mayor cantidad de cabello o el uso de
        extensiones y postizos, y su montaje puede llevar bastante tiempo. El resultado es un peinado imponente que complementa a la perfección los
        trajes de gala del Istmo.
      </p>

      <div className="h-4" />
      <h2><strong>El Escalonado</strong></h2>
      <div className="h-4" />

      <p>
        El peinado escalonado se construye creando niveles o capas con el liston, de modo que el liston parece ascender en escalones desde la nuca hasta la
        coronilla. Este estilo es particularmente llamativo porque añade volumen y dimensión al peinado. Se asocia con eventos importantes como bodas y
        mayordomías. Las trenzas se entrelazan con cintas de colores o hilos de seda que acentúan cada nivel, creando un efecto visual muy impactante.
      </p>

      <div className="h-4" />
      <h2><strong>Trenzas Sueltas</strong></h2>
      <div className="h-4" />

      <p>
        Las trenzas sueltas son el estilo más cotidiano y relajado. El cabello se  divide en dos secciones que se trenzan y se dejan caer libremente
        sobre los hombros o la espalda. Es el peinado del día a día, del mercado, de la vida en casa. Aunque es sencillo, no carece de gracia: las mujeres
        suelen entrelazar listones de colores vivos en las trenzas, añadiendo un toque de alegría a lo cotidiano.
      </p>

      <div className="h-4" />
      <h2><strong>El Abanico</strong></h2>
      <div className="h-4" />

      <p>
        El abanico es un peinado de gala que recibe su nombre por la forma que adopta el cabello al desplegarse. Las trenzas se disponen en forma
        semicircular, abriéndose como un abanico sobre la parte superior de la cabeza. 
      </p>

      <div className="h-4" />
      <h2><strong>El Rosetón</strong></h2>
      <div className="h-4" />

      <p>
        El rosetón toma su nombre de la forma circular que se logra al enrollar los listones sobre sí mismos, creando una especie de flor o roseta en la cabeza.
        Este peinado es muy fotogénico y se asocia con eventos festivos y culturales.
      </p>

      <div className="h-4" />
      <h2><strong>De Bola</strong></h2>
      <div className="h-4" />

      <p>
        El peinado de bola es uno de los más tradicionales y reconocibles. El cabello se recoge en trenzas que se enrollan con el liston formando una esfera compacta,
        generalmente en la parte alta de la cabeza. La bola puede variar en tamaño según la cantidad de cabello y el uso de postizos. Es un peinado que denota formalidad
        y respeto por la tradición, y suele verse en mujeres mayores que mantienen vivas las costumbres ancestrales.
      </p>

    </BlogArticleLayout>
  </React.Fragment>
);

export default TiposDeTrenzasIstmoArticle;
