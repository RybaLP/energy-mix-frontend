import {ChargingWindowSection} from "@/components/chargingWindow/chargingWindowSection";
import {EnergyMixSection} from "@/components/energymixsection/energyMixSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            🇬🇧 UK Energy Mix Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Real-time energy generation & optimal EV charging windows
          </p>
        </header>
        <EnergyMixSection />
        <ChargingWindowSection />
      </div>
    </main>
  );
}