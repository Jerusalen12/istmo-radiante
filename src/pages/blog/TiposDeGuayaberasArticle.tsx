import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Tipos de Trajes del Istmo", slug: "tipos-trajes-istmo", tag: "Guía completa" },
  { title: "Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Cultura" },
  { title: "Diferencias entre Enagua y Rabona", slug: "diferencias-enagua-rabona", tag: "Guía" },
];

const TiposDeGuayaberasArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Guayaberas | Tradición del Istmo"
      description="¿Buscas guayaberas istmeñas? Conoce los talleres artesanales de San Blas Atempa donde mujeres zapotecas bordan a mano cada prenda. Tradición, calidad y envíos a toda la República."
      keywords="guayabera istmeña, guayabera del Istmo, guayabera de Tehuantepec, guayabera oaxaqueña, guayabera artesanal istmo, guayabera bordada a mano por artesanas del istmo, 
      guayabera zapoteca, guayabera con bordado istmeño, bordado istmeño, artesanas zapotecas del Istmo, mujeres bordadoras del Istmo, bordado tradicional de Tehuantepec, guayabera de Juchitán, 
      textiles del Istmo Oaxaca, trabajo artesanal zapoteca"
    /> 
    <BlogArticleLayout
      title="Tipos de Guayaberas: La Guía Completa para el Hombre del Istmo"
      tag="Moda masculina"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Buscas la guayabera perfecta?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante también vestimos a los caballeros. Consulta nuestra
            selección de guayaberas y encuentra la ideal para tu próximo evento.
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
        Cuando hablamos de la vestimenta tradicional del Istmo, la atención suele centrarse en el traje de tehuana. Pero los hombres del Istmo también
        tienen una prenda emblemática: la guayabera. En este artículo te contamos todo sobre los diferentes tipos de guayaberas y cómo elegir la tuya.
      </p>
      <div className="h-4" />
      <h2><strong>¿Qué es una guayabera?</strong></h2>
      <div className="h-4" />

      <p>
        La guayabera es una camisa de corte recto, generalmente de manga larga o corta, que se caracteriza por sus alforzas verticales (pliegues finos
        cosidos en el frente y la espalda), sus bolsillos frontales —generalmente cuatro— y su diseño pensado para usarse por fuera del pantalón. Es una
        prenda fresca, elegante y que se adapta tanto a ocasiones formales como casuales.
      </p>
      
      <div className="h-4" />
      <h2><strong>Guayabera clásica o tradicional</strong></h2>
      <div className="h-4" />

      <p>
        La guayabera clásica es la más reconocible. Se confecciona en telas de algodón o lino, en colores claros —blanco, crema, beige— y presenta las
        alforzas y bolsillos tradicionales. Es la guayabera que todo hombre del Istmo tiene en su guardarropa. Se usa para fiestas, bodas, velas y
        cualquier evento formal.
      </p>
      
      <div className="h-4" />
      <h2><strong>Guayabera de lino</strong></h2>
      <div className="h-4" />

      <p>
        El lino es el material premium para las guayaberas. Una guayabera de lino tiene una caída natural, transpira mejor que cualquier otra tela y
        adquiere un aspecto ligeramente arrugado que, lejos de verse descuidado, le da un carácter distinguido. Las guayaberas de lino son más costosas
        pero su durabilidad y elegancia las convierten en una inversión. Son la elección predilecta para bodas y eventos de gala.
      </p>
      
      <div className="h-4" />
      <h2><strong>Guayabera de algodón</strong></h2>
      <div className="h-4" />

    <p>
      La guayabera de algodón es la más versátil y accesible. Se mantiene fresca en el calor del Istmo, es fácil de lavar y planchar, y viene en
      una gran variedad de colores. Es perfecta tanto para el uso cotidiano como para eventos semiformales. Las guayaberas de algodón de buena
      calidad tienen un acabado suave y una estructura que mantiene su forma a lo largo del día.
    </p>

    <div className="h-4" />
    <h2><strong>Guayabera bordada o con aplicaciones</strong></h2>
    <div className="h-4" />

    <p>
      Para quienes buscan algo más elaborado, existen guayaberas con bordados o aplicaciones decorativas. Estos bordados pueden ser discretos —líneas
      o motivos pequeños en el mismo tono de la tela— o llamativos, con flores y diseños que dialogan con la estética del traje de tehuana. Las
      guayaberas bordadas son una forma de que el hombre del Istmo lleve también el arte textil de su región.
    </p>
    <div className="h-4" />
    <h2><strong>Guayabera de manga corta vs. manga larga</strong></h2>
    <div className="h-4" />

    <p>
      La elección entre manga corta y manga larga depende de la formalidad del evento y la preferencia personal:
    </p>
    <ul>
      <li>
        <strong>Manga larga:</strong> Es la opción más formal. Se usa en bodas, velas importantes y eventos de gala. La manga larga puede llevarse
        completamente extendida o con un doblez casual en el puño.
      </li>
      <li>
        <strong>Manga corta:</strong> Es más casual y práctica, ideal para el calor del Istmo. Se usa en fiestas menos formales, reuniones familiares
        y para el día a día. Aunque es menos ceremonial, una guayabera de manga corta bien confeccionada sigue siendo una prenda elegante.
      </li>
    </ul>
    <div className="h-4" />
    <h2><strong>Colores y tendencias</strong></h2>
    <div className="h-4" />

    <p>
      Tradicionalmente, las guayaberas del Istmo son de colores claros: blanco, crema, beige y celeste. Sin embargo, las tendencias actuales han ampliado
      la paleta. Hoy es común ver guayaberas en tonos pastel —rosa, lavanda, verde menta— e incluso en colores oscuros como azul marino, negro o gris
      para eventos nocturnos. La clave es que el color armonice con el traje de la pareja y con la ocasión.
    </p>
    <div className="h-4" />
    <h2><strong>¿Cómo elegir tu guayabera?</strong></h2>
    <div className="h-4" />

    <p>
      Al elegir una guayabera, considera estos factores:
    </p>
    <ul>
      <li>
        <strong>Ocasión:</strong> Formal (lino, manga larga, blanca) o casual (algodón, manga corta, colores).
      </li>
      <li>
        <strong>Talla:</strong> La guayabera debe quedar holgada pero no grande. Debe permitir movimiento sin verse como una bolsa.
      </li>
      <li>
        <strong>Tela:</strong> Lino para máxima elegancia, algodón para versatilidad, mezclas para practicidad.
      </li>
      <li>
        <strong>Largo:</strong> Debe cubrir la cintura del pantalón sin llegar
        demasiado abajo. Se usa por fuera, nunca fajada.
      </li>
    </ul>

    <div className="h-4" />
    <h2><strong>Orgullo que se lleva puesto</strong></h2>
    <div className="h-4" />

    <p>
      Para el hombre del Istmo, la guayabera es más que una camisa: es una declaración de pertenencia. Así como la mujer porta con orgullo su huipil
      y su enagua, el hombre viste su guayabera como un símbolo de su identidad regional. En cada vela, en cada fiesta, en cada celebración familiar, la
      guayabera está presente, recordándonos que la elegancia del Istmo no es exclusiva de las mujeres.
    </p>


    
    </BlogArticleLayout>
  </React.Fragment>
);

export default TiposDeGuayaberasArticle;
