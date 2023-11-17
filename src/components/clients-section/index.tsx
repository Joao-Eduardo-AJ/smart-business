import Image from "next/image";

export const Clients = () => (
  <section className="py-64 px-124 gap-54 flex flex-col items-center lg:flex-row lg:justify-around lg:w-full lg:px-38 xl:px-124 xl:py-46 xl:justify-between">
    <Image
      src="images/google.svg"
      alt="client Google"
      width={120}
      height={39}
      className="w-104 h-34 lg:w-120 lg:h-38"
    />
    <Image
      src="images/spotify.svg"
      alt="client Spotify"
      width={144}
      height={45}
      className="w-128 h-40 lg:w-144 lg:h-44"
    />
    <Image
      src="images/git-hub.svg"
      alt="client GitHub"
      width={103}
      height={28}
      className="w-96 h-26 lg:w-104 lg:h-28"
    />
    <Image
      src="images/microsoft.svg"
      alt="client Microsoft"
      width={184}
      height={39}
      className="w-126 h-28 lg:w-184 lg:h-38"
    />
    <Image
      src="images/digg.svg"
      alt="client Digg"
      width={70}
      height={42}
      className="w-66 h-38 lg:w-70 lg:h-42"
    />
    <Image
      src="images/host-gator.svg"
      alt="client HostGator"
      width={168}
      height={26}
      className="w-124 h-18 lg:w-168 lg:h-26"
    />
  </section>
);
