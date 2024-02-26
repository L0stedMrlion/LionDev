import Image from 'next/image';
import { JetBrainsMono } from '@/lib/font';
import { RiDiscordFill, RiMailLine, RiTwitchFill, RiInstagramLine, RiGithubFill, RiHandCoinFill, RiSpotifyFill } from 'react-icons/ri';
import { ButtonLink } from '@/components/ButtonLink';
import { twMerge } from 'tailwind-merge';
import { TypeWriter } from '@/components/Typewriter';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div
      className={twMerge(
        'h-screen text-text select-none',
        'bg-background',
        JetBrainsMono.className
      )}
    >
      <Navbar />
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
              <ButtonLink
                href="mailto:mrlion@lionsproject.eu"
                className="hover:text-accent"
              >
                <RiMailLine />
              </ButtonLink>
              <ButtonLink
                href="https://discord.com/users/916316955772862475"
                className="hover:text-blue-600"
              >
                <RiDiscordFill />
              </ButtonLink>
              <ButtonLink
                href="https://twitch.com/lostedmrlion"
                className="hover:text-purple-600"
              >
                <RiTwitchFill />
              </ButtonLink>
              <ButtonLink
                href="https://instagram.com/real.mrlion"
                className="hover:text-orange-500"
              >
                <RiInstagramLine />
              </ButtonLink>
              <ButtonLink
                href="https://github.com/L0stedMrlion"
                className="hover:text-slate-600"
              >
                <RiGithubFill />
              </ButtonLink>
              <ButtonLink
                href="https://open.spotify.com/user/31qnc912ik24ama3kbljcfmbq?si=71062f18c5a743e8"
                className="hover:text-green-600"
              >
                <RiSpotifyFill />
              </ButtonLink>
              <ButtonLink
                href="https://paypal.me/lostedmrlion"
                className="hover:text-yellow-400"
              >
                <RiHandCoinFill />
              </ButtonLink>
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
