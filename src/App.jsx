import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import WhyClients from "./components/WhyClients";
import BarberApplication from "./components/BarberApplication";
import ClientWaitlist from "./components/ClientWaitlist";
import ThankYouBarber from "./components/ThankYouBarber";
import ThankYouClient from "./components/ThankYouClient";
import ForBarbers from "./components/ForBarbers";

function App() {
  const path = window.location.pathname;

  if (path === "/for-barbers") {
    return <ForBarbers />;
  }

  if (path === "/thank-you-barber") {
    return <ThankYouBarber />;
  }

  if (path === "/thank-you-client") {
    return <ThankYouClient />;
  }

  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <WhyClients />
      <BarberApplication />
      <ClientWaitlist />
    </>
  );
}

export default App;