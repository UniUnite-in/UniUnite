import { SafeAreaView, Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const CommunityScreen = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [postText, setPostText] = useState('');
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: require("../../../assets/avatar1.png"),
      userProgram: "Computer Science",
      content: "Just submitted my final project for Computer Graphics! #computerscience #finalsweek",
      image: require("../../../assets/post1.jpeg"),
      likes: 24,
      comments: [
        { user: "Maya Patel", text: "Congrats! How did it go?" },
        { user: "John Doe", text: "Great job! Can't wait to see it." }
      ],
      time: "2h ago"
    },
    {
      id: 2,
      user: "Priya Singh",
      avatar: require("../../../assets/avatar2.png"),
      userProgram: "Data Science",
      content: "Looking for team members for the upcoming hackathon. DM if interested! #CipherThon #teamwork",
      likes: 42,
      comments: [
        { user: "Alex Johnson", text: "I'm interested! Will DM you." },
        { user: "Sarah Lee", text: "What kind of skills are you looking for?" }
      ],
      time: "4h ago"
    },
    {
      id: 3,
      user: "James Wilson",
      avatar: require("../../../assets/avatar3.png"),
      userProgram: "Business Administration",
      content: "Just got selected for the summer internship program at Microsoft! So excited to start this journey. #internship #microsoft",
      image: require("../../../assets/post3.jpeg"),
      likes: 87,
      comments: [
        { user: "Priya Singh", text: "Congratulations! That's amazing news." },
        { user: "John Doe", text: "Wow! Share your experience when you start." }
      ],
      time: "8h ago"
    }
  ];
  const avatars = [
    require("../../../assets/avatar1.png"),
    require("../../../assets/avatar2.png"),
    require("../../../assets/avatar3.png"),
    require("../../../assets/avatar4.png")
  ];
  
  // Mock groups data
  const groups = [
    { id: 1, name: "CS Study Group", members: 156, image: require("../../../assets/group1.jpeg") },
    { id: 2, name: "Campus Photography Club", members: 98, image: require("../../../assets/group2.jpeg") },
    { id: 3, name: "Tech Startup Network", members: 214, image: require("../../../assets/group3.jpeg") }
  ];
  
  // Mock trending topics
  const trendingTopics = [
    { id: 1, tag: "#finalsweek", posts: 342 },
    { id: 2, tag: "#CipherThon", posts: 189 },
    { id: 3, tag: "#campuslife", posts: 275 }
  ];

  const handlePost = () => {
    // Logic to post would go here
    console.log("Post created:", postText);
    setPostText('');
    alert("Post created successfully!");
  };

  const renderPost = ({ item }) => (
    <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
      {/* Post Header */}
      <View className="flex-row items-center mb-3">
        <Image source={item.avatar} className="w-10 h-10 rounded-full mr-2" />
        <View>
          <Text className="font-bold text-gray-800">{item.user}</Text>
          <Text className="text-gray-500 text-xs">{item.userProgram} • {item.time}</Text>
        </View>
      </View>
      
      {/* Post Content */}
      <Text className="text-gray-700 mb-3">{item.content}</Text>
      
      {/* Post Image (if any) */}
      {item.image && (
        <Image 
          source={item.image} 
          className="w-full rounded-lg mb-3 " 
          resizeMode="contain"
        />
      )}
      
      {/* Post Stats */}
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center">
          <Text className="text-gray-600 text-xs">{item.likes} likes</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-600 text-xs">{item.comments?.length || 0} comments</Text>
        </View>
      </View>
      
      {/* Post Actions */}
      <View className="flex-row justify-around border-t border-b border-gray-200 py-2">
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome5 name="heart" size={16} color="#6B7280" />
          <Text className="ml-2 text-gray-600">Like</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome5 name="comment" size={16} color="#6B7280" />
          <Text className="ml-2 text-gray-600">Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome5 name="share" size={16} color="#6B7280" />
          <Text className="ml-2 text-gray-600">Share</Text>
        </TouchableOpacity>
      </View>
      
      {/* Comments Section */}
      {item.comments && item.comments.length > 0 && (
        <View className="mt-3">
          {item.comments.slice(0, 2).map((comment, index) => (
            <View key={index} className="flex-row mt-2">
              <Text className="font-bold text-gray-800 mr-1">{comment.user}</Text>
              <Text className="text-gray-700">{comment.text}</Text>
            </View>
          ))}
          {item.comments.length > 2 && (
            <TouchableOpacity className="mt-2">
              <Text className="text-gray-500">View all {item.comments.length} comments</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Tabs */}
      <View className="flex-row bg-white px-4 pt-2">
        <TouchableOpacity 
          className={`mr-4 pb-2 ${activeTab === 'feed' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('feed')}
        >
          <Text className={activeTab === 'feed' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Feed</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`mr-4 pb-2 ${activeTab === 'groups' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('groups')}
        >
          <Text className={activeTab === 'groups' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Groups</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`mr-4 pb-2 ${activeTab === 'discover' ? 'border-b-2 border-purple-600' : ''}`}
          onPress={() => setActiveTab('discover')}
        >
          <Text className={activeTab === 'discover' ? 'text-purple-600 font-bold' : 'text-gray-600'}>Discover</Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'feed' && (
        <ScrollView className="flex-1 px-4 pt-4">
          {/* Create Post */}
          <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <View className="flex-row items-center mb-3">
              <Image 
                source={require("../../../assets/profile-avatar.png")} 
                className="w-10 h-10 rounded-full mr-2" 
              />
              <TextInput
                className="flex-1 bg-gray-100 rounded-full px-4 py-2"
                placeholder="What's on your mind?"
                value={postText}
                onChangeText={setPostText}
              />
            </View>
            
            <View className="flex-row justify-between">
              <TouchableOpacity className="flex-row items-center">
                <FontAwesome5 name="image" size={16} color="#6B7280" />
                <Text className="ml-2 text-gray-600">Photo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center">
                <FontAwesome5 name="video" size={16} color="#6B7280" />
                <Text className="ml-2 text-gray-600">Video</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-purple-600 px-4 py-2 rounded-lg"
                onPress={handlePost}
                disabled={!postText.trim()}
              >
                <Text className="text-white">Post</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Posts List */}
          {posts.map(post => renderPost({ item: post }))}
        </ScrollView>
      )}
      
      {activeTab === 'groups' && (
        <ScrollView className="flex-1 px-4 pt-4">
          {/* Groups List */}
          <Text className="font-bold text-lg text-gray-800 mb-3">Your Groups</Text>
          
          {groups.map(group => (
            <TouchableOpacity 
              key={group.id}
              className="bg-white p-4 rounded-lg shadow-sm mb-4 flex-row items-center"
            >
              <Image 
                source={group.image} 
                className="w-12 h-12 rounded-lg mr-3" 
              />
              <View className="flex-1">
                <Text className="font-bold text-gray-800">{group.name}</Text>
                <Text className="text-gray-500 text-xs">{group.members} members</Text>
              </View>
              <FontAwesome5 name="chevron-right" size={16} color="#6B7280" />
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity className="bg-purple-600 p-3 rounded-lg items-center mt-2 mb-4">
            <Text className="text-white font-semibold">Create New Group</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      
      {activeTab === 'discover' && (
        <ScrollView className="flex-1 px-4 pt-4">
          {/* Trending Topics */}
          <Text className="font-bold text-lg text-gray-800 mb-3">Trending Topics</Text>
          
          {trendingTopics.map(topic => (
            <TouchableOpacity 
              key={topic.id}
              className="bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <Text className="font-bold text-purple-600">{topic.tag}</Text>
              <Text className="text-gray-500 text-xs">{topic.posts} posts</Text>
            </TouchableOpacity>
          ))}
          
          {/* People You May Know */}
          <Text className="font-bold text-lg text-gray-800 mb-3 mt-2">People You May Know</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-4">
            {[1, 2, 3, 4].map(id => (
              <View key={id} className="bg-white p-3 rounded-lg shadow-sm mr-3 items-center" style={{ width: 120 }}>
                <Image 
                  source={avatars[id - 1]} 
                  className="w-16 h-16 rounded-full mb-2" 
                />
                <Text className="font-bold text-gray-800 text-center">User {id}</Text>
                <Text className="text-gray-500 text-xs text-center">Computer Science</Text>
                <TouchableOpacity className="bg-purple-600 px-3 py-1 rounded-full mt-2">
                  <Text className="text-white text-xs">Connect</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CommunityScreen;