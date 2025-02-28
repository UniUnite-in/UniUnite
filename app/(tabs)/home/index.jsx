import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { eventData } from "../../../data/events";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  
  // Mock user data
  const userData = {
    name: "John Doe",
    university: "Lovely Professional University",
    notificationCount: 3,
    upcomingEvents: 2
  };
  
  // Featured events - taking first 2 from events data
  const featuredEvents = eventData.slice(0, 2);
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: require("../../../assets/avatar1.png"), // You'll need to add these images
      content: "Just submitted my final project for Computer Graphics! #computerscience #finalsweek",
      likes: 24,
      comments: 5,
      time: "2h ago"
    },
    {
      id: 2,
      user: "Priya Singh",
      avatar: require("../../../assets/avatar2.png"),
      content: "Looking for team members for the upcoming hackathon. DM if interested! #CipherThon #teamwork",
      likes: 42,
      comments: 16,
      time: "4h ago"
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Welcome Section */}
        <View className="bg-purple-600 p-4 rounded-b-3xl">
          <Text className="text-white text-2xl font-bold">
            Welcome back, {userData.name}!
          </Text>
          <Text className="text-white opacity-80">
            {userData.university}
          </Text>
          
          {/* Stats Cards */}
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
        
        {/* Upcoming Events */}
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-800">Upcoming Events</Text>
            <TouchableOpacity onPress={() => router.push('/events')}>
              <Text className="text-purple-600">See All</Text>
            </TouchableOpacity>
          </View>
          
          {/* Events List */}
          {featuredEvents.map((event) => (
            <TouchableOpacity 
              key={event.id}
              className="bg-gray-50 p-3 rounded-lg mb-3 flex-row"
              onPress={() => router.push(`/events/${event.id}`)}
            >
              <Image 
                source={event.image} 
                className="w-16 h-16 rounded-lg mr-3" 
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
          ))}
        </View>
        
        {/* Community Feed */}
        <View className="p-4">
          <Text className="text-lg font-bold text-gray-800 mb-3">Community Feed</Text>
          
          {posts.map((post) => (
            <View key={post.id} className="bg-gray-50 p-3 rounded-lg mb-3">
              {/* Post Header */}
              <View className="flex-row items-center mb-2">
                <Image source={post.avatar} className="w-10 h-10 rounded-full mr-2" />
                <View>
                  <Text className="font-bold text-gray-800">{post.user}</Text>
                  <Text className="text-gray-500 text-xs">{post.time}</Text>
                </View>
              </View>
              
              {/* Post Content */}
              <Text className="text-gray-700 mb-3">{post.content}</Text>
              
              {/* Post Actions */}
              <View className="flex-row justify-between">
                <TouchableOpacity className="flex-row items-center">
                  <FontAwesome5 name="heart" size={16} color="#6B7280" solid />
                  <Text className="ml-1 text-gray-600">{post.likes}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center">
                  <FontAwesome5 name="comment" size={16} color="#6B7280" />
                  <Text className="ml-1 text-gray-600">{post.comments}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <FontAwesome5 name="share" size={16} color="#6B7280" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
          
          <TouchableOpacity 
            onPress={() => router.push('/community')}
            className="bg-purple-100 py-2 rounded-lg items-center mt-2"
          >
            <Text className="text-purple-600 font-semibold">View More Posts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}