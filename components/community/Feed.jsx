// components/community/Feed.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { posts } from '../../data/communityData';
import { useRouter } from 'expo-router';

const Feed = () => {
  const [postText, setPostText] = useState('');
  const router = useRouter();

  const handlePost = () => {
    console.log("Post created:", postText);
    setPostText('');
    alert("Post created successfully!");
  };

  const renderPost = ({ item }) => (
    <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
      {/* Post Header */}
      <View className="flex-row items-center mb-3">
        <Image
          source={item.avatar}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          className="mr-2"
        />
        <View>
          <Text className="font-bold text-gray-800">{item.user}</Text>
          <Text className="text-gray-500 text-xs">
            {item.userProgram} • {item.time}
          </Text>
        </View>
      </View>
      
      {/* Post Content */}
      <Text className="text-gray-700 mb-3">{item.content}</Text>
      
      {/* Post Image (if available) */}
      {item.image && (
        <Image
          source={item.image}
          className="w-full h-48 rounded-lg mb-3"
          resizeMode="cover"
        />
      )}
      
      {/* Post Stats */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-gray-600 text-xs">{item.likes} likes</Text>
        <Text className="text-gray-600 text-xs">
          {item.comments?.length || 0} comments
        </Text>
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
              <Text className="text-gray-500">
                View all {item.comments.length} comments
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );

  return (
    <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
      {/* Create Post Section */}
      <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <View className="flex-row items-center mb-3">
          <Image
            source={require("../../assets/profile-avatar.png")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
            className="mr-2"
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
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default Feed;
