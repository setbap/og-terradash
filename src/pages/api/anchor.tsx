/* eslint-disable @next/next/no-head-element */
// https://play.tailwindcss.com/TYb0XtCyeG?size=1100x720
import millify from "millify";
import { withOGImage } from "next-api-og-image";

export default withOGImage({
  type: 'png',
  quality: undefined,
  template: {
    react: ({ totalDeposits, totalBorrowed, currentAPY, yieldReserve }) => (
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
        <div className="min-h-screen bg-black p-20 flex flex-col divide-y justify-center gap-4">
          <div className="flex justify-between">
            <div className="flex">
              <img alt="Anchor Icon" width="48" height="48" className="mr-4" src="https://app.anchorprotocol.com/assets/LogoTerra.114ab559.svg" />
              <h1 className="text-6xl font-bold text-gray-300 leading-tight">Anchor </h1>
            </div>
            <img alt="TerraDash Icon" className="h-20 w-20" src="https://cdn.discordapp.com/attachments/964167275064197160/967881200570101810/Group_15.png" />
          </div>
          <span>
            <p className="font-medium leading-normal text-2xl text-gray-500 pt-4">
              According our research
              Total Deposits in Anchor is
              <span className="text-green-400">&nbsp; {
                millify(+totalDeposits, {
                  precision: 2,
                  decimalSeparator: ".",
                })
              } UST&nbsp;</span>
              and Total Borrow Amount
              <span className="text-red-400">&nbsp;
                {
                  millify(+totalBorrowed, {
                    precision: 2,
                    decimalSeparator: ".",
                  })
                }&nbsp;UST&nbsp;</span>.
              In Earn Side Anchor has
              <span className="text-green-400">&nbsp;
                {
                  millify(+currentAPY, {
                    precision: 2,
                    decimalSeparator: ".",
                  })
                }
                % APY&nbsp;</span>
              on UST and has
              <span className="text-green-400">&nbsp;
                {
                  millify(+yieldReserve, {
                    precision: 2,
                    decimalSeparator: ".",
                  })
                }
                &nbsp;UST&nbsp;</span>
              Yield Reserve.
              <br />
              <span className="text-base w-full pt-2 text-left">
                for more information you can click this image or go to <span className="underline text-blue-300">TerraDash.Vercel.app</span>
              </span>
              <br />

            </p>
          </span>
        </div>
      </>
    ),
  },
});
