import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Los Accesorios del Traje de Tehuana: Más Allá del Huipil", slug: "accesorios-traje-tehuana", tag: "Cultura" },
  { title: "La Guía Definitiva del Traje de Tehuana", slug: "guia-traje-tehuana", tag: "Guía completa" },
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
];

const JoyeriaIstmenaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="La Joyería Istmeña: Oro, Tradición y Elegancia | Flor Radiante"
      description="Conoce la joyería tradicional del Istmo de Tehuantepec: arracadas, torzales, cadenas y su significado cultural."
      keywords="joyeria istmeña, arracadas istmeñas, filigrana de oro oaxaca,
      joyeria istmeña Oaxaca, arracadas istmeñas oro, filigrana oaxaca joyeria, accesorios traje tehuana"
    />
    <BlogArticleLayout
      title="La Joyería Istmeña: Oro, Tradición y Elegancia"
      tag="Cultura"
      metaDate="Publicado el 5 de marzo de 2026 · Lectura de 9 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres completar tu traje con la joyería adecuada?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante te asesoramos para elegir las piezas de joyería istmeña
            que mejor complementen tu huipil, según la ocasión y tu estilo personal.
            Contáctanos para recibir orientación personalizada.
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
              label="Quiero asesoría para elegir joyería"
              message="Hola, leí el artículo sobre joyería istmeña y me gustaría recibir asesoría para elegir las piezas adecuadas para mi huipil. ¿Podrían ayudarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        El traje de tehuana no está completo sin su joyería. Las piezas de <strong>oro y filigrana</strong> que adornan a las mujeres del Istmo de Tehuantepec son mucho más que accesorios: son símbolos de identidad, estatus y herencia cultural que se transmiten de generación en generación.
      </p>
      <div className="h-4" />
      <h2><strong>Historia de la joyería en el Istmo</strong></h2>
      <div className="h-4" />
      <p>
        La tradición joyera del Istmo tiene raíces prehispánicas, pero fue durante la época colonial y el auge comercial del siglo XIX cuando floreció con fuerza. El Istmo de Tehuantepec, como punto estratégico de comercio entre el Pacífico y el Golfo, permitió que las mujeres zapotecas —comerciantes por excelencia— acumularan riqueza que invertían en joyas de oro. Estas piezas no solo eran adornos: representaban el patrimonio familiar y la posición social de quien las portaba.
      </p>
      <p>
        La técnica de <strong>filigrana</strong>, heredada de los orfebres españoles y adoptada magistralmente por los artesanos locales, se convirtió en el sello distintivo de la joyería istmeña. Consiste en entrelazar finísimos hilos de oro o plata para crear diseños de extraordinaria delicadeza.
      </p>
      <div className="h-4" />
      <h2><strong>Piezas emblemáticas de la joyería istmeña</strong></h2>
      <div className="h-4" />
      <div className="h-4" />
      <h3><strong>Arracadas</strong></h3>
      <div className="h-4" />
      <p>
        Los aretes tradicionales del Istmo son grandes, elaborados y llamativos. Las arracadas de filigrana pueden ser de media luna, de canasta o de diseños florales. Son la pieza más visible y reconocida de la joyería istmeña, enmarcando el rostro de la mujer tehuana con un brillo que capta todas las miradas.
      </p>
      <div className="h-4" />
      <h3><strong>Cadenas y torzales</strong></h3>
      <div className="h-4" />
      <p>
        Las cadenas de oro se usan en múltiples capas sobre el huipil. Los <strong>torzales</strong> son cadenas gruesas trenzadas que aportan volumen y presencia. En las fiestas de gala, una mujer puede llevar varias cadenas de distintos grosores, creando un efecto visual imponente.
      </p>
      <div className="h-4" />
      <h3><strong>Semanarios</strong></h3>
      <div className="h-4" />
      <p>
        Son conjuntos de siete pulseras —una por cada día de la semana— que se usan juntas en la muñeca. Elaborados en oro de filigrana, los semanarios son una de las piezas más codiciadas y representativas de la joyería istmeña. Su tintineo delicado acompaña cada movimiento de la mujer.
      </p>
      <div className="h-4" />
      <h3><strong>Dijes y medallas</strong></h3>
      <div className="h-4" />
      <p>
        Los dijes se cuelgan de las cadenas y pueden representar monedas antiguas, imágenes religiosas o motivos florales. Las <strong>medallas de oro</strong> con la imagen de la Virgen o santos patronos son especialmente populares y reflejan la profunda religiosidad de la región.
      </p>
      <div className="h-4" />
      <h3><strong>Pulseras y engarzados</strong></h3>
      <div className="h-4" />
      <p>
        Además de los semanarios, existen pulseras individuales con piedras engarzadas —corales, turquesas o perlas— que complementan el conjunto. Los engarzados combinan la filigrana con piedras preciosas o semipreciosas, añadiendo color y textura al atuendo.
      </p>
      <div className="h-4" />
      <h3><strong>Anillos</strong></h3>
      <div className="h-4" />
      <p>
        Los anillos de filigrana completan el ajuar joyero. Pueden ser sencillos o elaborados, y frecuentemente se usan varios a la vez en ambas manos, siguiendo la tradición de abundancia visual que caracteriza la vestimenta istmeña.
      </p>
      <div className="h-4" />
      <h2><strong>Cómo se combina la joyería con el traje de tehuana</strong></h2>
      <div className="h-4" />
      <p>
        La joyería no se elige al azar: cada ocasión dicta el nivel de elaboración y la cantidad de piezas que se portan.
      </p>
      <ul>
        <li><strong>Uso cotidiano:</strong> Arracadas sencillas, una cadena con dije y un par de pulseras. Elegancia discreta para el día a día.</li>
        <li><strong>Fiestas y velas:</strong> Múltiples cadenas con torzales, arracadas grandes de filigrana, semanarios y anillos. El conjunto completo resplandece bajo las luces de la celebración.</li>
        <li><strong>Bodas y ceremonias de gala:</strong> El ajuar completo: todas las cadenas de la familia, las arracadas más elaboradas, semanarios, anillos y dijes. Es la máxima expresión de la riqueza joyera familiar.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Cómo elegir la joyería perfecta para tu huipil</strong></h2>
      <div className="h-4" />
      <p>
        Si estás armando tu atuendo istmeño, considera estos consejos para elegir la joyería ideal:
      </p>
      <ul>
        <li><strong>Armoniza con los colores del bordado:</strong> Si tu huipil tiene tonos cálidos (rojos, naranjas, amarillos), el oro resaltará naturalmente. Con tonos fríos (azules, morados), la plata o el oro blanco pueden ser una alternativa elegante.</li>
        <li><strong>Considera la ocasión:</strong> Para un evento formal, invierte en piezas de filigrana auténtica. Para uso casual, las réplicas en chapa de oro ofrecen el mismo efecto visual.</li>
        <li><strong>Empieza con las arracadas:</strong> Si vas a adquirir tu primera pieza de joyería istmeña, las arracadas son la elección perfecta. Son la pieza más emblemática y transforman cualquier atuendo.</li>
        <li><strong>Construye tu colección gradualmente:</strong> No necesitas tener todas las piezas de una vez. Muchas familias van construyendo su ajuar joyero a lo largo de los años, pieza por pieza.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Un legado que brilla</strong></h2>
      <div className="h-4" />
      <p>
        La joyería istmeña es mucho más que ornamento: es historia, identidad y arte. Cada pieza de filigrana cuenta la historia de manos artesanas que dominan una técnica centenaria, y de mujeres que portan con orgullo el legado de sus ancestras.
      </p>
      <p>
        En <strong>Flor Radiante</strong>, entendemos que el traje de tehuana es un conjunto integral. Por eso, te asesoramos no solo en la elección de tu huipil, sino también en cómo complementarlo con la joyería adecuada para que tu atuendo sea perfecto de pies a cabeza.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default JoyeriaIstmenaArticle;
