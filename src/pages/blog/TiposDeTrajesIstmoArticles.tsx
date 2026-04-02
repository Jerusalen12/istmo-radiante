import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Tipos de Trenzas del Istmo de Tehuantepec", slug: "tipos-trenzas-istmo", tag: "Cultura" },
  { title: "Diferencias entre Enagua y Rabona", slug: "diferencias-enagua-rabona", tag: "Guía" },
  { title: "Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Cultura" },
];

const TiposDeTrajesIstmoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Tipos de trajes del Istmo | Vestimenta tradicional zapoteca"
      description="Conoce los diferentes tipos de trajes del Istmo de Tehuantepec, desde el huipil y la enagua hasta la rabona. Descubre su significado, características y valor cultural dentro de la tradición zapoteca."
      keywords="tipos de trajes del Istmo, tipos de trajes san blas atempa, vestimenta istmeña, huipil istmeño, enagua istmeña, rabona istmeña, traje de Tehuantepec, traje típico istmo, ropa tradicional del istmo, 
      Istmo de Tehuantepec, cultura zapoteca vestimenta, traje regional istmo, vestimenta tradicional mujer istmeña, velas istmeñas,traje istmeño para bodas, traje istmeño para fiestas, traje istmeño para mayordomías, traje istmeño para eventos, traje istmeño artesanal, traje istmeño hecho a mano"
    />
    <BlogArticleLayout
      title="Tipos de Trajes del Istmo: Bordados, Tejidos, Cadenilla y Flor en Medio"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      tag="Guía completa"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Buscas un traje auténtico del Istmo?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante trabajamos cada técnica con artesanas expertas.
            Encuentra el traje perfecto para tu ocasión o solicita uno personalizado.
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
      <p>
        El traje de tehuana es mucho más que una prenda: es una obra de arte portátil que refleja siglos de tradición, creatividad y orgullo cultural.
        Pero no todos los trajes son iguales. Existen diferentes técnicas de elaboración que definen el estilo, la textura, el precio y la ocasión de
        uso de cada pieza.
      </p>

      <div className="h-4" />
      <h2><strong>Trajes Bordados a Mano</strong></h2>
      <div className="h-4" />

      <p>
        Estos trajes se consideran los más formales y elegantes. Son los que se utilizan en bodas, velas, mayordomías.
        El bordado a mano es la técnica más valorada y antigua. La artesana trabaja puntada por puntada directamente sobre la tela, creando diseños
        florales, geométricos o figurativos con una precisión asombrosa. 
      </p>
      <p>
        Los hilos utilizados pueden ser de algodón, seda o incluso hilos metálicos para las piezas más lujosas. El bordado a mano permite una
        libertad creativa enorme: cada artesana imprime su estilo personal en los motivos, los colores y las combinaciones. Por eso, no existen dos trajes
        bordados a mano exactamente iguales.
      </p>

      <div className="h-4" />
      <h2><strong>Trajes Tejidos a Mano</strong></h2>
      <div className="h-4" /> 

      <p>
        El tejido a mano es otra técnica ancestral que produce telas con texturas y patrones únicos. En el tejido los motivos se crean durante la
        fabricación misma de la tela, entrelazando hilos de diferentes colores en
        el telar.
      </p>
      <p>
        Los trajes tejidos a mano tienen una cualidad táctil especial: la tela tiene cuerpo, peso y una caída característica que no se logra con telas
        industriales. Los diseños suelen ser geométricos —rombos, grecas— que son propios de la tradición.
      </p>
      <p>
        Esta técnica requiere un dominio profundo del telar de cintura o del telar de pedal. Las tejedoras del Istmo son guardianas de un conocimiento que se
        remonta a la época prehispánica.
      </p>

      <div className="h-4" />
      <h2><strong>Trajes de Costura de Cadenilla</strong></h2>
      <div className="h-4" />

      <p>
        La costura de cadenilla es una técnica que utiliza una máquina de coser especial para crear un punto de cadena que forma los diseños sobre la tela.
        Aunque se usa una máquina, el proceso sigue siendo artesanal: la bordadora guía la tela libremente con las manos, dibujando los motivos sin patrón
        previo marcado, lo que requiere una habilidad y pulso extraordinarios.
      </p>
      <p>
        Sse distinguen por sus líneas fluidas y continuas que crean diseños florales exuberantes. La cadena le da a los motivos un
        relieve y una textura característica que se aprecia tanto a la vista como al tacto. Los colores suelen ser vibrantes y contrastantes, con fondos
        oscuros —negro, azul marino, vino— que hacen resaltar las flores.
      </p>


      <div className="h-4" />
      <h2><strong>Trajes de Flor en Medio</strong></h2>
      <div className="h-4" />

      <p>
        El estilo "flor en medio" se refiere a un diseño específico donde el motivo principal —generalmente una flor grande y elaborada— se coloca en
        el centro del huipil, ocupando un lugar protagónico en el pecho. Alrededor de esta flor central se despliegan hojas, tallos y flores más pequeñas que
        complementan la composición.
      </p>
      <p>
        Este diseño es especialmente impactante porque crea un punto focal que atrae la mirada. La flor central suele ser una rosa, una margarita, un
        girasol o una flor de la región, y su tamaño y detalle pueden ser verdaderamente impresionantes. Algunos diseños de flor en medio incluyen
        pétalos que parecen tridimensionales gracias al uso magistral de sombras con diferentes tonos de hilo.
      </p>

      <div className="h-4" />
      <h2><strong>¿Cómo elegir el tipo de traje adecuado?</strong></h2>
      <div className="h-4" />

      <p>
        La elección del tipo de traje depende de varios factores: la ocasión, tu presupuesto, el tiempo disponible y tu gusto personal. Los trajes bordados
        a mano son ideales para eventos de máxima importancia. Los tejidos a mano son perfectos si valoras la conexión con las técnicas ancestrales. Los de
        cadenilla ofrecen una excelente relación entre belleza, autenticidad y precio. Y los de flor en medio son para quienes quieren un diseño
        impactante y centrado.
      </p>

      <div className="h-4" />
      <p>
        Sea cual sea tu elección, en Flor Radiante cada traje es elaborado por artesanas del Istmo que dominan su técnica y ponen su corazón en cada
        puntada.
      </p>
      <div className="h-4" />
    </BlogArticleLayout>
  </React.Fragment>
);

export default TiposDeTrajesIstmoArticle;
