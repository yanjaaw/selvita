import Image from 'next/image';

import Creator from '../public/assets/creator.png';

export default function Team() {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-black-100 mb-4">Made by</h2>
      <Image
        src={'https://link.us1.storjshare.io/raw/jx3y3skg2hjy4suzwskjmhjbfv5a/cakes/bubbles.jpeg'}
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        <a
          href="https://twitter.com/yanjaaw"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          <span className="bg-white-900 rounded-full px-4 py-2">@womenbuildweb3</span>
        </a>
      </p>
    </div>
  );
}
