import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Tipos de Trajes del Istmo", slug: "tipos-trajes-istmo", tag: "Guía completa" },
  { title: "Costumbres de las Reinas en el Istmo", slug: "reinas-istmo", tag: "Cultura" },
  { title: "¿Cómo elegir tu huipil perfecto?", slug: "como-elegir-huipil", tag: "Guía de compra" },
];

const DiferenciasEnaguaRabonaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="Enagua vs Rabona | Vestimenta del Istmo de Tehuantepec"
      description="Descubre las diferencias entre la enagua y la rabona, dos prendas tradicionales del Istmo de Tehuantepec. Conoce su significado, uso y el valor cultural dentro de la vestimenta zapoteca."
      keywords="enagua istmeña, rabona istmeña, diferencia entre enagua y rabona, vestimenta del Istmo de Tehuantepec, traje típico zapoteca, ropa tradicional oaxaqueña, 
      enagua de Tehuantepec, rabona de Tehuantepec, indumentaria istmeña, cultura zapoteca vestimenta, textiles del Istmo Oaxaca, tradición oaxaqueña ropa, traje regional Oaxaca"
    />
    <BlogArticleLayout
      title="Diferencias entre Enagua y Rabona: ¿Cuál es Cuál y Para Qué Ocasión?"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      tag="Guía"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Necesitas una enagua o una rabona para tu próximo evento?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante tenemos ambos estilos, elaborados por artesanas del
            Istmo. Encuentra la prenda perfecta para cada ocasión.
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
        Cuando hablamos del traje de tehuana, la parte inferior es tan importante como el huipil. Sin embargo, existe una confusión común: ¿qué diferencia
        hay entre una enagua y una rabona? Aunque ambas son faldas largas que forman parte del traje istmeño, tienen características distintas que las
        hacen apropiadas para diferentes ocasiones. Te lo explicamos a detalle.
      </p>

      <div className="h-4" />
      <h2><strong>¿Qué es la Enagua?</strong></h2>
      <div className="h-4" />

      <p>
        La enagua es la falda de gala del traje istmeño. Su característica principal es que lleva un olán pegado en la parte inferior: una franja de
        tela —generalmente de encaje — que se cose al borde de la falda y le da un vuelo y una elegancia especiales.
        Este distingue visualmente a la enagua y lo que la convierte en una prenda de mayor formalidad. Este puede ser
        en un tono contrastante, y a menudo está decorado con aplicaciones o encajes finos. 
      </p>
      <div className="h-4" />
      <h2><strong>¿Cuándo se usa la enagua?</strong></h2>
      <div className="h-4" />

      <p>
        La enagua se reserva para las ocasiones más importantes y formales:
      </p>
      <ul>
        <li>Velas y fiestas patronales</li>
        <li>Bodas y pedidas de mano</li>
        <li>Mayordomías</li>
        <li>Eventos culturales de gala</li>
        <li>Celebraciones donde se porta el traje completo de tehuana</li>
      </ul>
      <p>
        La enagua es sinónimo de celebración. Cuando una mujer del Istmo se pone su enagua, es porque la ocasión lo amerita. El olán añade ese toque de
        esplendor que eleva el traje de hermoso a espectacular.
      </p>

      <div className="h-4" />
      <h2><strong>Tipos de Enagua</strong></h2>
      <div className="h-4" />

      <p>
        Dentro de las enaguas existen variantes según el tipo de olán y su elaboración. Algunas llevan olanes de encaje importado, otras de tela
        plisada artesanalmente, y las más lujosas pueden tener olanes bordados a mano que complementan el diseño del huipil. La elección del olán es una
        decisión estética importante que define el carácter de la enagua.
      </p>

      <div className="h-4" />
      <h2><strong>¿Qué es la Rabona?</strong></h2>
      <div className="h-4" />

      <p>
        La rabona, en cambio, es una falda confeccionada de una sola pieza de tela, sin olán añadido. La tela corre completa desde la cintura hasta el
        borde inferior, sin cortes ni adiciones. Esto le da un aspecto más limpio, sencillo y uniforme. Aunque la rabona es elegante —puede estar hecha de telas finas como satín,
        terciopelo o algodón de buena calidad—, su estilo es menos formal que el de la enagua. La ausencia del olán la hace más sobria y práctica, sin
        restarle belleza.
      </p>

      <div className="h-4" />
      <h2><strong>¿Cuando se usa la Rabona?</strong></h2>
      <div className="h-4" />

      <p>
        La rabona es más versátil y se utiliza en una variedad más amplia de
        situaciones:
      </p>
      <ul>
        <li>Uso cotidiano y diario</li>
        <li>Reuniones familiares</li>
        <li>Eventos semiformales</li>
        <li>El mercado y la vida diaria en comunidades donde se sigue usando el traje tradicional</li>
        <li>Ocasiones donde se quiere lucir el traje sin la formalidad completa de gala</li>
      </ul>
      <p>
        La rabona es la compañera del día a día. Es elegante pero no pretenciosa, cómoda pero con presencia. Muchas mujeres del Istmo tienen varias rabonas
        en su guardarropa para distintos usos cotidianos.
      </p>

      <div className="h-4" />
      <h2><strong>Tipos de Rabona</strong></h2>
      <div className="h-4" />

      <p>
        Las rabonas también varían según la tela y el acabado. Las hay de algodón para el uso más cotidiano, de satín para ocasiones un poco más especiales,
        y de terciopelo para cuando se quiere un toque de elegancia sin llegar a la formalidad de la enagua con olán. Algunas rabonas llevan bordados
        sutiles en el borde inferior que les añaden un detalle decorativo sin romper su esencia sencilla.
      </p>

      <div className="h-4" />
      <h2><strong>Comparación Rápida</strong></h2>
      <div className="h-4" />


      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Enagua</th>
            <th>Rabona</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Olán</td>
            <td>Sí, lleva olán pegado</td>
            <td>No, tela completa sin olán</td>
          </tr>
          <tr>
            <td>Formalidad</td>
            <td>Alta, es prenda de gala</td>
            <td>Media, elegante pero menos formal</td>
          </tr>
          <tr>
            <td>Ocasión</td>
            <td>Fiestas, velas, bodas</td>
            <td>Diario, reuniones, semiformal</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Generalmente más alto por el olán y acabados</td>
            <td>Más accesible</td>
          </tr>
          <tr>
            <td>Movimiento</td>
            <td>Mayor vuelo por el olán</td>
            <td>Caída más recta y uniforme</td>
          </tr>
        </tbody>
      </table>

      

      
    </BlogArticleLayout>
  </React.Fragment>
);

export default DiferenciasEnaguaRabonaArticle;
