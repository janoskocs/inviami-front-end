import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LogInForm from './components/LogInForm';
import EventDashboard from './components/EventDashboard';

const EventAdmin = () => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <>
      <Nav />
      {!user && <LogInForm setUser={setUser} />}
      {user && <EventDashboard user={user} />}
      <Footer />
    </>
  );
};

export default EventAdmin;
