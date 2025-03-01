import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WelcomeSection } from "../../../components/home/WelcomeSection";
import { EventCard } from "../../../components/home/EventCard";
import { Post } from "../../../components/home/Post";
import { eventData } from "../../../data/events";
import { useRouter } from "expo-router";
import {userData , posts} from "../../../data/homeData";
import { useAuth } from "../../(auth)/authContext";
import { useEffect } from "react";

export default function HomeScreen() {
  const featuredEvents = eventData.slice(0, 2);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign_in');
    }
  }, [user]);
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
