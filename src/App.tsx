import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import P5Model from "./pages/P5Model";
import AIRoboticsLab from "./pages/AIRoboticsLab";
import AutomotiveLab from "./pages/AutomotiveLab";
import ACClassrooms from "./pages/ACClassrooms";
import IITNEETFoundation from "./pages/IITNEETFoundation";
import HolisticDevelopment from "./pages/HolisticDevelopment";
import ProjectBasedLearning from "./pages/ProjectBasedLearning";
import HandsOnActivities from "./pages/HandsOnActivities";
import FieldTrips from "./pages/FieldTrips";
import DigitalFest from "./pages/DigitalFest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/p5-model" element={<P5Model />} />
            <Route path="/ai-robotics-lab" element={<AIRoboticsLab />} />
            <Route path="/automotive-lab" element={<AutomotiveLab />} />
            <Route path="/ac-classrooms" element={<ACClassrooms />} />
            <Route path="/iit-neet-foundation" element={<IITNEETFoundation />} />
            <Route path="/holistic-development" element={<HolisticDevelopment />} />
            <Route path="/project-based-learning" element={<ProjectBasedLearning />} />
            <Route path="/hands-on-activities" element={<HandsOnActivities />} />
            <Route path="/field-trips" element={<FieldTrips />} />
            <Route path="/digital-fest" element={<DigitalFest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
