import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

const related = [
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
  { title: "¿Huipil auténtico o imitación?", slug: "huipil-autentico-o-imitacion", tag: "Educación" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
];

const CuidadoPrendasArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Cómo Cuidar Huipiles y Prendas Artesanales del Istmo | Flor Radiante"
      description="Aprende cómo cuidar huipiles bordados a mano, enaguas y prendas tradicionales para conservar su belleza por muchos años."
      keywords="cuidado de huipiles, lavar huipil bordado, prendas artesanales oaxaca,
      como lavar huipil bordado, cuidado ropa artesanal Oaxaca, como conservar huipiles, limpieza prendas bordadas"
    />
    <BlogArticleLayout
      title="Guía de cuidado para tus prendas artesanales"
      tag="Cuidado"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 6 min"
      related={related}
    >
      <p>
        Un <strong>huipil artesanal</strong> bien cuidado puede durar décadas e incluso convertirse en una pieza de herencia familiar. Sin embargo, la delicadeza de los bordados y las telas requiere un cuidado especial. En esta guía te compartimos todo lo que necesitas saber para preservar tus prendas del Istmo.
      </p>

      <h2>Lavado: la regla de oro</h2>
      <p>
        El lavado es el momento más delicado para cualquier prenda bordada. Sigue estas recomendaciones:
      </p>
      <ul>
        <li><strong>Siempre a mano.</strong> Nunca laves un huipil bordado en lavadora. La fricción y la centrifugación pueden dañar los hilos y deformar la prenda.</li>
        <li><strong>Agua fría o tibia.</strong> El agua caliente puede encoger las telas y hacer que los colores de los hilos se destiñan.</li>
        <li><strong>Jabón neutro.</strong> Usa jabón de pasta neutro o un detergente suave para prendas delicadas. Evita blanqueadores, suavizantes industriales y productos con cloro.</li>
        <li><strong>No remojar por mucho tiempo.</strong> Sumerge la prenda brevemente, frota con suavidad las zonas que lo necesiten y enjuaga con abundante agua limpia.</li>
        <li><strong>No retorcer.</strong> Exprime el exceso de agua presionando suavemente con las manos o envolviendo la prenda en una toalla limpia.</li>
      </ul>

      <h2>Secado</h2>
      <ul>
        <li><strong>Seca a la sombra.</strong> La exposición directa al sol puede decolorar los bordados y dañar las fibras.</li>
        <li><strong>Extiende en horizontal.</strong> Coloca la prenda sobre una superficie plana (una toalla o una rejilla de secado) para que no se deforme por su propio peso.</li>
        <li><strong>No usar secadora.</strong> El calor de la secadora puede dañar irreversiblemente tanto la tela como los bordados.</li>
      </ul>

      <h2>Planchado</h2>
      <ul>
        <li><strong>Plancha por el revés.</strong> Siempre coloca la prenda al revés para planchar, protegiendo los bordados del contacto directo con la plancha.</li>
        <li><strong>Temperatura media-baja.</strong> Usa la configuración para seda o delicados.</li>
        <li><strong>Usa un paño intermedio.</strong> Coloca un lienzo o tela de algodón entre la plancha y la prenda para mayor protección.</li>
        <li><strong>El vapor puede ser tu aliado.</strong> Si la prenda tiene arrugas profundas, el vapor a distancia ayuda a relajar las fibras sin contacto directo.</li>
      </ul>

      <h2>Almacenamiento</h2>
      <ul>
        <li><strong>Guarda en horizontal.</strong> Si es posible, dobla la prenda cuidadosamente (con papel de seda entre los dobleces para evitar marcas) y colócala en un cajón o caja.</li>
        <li><strong>Evita colgar los huipiles pesados.</strong> Las prendas con bordados densos pueden deformarse si se cuelgan por largos períodos.</li>
        <li><strong>Usa bolsas de tela.</strong> Si necesitas guardar la prenda en una funda, usa bolsas de algodón o lino, nunca de plástico (que retiene humedad y puede generar hongos).</li>
        <li><strong>Protege de polillas.</strong> Coloca ramitas de lavanda, cedro o bolsitas de hierbas aromáticas cerca de las prendas.</li>
      </ul>

      <h2>Restauración</h2>
      <p>
        Si tu huipil ha sufrido daños —hilos sueltos, bordados deshechos, manchas persistentes—, no intentes repararlo tú misma. Busca una <strong>artesana especializada</strong> que pueda restaurar la pieza respetando la técnica original. En Flor Radiante podemos conectarte con nuestras artesanas para servicios de restauración.
      </p>

      <h2>Cuida tu herencia</h2>
      <p>
        Un huipil es más que una prenda: es una pieza de arte viva. Con el cuidado adecuado, la prenda que hoy vistes con orgullo será la que tu hija o nieta luzca con la misma emoción. Trátala con el amor que merece.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default CuidadoPrendasArticle;
