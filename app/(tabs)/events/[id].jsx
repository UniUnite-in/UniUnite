import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { eventData } from "../../../data/events";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function EventDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const event = eventData.find((e) => e.id === id);

  if (!event) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-red-500">Event not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* Carousel for Event Images */}
        <Carousel
          width={width * 0.9}
          height={200}
          autoPlay
          loop
          data={event.images}
          renderItem={({ item }) => (
            <View className="w-full h-full items-center justify-center">
              <Image
                source={item}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
                style={{ alignSelf: "center" }}
              />
            </View>
          )}
          style={{ alignSelf: "center" }}
        />



        {/* Event Details Section */}
        <View className="m-4">
          {/* Event Type Badge */}
          <View className="bg-gray-800 rounded-md px-2 py-1 self-start">
            <Text className="text-white text-xs">{event.type}</Text>
          </View>

          {/* Title & Organizer */}
          <Text className="mt-2 text-2xl font-bold text-gray-800">
            {event.title}
          </Text>
          <Text className="text-sm text-gray-500">{event.organizer}</Text>

          {/* Date, Day & Price Row */}
          <View className="mt-2 flex-row items-center">
            <View className="flex-row items-center mr-10">
              <Text className="text-sm text-gray-600">{event.date}</Text>
              <Text className="text-sm text-gray-400 ml-2">| {event.day}</Text>
            </View>
            <Text className="text-sm font-semibold text-red-500">
              {event.price}
            </Text>
          </View>

          {/* Split Section: Left with Location & Deadline, Right with Book Now Button */}
          <View className="mt-4 flex-row items-center">
            {/* Left Part */}
            <View className="flex-1">
              <Text className="text-s text-gray-600">Location:</Text>
              <Text className="text-s text-gray-800">{event.address}</Text>
              <Text className="text-s text-gray-600 mt-1">Deadline:</Text>
              <Text className="text-s text-orange-500">{event.expiry}</Text>
            </View>
            {/* Right Part: Book Now Button */}
            
          </View>

          {/* Description Section */}
          <View className="mt-4">
            <Text className="text-base font-semibold text-gray-800">Description</Text>
            <Text className="mt-2 text-sm text-gray-600">{event.description}</Text>
          </View>

          {/* Rewards / Extra Information Section */}
          {event.rewards && event.rewards.length > 0 && (
            <View className="mt-4">
              <Text className="text-base font-semibold text-gray-800">Rewards</Text>
              {event.rewards.map((reward, index) => (
                <Text key={index} className="text-s text-gray-600 mt-1">
                  • {reward}
                </Text>
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={() => {
                // Insert booking functionality if needed
              }}
              className="bg-red-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-bold text-xs">Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
