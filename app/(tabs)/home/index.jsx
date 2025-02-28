import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeSection } from "../../../components/home/WelcomeSection";
import { EventCard } from "../../../components/home/EventCard";
import { Post } from "../../../components/home/Post";
import { eventData } from "../../../data/events";
import { useRouter } from "expo-router";
import {userData , posts} from "../../../data/homeData";


export default function HomeScreen() {
  const router = useRouter();
  const featuredEvents = eventData.slice(0, 2);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <WelcomeSection userData={userData} />
        <View className="p-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
