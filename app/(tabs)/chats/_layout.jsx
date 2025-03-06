import { Stack } from 'expo-router';
import '../../../global.css'

export default function ChatsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}