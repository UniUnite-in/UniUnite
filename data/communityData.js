// data/communityData.js

export const posts = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: require("../assets/avatar1.png"),
      userProgram: "Computer Science",
      content: "Just submitted my final project for Computer Graphics! #computerscience #finalsweek",
      image: require("../assets/post1.jpeg"),
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
      avatar: require("../assets/avatar2.png"),
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
      avatar: require("../assets/avatar3.png"),
      userProgram: "Business Administration",
      content: "Just got selected for the summer internship program at Microsoft! So excited to start this journey. #internship #microsoft",
      image: require("../assets/post3.jpeg"),
      likes: 87,
      comments: [
        { user: "Priya Singh", text: "Congratulations! That's amazing news." },
        { user: "John Doe", text: "Wow! Share your experience when you start." }
      ],
      time: "8h ago"
    }
  ];
  
  export const groups = [
    { id: 1, name: "CS Study Group", members: 156, image: require("../assets/group1.jpeg") },
    { id: 2, name: "Campus Photography Club", members: 98, image: require("../assets/group2.jpeg") },
    { id: 3, name: "Tech Startup Network", members: 214, image: require("../assets/group3.jpeg") }
  ];
  
  export const trendingTopics = [
    { id: 1, tag: "#finalsweek", posts: 342 },
    { id: 2, tag: "#CipherThon", posts: 189 },
    { id: 3, tag: "#campuslife", posts: 275 }
  ];
  
  export const avatars = [
    require("../assets/avatar1.png"),
    require("../assets/avatar2.png"),
    require("../assets/avatar3.png"),
    require("../assets/avatar4.png")
  ];
  