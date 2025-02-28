import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const Profile = () => {
  return (
    <>
        <Stack screenOptions={{ headerShown: false }}>
         {/* Event List Page */}
         <Stack.Screen name="index" />
       </Stack>
    </>
  );
};

export default Profile;
