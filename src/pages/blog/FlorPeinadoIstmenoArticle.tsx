import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const related = [
  { title: "Tipos de Trenzas del Istmo de Tehuantepec", slug: "tipos-trenzas-istmo", tag: "Cultura" },
  { title: "Costumbres de las Reinas en el Istmo", slug: "reinas-istmo", tag: "Cultura" },
  { title: "Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Cultura" },
];

const FlorPeinadoIstmenoArticle = () => (
  <React.Fragment>
    <SEOHead
      title="¿De qué lado va la flor? | Peinado istmeño tradicional"
      description="Descubre el significado del lado en el que se coloca la flor en el peinado istmeño. Conoce su simbolismo dentro de la cultura zapoteca y cómo forma parte de la identidad del Istmo de Tehuantepec."
      keywords="flor lado izquierdo significado istmo, flor lado derecho significado istmo, peinado istmeño flor significado, lado de la flor istmeña, peinado tradicional zapoteca, 
      cultura zapoteca peinado, significado de la flor en el cabello istmo, vestimenta istmeña mujer, tradiciones del Istmo de Tehuantepec, cultura oaxaqueña simbolismo, 
      peinado con flores istmo Oaxaca, identidad zapoteca mujer"
    />
    <BlogArticleLayout
      title="¿De Qué Lado Va la Flor en el Peinado Istmeño? Significado y Tradición"
      metaDate="Publicado el 29 de marzo de 2026 · Lectura de 7 min"
      tag="Guía del peinado"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres complementar tu peinado con el traje perfecto?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante tenemos trajes y accesorios que armonizan con cada
            detalle de la tradición istmeña. Consulta con nuestras asesoras.
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
        En la tradición del Istmo de Tehuantepec, cada detalle del arreglo personal tiene un significado. Y pocos elementos son tan simbólicos como
        la flor en el peinado. No se trata solo de decoración: el lado en el que se coloca la flor comunica algo fundamental sobre la mujer que la lleva.
        Te contamos todo sobre esta hermosa costumbre.
      </p>

      <div className="h-4" />
      <h2><strong>Casadas: la flor del lado derecho</strong></h2>
      <div className="h-4" />

      <p>
        Las mujeres casadas llevan la flor en el lado derecho de la cabeza. Este es un código visual que toda la comunidad reconoce al instante. Colocar la
        flor a la derecha indica que la mujer tiene compromiso, que ha formado una familia y que su corazón está ocupado.
      </p>
      <p>
        Este gesto no es solo una señal para los demás; es también un acto de orgullo. En la cultura istmeña, el matrimonio y la familia son pilares
        fundamentales, y la flor del lado derecho es una forma elegante de celebrar esa condición. En fiestas y velas, las mujeres casadas lucen
        sus flores con la misma solemnidad con la que portan sus joyas de oro.
      </p>
      <div className="h-4" />
      <h2><strong>Solteras: la flor del lado izquierdo</strong></h2>
      <div className="h-4" />

      <p>
        Las mujeres solteras, por su parte, colocan la flor en el lado izquierdo. Este detalle sutil pero poderoso indica que la mujer está disponible, que
        su corazón aún no tiene dueño. En las celebraciones, la flor del lado izquierdo es una invitación silenciosa: una señal de que la joven está
        abierta al cortejo y a la posibilidad del amor.
      </p>
      <p>
        Las jóvenes solteras suelen esmerarse especialmente en la elección de sus flores, seleccionando las más frescas y coloridas. El peinado adornado con
        flores del lado izquierdo es parte del ritual de las velas y fiestas donde la socialización y el encuentro entre jóvenes son parte central de la
        celebración.
      </p>

      <div className="h-4" />
      <h2><strong>Las flores que se usan en el peinado</strong></h2>
      <div className="h-4" />

      <p>
        No cualquier flor se coloca en el peinado istmeño. Existen flores tradicionales que se han usado por generaciones y que tienen un lugar
        especial en esta costumbre:
      </p>

      <div className="h-4" />
      <h2><strong>Claveles</strong></h2>
      <div className="h-4" />
      <p>
        Los claveles son quizás las flores más populares en los peinados del Istmo. Su forma compacta y redondeada los hace perfectos para sujetarse
        entre las trenzas. Vienen en una amplia gama de colores —rojo, rosa, blanco, amarillo— lo que permite combinarlos con cualquier traje. 
      </p>

      <div className="h-4" />
      <h2><strong>Clavelines</strong></h2>
      <div className="h-4" />
      <p>
        Los clavelines son una variedad más pequeña y delicada del clavel. Su tamaño reducido los hace ideales para peinados más sutiles o para
        complementar arreglos más elaborados. Se usan frecuentemente en combinación con flores más grandes, aportando volumen y color sin
        sobrecargar el peinado.
      </p>

      <div className="h-4" />
      <h2><strong>Pinitos</strong></h2>
      <div className="h-4" />
      <p>
        Los pinitos son pequeñas ramas verdes que se intercalan entre las flores para dar contraste y frescura al arreglo. Aunque no son flores como tal,
        son un elemento esencial del peinado istmeño. El verde de los pinitos resalta los colores de las flores y aporta una sensación de naturalidad y
        frescura al conjunto. 
      </p>

      <div className="h-4" />
      <h2><strong>Rosas</strong></h2>
      <div className="h-4" />
      <p>
        Las rosas son la opción más elegante y romántica. Se usan especialmente en bodas, pedidas de mano y eventos de gran formalidad. Las rosas rojas
        y rosas son las más comunes. Su tamaño más grande las convierte en la pieza central del peinado, y a menudo una sola rosa bien colocada
        basta para crear un efecto deslumbrante.
      </p>

      <h2>Un lenguaje floral que perdura</h2>
      
    </BlogArticleLayout>
  </React.Fragment>
);

export default FlorPeinadoIstmenoArticle;
