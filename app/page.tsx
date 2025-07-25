// app/page.tsx

import Layout from "./layout";
import Header from "./components/Header";

import VibeSelector from "./sections/VibeSelector";
import DailyPlanner from "./sections/DailyPlanner";
import WeeklyView from "./sections/WeeklyView";
import MonthlyRecap from "./sections/MonthlyRecap";

import Vault from "./sections/Vault";
import HabitTracker from "./sections/HabitTracker";
import MoodSupport from "./sections/MoodSupport";
import SoftMemoryGarden from "./sections/SoftMemoryGarden";

import AffirmationGenerator from "./sections/AffirmationGenerator";
import EnergyForecast from "./sections/EnergyForecast";

import BadDayButton from "./sections/BadDayButton";
import BurnoutOverride from "./sections/BurnoutOverride";

import ContentBatcher from "./sections/ContentBatcher";
import SeriesBuilder from "./sections/SeriesBuilder";

import OutfitLookbook from "./sections/OutfitLookbook";
import StyleStudio from "./sections/StyleStudio";

import DropLaunch from "./sections/DropLaunch";
import DigitalProductStudio from "./sections/DigitalProductStudio";

import TravelPlannerJapan from "./sections/TravelPlannerJapan";
import TravelTemplate from "./sections/TravelTemplate";

import FanLogbook from "./sections/FanLogbook";
import SelfTimerRituals from "./sections/SelfTimerRituals";

export default function Home() {
  return (
    <Layout>
      <Header />
      <h1>🌿 Life OS: Leilani’s Dashboard</h1>
      <p>Welcome to your custom life system. Your daily flow, mood tools, and creative trackers all live here.</p>

      <VibeSelector />
      <DailyPlanner />
      <WeeklyView />
      <MonthlyRecap />

      <Vault />
      <HabitTracker />
      <MoodSupport />
      <SoftMemoryGarden />

      <AffirmationGenerator />
      <EnergyForecast />

      <BadDayButton />
      <BurnoutOverride />

      <ContentBatcher />
      <SeriesBuilder />

      <OutfitLookbook />
      <StyleStudio />

      <DropLaunch />
      <DigitalProductStudio />

      <TravelPlannerJapan />
      <TravelTemplate />

      <FanLogbook />
      <SelfTimerRituals />
    </Layout>
  );
}
