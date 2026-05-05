/* eslint-disable @next/next/no-img-element */

const cormorantItalic = {
  fontFamily: "'Cormorant Garamond'",
  fontStyle: "italic" as const,
  fontWeight: 500,
};

const cormorantBold = {
  fontFamily: "'Cormorant Garamond'",
  fontWeight: 600,
};

const tdInCenie = {
  fontStyle: "italic" as const,
  color: "var(--olive)",
};

const tdSubnote = {
  fontFamily: "'Cormorant Garamond'",
  fontStyle: "italic" as const,
  color: "var(--ink-soft)",
  fontSize: "14px",
};

const eventSubnote = tdSubnote;

const optionalIntro = {
  fontFamily: "'Cormorant Garamond'",
  fontStyle: "italic" as const,
  color: "var(--terracotta)",
};

export default function Home() {
  return (
    <main>
      <p className="eyebrow">Plan podróży · 1–5 sierpnia 2026</p>
      <h1 className="masthead-title">
        Wieczór
        <br />
        <em style={cormorantItalic}>panieński</em>
        <br />
        Wiktorii
      </h1>
      <p className="masthead-sub">
        Bergamo&nbsp;&nbsp;·&nbsp;&nbsp;Lago di Garda
      </p>
      <div className="ornament">
        <span className="ornament-mark">✦</span>
      </div>

      <p className="intro">
        Pięć dni we Włoszech — Bergamo, plaża Coco Beach, rejs po jeziorze i
        termy w Sirmione.
      </p>

      <div className="price-banner">
        <p className="price-banner-amount">1575 zł</p>
        <p className="price-banner-label">na osobę — wszystko w cenie</p>
        <p className="price-banner-detail">
          loty Wizz Air · zakwaterowanie · pociągi i taksówki
          <br />
          jedzenie i drinki · Coco Beach LA ISLA
        </p>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="legend-swatch gift">od Olgi</span>
          <span>
            prezent ode mnie
            <br />
            (ekstra, poza wkładem)
          </span>
        </div>
        <div className="legend-item">
          <span className="legend-swatch optional">~zł</span>
          <span>
            opcjonalnie
            <br />
            (własny koszt na miejscu)
          </span>
        </div>
      </div>

      <section className="moments">
        <hr className="moments-rule" />
        <div className="collage">
          <figure className="moment moment-1">
            <img
              src="https://cocobeachclub.com/wp-content/uploads/2021/03/T__1223-1-1024x640.jpg"
              alt="Coco Beach LA ISLA"
            />
            <figcaption>
              Niedziela na białej plaży
              <span className="moment-day">Dzień II · Coco Beach</span>
            </figcaption>
          </figure>
          <figure className="moment moment-2">
            <img
              src="https://visitsirmione.com/wp-content/uploads/2024/06/8x2-Bisogna-saper-sognare-Ph-Roberto-Bellini-giugno-2024.jpg"
              alt="Sirmione"
            />
            <figcaption>
              Półwysep Sirmione
              <span className="moment-day">Dzień III · Sirmione</span>
            </figcaption>
          </figure>
          <figure className="moment moment-3">
            <img
              src="https://visitsirmione.com/wp-content/uploads/2019/12/castello-scaligero-notturno-sirmione-turismo.jpg"
              alt="Aquaria"
            />
            <figcaption>
              Termalne baseny o zachodzie słońca
              <span className="moment-day">Dzień III · Aquaria</span>
            </figcaption>
          </figure>
          <figure className="moment moment-4">
            <img
              src="https://www.visitbergamo.net/wp-content/uploads/2024/06/DSC1524-piazza-vecchia_portici_cappella-colleoni.jpg"
              alt="Bergamo"
            />
            <figcaption>
              Wieczór w Città Alta
              <span className="moment-day">Dzień IV · Bergamo</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="stays">
        <p className="stays-eyebrow">Casa nostra</p>
        <h2 className="stays-title">Gdzie śpimy</h2>
        <div className="stay-grid">
          <article className="stay-card">
            <img
              className="stay-cover"
              src="https://a0.muscache.com/im/pictures/30dfe4fc-2b2a-4dfa-95e6-71887dc0be12.jpg?im_w=960"
              alt="your home Bergamo Centro"
            />
            <span className="stay-rating">4.76 · Guest Favourite</span>
            <h3 className="stay-name">your home Bergamo Centro</h3>
            <p className="stay-where">Bergamo Bassa · Superhost Valeria (7 lat)</p>
            <p className="stay-dates">Sobota 1 sierpnia · 1 noc</p>
            <p className="stay-facts">
              W sercu Bergamo Bassa, 10 min od stacji · 1 sypialnia · 3 łóżka ·
              1 łazienka · do 6 osób
            </p>
            <ul className="stay-amenities">
              <li>10 min od stacji</li>
              <li>4 min do autobusu na BGY</li>
              <li>Self check-in</li>
              <li>Kuchnia</li>
            </ul>
            <a
              className="stay-link"
              href="https://www.airbnb.co.uk/rooms/32499969"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz na Airbnb →
            </a>
          </article>

          <article className="stay-card">
            <img
              className="stay-cover"
              src="https://a0.muscache.com/im/pictures/909be576-c06e-48ee-9577-c63a9f69f1b8.jpg?im_w=960"
              alt="Red & Blu Luxury Apartment 2"
            />
            <span className="stay-rating">4.85 · 130 opinii</span>
            <h3 className="stay-name">Red &amp; Blu Luxury Apartment 2</h3>
            <p className="stay-where">
              Desenzano del Garda · Superhost Adriana (9 lat)
            </p>
            <p className="stay-dates">Niedziela–poniedziałek · 2 noce</p>
            <p className="stay-facts">
              Odnowiony apartament, 1. piętro · 2 sypialnie + sofa · 3 łóżka ·
              1 łazienka · do 6 osób
            </p>
            <ul className="stay-amenities">
              <li>Kuchnia w pełni wyposażona</li>
              <li>Klimatyzacja w salonie</li>
              <li>Self check-in</li>
              <li>15 min od stacji</li>
            </ul>
            <a
              className="stay-link"
              href="https://www.airbnb.co.uk/rooms/18192003"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz na Airbnb →
            </a>
          </article>

          <article className="stay-card">
            <img
              className="stay-cover"
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1155500479924079590/original/f4ce3464-ddbe-4fae-89ac-939472627214.jpeg?im_w=960"
              alt="House in downtown Bergamo"
            />
            <span className="stay-rating">4.91 · Guest Favourite</span>
            <h3 className="stay-name">House in downtown Bergamo</h3>
            <p className="stay-where">Centrum Bergamo · Superhost Daniel</p>
            <p className="stay-dates">Wtorek 4 sierpnia · 1 noc</p>
            <p className="stay-facts">
              10 min od lotniska BGY · 2 sypialnie · 3 łóżka · 2 łazienki · do
              6 osób
            </p>
            <ul className="stay-amenities">
              <li>10 min od BGY</li>
              <li>Klimatyzacja</li>
              <li>Self check-in 24h</li>
              <li>Schowek na bagaże</li>
            </ul>
            <a
              className="stay-link"
              href="https://www.airbnb.co.uk/rooms/1155500479924079590"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz na Airbnb →
            </a>
          </article>
        </div>
      </section>

      {/* Day I */}
      <section className="day">
        <p className="day-roman">Dzień I</p>
        <h2 className="day-title">Sobota, 1 sierpnia</h2>
        <p className="day-theme">Przylot do Bergamo</p>
        <div className="event">
          <span className="time">późno</span>
          <span className="what">Lot Wizz Air Katowice → Bergamo</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">noc</span>
          <span className="what">Taksówka z lotniska BGY do Città Alta</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">noc</span>
          <span className="what">Apartament w Città Alta</span>
          <span className="cost included">wliczone</span>
        </div>
      </section>

      {/* Day II */}
      <section className="day">
        <p className="day-roman">Dzień II</p>
        <h2 className="day-title">Niedziela, 2 sierpnia</h2>
        <p className="day-theme">Dzień nad jeziorem · Coco Beach</p>
        <div className="event">
          <span className="time">9:00</span>
          <span className="what">Śniadanie w apartamencie</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">10:00</span>
          <span className="what">
            Spacer po Piazza Vecchia, Bazylika Santa Maria Maggiore
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
        <div className="event">
          <span className="time">10:30</span>
          <span className="what">Pociąg Bergamo → Brescia (50 min)</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">11:30</span>
          <span className="what">
            Pociąg Brescia → Desenzano-Sirmione (15 min)
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">12:00</span>
          <span className="what">Apartament w Desenzano — zostawiamy bagaże</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">13:00</span>
          <span className="what">
            Lunch piknikowy z supermarketu nad jeziorem przy Villi Romanej
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">14:00–18:00</span>
          <span className="what">
            Plaża publiczna w Desenzano
            <em>piaszczysta zatoczka tuż za mariną</em>
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
        <div className="event">
          <span className="time">18:30</span>
          <span className="what">
            Powrót do apartamentu — prysznic, przygotowania na wieczór
            <em>aperitivo na tarasie z butelką prosecco</em>
          </span>
          <span className="cost gift">od Olgi</span>
        </div>
        <div className="event">
          <span className="time">19:30</span>
          <span className="what">Taksówka do Coco Beach</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">20:00–00:30</span>
          <span className="what">
            <strong style={cormorantBold}>LA ISLA</strong> — aperitivo, bufet,
            set DJ na plaży
            <em>
              wstęp i drink wliczone, do tego bufet aperitivo
              <br />
              <a
                className="venue-link"
                href="https://www.instagram.com/cocobeach_club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cocobeach_club ↗
              </a>{" "}
              <a
                className="venue-link"
                href="https://cocobeachclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cocobeachclub.com ↗
              </a>
            </em>
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">późno</span>
          <span className="what">Taksówka powrotna do Desenzano</span>
          <span className="cost included">wliczone</span>
        </div>
      </section>

      {/* Day III */}
      <section className="day">
        <p className="day-roman">Dzień III</p>
        <h2 className="day-title">Poniedziałek, 3 sierpnia</h2>
        <p className="day-theme">Sirmione i wieczór w termach Aquaria</p>
        <div className="event">
          <span className="time">10:00</span>
          <span className="what">Powolne śniadanie w apartamencie</span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">11:00</span>
          <span className="what">
            Prom Desenzano → Sirmione (~25 min)
            <em>publiczny prom kursujący przez jezioro</em>
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">11:00</span>
          <span className="what">
            Lub: rejs panoramiczny z postojem na lądzie
            <em>
              ~75 min rejsu, Zamek Scaligerów od strony jeziora — opcjonalnie,
              dla chętnych
            </em>
          </span>
          <span className="cost optional">
            ~150 zł<small>własny koszt</small>
          </span>
        </div>
        <div className="event">
          <span className="time">popołudnie</span>
          <span className="what">
            Sirmione — Zamek Scaligerów, Jamaica Beach
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
        <div className="event">
          <span className="time">13:30</span>
          <span className="what">
            Piknik z lokalnego deli — prosciutto, pecorino, brzoskwinie,
            focaccia
            <em>na trawniku przy Jamaica Beach z widokiem na zamek</em>
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">15:00</span>
          <span className="what">
            Spacer na cypel półwyspu — widok na rzymskie ruiny i otwarte jezioro
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
        <div className="event">
          <span className="time">16:30</span>
          <span className="what">
            Gelato w Sirmione — przerwa przed wieczorem
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">19:00–22:00</span>
          <span className="what">
            <strong style={cormorantBold}>Aquaria Thermal Spa</strong> —
            termalne baseny o zachodzie słońca
            <em>
              tarasowy solarium nad jeziorem, sauny, aperitivo na pomoście —
              opcjonalnie, dla chętnych
              <br />
              <a
                className="venue-link"
                href="https://www.termedisirmione.com/en/admissions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                termedisirmione.com ↗
              </a>
            </em>
          </span>
          <span className="cost optional">
            ~125 zł<small>własny koszt</small>
          </span>
        </div>
        <div className="event">
          <span className="time">22:30</span>
          <span className="what">Powrót do apartamentu w Desenzano</span>
          <span className="cost included">wliczone</span>
        </div>
      </section>

      {/* Day IV */}
      <section className="day">
        <p className="day-roman">Dzień IV</p>
        <h2 className="day-title">Wtorek, 4 sierpnia</h2>
        <p className="day-theme">Poranek nad jeziorem, wieczór w Bergamo</p>
        <div className="event">
          <span className="time">10:00</span>
          <span className="what">
            Kąpiel na publicznym lido w Desenzano + ruiny rzymskiej willi przy
            brzegu
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
        <div className="event">
          <span className="time">12:00</span>
          <span className="what">
            Wtorkowy targ w Desenzano — piknik nad jeziorem
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">14:30</span>
          <span className="what">
            Pociąg powrotny: Desenzano → Brescia → Bergamo
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">16:30</span>
          <span className="what">
            Apartament w Bergamo — zostawiamy bagaże, krótki odpoczynek
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">17:30</span>
          <span className="what">
            Spacer po Città Alta — Cappella Colleoni, weneckie mury, funicolare
            na San Vigilio
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">18:30</span>
          <span className="what">
            Aperitivo na Piazza Vecchia
            <em>
              Aperol Spritz i przekąski na placu Vecchia o zachodzie słońca
            </em>
          </span>
          <span className="cost gift">od Olgi</span>
        </div>
        <div className="event">
          <span className="time">20:30</span>
          <span className="what">
            Kolacja w Birreria di Città Alta
            <em>
              casoncelli, polenta z górską serową, lokalne wino — opcjonalnie,
              dla chętnych
            </em>
          </span>
          <span className="cost optional">
            ~110 zł<small>własny koszt</small>
          </span>
        </div>
        <div className="event">
          <span className="time">22:30</span>
          <span className="what">
            Spacer wzdłuż weneckich murów (UNESCO) — podświetlone nocą
          </span>
          <span className="cost free">bezpłatnie</span>
        </div>
      </section>

      {/* Day V */}
      <section className="day">
        <p className="day-roman">Dzień V</p>
        <h2 className="day-title">Środa, 5 sierpnia</h2>
        <p className="day-theme">Powrót do Polski</p>
        <div className="event">
          <span className="time">6:00</span>
          <span className="what">
            Taksówka na lotnisko BGY
            <em>wczesny start, lot o 8:00</em>
          </span>
          <span className="cost included">wliczone</span>
        </div>
        <div className="event">
          <span className="time">8:00</span>
          <span className="what">Lot Wizz Air Bergamo → Katowice</span>
          <span className="cost included">wliczone</span>
        </div>
      </section>

      <div className="block">
        <p className="block-title">Co jest w cenie 1575 zł</p>
        <table>
          <tbody>
            <tr>
              <td>Lot Wizz Air Katowice ↔ Bergamo</td>
              <td className="cost-cell" style={tdInCenie}>
                w cenie
              </td>
            </tr>
            <tr>
              <td>
                Cztery noce w apartamentach
                <br />
                <em style={tdSubnote}>
                  2 noce Bergamo · 2 noce Desenzano del Garda
                </em>
              </td>
              <td className="cost-cell" style={tdInCenie}>
                w cenie
              </td>
            </tr>
            <tr>
              <td>Wszystkie pociągi, prom i taksówki</td>
              <td className="cost-cell" style={tdInCenie}>
                w cenie
              </td>
            </tr>
            <tr>
              <td>
                Śniadania, obiady, kolacje
                <br />
                <em style={tdSubnote}>
                  apartament, pikniki, restauracje, drinki
                </em>
              </td>
              <td className="cost-cell" style={tdInCenie}>
                w cenie
              </td>
            </tr>
            <tr>
              <td>Coco Beach LA ISLA — wstęp i drink</td>
              <td className="cost-cell" style={tdInCenie}>
                w cenie
              </td>
            </tr>
            <tr className="total-row">
              <td>Wkład od osoby</td>
              <td className="cost-cell">1575 zł</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="notes">
        <br />
        <em style={optionalIntro}>Opcjonalne dodatki dla chętnych:</em>
        <br />
        Aquaria — wieczór w termach (~125 zł) · Rejs panoramiczny do Sirmione
        (~150 zł) · Pożegnalna kolacja w Birreria (~110 zł)
        <br />
      </p>
    </main>
  );
}
