import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

const related = [
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
  { title: "El traje istmeño en el México moderno", slug: "traje-istmeno-moderno", tag: "Estilo" },
];

const TrajeIstmoBodasArticle = () => (
  <React.Fragment>
    <SEOHead
      title="El Traje del Istmo para Bodas: Tradición y Elegancia | Flor Radiante"
      description="Conoce el traje istmeño utilizado en bodas tradicionales del Istmo de Tehuantepec y el significado de cada prenda."
      keywords="traje istmeño boda, traje tehuana boda, vestimenta tradicional bodas oaxaca,
      traje istmeño para boda, huipil boda Oaxaca, traje de tehuana boda precio, vestimenta tradicional bodas mexicanas"
    />
    <BlogArticleLayout
      title="Traje de Istmo para bodas: Ideas para novias, madrinas e invitadas"
      tag="Bodas"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 8 min"
      related={related}
    >
      <p>
        Las <strong>bodas istmeñas</strong> son celebraciones de una riqueza visual incomparable. La novia luce un traje que representa no solo su belleza, sino la historia y el orgullo de su comunidad. Si estás planeando una boda con elementos istmeños —o simplemente quieres lucir un huipil en una ceremonia—, esta guía es para ti.
      </p>

      <h2>El traje de la novia istmeña</h2>
      <p>
        Tradicionalmente, la novia del Istmo viste un <strong>huipil blanco o marfil</strong>, bordado con hilos de seda en colores suaves o con hilos dorados y plateados. El bordado suele incluir motivos florales que simbolizan la fertilidad, el amor y la nueva vida que comienza.
      </p>
      <h3>El Resplandor</h3>
      <p>
        Una de las piezas más icónicas de la boda istmeña es el <strong>resplandor</strong> (también llamado <em>huipil grande</em>): una pieza de encaje o tela plisada que se coloca sobre la cabeza de la novia durante la ceremonia religiosa. Es un símbolo de pureza y devoción, y su colocación es uno de los momentos más emotivos de la celebración.
      </p>

      <h2>Opciones para madrinas</h2>
      <p>
        Las madrinas suelen vestir huipiles de gala en colores que complementen el traje de la novia. Los tonos más populares son:
      </p>
      <ul>
        <li><strong>Rojo vino o burdeos:</strong> Elegancia clásica y rica.</li>
        <li><strong>Azul marino:</strong> Sobriedad y sofisticación.</li>
        <li><strong>Verde esmeralda:</strong> Frescura y vitalidad.</li>
        <li><strong>Negro con bordados dorados:</strong> Máxima elegancia.</li>
      </ul>
      <p>
        En Flor Radiante, podemos coordinar los huipiles de las madrinas para que armonicen entre sí y con el traje de la novia, personalizando colores y bordados.
      </p>

      <h2>Ideas para invitadas</h2>
      <p>
        Si asistirás a una boda con temática istmeña o simplemente quieres honrar la tradición, considera estas opciones:
      </p>
      <ul>
        <li><strong>Huipil de satín con enagua:</strong> Una opción elegante y más ligera que el terciopelo, perfecta para bodas al aire libre.</li>
        <li><strong>Huipil corto con falda larga contemporánea:</strong> Mezcla tradición y modernidad.</li>
        <li><strong>Accesorios istmeños:</strong> Si no deseas un traje completo, un par de aretes de filigrana o un rebozo bordado pueden ser el toque perfecto.</li>
      </ul>

      <h2>Guayaberas para el novio y los padrinos</h2>
      <p>
        El novio istmeño viste una <strong>guayabera tradicional</strong>, generalmente en blanco o crema, con detalles de bordado que hacen juego con el traje de la novia. Los padrinos pueden usar guayaberas en tonos complementarios. Todas nuestras guayaberas son personalizables en color, tela y estilo de bordado.
      </p>

      <h2>Personalización para tu gran día</h2>
      <p>
        En <strong>Flor Radiante</strong>, entendemos que la boda es un día único. Por eso ofrecemos un servicio completo de <strong>personalización para bodas</strong>:
      </p>
      <ul>
        <li>Diseño del huipil de la novia con los motivos y colores que desee.</li>
        <li>Coordinación de trajes para madrinas, madres y damas de honor.</li>
        <li>Guayaberas personalizadas para el novio y padrinos.</li>
        <li>Asesoría en la selección de accesorios tradicionales.</li>
        <li>Ajustes de medidas y pruebas previas.</li>
      </ul>

      <h2>Planifica con tiempo</h2>
      <p>
        Un traje de novia istmeño personalizado requiere tiempo. Te recomendamos <strong>contactarnos con al menos 3 a 6 meses de anticipación</strong> para asegurar que cada detalle sea perfecto. Escríbenos por WhatsApp y comenzamos a diseñar juntos el traje de tus sueños.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default TrajeIstmoBodasArticle;
