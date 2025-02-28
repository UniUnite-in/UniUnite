import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();
  
  // Mock profile data
  const profile = {
    name: "John Doe",
    username: "@johndoe",
    avatar: require("../../assets/profile-avatar.png"), // You'll need to add this image
    university: "Lovely Professional University",
    program: "Computer Science",
    year: "3rd Year",
    bio: "Tech enthusiast | Basketball player | AI researcher",
    connections: 156,
    events: 12,
    posts: 27,
    interests: ["Programming", "Basketball", "AI", "Photography"]
  };
  
  // Mock activity data
  const activities = [
    { id: 1, type: "event", title: "Attended Cipher Thon 2.0", time: "2 days ago" },
    { id: 2, type: "connection", title: "Connected with Priya Singh", time: "3 days ago" },
    { id: 3, type: "post", title: "Posted about AI research project", time: "5 days ago" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Profile Header */}
        <View className="bg-purple-600 pt-4 pb-16 px-4 rounded-b-3xl">
          <Text className="text-white text-xl font-bold">{profile.name}</Text>
          <Text className="text-white opacity-80">{profile.username}</Text>
        </View>
        
        {/* Profile Card */}
        <View className="mx-4 bg-white rounded-xl shadow-md p-4 -mt-12">
          <View className="flex-row">
            {/* Avatar */}
            <Image 
              source={profile.avatar} 
              className="w-20 h-20 rounded-full border-4 border-white -mt-10"
            />
            
            {/* Stats */}
            <View className="flex-1 flex-row justify-evenly ml-2">
              <View className="items-center">
                <Text className="font-bold text-gray-800">{profile.connections}</Text>
                <Text className="text-gray-500 text-xs">Connections</Text>
              </View>
              
              <View className="items-center">
                <Text className="font-bold text-gray-800">{profile.events}</Text>
                <Text className="text-gray-500 text-xs">Events</Text>
              </View>
              
              <View className="items-center">
                <Text className="font-bold text-gray-800">{profile.posts}</Text>
                <Text className="text-gray-500 text-xs">Posts</Text>
              </View>
            </View>
          </View>
          
          {/* University Info */}
          <View className="mt-4">
            <View className="flex-row items-center">
              <FontAwesome5 name="university" size={14} color="#6B7280" />
              <Text className="text-gray-700 ml-2">{profile.university}</Text>
            </View>
            
            <View className="flex-row items-center mt-1">
              <FontAwesome5 name="graduation-cap" size={14} color="#6B7280" />
              <Text className="text-gray-700 ml-2">{profile.program}, {profile.year}</Text>
            </View>
          </View>
          
          {/* Bio */}
          <Text className="text-gray-700 mt-3">{profile.bio}</Text>
          
          {/* Edit Profile Button */}
          <TouchableOpacity className="bg-purple-600 py-2 rounded-lg items-center mt-4">
            <Text className="text-white font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        {/* Interests */}
        <View className="mx-4 mt-6">
          <Text className="font-bold text-gray-800 mb-2">Interests</Text>
          <View className="flex-row flex-wrap">
            {profile.interests.map((interest, index) => (
              <View key={index} className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                <Text className="text-gray-700">{interest}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Recent Activity */}
        <View className="mx-4 mt-6 mb-8">
          <Text className="font-bold text-gray-800 mb-2">Recent Activity</Text>
          
          {activities.map((activity) => (
            <View key={activity.id} className="bg-gray-50 p-3 rounded-lg mb-3 flex-row items-center">
              <View className="w-8 h-8 rounded-full bg-purple-100 items-center justify-center mr-3">
                <FontAwesome5 
                  name={
                    activity.type === "event" ? "calendar-alt" : 
                    activity.type === "connection" ? "user-friends" : "pen"
                  } 
                  size={14} 
                  color="#8B5CF6" 
                />
              </View>
              <View>
                <Text className="text-gray-800">{activity.title}</Text>
                <Text className="text-gray-500 text-xs">{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;