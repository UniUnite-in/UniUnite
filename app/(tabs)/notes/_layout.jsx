import { Stack } from 'expo-router';
import '../../../global.css'

export default function NotesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="upload" />
    </Stack>
  );
}