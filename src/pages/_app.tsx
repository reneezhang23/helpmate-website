import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const links = [
  { href: "/", text: "Home" },
  { href: "/post-diagnosis-action-plan", text: "Post-diagnosis action plan" },
  // { href: "/cohort-based-program", text: "Cohort-based program" },
  { href: "/about-us", text: "About us" },
  { href: "/blog", text: "Blog" },
  { href: "/faq", text: "FAQs" },
  { href: "/board-of-advisors", text: "Board of advisors" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="fixed z-10 w-full h-24 bg-orange-100">
        <div className="container flex items-center justify-between h-full mx-auto">
          <span className="text-3xl font-semibold text-electric-violet-500">
            HelpMate
          </span>
          <nav>
            <ul>
              {links.map((link) => (
                <li
                  className="inline-block ml-8 font-semibold first:ml-0"
                  key={link.href}
                >
                  <Link href={link.href}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className="min-h-screen pt-24">
        <Component {...pageProps} />
      </div>
      <footer className="bg-orange-100">
        <div className="container grid grid-cols-4 py-16 mx-auto">
          <section>
            <span className="block text-3xl text-electric-violet-500">
              HelpMate
            </span>
            <span className="block">Better care with less stress</span>
          </section>
          <div></div>
          <section>
            <span>Social</span>
            <ul>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <Link href="/terms-and-conditions">
                  <a>Terms &amp; conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy policy</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
}
