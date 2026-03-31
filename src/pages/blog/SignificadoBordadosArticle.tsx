import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "¿Huipil auténtico o imitación?", slug: "huipil-autentico-o-imitacion", tag: "Educación" },
  { title: "El zapoteco y su influencia en la vestimenta", slug: "zapoteco-vestimenta-tradicional", tag: "Historia" },
];

const SignificadoBordadosArticle = () => (
  <React.Fragment>
    <SEOHead
      title="El Significado de los Bordados Zapotecas en los Huipiles | Flor Radiante"
      description="Conoce el significado cultural de los bordados zapotecos en los huipiles del Istmo de Tehuantepec y la historia detrás de cada flor y color."
      keywords="bordados zapotecos, significado bordados huipil, huipil istmeño, arte textil zapoteca"
    />

    <BlogArticleLayout
      title="Bordados que Hablan: El Significado de los Diseños Zapotecas"
      tag="Cultura"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 10 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres que tu huipil cuente tu propia historia?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante, nuestras artesanas pueden incorporar los motivos y colores
            que tengan un significado especial para ti. Diseñamos juntos un huipil único
            que hable de tu identidad.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/coleccion#huipiles"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explorar colección
            </Link>
            <WhatsAppButton
              variant="inline"
              label="Quiero un huipil con significado"
              message="Hola, leí el artículo sobre el significado de los bordados zapotecas y me gustaría crear un huipil personalizado con motivos que tengan un significado especial para mí. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        En la indumentaria del <strong>Istmo de Tehuantepec</strong>, cada puntada es un lenguaje. Los <strong>bordados zapotecas</strong> que adornan los huipiles, enaguas y refajos no son simples decoraciones: son un sistema simbólico que comunica identidad, pertenencia, espiritualidad y visión del mundo.
      </p>
      <div className="h-4" />
      <h2><strong>Un lenguaje en hilos y colores</strong></h2>
      <div className="h-4" />
      <p>
        Las mujeres zapotecas han transmitido de generación en generación los patrones y técnicas que definen la estética textil del Istmo. Cada bordadora interpreta los motivos tradicionales con su propio estilo, pero los símbolos fundamentales se mantienen como un vocabulario compartido.
      </p>
      <div className="h-4" />
      <h2><strong>Los motivos principales</strong></h2>
      <div className="h-4" />

      <h3><strong>Flores</strong></h3>
      <div className="h-4" />
      <p>
        Las flores son el elemento más recurrente en los bordados istmeños. Representan la <strong>fertilidad, la vida y la conexión con la tierra</strong>. Las rosas, margaritas, girasoles y flores de manita aparecen en composiciones exuberantes que cubren la totalidad del huipil. El tamaño y la densidad de las flores indican el nivel de elaboración y, frecuentemente, la importancia de la ocasión para la que fue confeccionada la prenda.
      </p>
      <div className="h-4" />
      <h3><strong>Frutos</strong></h3>
      <div className="h-4" />
      <p>
        Piñas, mangos y frutas tropicales aparecen como símbolos de <strong>abundancia y prosperidad</strong>. En la cosmovisión zapoteca, los frutos representan las bendiciones de la tierra y la generosidad de la naturaleza istmeña.
      </p>
      <div className="h-4" />
      <h3><strong>Animales</strong></h3>
      <div className="h-4" />
      <p>
        Aunque menos comunes que los motivos florales, es posible encontrar representaciones de <strong>aves, mariposas y criaturas míticas</strong>. Los pájaros simbolizan libertad y conexión con lo divino, mientras que las mariposas representan la transformación y el alma.
      </p>
      <div className="h-4" />
      <h3><strong>Grecas y formas geométricas</strong></h3>
      <div className="h-4" />
      <p>
        Las <strong>grecas zapotecas</strong> —herencia directa de la arquitectura de Mitla— aparecen como marcos o bordes en las prendas. Representan el <strong>movimiento cíclico del tiempo, la dualidad y el infinito</strong>. Estos patrones geométricos conectan la indumentaria contemporánea con miles de años de civilización.
      </p>
      <div className="h-4" />
      <h2><strong>El significado de los colores</strong></h2>
      <div className="h-4" />
      <ul>
        <li><strong>Rojo:</strong> Pasión, fuerza vital, la sangre que conecta con los ancestros.</li>
        <li><strong>Amarillo y dorado:</strong> El sol, la riqueza, la luz divina.</li>
        <li><strong>Verde:</strong> La naturaleza, la fertilidad de la tierra istmeña.</li>
        <li><strong>Azul:</strong> El cielo y el mar, espiritualidad.</li>
        <li><strong>Negro:</strong> Elegancia, respeto, también utilizado en prendas de luto.</li>
        <li><strong>Blanco:</strong> Pureza, celebración, frecuente en trajes de novia.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>El bordado como acto de resistencia cultural</strong></h2>
      <div className="h-4" />
      <p>
        En un mundo donde la producción industrial amenaza las tradiciones artesanales, cada mujer que se sienta a bordar un huipil está realizando un acto de <strong>resistencia cultural</strong>. Preserva un conocimiento ancestral, mantiene viva una lengua visual y reafirma su identidad zapoteca.
      </p>
      <p>
        En <strong>Flor Radiante</strong>, trabajamos con artesanas que dominan estos símbolos y técnicas, y que pueden crear <strong>diseños personalizados</strong> incorporando los motivos y colores que tengan un significado especial para ti.
      </p>
      <div className="h-4" />
      <h2><strong>¿Cómo leer un huipil?</strong></h2>
      <div className="h-4" />
      <p>
        La próxima vez que observes un huipil istmeño, detente en los detalles. Pregúntate: ¿qué flores eligió la artesana? ¿Qué colores predominan? ¿Hay grecas? Cada elección cuenta una historia. Y ahora, tú también puedes leerla.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default SignificadoBordadosArticle;
