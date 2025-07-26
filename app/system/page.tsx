'use client';

import UrgentAvoidingBoard from '@/components/UrgentAvoidingBoard';
import OverflowScratchpad from '@/components/OverflowScratchpad';
import LunarSync from '@/components/LunarSync';
import CleaningNest from '@/components/CleaningNest';
import CozyKitchen from '@/components/CozyKitchen';
import GiftLog from '@/components/GiftLog';
import MediaLog from '@/components/MediaLog';
import FanLogbook from '@/components/FanLogbook';
import ToolsTracker from '@/components/ToolsTracker';
import GrowthArchive from '@/components/GrowthArchive';

export default function SystemPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">System Core 🧠</h1>
      <UrgentAvoidingBoard />
      <OverflowScratchpad />
      <LunarSync />
      <CleaningNest />
      <CozyKitchen />
      <GiftLog />
      <MediaLog />
      <FanLogbook />
      <ToolsTracker />
      <GrowthArchive />
    </section>
  );
}
