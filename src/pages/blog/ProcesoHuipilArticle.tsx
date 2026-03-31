import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "¿Huipil auténtico o imitación?", slug: "huipil-autentico-o-imitacion", tag: "Educación" },
  { title: "Detrás de la Puntada: Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Nuestras artesanas" },
  { title: "Guía de cuidado para tus prendas artesanales", slug: "cuidado-prendas-artesanales", tag: "Cuidado" },
];

const ProcesoHuipilArticle = () => (
  <React.Fragment>
    <SEOHead
      title="El Proceso Artesanal de un Huipil del Istmo | Flor Radiante"
      description="Descubre paso a paso cómo se elabora un huipil artesanal del Istmo de Tehuantepec, desde el diseño hasta el bordado."
      keywords="proceso huipil artesanal, bordado huipil istmeño, huipil hecho a mano,
      como se hace un huipil artesanal, proceso bordado huipil, elaboracion huipil Oaxaca, huipil hecho a mano proceso"
    />
    <BlogArticleLayout
      title="¿Por qué un huipil artesanal puede tardar semanas en elaborarse?"
      tag="Artesanía"
      metaDate="Publicado el 5 de marzo de 2026 · Lectura de 7 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Lista para invertir en una pieza única?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante, cada huipil es elaborado con el tiempo, los materiales y el
            cuidado que merece una obra de arte. Te acompañamos en el proceso de personalización
            para crear una prenda que será parte de tu historia por décadas.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/coleccion#huipiles"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Ver huipiles disponibles
            </Link>
            <WhatsAppButton
              variant="inline"
              label="Quiero personalizar mi huipil"
              message="Hola, leí el artículo sobre el proceso de elaboración del huipil y me gustaría personalizar una prenda. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        Cuando alguien ve el precio de un <strong>huipil bordado a mano</strong> por primera vez, es natural preguntarse: ¿por qué cuesta tanto? La respuesta está en el proceso. Detrás de cada huipil hay semanas —a veces meses— de trabajo dedicado, materiales de calidad y un conocimiento artesanal que se transmite de generación en generación.
      </p>
      <div className="h-4" />
      <h2><strong>El proceso paso a paso</strong></h2>
      <div className="h-4" />

      <h3><strong>1. Selección de la tela</strong></h3>
      <div className="h-4" />
      <p>
        Todo comienza con la elección del material base. Las artesanas seleccionan cuidadosamente la tela —terciopelo, satín o algodón— considerando la ocasión para la que se destinará el huipil, el tipo de bordado que llevará y las preferencias de la clienta. La calidad de la tela es fundamental: debe soportar el peso del bordado sin deformarse y mantener su aspecto durante años.
      </p>
      <div className="h-4" />
      <h3><strong>2. Diseño del patrón</strong></h3>
      <div className="h-4" />
      <p>
        Antes de la primera puntada, la artesana diseña o adapta el patrón de bordado. Aunque existen motivos tradicionales (flores, frutos, aves), cada huipil tiene variaciones únicas. La artesana dibuja o marca sobre la tela las líneas guía que definirán la composición. En los huipiles personalizados, este paso incluye consultas con la clienta para incorporar elementos específicos.
      </p>
      <div className="h-4" />
      <h3><strong>3. Preparación de materiales</strong></h3>
      <div className="h-4" />
      <p>
        Los hilos se seleccionan cuidadosamente por color, grosor y material. Los huipiles de gala pueden usar <strong>hilos de seda natural</strong>, que ofrecen un brillo y una textura incomparables pero requieren un manejo delicado. Los hilos de algodón mercerizado son más resistentes y se usan para piezas de uso frecuente. Cada color se elige para crear contrastes armoniosos sobre la tela base.
      </p>
      <div className="h-4" />
      <h3><strong>4. El bordado</strong></h3>
      <div className="h-4" />
      <p>
        Aquí es donde el tiempo realmente se invierte. Dependiendo de la técnica:
      </p>
      <ul>
        <li><strong>Bordado a máquina de pedal:</strong> La artesana guía la tela a mano libre bajo la aguja de una máquina de coser de pedal. Aunque más rápido que el bordado a mano, sigue siendo un proceso completamente artesanal que requiere años de experiencia para dominar. Un huipil bordado a máquina puede tardar de <strong>1 a 3 semanas</strong>.</li>
        <li><strong>Bordado a mano:</strong> Cada puntada es colocada individualmente con aguja e hilo. La artesana trabaja sección por sección, construyendo los motivos con una paciencia infinita. Un huipil bordado a mano puede tardar de <strong>3 a 6 meses</strong>, dependiendo de la complejidad del diseño.</li>
      </ul>
 
      <div className="h-4" />
      <h3><strong>5. Acabados y confección</strong></h3>
      <div className="h-4" />
      <p>
        Una vez completado el bordado, se procede a la confección final: unir las piezas, coser los bordes, añadir el cuello y los acabados. Cada costura se revisa para garantizar la durabilidad de la prenda. En los huipiles de mayor calidad, incluso los acabados interiores son impecables.
      </p>
      <div className="h-4" />
      <h3><strong>6. Control de calidad</strong></h3>
      <div className="h-4" />
      <p>
        Antes de entregar la prenda, se realiza una revisión detallada: se verifica la uniformidad del bordado, la firmeza de las costuras, la limpieza de los remates y la correcta caída de la tela. En <strong>Flor Radiante</strong>, este paso es fundamental porque cada prenda lleva nuestra reputación.
      </p>
      <div className="h-4" />
      <h2><strong>¿Por qué este tiempo se refleja en el precio?</strong></h2>
      <div className="h-4" />
      <p>
        Cuando compras un huipil artesanal, estás pagando por:
      </p>
      <ul>
        <li><strong>Horas de trabajo especializado:</strong> Un huipil bordado a mano puede requerir más de 500 horas de trabajo.</li>
        <li><strong>Materiales de calidad:</strong> Telas importadas, hilos de seda, algodón mercerizado.</li>
        <li><strong>Conocimiento ancestral:</strong> Técnicas que se han perfeccionado durante siglos y que no se aprenden en una academia.</li>
        <li><strong>Una pieza única:</strong> No hay dos huipiles idénticos. Cada uno tiene las variaciones naturales del trabajo hecho a mano.</li>
        <li><strong>Sustento para artesanas y sus familias:</strong> Tu compra apoya directamente la economía de las comunidades artesanales del Istmo.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>Una inversión, no un gasto</strong></h2>
      <div className="h-4" />
      <p>
        Un huipil artesanal bien cuidado puede durar <strong>décadas</strong>. Muchas familias istmeñas conservan huipiles que se heredan de madres a hijas, convirtiéndose en piezas de valor sentimental incalculable. No es una prenda de temporada: es una obra de arte textil que trasciende el tiempo.
      </p>

      <p>
        <em>Cada huipil no es solo una prenda. Es una obra de arte creada puntada por puntada por manos artesanas del Istmo.</em>
      </p>
      <div className="h-4" />
      <h2><strong>Encarga tu huipil personalizado</strong></h2>
      <div className="h-4" />
      <p>
        En <strong>Flor Radiante</strong>, cada prenda se elabora con el tiempo y el cuidado que merece. Escríbenos por WhatsApp, cuéntanos lo que imaginas y te guiamos en el proceso. Recuerda: la belleza artesanal no tiene atajos, pero el resultado vale cada momento de espera.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default ProcesoHuipilArticle;
