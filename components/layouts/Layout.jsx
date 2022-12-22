import Head from "next/head";
import { Navbar } from "../ui/index";

export const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name="author" content="Roger Jiménez" />
        <meta name="description" content={`Información Sobre Pokémon ${title}`} />
        <meta name="keywords" content={`${title} pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
