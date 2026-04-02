import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Tipos de Trenzas del Istmo de Tehuantepec", slug: "tipos-trenzas-istmo", tag: "Cultura" },
  { title: "¿De Qué Lado Va la Flor en el Peinado Istmeño?", slug: "flor-peinado-istmeno", tag: "Tradición" },
  { title: "Tipos de Trajes del Istmo", slug: "tipos-trajes-istmo", tag: "Guía completa" },
];

const ReinasIstmoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Reinas de las Velas del Istmo | Tradición y orgullo zapoteca"
      description="Conoce el papel de las reinas de las velas del Istmo de Tehuantepec, su importancia cultural y cómo representan la identidad, elegancia y tradición dentro de la cultura zapoteca."
      keywords="reinas de las velas istmo, velas del Istmo de Tehuantepec, tradición zapoteca velas, reina de vela significado, fiestas del Istmo Oaxaca, cultura zapoteca tradiciones, 
  vestimenta istmeña mujer, huipil y enagua velas, celebraciones istmeñas, identidad zapoteca mujer, costumbres del Istmo Oaxaca, eventos tradicionales Oaxaca"
    />
    <BlogArticleLayout
      title="Las Reinas del Istmo: Costumbres, Trajes y Peinados de una Tradición Viva"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      tag="Cultura"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Participas en una vela o fiesta como reina?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante creamos trajes de gala dignos de una reina del Istmo.
            Trabajamos contigo y nuestras artesanas para diseñar una pieza única.
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
        En el Istmo de Tehuantepec, las reinas no son simples figuras decorativas
        de un concurso de belleza. Ser reina en una vela o fiesta patronal es un
        honor profundo, una responsabilidad comunitaria y una celebración de la
        identidad cultural zapoteca. En este artículo exploramos qué representa
        ser reina en el Istmo, qué trajes usan y cómo se peinan para la ocasión.
      </p>

      <div className="h-4" />
      <h2><strong>¿Qué representa la reina en el Istmo?</strong></ h2>
      <div className="h-4" />

      <p>
        La reina del Istmo es una figura que encarna los valores de su comunidad. No se elige solo por su apariencia física, sino por su compromiso con las
        tradiciones, su participación en la vida comunitaria y, en muchos casos, por la capacidad económica de su familia para asumir los gastos que
        conlleva el cargo, implica una serie de responsabilidades: presidir las celebraciones, recibir a los invitados, liderar los recorridos y bailes,
        y representar dignamente a su barrio, sección o comunidad durante toda la festividad. En la cultura istmeña, la reina también simboliza la abundancia, la
        generosidad y la continuidad de las tradiciones.
      </p>

      <div className="h-4" />
      <h2><strong>Los trajes de las reinas</strong></h2>
      <div className="h-4" />

      <p>
        El traje de una reina del Istmo es, sin exageración, una obra maestra de
        la artesanía textil. Se trata del traje más elaborado, más costoso y más
        espectacular que una mujer puede portar. Los trajes de reina se
        caracterizan por:
      </p>

      <div className="h-4" />
      <h2><strong>Huipil de gala bordado a mano</strong></h2>
      <div className="h-4" />
      <p>
        El huipil de la reina suele estar bordado completamente a mano, con
        diseños florales exuberantes que cubren casi toda la superficie de la
        tela. Los hilos pueden ser de seda, algodón fino o incluso hilos
        metálicos dorados y plateados. Los colores son vibrantes y armonizan con
        la enagua. Un huipil de reina puede tardar de tres a seis meses en
        elaborarse.
      </p>

      <div className="h-4" />
      <h2><strong>Enagua con olán de gala</strong></h2>
      <div className="h-4" />
      <p>
        La enagua de la reina lleva un olán especialmente elaborado, a menudo con
        encajes finos, bordados adicionales o aplicaciones que complementan el
        diseño del huipil. La tela suele ser de la más alta calidad: satín de
        seda, terciopelo o telas importadas. El vuelo de la enagua es generoso,
        creando un efecto majestuoso al caminar.
      </p>
      <div className="h-4" />
      <h2><strong>Accesorios y joyería</strong></h2>
      <div className="h-4" />

      <p>
        El traje de la reina se complementa con joyería de oro: cadenas gruesas,
        aretes largos, monedas de oro (ahogadores) y anillos. Estos accesorios no
        son solo decorativos; representan la prosperidad de la familia y son parte
        integral del atuendo ceremonial. Algunas reinas portan joyería que ha
        pasado de generación en generación.
      </p>
      <div className="h-4" />
      <h2><strong>Los peinados de las reinas</strong></h2>
      <div className="h-4" />

      <p>
        El peinado de una reina debe estar a la altura de su traje. Generalmente
        se opta por los estilos más elaborados:
      </p>

      <div className="h-4" />
      <h2><strong>Moño doble o abanico</strong></h2>
      <div className="h-4" />
      <p>
        Los peinados de reina suelen ser moños dobles o abanicos, que son los
        estilos más formales y espectaculares. Estos peinados requieren tiempo,
        habilidad y a menudo el uso de postizos para lograr el volumen necesario.
        La construcción del peinado puede tomar una o dos horas.
      </p>

      <div className="h-4" />
      <h2><strong>Flores abundantes</strong></h2>
      <div className="h-4" />
      <p>
        El peinado de la reina se adorna con una cantidad generosa de flores
        frescas, generalmente claveles rojos o rosas, complementados con pinitos
        y, en ocasiones, rosas. Las flores se distribuyen estratégicamente para
        enmarcar el rostro y dar volumen al peinado. La flor se coloca del lado
        correspondiente a su estado civil: derecho si es casada, izquierdo si es
        soltera.
      </p>

      <div className="h-4" />
      <h2><strong>El resplandor o bidaaniro'</strong></h2>
      <div className="h-4" />
      <p>
        En algunas celebraciones, especialmente las más solemnes, la reina puede
        portar el resplandor (bidaaniro' en zapoteco), esa prenda de encaje
        blanco o marfil que enmarca el rostro como un halo. El resplandor
        convierte a la reina en una imagen verdaderamente icónica y es el
        elemento más fotografiado del traje istmeño.
      </p>

      <div className="h-4" />
      <h2><strong>Una tradición que empodera</strong></h2>
      <div className="h-4" />

      <p>
        A diferencia de muchos concursos de belleza occidentales, la figura de la
        reina en el Istmo no se reduce a la apariencia física. Ser reina es un
        acto de liderazgo comunitario, de generosidad y de compromiso con la
        culture. Las reinas del Istmo son mujeres fuertes, orgullosas de su
        identidad, que asumen con alegría el papel de guardianas de una tradición
        centenaria. 
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default ReinasIstmoArticle;
