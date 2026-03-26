import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

const related = [
  { title: "La Guelaguetza y el protagonismo del traje istmeño", slug: "guelaguetza-traje-istmeno", tag: "Cultura" },
  { title: "Los Accesorios del Traje de Tehuana", slug: "accesorios-traje-tehuana", tag: "Cultura" },
  { title: "La Joyería Istmeña: Oro, Tradición y Elegancia", slug: "joyeria-istmena", tag: "Cultura" },
];

const VelasIstmenasArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Las Velas Istmeñas: Fiestas y Tradición del Istmo | Flor Radiante"
      description="Conoce las velas istmeñas, celebraciones tradicionales del Istmo de Tehuantepec llenas de música, cultura y vestimenta típica."
      keywords="velas istmeñas, fiestas istmo de tehuantepec, tradiciones zapotecas,
      velas istmeñas Oaxaca, fiestas Istmo de Tehuantepec, tradiciones zapotecas velas, traje istmeño fiestas"
    />
    <BlogArticleLayout
      title="Velas Istmeñas: Tradición, Fiesta y Elegancia"
      tag="Cultura"
      metaDate="Publicado el 5 de marzo de 2026 · Lectura de 9 min"
      related={related}
    >
      <p>
        Si hay una celebración que define la vida social del Istmo de Tehuantepec, son las <strong>velas</strong>. Estas fiestas patronales, únicas en México, son el escenario donde el traje de tehuana cobra su máximo esplendor y donde la comunidad zapoteca celebra su identidad con música, danza y una elegancia deslumbrante.
      </p>

      <h2>¿Qué son las velas istmeñas?</h2>
      <p>
        Las velas son fiestas comunitarias que se celebran en honor a los santos patronos de cada barrio, gremio o comunidad del Istmo. Su nombre proviene de las <strong>velas de cera</strong> que se encendían originalmente como ofrenda religiosa. Con el tiempo, las velas evolucionaron hasta convertirse en las celebraciones más importantes de la región, combinando la devoción religiosa con la fiesta popular.
      </p>
      <p>
        Cada comunidad del Istmo tiene sus propias velas a lo largo del año. Las más conocidas son las de Juchitán, Tehuantepec, San Blas Atempa e Ixtepec, pero prácticamente cada pueblo y barrio celebra la suya. La temporada de velas se intensifica entre mayo y septiembre, convirtiendo al Istmo en una fiesta continua.
      </p>

      <h2>¿Cómo se celebran?</h2>
      <p>
        Una vela típica sigue un formato que combina lo sagrado y lo festivo:
      </p>
      <ul>
        <li><strong>La lavada de ollas:</strong> Días antes de la vela principal, se celebra una reunión donde se preparan los alimentos y se «lavan» los utensilios ceremoniales con mezcal y música.</li>
        <li><strong>La misa:</strong> La vela comienza con una ceremonia religiosa en honor al santo patrono.</li>
        <li><strong>La calenda:</strong> Un desfile nocturno por las calles del pueblo, donde las mujeres portan velas adornadas con flores y caminan al ritmo de la banda de música.</li>
        <li><strong>El baile:</strong> La fiesta central, que puede durar toda la noche. Las mujeres lucen sus mejores trajes de tehuana y danzan el tradicional <em>son istmeño</em>.</li>
        <li><strong>La tirada de frutas:</strong> Durante el baile, las mayordomas (organizadoras de la vela) lanzan frutas, dulces y regalos a los asistentes como símbolo de abundancia y generosidad.</li>
      </ul>

      <h2>¿Qué vestimenta se usa en las velas?</h2>
      <p>
        Las velas son la ocasión por excelencia para lucir el traje de tehuana en todo su esplendor. Sin embargo, no todas las velas requieren el mismo nivel de formalidad.
      </p>

      <h3>Traje de gala</h3>
      <p>
        Para las velas principales y los bailes formales, las mujeres visten su <strong>traje de gala completo</strong>:
      </p>
      <ul>
        <li>Huipil de terciopelo bordado a mano con hilos de seda o metálicos.</li>
        <li>Enagua con holán bordado a juego.</li>
        <li>Refajo almidonado para dar volumen.</li>
        <li>Joyería completa: arracadas de filigrana, múltiples cadenas de oro, torsales, semanarios y anillos.</li>
        <li>Tocado floral con flores naturales.</li>
        <li>Trenzas adornadas con listones de seda.</li>
      </ul>
      <p>
        El traje de gala es la máxima expresión de la indumentaria istmeña. Cada pieza es seleccionada cuidadosamente y el conjunto puede representar años de trabajo artesanal y una inversión significativa en joyería.
      </p>

      <h3>Traje sencillo o de diario</h3>
      <p>
        Para las velas más informales, las reuniones previas o las lavadas de ollas, se usa un <strong>traje más sencillo</strong>:
      </p>
      <ul>
        <li>Huipil de algodón o satín con bordado a máquina.</li>
        <li>Enagua lisa o con holán sencillo.</li>
        <li>Joyería discreta: arracadas pequeñas y una cadena.</li>
        <li>Peinado con trenzas y listones, sin tocado floral elaborado.</li>
      </ul>
      <p>
        Aunque más sobrio, el traje sencillo mantiene la elegancia y el estilo que caracterizan a la mujer istmeña.
      </p>

      <h2>Las velas de mayo: la temporada se acerca</h2>
      <p>
        Con la llegada de mayo comienza una de las temporadas más intensas de velas en el Istmo. Es el momento perfecto para preparar tu atuendo: elegir el huipil, coordinar la enagua, pulir la joyería y seleccionar las flores para el tocado. La anticipación es parte de la fiesta.
      </p>

      <h2>Prepara tu traje para la próxima vela</h2>
      <p>
        En <strong>Flor Radiante</strong>, sabemos que cada vela es especial y merece un traje a la altura. Te ayudamos a crear tu huipil personalizado, con los colores, el diseño y la técnica de bordado que mejor se adapten a la ocasión. Escríbenos por WhatsApp con tiempo y te acompañamos en cada paso del proceso.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default VelasIstmenasArticle;
