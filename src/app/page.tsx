import Image from 'next/image';
import { JetBrainsMono } from '@/lib/font';
import { RiDiscordFill, RiMailFill, RiTwitchFill, RiInstagramLine } from 'react-icons/ri';
import { IconLink } from '@/components/IconLink';
import { twMerge } from 'tailwind-merge';
import { TypeWriter } from '@/components/Typewriter';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <div
      className={twMerge(
        'h-screen text-text select-none',
        'bg-background',
        JetBrainsMono.className
      )}
    >
      <Nav />
      <main className="grid place-items-center h-2/3">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold text-primary text-center lg:text-start">
              Mrlion
            </h1>
            <TypeWriter
              className="text-xl lg:text-xl"
              text="Fullstack Developer"
            />
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-16 mt-8">
              <IconLink
                href="mailto:mrlion@lionsproject.eu"
                className="hover:text-accent"
              >
                <RiMailFill />
              </IconLink>
              <IconLink
                href="https://discord.com/users/916316955772862475"
                className="hover:text-blue-600"
              >
                <RiDiscordFill />
              </IconLink>
              <IconLink
                href="https://twitch.com/lostedmrlion"
                className="hover:text-purple-600"
              >
                <RiTwitchFill />
              </IconLink>
              <IconLink
                href="https://instagram.com/real.mrlion"
                className="hover:text-orange-500"
              >
                <RiInstagramLine />
              </IconLink>
            </div>
          </div>
          <Image
            src="https://github.com/l0stedmrlion.png"
            alt="Mrlion"
            width={300}
            height={300}
            className="rounded-full h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
            draggable={false}
          />
        </div>
        <p className="position:absolute bottom:0">Inspired by Twlite.dev</p>
      </main>
    </div>
  );
}
