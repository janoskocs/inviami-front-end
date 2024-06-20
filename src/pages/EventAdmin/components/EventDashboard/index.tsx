import { useEffect } from 'react';
import axios from 'axios';
import { GET_EVENT_ADMIN } from '@/api';

interface EventDashboardProps {
  user: string | null;
}
const EventDashboard = ({ user }: EventDashboardProps) => {
  const handleSignOut = () => {
    console.log('Signing out...');
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(GET_EVENT_ADMIN, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      console.log('data:', data);
    };
    getUser();
  }, []);
  return (
    <>
      <h1>Event Dashboard</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default EventDashboard;
