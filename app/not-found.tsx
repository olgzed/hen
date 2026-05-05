import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <p className="eyebrow" style={{ marginTop: "2rem" }}>
        404
      </p>
      <h1 className="masthead-title" style={{ fontSize: "clamp(40px, 8vw, 64px)" }}>
        Strona zgubiła się
        <br />
        <em
          style={{
            fontFamily: "'Cormorant Garamond'",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          gdzieś po drodze
        </em>
      </h1>
      <p className="intro" style={{ marginTop: "2rem" }}>
        <Link
          href="/"
          style={{
            color: "var(--terracotta)",
            borderBottom: "1px solid var(--terracotta)",
            textDecoration: "none",
          }}
        >
          ← Wróć do planu
        </Link>
      </p>
    </main>
  );
}
