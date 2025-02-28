import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function EventCard({ event }) {
  const router = useRouter();

  return (
    <View className="flex-row ml-2">
      {/* Left Part: Image */}
      <Image
        source={event.image}
        className="rounded-lg"
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          alignSelf: "center",
          alignevents: "center"
        }}
      />

      {/* Right Part: Description */}
      <View className="flex-1 p-2">
        {/* Event Type */}
        <View className="bg-gray-800 rounded-md px-2 py-1 self-start mb-1">
          <Text className="text-white text-xs">{event.type}</Text>
        </View>

        {/* Title & Organizer */}
        <Text className="font-bold text-base text-gray-800">
          {event.title}
        </Text>
        <Text className="text-xs text-gray-500">{event.organizer}</Text>

        {/* Date & Day (same row) */}
        <View className="flex-row events-center mt-1">
          <Text className="text-xs text-gray-600 mr-2">
            {event.date}
          </Text>
          <Text className="text-xs text-gray-400">| {event.day}</Text>
        </View>

        {/* Price */}
        <Text className="text-xs text-red-500 mt-1">
          {event.price}
        </Text>

        {/* Next part: location + expiry (left), view button (right) */}
        <View className="flex-row events-center justify-between mt-2" 
    style={{ justifyContent: 'space-between' }}>
          <View>
            <Text className="text-xs text-gray-600">
              {event.location}
            </Text>
            <Text className="text-xs text-orange-500">
              {event.expiry}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // Navigate to details
              router.push(`events/${String(event.id)}`);
            }}
            className="bg-orange-500 px-3 py-1 rounded-lg"
          >
            <Text className="text-white font-semibold text-s">
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
