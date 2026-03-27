import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

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
      //heroImage={embroideryImg}
      heroAlt="Detalle de bordado zapoteca con motivos florales en un huipil del Istmo de Tehuantepec,
      significado bordados huipil, simbolos zapotecos bordado, arte textil zapoteca, diseños huipil significado"
      related={related}
    >
      <p>
        En la indumentaria del <strong>Istmo de Tehuantepec</strong>, cada puntada es un lenguaje. Los <strong>bordados zapotecas</strong> que adornan los huipiles, enaguas y refajos no son simples decoraciones: son un sistema simbólico que comunica identidad, pertenencia, espiritualidad y visión del mundo.
      </p>

      <h2>Un lenguaje en hilos y colores</h2>
      <p>
        Las mujeres zapotecas han transmitido de generación en generación los patrones y técnicas que definen la estética textil del Istmo. Cada bordadora interpreta los motivos tradicionales con su propio estilo, pero los símbolos fundamentales se mantienen como un vocabulario compartido.
      </p>

      <h2>Los motivos principales</h2>

      <h3>Flores</h3>
      <p>
        Las flores son el elemento más recurrente en los bordados istmeños. Representan la <strong>fertilidad, la vida y la conexión con la tierra</strong>. Las rosas, margaritas, girasoles y flores de manita aparecen en composiciones exuberantes que cubren la totalidad del huipil. El tamaño y la densidad de las flores indican el nivel de elaboración y, frecuentemente, la importancia de la ocasión para la que fue confeccionada la prenda.
      </p>

      <h3>Frutos</h3>
      <p>
        Piñas, mangos y frutas tropicales aparecen como símbolos de <strong>abundancia y prosperidad</strong>. En la cosmovisión zapoteca, los frutos representan las bendiciones de la tierra y la generosidad de la naturaleza istmeña.
      </p>

      <h3>Animales</h3>
      <p>
        Aunque menos comunes que los motivos florales, es posible encontrar representaciones de <strong>aves, mariposas y criaturas míticas</strong>. Los pájaros simbolizan libertad y conexión con lo divino, mientras que las mariposas representan la transformación y el alma.
      </p>

      <h3>Grecas y formas geométricas</h3>
      <p>
        Las <strong>grecas zapotecas</strong> —herencia directa de la arquitectura de Mitla— aparecen como marcos o bordes en las prendas. Representan el <strong>movimiento cíclico del tiempo, la dualidad y el infinito</strong>. Estos patrones geométricos conectan la indumentaria contemporánea con miles de años de civilización.
      </p>

      <h2>El significado de los colores</h2>
      <ul>
        <li><strong>Rojo:</strong> Pasión, fuerza vital, la sangre que conecta con los ancestros.</li>
        <li><strong>Amarillo y dorado:</strong> El sol, la riqueza, la luz divina.</li>
        <li><strong>Verde:</strong> La naturaleza, la fertilidad de la tierra istmeña.</li>
        <li><strong>Azul:</strong> El cielo y el mar, espiritualidad.</li>
        <li><strong>Negro:</strong> Elegancia, respeto, también utilizado en prendas de luto.</li>
        <li><strong>Blanco:</strong> Pureza, celebración, frecuente en trajes de novia.</li>
      </ul>

      <h2>El bordado como acto de resistencia cultural</h2>
      <p>
        En un mundo donde la producción industrial amenaza las tradiciones artesanales, cada mujer que se sienta a bordar un huipil está realizando un acto de <strong>resistencia cultural</strong>. Preserva un conocimiento ancestral, mantiene viva una lengua visual y reafirma su identidad zapoteca.
      </p>
      <p>
        En <strong>Flor Radiante</strong>, trabajamos con artesanas que dominan estos símbolos y técnicas, y que pueden crear <strong>diseños personalizados</strong> incorporando los motivos y colores que tengan un significado especial para ti.
      </p>

      <h2>¿Cómo leer un huipil?</h2>
      <p>
        La próxima vez que observes un huipil istmeño, detente en los detalles. Pregúntate: ¿qué flores eligió la artesana? ¿Qué colores predominan? ¿Hay grecas? Cada elección cuenta una historia. Y ahora, tú también puedes leerla.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default SignificadoBordadosArticle;
