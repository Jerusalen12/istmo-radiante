import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

const related = [
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
];

const ArtesanasFlorRadianteArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Las Artesanas Detrás de Flor Radiante | Tradición del Istmo"
      description="Conoce a las artesanas del Istmo de Tehuantepec que elaboran a mano los huipiles, enaguas y prendas tradicionales de Flor Radiante."
      keywords="artesanas zapotecas, huipil hecho a mano, bordado istmeño, artesanas oaxaca,
      artesanas zapotecas Oaxaca, mujeres bordadoras Istmo, huipiles hechos a mano historia, trabajo artesanal Oaxaca"
    />
    <BlogArticleLayout
      title="Detrás de la Puntada: Conoce a las Artesanas de Flor Radiante"
      tag="Nuestras artesanas"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 7 min"
      heroAlt="Manos de artesana bordando un huipil istmeño con hilos de colores"
      related={related}
    >
      <p>
        Detrás de cada huipil, cada enagua y cada refajo de <strong>Flor Radiante</strong>, hay manos que cuentan historias. Manos que aprendieron el oficio de sus madres, que a su vez lo aprendieron de las suyas. En este artículo, te invitamos a conocer a las artesanas que dan vida a nuestras prendas.
      </p>

      <h2>El arte que se hereda</h2>
      <p>
        En el Istmo de Tehuantepec, el bordado no se enseña en escuelas: se transmite en la convivencia diaria. Las niñas crecen viendo a sus madres, tías y abuelas trabajar con la máquina de pedal o con la aguja en mano. A los 10 o 12 años, muchas ya han completado su primera pieza. Para los 20, dominan las técnicas que definen el estilo de su comunidad.
      </p>

      <h2>Un oficio, una identidad</h2>
      <p>
        Para las artesanas del Istmo, bordar no es solo un trabajo: es parte de quiénes son. Las bordadoras son figuras respetadas en sus comunidades. Su habilidad es motivo de orgullo personal y familiar. Cuando una artesana crea un huipil para una novia, sabe que está contribuyendo a un momento trascendental en la vida de otra mujer.
      </p>

      <h2>El proceso creativo</h2>
      <p>
        Cada prenda comienza con una conversación. La artesana escucha lo que la clienta desea: ¿para qué ocasión? ¿Qué colores prefiere? ¿Hay alguna flor o símbolo que tenga un significado especial? A partir de ahí, la bordadora <strong>diseña el patrón</strong>, selecciona los hilos y comienza un proceso que puede tomar semanas o meses.
      </p>
      <ul>
        <li><strong>Diseño:</strong> Se dibuja o traza el patrón sobre la tela, adaptando motivos tradicionales al gusto de la clienta.</li>
        <li><strong>Selección de materiales:</strong> Se eligen los hilos (algodón, seda, metálicos) y la tela base (terciopelo, satín, algodón).</li>
        <li><strong>Bordado:</strong> La artesana trabaja el diseño puntada a puntada, ajustando tensiones, colores y texturas.</li>
        <li><strong>Acabado:</strong> Se ensambla la prenda, se hacen los remates y se verifica la calidad del trabajo.</li>
      </ul>

      <h2>Comercio justo y dignidad</h2>
      <p>
        En Flor Radiante, creemos que el trabajo artesanal debe ser <strong>justamente remunerado</strong>. Cada prenda tiene un precio que refleja las horas de dedicación, la habilidad técnica y el valor cultural que contiene. No negociamos a la baja con nuestras artesanas: colaboramos con ellas como socias en la preservación de una tradición.
      </p>

      <h2>Conoce su trabajo</h2>
      <p>
        Cuando adquieres una prenda de Flor Radiante, no compras un producto cualquiera. Llevas contigo el trabajo, la pasión y la historia de una artesana del Istmo. Te invitamos a explorar nuestra colección y, si lo deseas, a <strong>solicitar una prenda personalizada</strong> donde la artesana plasmará tu visión con sus manos expertas.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default ArtesanasFlorRadianteArticle;
