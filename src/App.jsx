import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Koran from "./Components/Koran/Koran";
import Hadiths from "./Components/Hadiths/Hadiths";
import PrayerTimes from "./Components/PrayerTimes/PrayerTimes";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Home/Home";
import "@fortawesome/fontawesome-free";
import Surah from "./Components/Surah/Surah";
import Azkar from "./Components/Azkar/Azkar";
import WakingUpReminders from "./Components/WakingUpReminders/WakingUpReminders";
import MorningRemembrance from "./Components/MorningRemembrance/MorningRemembrance";
import EveningRemembrance from "./Components/EveningRemembrance/EveningRemembrance";
import RemembranceOfSleep from "./Components/RemembranceOfSleep/RemembranceOfSleep";
import RemembranceAfterTheGreetingOfPrayer from "./Components/RemembranceAfterTheGreetingOfPrayer/RemembranceAfterTheGreetingOfPrayer";
import Praises from "./Components/Praises/Praises";
import Interpretation from "./Components/Interpretation/Interpretation";
import InterpretationOneSurah from "./Components/InterpretationOneSurah/InterpretationOneSurah"
import QuranKarimRadio from "./Components/QuranKarimRadio/QuranKarimRadio";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "koran", element: <Koran /> },
      { path: "hadiths", element: <Hadiths /> },
      { path: "interpretation", element: <Interpretation /> },
      { path: "interpretation/interpretationonesurah/:id", element: <InterpretationOneSurah /> },
      { path: "prayertimes", element: <PrayerTimes /> },
      { path: "qurankarimradio", element: <QuranKarimRadio /> },
      { path: "surah/:id/:englishName", element: <Surah /> },
      { path: "azkar", element: <Azkar /> },
      { path: "azkar/wakingup", element: <WakingUpReminders /> },
      { path: "azkar/morningremembrance", element: <MorningRemembrance /> },
      { path: "azkar/eveningremembrance", element: <EveningRemembrance /> },
      { path: "azkar/remembranceofsleep", element: <RemembranceOfSleep /> },
      {
        path: "azkar/remembranceafterthegreeting",
        element: <RemembranceAfterTheGreetingOfPrayer />,
      },
      { path: "azkar/praises", element: <Praises /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x}></RouterProvider>;
   

}

export default App;
