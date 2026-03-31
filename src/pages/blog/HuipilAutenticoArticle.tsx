import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Bordados que Hablan: El Significado de los Diseños Zapotecas", slug: "significado-bordados-zapotecas", tag: "Cultura" },
  { title: "Detrás de la Puntada: Conoce a las Artesanas", slug: "artesanas-flor-radiante", tag: "Nuestras artesanas" },
  { title: "Guía de cuidado para tus prendas artesanales", slug: "cuidado-prendas-artesanales", tag: "Cuidado" },
];

const HuipilAutenticoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Huipil Auténtico o Imitación: Cómo Identificar la Diferencia | Flor Radiante"
      description="Descubre cómo identificar un huipil auténtico del Istmo de Tehuantepec y evitar imitaciones industriales."
      keywords="huipil autentico, huipil original istmo, huipil bordado a mano,
      como saber si un huipil es autentico, huipil original vs copia, huipil bordado a mano diferencias, huipil artesanal verdadero"
    />
    <BlogArticleLayout
      title="¿Huipil auténtico o imitación? Claves para identificar la verdadera artesanía"
      tag="Educación"
      metaDate="Publicado el 4 de marzo de 2026 · Lectura de 7 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres un huipil auténtico hecho por artesanas del Istmo?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante trabajamos directamente con bordadoras de San Blas Atempa.
            Cada prenda tiene su historia y viene con la garantía de autenticidad.
            Conoce a nuestras artesanas o personaliza tu propio huipil.
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
              label="Quiero personalizar mi huipil"
              message="Hola, leí el artículo sobre cómo identificar un huipil auténtico y me gustaría personalizar una prenda auténtica. ¿Podrían asesorarme?"
            />
          </div>
        </div>
      }
    >
      <p>
        Con la creciente popularidad de la <strong>moda artesanal mexicana</strong>, también ha crecido el mercado de imitaciones industriales que se hacen pasar por prendas hechas a mano. Aprender a distinguir un <strong>huipil auténtico del Istmo</strong> de una copia es fundamental para valorar el trabajo artesanal, apoyar a las comunidades y asegurarte de que tu inversión sea genuina.
      </p>
      <div className="h-4" />
      <h2><strong>1. Observa el bordado de cerca</strong></h2>
      <div className="h-4" />
      <h3><strong>Huipil auténtico</strong></h3>
      <div className="h-4" />
      <ul>
        <li>Los bordados tienen <strong>irregularidades sutiles</strong>: pequeñas variaciones en el tamaño de las puntadas, en la tensión del hilo o en la dirección del trazo. Esto es señal de trabajo humano.</li>
        <li>En los bordados a máquina de pedal, se aprecia la <strong>textura y relieve</strong> de los hilos, con una densidad y riqueza que la impresión digital no puede replicar.</li>
        <li>Los bordados a mano tienen una <strong>complejidad tridimensional</strong>: puedes sentir las puntadas al pasar los dedos sobre la tela.</li>
      </ul>
      <div className="h-4" />
      <h3><strong>Imitación</strong></h3>
      <div className="h-4" />
      <ul>
        <li>Los diseños son <strong>perfectamente uniformes</strong> y repetitivos, señal de producción industrial.</li>
        <li>Los "bordados" pueden ser en realidad <strong>estampados digitales o sublimados</strong>: planos al tacto, sin relieve.</li>
        <li>Los hilos pueden ser de baja calidad, con colores que se ven artificiales o demasiado brillantes.</li>
      </ul>
      <div className="h-4" />
      <h2><strong>2. Examina la tela</strong></h2>
      <div className="h-4" />
      <p>
        Los huipiles auténticos utilizan <strong>telas de calidad</strong>: terciopelo real, satín de buena caída o algodón denso. Las imitaciones suelen usar telas sintéticas baratas que se sienten ásperas, rígidas o excesivamente brillantes.
      </p>
      <div className="h-4" />
      <h2><strong>3. Revisa el revés de la prenda</strong></h2>
      <div className="h-4" />
      <p>
        Esta es una de las pruebas más reveladoras. En un huipil bordado auténtico, el <strong>revés muestra los hilos del bordado</strong>: nudos, cruces de hilo y el recorrido de las puntadas. En una imitación estampada, el revés es liso o muestra solo una versión descolorida del diseño.
      </p>
      <div className="h-4" />
      <h2><strong>4. Pregunta por la artesana</strong></h2>
      <div className="h-4" />
      <p>
        Un vendedor legítimo de artesanía puede contarte <strong>quién hizo la prenda</strong>, de qué comunidad es, qué técnica utilizó y cuánto tiempo le tomó. Si el vendedor no puede (o no quiere) dar esta información, es una señal de alerta.
      </p>
      <div className="h-4" />
      <h2><strong>5. Considera el precio</strong></h2>
      <div className="h-4" />
      <p>
        Un huipil bordado a mano es el resultado de semanas o meses de trabajo experto. Si el precio parece <strong>demasiado bueno para ser verdad</strong>, probablemente no sea una pieza auténtica. Los precios justos reflejan el tiempo, la habilidad y los materiales invertidos.
      </p>
      <div className="h-4" />
      <h2><strong>6. Busca señales de personalización</strong></h2>
      <div className="h-4" />
      <p>
        Las prendas artesanales auténticas frecuentemente tienen <strong>detalles únicos</strong>: una flor diferente, una combinación de colores particular, un diseño que no encontrarás en otra pieza. Las imitaciones masivas, por definición, son todas iguales.
      </p>
      <div className="h-4" />
      <h2><strong>Compra con confianza</strong></h2>
      <div className="h-4" />
      <p>
        En <strong>Flor Radiante</strong>, cada prenda viene con la garantía de autenticidad. Trabajamos directamente con artesanas del Istmo de Tehuantepec y podemos contarte la historia de cada pieza. Además, ofrecemos la posibilidad de <strong>personalizar tu prenda</strong>, lo que garantiza que tu huipil será verdaderamente único.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default HuipilAutenticoArticle;
