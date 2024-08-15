import { Typography } from "@material-tailwind/react";
export function LandingPage() {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="col-span-6 m-36 ml-48">
        <p className="font-bold text-5xl">
          Your private 100% customizable online journal.
        </p>
        <p className="font-semibold text-xl mt-2 mb-2">
          Loved by over 2 million journalers around the world.
        </p>
        <button className="bg-[#2175eb] p-2 pl-5 mt-1 text-white pr-5 w-full rounded-full">Start Your Free Journal Now</button>
      </div>
      <div className="col-span-6 mr-28 mt-20">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                Sara Lamalo
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                20 July 2022
              </Typography>
            </div>
            <Typography variant="h5" color="blue-gray">
              Growth
            </Typography>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
