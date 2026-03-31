import React from "react";
import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import SEOHead from "@/components/SEOHead";

const related = [
  { title: "Detrás de la Puntada: Conoce a las Artesanas de Flor Radiante", slug: "artesanas-flor-radiante", tag: "Nuestras artesanas" },
  { title: "El zapoteco y su influencia en la vestimenta tradicional", slug: "zapoteco-vestimenta-tradicional", tag: "Historia" },
  { title: "La Guelaguetza y el protagonismo del traje istmeño", slug: "guelaguetza-traje-istmeno", tag: "Cultura" },
];

const SanBlasAtempaArticle = () => (
  <React.Fragment>
    <SEOHead
      title="San Blas Atempa: Tradición y Cultura del Istmo de Tehuantepec | Flor Radiante"
      description="Descubre San Blas Atempa, una comunidad del Istmo de Tehuantepec conocida por su cultura zapoteca y tradiciones."
      keywords="San Blas Atempa Oaxaca, cultura zapoteca istmo, tradiciones istmeñas,
      San Blas Atempa huipiles, cultura zapoteca istmo Oaxaca, tradiciones San Blas Atempa, bordados istmeños origen"
    />
    <BlogArticleLayout
      title="San Blas Atempa: Cuna de Tradición y Artesanía Istmeña"
      tag="Historia"
      metaDate="Publicado el 5 de marzo de 2026 · Lectura de 8 min"
      related={related}
      customCTA={
        <div className="mt-12 rounded-lg bg-primary/10 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            ¿Quieres conocer más sobre San Blas Atempa y sus artesanas?
          </p>
          <p className="mt-2 font-body text-muted-foreground">
            En Flor Radiante trabajamos directamente con artesanas de esta comunidad.
            Cada prenda que creamos lleva consigo la historia y el orgullo de San Blas Atempa.
            Conoce a nuestras artesanas o explora nuestra colección.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/nosotros"
              className="rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Conoce a nuestras artesanas
            </Link>
            <Link
              to="/coleccion"
              className="rounded-md border border-primary bg-background px-6 py-3 font-body text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >
              Explorar colección
            </Link>
          </div>
        </div>
      }
    >
      <p>
        En el corazón del Istmo de Tehuantepec, a orillas del río Tehuantepec, se encuentra <strong>San Blas Atempa</strong>: una comunidad zapoteca donde la tradición textil, la lengua originaria y las costumbres ancestrales se viven con una intensidad que pocas regiones de México pueden igualar. Aquí, cada familia guarda entre sus muros generaciones de conocimiento artesanal.
      </p>
      <div className="h-4" />
      <h2><strong>Historia de San Blas Atempa</strong></h2>
      <div className="h-4" />
      <p>
        San Blas Atempa —cuyo nombre en zapoteco es <em>Laa</em>— es uno de los municipios más antiguos del Istmo. Su historia se remonta a la época prehispánica, cuando los zapotecas dominaban la región como una de las civilizaciones más avanzadas de Mesoamérica. Tras la llegada de los españoles, la comunidad mantuvo con tenacidad sus tradiciones, su lengua y su organización social.
      </p>
      <p>
        A lo largo de los siglos, San Blas Atempa se consolidó como un bastión de la <strong>cultura zapoteca</strong>. Mientras otras comunidades fueron asimilando influencias externas, San Blas resistió, preservando su identidad con un orgullo que se refleja en cada aspecto de la vida cotidiana: desde la lengua que se habla en el mercado hasta los bordados que adornan los huipiles.
      </p>
      <div className="h-4" />
      <h2><strong>Tradición textil: el arte en cada hogar</strong></h2>
      <div className="h-4" />
      <p>
        En San Blas Atempa, el bordado no es solo una actividad económica: es un <strong>lenguaje cultural</strong>. Desde niñas, las mujeres aprenden de sus madres y abuelas las técnicas de bordado que han definido la indumentaria istmeña durante siglos. Los talleres familiares —muchas veces el mismo patio de la casa— son los espacios donde nace cada huipil, cada enagua y cada refajo.
      </p>
      <p>
        Las artesanas de San Blas son reconocidas por la calidad excepcional de sus bordados, tanto a máquina de pedal como a mano. Sus diseños florales son inconfundibles: exuberantes, coloridos y llenos de vida, reflejando la flora tropical de la región y la cosmovisión zapoteca que ve en las flores un símbolo de fertilidad y abundancia.
      </p>
      <div className="h-4" />
      <h2><strong>Cultura zapoteca viva</strong></h2>
      <div className="h-4" />
      <p>
        San Blas Atempa es una de las comunidades donde el <strong>zapoteco istmeño</strong> se habla con mayor vitalidad. La lengua originaria no es una reliquia del pasado: es el idioma del mercado, de las fiestas, de las conversaciones familiares y de las canciones que acompañan las velas y celebraciones.
      </p>
      <p>
        La organización social de San Blas mantiene rasgos de la <strong>sociedad matriarcal</strong> zapoteca. Las mujeres desempeñan un papel central en la economía, el comercio y la vida comunitaria. Son ellas quienes administran los mercados, organizan las fiestas y, por supuesto, crean las prendas artesanales que dan fama a la región.
      </p>
      <div className="h-4" />
      <h2><strong>Las velas de San Blas</strong></h2>
      <div className="h-4" />
      <p>
        Como toda comunidad istmeña, San Blas Atempa celebra sus propias <strong>velas</strong>: fiestas patronales donde la comunidad se reúne para bailar, comer y celebrar. Durante las velas, las mujeres lucen sus mejores trajes de tehuana, con huipiles de gala bordados a mano, joyería de oro y tocados florales. Las velas de San Blas son un espectáculo de color, música y tradición que atrae a visitantes de toda la región.
      </p>
      <div className="h-4" />
      <h2><strong>El mercado de San Blas</strong></h2>
      <div className="h-4" />
      <p>
        El mercado de San Blas Atempa es famoso por su ambiente vibrante y por ser un punto de encuentro donde se pueden encontrar productos artesanales, comida tradicional istmeña y, por supuesto, huipiles y accesorios del traje de tehuana. Las mujeres zapotecas que atienden los puestos son un testimonio vivo de la fortaleza cultural de la comunidad.
      </p>
      <div className="h-4" />
      <h2><strong>Flor Radiante: nacida en San Blas Atempa</strong></h2>
      <div className="h-4" />
      <p>
        <strong>Flor Radiante nace en San Blas Atempa, Oaxaca</strong>, una comunidad profundamente ligada a la tradición textil del Istmo de Tehuantepec. Nuestras artesanas son mujeres de esta tierra, herederas de un conocimiento que se transmite de madre a hija y que se refleja en cada puntada de nuestros huipiles, enaguas y refajos.
      </p>
      <p>
        Cuando adquieres una prenda de Flor Radiante, no solo llevas contigo una pieza artesanal de la más alta calidad: llevas un pedazo de San Blas Atempa, de su historia, de su cultura y del trabajo amoroso de sus artesanas. Escríbenos por WhatsApp y conoce la historia detrás de cada prenda.
      </p>
    </BlogArticleLayout>
  </React.Fragment>
);

export default SanBlasAtempaArticle;
