import IntakeFormEmbed from "@/components/IntakeFormEmbed";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-900">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Get Discovered. <span className="text-[#0088d0]">Not Hired.</span>
        </h1>
        <p className="text-lg mb-10">
          We flip the script. Submit your profile once — we help companies compete to hire <strong>you</strong>.
        </p>
      </div>
      <IntakeFormEmbed />
    </main>
  );
}
