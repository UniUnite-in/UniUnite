import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function WelcomeSection({ userData }) {
  return (
    <View className="bg-purple-600 p-4 rounded-b-3xl">
      <Text className="text-white text-2xl font-bold">Welcome back, {userData.name}!</Text>
      <Text className="text-white opacity-80">{userData.university}</Text>
      <View className="flex-row justify-between mt-4 mb-2">
        <View className="bg-white/20 p-3 rounded-lg w-[48%]">
          <View className="flex-row items-center">
            <FontAwesome5 name="bell" size={16} color="white" />
            <Text className="text-white ml-2 font-bold">{userData.notificationCount}</Text>
          </View>
          <Text className="text-white mt-1">Notifications</Text>
        </View>
        <View className="bg-white/20 p-3 rounded-lg w-[48%]">
          <View className="flex-row items-center">
            <FontAwesome5 name="calendar-check" size={16} color="white" />
            <Text className="text-white ml-2 font-bold">{userData.upcomingEvents}</Text>
          </View>
          <Text className="text-white mt-1">Upcoming Events</Text>
        </View>
      </View>
    </View>
  );
}