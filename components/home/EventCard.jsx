import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function EventCard({ event }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-gray-50 p-3 rounded-lg mb-3 flex-row"
      onPress={() => router.push(`/events/${event.id}`)}
    >
      <Image source={event.image} className="rounded-lg mr-3"
        style={{ width: 64, height: 64}}
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-800">{event.title}</Text>
        <Text className="text-gray-500 text-xs">{event.date} • {event.time}</Text>
        <View className="bg-purple-100 rounded-full px-2 py-1 self-start mt-1">
          <Text className="text-purple-800 text-xs">{event.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
