import Image from "next/image";

export const Clients = ({ pageWidth }: { pageWidth: number }) => (
  <section className="py-64 px-124 gap-54 flex flex-col items-center lg:flex-row lg:justify-around lg:w-full lg:px-38 xl:px-124 xl:py-46 xl:justify-between">
    <Image
      src="images/google.svg"
      alt="client Google"
      width={pageWidth < 985 ? 104 : 120}
      height={pageWidth < 985 ? 34 : 39}
    />
    <Image
      src="images/spotify.svg"
      alt="client Spotify"
      width={pageWidth < 985 ? 128 : 144}
      height={pageWidth < 985 ? 40 : 45}
    />
    <Image
      src="images/git-hub.svg"
      alt="client GitHub"
      width={pageWidth < 985 ? 96 : 103}
      height={pageWidth < 985 ? 26 : 28}
    />
    <Image
      src="images/microsoft.svg"
      alt="client Microsoft"
      width={pageWidth < 985 ? 126 : 184}
      height={pageWidth < 985 ? 27 : 39}
    />
    <Image
      src="images/digg.svg"
      alt="client Digg"
      width={pageWidth < 985 ? 66 : 70}
      height={pageWidth < 985 ? 39 : 42}
    />
    <Image
      src="images/host-gator.svg"
      alt="client HostGator"
      width={pageWidth < 985 ? 124 : 168}
      height={pageWidth < 985 ? 18 : 25}
    />
  </section>
);
