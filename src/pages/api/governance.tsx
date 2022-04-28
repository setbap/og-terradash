/* eslint-disable @next/next/no-head-element */
// https://play.tailwindcss.com/TYb0XtCyeG?size=1100x720
import millify from "millify";
import { withOGImage } from "next-api-og-image";
import { RiGovernmentLine } from 'react-icons/ri';

export default withOGImage({
  type: 'png',
  quality: undefined,
  width: 1200,
  height: 630,
  template: {
    react: ({ stackedLuna, activeValidator, goverannceProposal, activeProposal }) => (
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
              <div className="flex">
                <RiGovernmentLine className="h-24 w-24 text-blue-400 text-light mt-4" />
                <h1 className="pl-4 text-8xl font-bold text-gray-300 leading-tight">Governance </h1>
              </div>
              <img alt="TerraDash Icon" className="h-28 w-28" src="https://terradash.vercel.app/terradash.png" />
            </div>
            <span>
              <p className="font-medium leading-normal text-4xl text-gray-500 pt-4">
                According our research
                <span className="text-green-400">&nbsp;
                  {
                    millify(+stackedLuna, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  } LUNA&nbsp;
                </span>
                has Be Staked In Terra.Also Terra Network has
                <span className="text-green-400">&nbsp;{activeValidator} Active Validator&nbsp;</span>
                and
                <span className="text-green-400">&nbsp;{goverannceProposal} Governance Proposals&nbsp;</span>.
                Currently Terra Network has
                <span className="text-green-400">&nbsp;{activeProposal}&nbsp;Active Governance Proposals</span>.
                <br />
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
