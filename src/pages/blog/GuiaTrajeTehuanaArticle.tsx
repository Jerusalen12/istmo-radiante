import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
  { title: "Traje de Istmo para bodas", slug: "traje-istmo-bodas", tag: "Bodas" },
];

const GuiaTrajeTehuanaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Guía del Traje de Tehuana: Historia, Piezas y Significado | Flor Radiante"
      description="Descubre la guía completa del traje de tehuana: huipil, enagua, refajo, joyería istmeña y su importancia cultural en el Istmo de Tehuantepec."
      keywords="traje de tehuana, traje istmeño, huipil tehuano, cultura zapoteca, vestimenta tradicional Oaxaca,
      traje de tehuana completo, partes del traje istmeño, huipil tehuano significado, vestimenta tradicional Oaxaca mujer"
    />
    <BlogArticleLayout
      title="La Guía Definitiva del Traje de Tehuana: Huipil, Enagua y Refajo"
      tag="Guía completa"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 12 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Lista para encontrar tu traje de tehuana ideal?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante te ayudamos a elegir las piezas que mejor se adapten a ti.
            Personalizamos huipiles, enaguas y refajos con los colores, bordados y medidas que desees.
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
              label="Pedir asesoría personalizada"
              message="Hola, leí la guía del traje de tehuana y me gustaría recibir asesoría para elegir o personalizar mi prenda. ¿Podrían ayudarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        El <strong>traje de tehuana</strong> es una de las expresiones más emblemáticas de la identidad cultural mexicana. Originario del <strong>Istmo de Tehuantepec, Oaxaca</strong>, este conjunto es mucho más que indumentaria: es un símbolo de orgullo, feminidad y resistencia de las mujeres zapotecas.
      </p>
      <div className="h-4" />
      <h2><strong>¿Qué es el traje de tehuana?</strong></h2>
      <div className="h-4" />
      <p>
        El traje de tehuana es el nombre que recibe la indumentaria tradicional de las mujeres del Istmo de Tehuantepec. Se compone de tres piezas principales: el <strong>huipil</strong>, la <strong>enagua</strong> y el <strong>refajo</strong>. Cada una cumple una función estética, cultural y práctica dentro del conjunto.
      </p>
      <p>
        A lo largo de la historia, el traje ha evolucionado incorporando influencias europeas y asiáticas —como las telas de terciopelo y los hilos de seda— sin perder su esencia zapoteca. Hoy, es considerado <strong>Patrimonio Cultural Inmaterial</strong> y es utilizado tanto en celebraciones tradicionales como en la vida cotidiana de muchas mujeres istmeñas.
      </p>
      <div className="h-4" />
      <h2><strong>El Huipil: La pieza central</strong></h2>
      <div className="h-4" />
      <p>
        El <strong>huipil istmeño</strong> es la blusa o parte superior del traje. Se distingue por sus bordados exuberantes, que cubren la totalidad de la tela con motivos florales, frutales y geométricos. Los diseños no son meramente decorativos: cada flor, cada forma y cada color tiene un significado ligado a la cosmovisión zapoteca.
        <div className="h-4" />
      </p>
      <h2><strong>Tipos de huipil según la ocasión</strong></h2>
      <div className="h-4" />
      <ul>
        <li><strong>Huipil de gala (bordado a máquina o a mano):</strong> Utilizado en festividades como las velas istmeñas, bodas y la Guelaguetza. Los más elaborados pueden tardar meses en completarse y alcanzar un valor considerable.</li>
        <li><strong>Huipil de diario:</strong> Más sencillo, con bordados menos densos, pensado para el uso cotidiano.</li>
        <li><strong>Huipil de luto:</strong> Tradicionalmente en tonos oscuros, con bordados en negro o morado sobre fondo oscuro.</li>
        <li><strong>Huipil de novia:</strong> Generalmente en blanco o marfil, con bordados en hilos dorados o plateados, acompañado de accesorios especiales.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Técnicas de bordado</strong></h2>
      <div className="h-4" />
      <p>
        Los huipiles se bordan principalmente con dos técnicas: <strong>a máquina</strong> (con máquinas de pedal, guiadas artesanalmente por la bordadora) y <strong>a mano</strong> (punto de cruz, punto de cadeneta). Un huipil bordado a mano puede requerir de 3 a 8 meses de trabajo continuo, dependiendo de la complejidad del diseño.
      </p>
      <div className="h-4" />
      <h2><strong>La Enagua: Vuelo y tradición</strong></h2>
      <div className="h-4" />
      <p>
        La <strong>enagua istmeña</strong> es la falda exterior del traje. Se caracteriza por su amplitud, su vuelo y sus bordados o estampados en la parte inferior, conocidos como <em>holán</em>. Las enaguas de gala suelen estar confeccionadas en terciopelo, satín o telas de alta calidad, con bordados que hacen juego con el huipil.
      </p>
      <div className="h-4" />
      <h2><strong>Variantes de la enagua</strong></h2>
      <div className="h-4" />
      <ul>
        <li><strong>Enagua de holán:</strong> Con un volante amplio en la parte inferior, decorado con encajes, bordados o listones.</li>
        <li><strong>Enagua rabona:</strong> Más corta, utilizada en contextos de trabajo o en la vida diaria.</li>
        <li><strong>Enagua de gala:</strong> Confeccionada en terciopelo, con bordados densos que complementan el huipil.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>El Refajo: La base invisible</strong></h2>
      <div className="h-4" />
      <p>
        El <strong>refajo</strong> es la falda interior, una pieza que muchas veces pasa desapercibida pero que es esencial para la silueta del traje. Proporciona estructura y volumen a la enagua, además de proteger la tela exterior. Los refajos tradicionales están confeccionados en algodón almidonado y pueden llevar bordados en la orilla inferior.
      </p>
      <div className="h-4" />
      <h2><strong>Accesorios que completan el traje</strong></h2>
      <div className="h-4" />
      <ul>
        <li><strong>El resplandor (huipil grande):</strong> Una pieza ceremonial colocada sobre la cabeza, especialmente en bodas y fiestas de gran importancia.</li>
        <li><strong>Joyería:</strong> Collares de monedas de oro, aretes de filigrana oaxaqueña y cadenas de oro son el complemento tradicional.</li>
        <li><strong>Trenzas y tocados:</strong> El peinado es parte integral del atuendo, con trenzas adornadas con listones y flores.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>¿Cómo se usa el traje en la actualidad?</strong></h2>
      <div className="h-4" />
      <p>
        Lejos de ser una pieza de museo, el traje de tehuana sigue vivo. Las mujeres del Istmo lo usan en su vida diaria, en celebraciones y en eventos culturales. Además, diseñadores contemporáneos y amantes de la moda mexicana han encontrado formas de integrar estas prendas en contextos urbanos, combinando huipiles con prendas modernas para crear looks únicos que honran la tradición.
      </p>
      <div className="h-4" />
      <h2><strong>¿Dónde comprar un traje de tehuana auténtico?</strong></h2>
      <div className="h-4" />
      <p>
        En <strong>Flor Radiante</strong> ofrecemos huipiles, enaguas y refajos confeccionados por artesanas del Istmo de Tehuantepec, con la posibilidad de <strong>personalizar cada prenda</strong> según tus medidas, colores y la ocasión. Ya sea para una boda, una vela istmeña o para lucirlo con orgullo en tu día a día, te acompañamos en todo el proceso.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default GuiaTrajeTehuanaArticle;
