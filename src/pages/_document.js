import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.jpg" />

        <title>TheInvaderz</title>
        <meta
          name="description"
          content="The Invaderz NFT project is a one-of-a-kind idea that allows NFT holders to become the storytellers. The project comprises various NFTs that represent different characters or elements of an alien invasion story. With this project, NFT holders can interact with the story in a unique and engaging way."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
