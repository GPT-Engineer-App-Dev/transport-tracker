import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Truck, Map, User, FileText } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import RoutesPage from "./pages/Routes.jsx";
import Drivers from "./pages/Drivers.jsx";
import Reports from "./pages/Reports.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Vehicles",
    to: "/vehicles",
    icon: <Truck className="h-4 w-4" />,
  },
  {
    title: "Routes",
    to: "/routes",
    icon: <Map className="h-4 w-4" />,
  },
  {
    title: "Drivers",
    to: "/drivers",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <FileText className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;