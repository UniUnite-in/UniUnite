import { Stack } from 'expo-router';
import TopNavBar from './components/TopNavBar';

export default function Layout() {
  return (
    <>
      <TopNavBar />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
