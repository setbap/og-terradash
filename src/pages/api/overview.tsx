import millify from "millify";
import { withOGImage } from "next-api-og-image";

export default withOGImage({
  type: 'png',
  quality: undefined,
  width: 1200,
  height: 630,
  template: {
    react: ({ lunaPrice, numberOfWallets, activeUser }) => (
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
                <img alt="Anchor Icon" className="h-24 w-24 mt-4" src="https://terradash.vercel.app/terra.png" />
                <h1 className=" ml-4 text-8xl font-bold text-gray-300 leading-tight">Overview</h1>
              </div>
              <img alt="TerraDash Icon" className="h-28 w-28" src="https://terradash.vercel.app/terradash.png" />
            </div>
            <span>
              <p className="font-medium leading-normal text-5xl text-gray-500 pt-4">
                According our research
                Terra Network has
                <span className="text-green-400">&nbsp;
                  {
                    millify(+numberOfWallets, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  } Unique Wallets&nbsp;</span>
                and
                <span className="text-green-400">
                  &nbsp;
                  {
                    millify(+activeUser, {
                      precision: 2,
                      decimalSeparator: ".",
                    })
                  }
                  &nbsp;
                </span>
                of them been Active in<span className="text-green-400">&nbsp;Past 30 days</span>.
                <br />
                Current <span className="text-yellow-400">LUNA</span> Price is
                <span className="text-green-400">&nbsp; {
                  millify(+lunaPrice, {
                    precision: 2,
                    decimalSeparator: ".",
                  })
                } USD&nbsp;</span>.
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
