/* eslint-disable @next/next/no-head-element */
// https://play.tailwindcss.com/TYb0XtCyeG?size=1100x720
import millify from "millify";
import { withOGImage } from "next-api-og-image";

export default withOGImage({
  type: 'png',
  quality: undefined,
  width: 1200,
  height: 630,
  template: {
    react: ({ USTTotalSupply, wUST, wormholUST, BNBUST, AvaxUST, ThorChainUST }) => (
      <>
        <head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/@fontsource/outfit@4.5.4/latin.css"
            rel="stylesheet"
          />
        </head>
        <div className="min-h-screen w-full flex justify-center items-center">
          <div style={{ width: '1200px', height: '630px' }} className="mx-auto bg-black p-16 flex flex-col divide-y justify-center gap-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img alt="Anchor Icon" className="h-24 w-24 self-center mt-4 -mb-1" src="https://terradash.vercel.app/ust.png" />
                <h1 className="text-8xl font-bold text-gray-300 leading-tight">UST </h1>
              </div>
              <img alt="TerraDash Icon" className="h-28 w-28" src="https://terradash.vercel.app/terradash.png" />
            </div>
            <span>
              <p style={{ fontSize: 36 }} className="font-medium leading-normal  text-gray-500 pt-4">
                According our research
                Total Supply of UST is
                <span className="text-green-400">&nbsp; {
                  millify(+USTTotalSupply, {
                    precision: 2,
                    decimalSeparator: ".",
                  })
                } UST&nbsp;</span>
                and Ethereum wUST Market Cap is
                <span className="text-green-400">&nbsp;
                  {
                    millify(+wUST, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }&nbsp;UST&nbsp;</span>

                and Wormhole(Ethereum) UST Market Cap is
                <span className="text-green-400">&nbsp;
                  {
                    millify(+wormholUST, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }&nbsp;UST&nbsp;</span>

                and BNB UST Market Cap is
                <span className="text-green-400">&nbsp;
                  {
                    millify(+BNBUST, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }&nbsp;UST&nbsp;</span>

                and Avax UST Market Cap is
                <span className="text-green-400">&nbsp;
                  {
                    millify(+AvaxUST, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }&nbsp;UST&nbsp;</span>

                and ThorChain UST Market Cap is
                <span className="text-green-400">&nbsp;
                  {
                    millify(+ThorChainUST, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }&nbsp;UST&nbsp;</span>

                <br className="mb-2" />
                <span className="text-base w-full mt-3 text-left">
                  for more information you can click this image or go to <span className="underline text-blue-300">TerraDash.Vercel.app</span>
                </span>
                <br />

              </p>
            </span>
          </div>
        </div>
      </>
    ),
  },
});
