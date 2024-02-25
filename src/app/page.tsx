import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <h1>Hello page.tsx</h1>
    </main>
  );
}
