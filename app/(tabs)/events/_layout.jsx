import { Stack } from "expo-router";
import "../../../global.css"; 


export default function EventsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Event List Page */}
      <Stack.Screen name="index" />
      
      {/* Event Details Page */}
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
