import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const mountainData = [
  {
    name: 'Mount Everest',
    location: 'Himalayas',
    countries: 'Nepal, China (Tibet)',
    imageUri: 'https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip', // Replace with the actual URI
  },
  {
    name: 'K2', //Godmin Austin
    location: 'Karakoram Range',
    countries: 'Pakistan, China',
    imageUri: 'https://www.hilal.gov.pk/uploads/gallery/619205da514e83f869515c782a328d3c.jpg', // Replace with the actual URI
  },
  {
    name: 'Kangchenjunga',
    location: 'Himalayas',
    countries: 'Nepal, India',
    imageUri: 'https://media.istockphoto.com/id/543183018/photo/sunrise-on-mount-kanchenjugha-at-dawn-sikkim.jpg?s=612x612&w=0&k=20&c=ONnlaZ9ny-HD9P3li-5t0tzpm0dHdahYRdmN_WxrMsc=',
  },
  {
    name: 'Lhotse',
    location: 'Himalayas',
    countries: 'Nepal, China (Tibet)',
    imageUri: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Makalu',
    location: 'Himalayas',
    countries: 'Nepal, China (Tibet)',
    imageUri: 'https://www.dreamersdestination.com/images/packages/mt-makalu.jpg',
  },
  {
    name: 'Cho Oyu',
    location: 'Himalayas',
    countries: 'Nepal, China (Tibet)',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ChoOyu-fromGokyo.jpg',
  },
  {
    name: 'Dhaulagiri',
    location: 'Himalayas',
    countries: 'Nepal',
    imageUri: 'https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2023/01/13213647/image0.jpeg',
  },
  {
    name: 'Manaslu',
    location: 'Himalayas',
    countries: 'Nepal',
    imageUri: 'https://www.himalayanascent.com/wp-content/uploads/2018/12/untitled-1.jpg',
  },
  {
    name: 'Nanga Parbat',
    location: 'Himalayas',
    countries: 'Pakistan',
    imageUri: 'https://www.travelertrails.com/wp-content/uploads/2022/11/Nanga-Parbat-2.jpg',
  },
  {
    name: 'Annapurna',
    location: 'Himalayas',
    countries: 'Nepal',
    imageUri: 'https://www.earths-edge.com/wp-content/uploads/2019/03/iStock-636019160.jpg',
  },
];

const activities = [
  {
    id: 1,
    name: "Mountain Hiking Tours",
    description: "Guided hiking tours to popular mountain trails with varying difficulty levels.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 2,
    name: "Rock Climbing Expeditions",
    description: "Thrilling rock climbing adventures in mountainous regions.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 3,
    name: "Mountain Biking Adventures",
    description: "Exciting mountain biking tours on challenging terrains.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 4,
    name: "Skiing and Snowboarding Packages",
    description: "Winter sports activities on mountain slopes with skiing and snowboarding options.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 5,
    name: "Mountain Photography Workshops",
    description: "Workshops focusing on mountain photography, capturing scenic landscapes.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 6,
    name: "Mountain Yoga Retreats",
    description: "Yoga and wellness retreats set in the serene atmosphere of the mountains.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
  {
    id: 7,
    name: "Paragliding Adventures",
    description: "Soaring through the skies with paragliding experiences in mountainous regions.",
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  },
];



const UserProfileScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* User Profile Section */}
      <View
        style={{
          marginBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        {/* Profile Icon */}
        <Image
          source={{ uri: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png' }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
        />

        {/* User Profile Info */}
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Welcome, Jonathan!
          </Text>
          {/* Add more user profile information here */}
        </View>
      </View>

      {/* Search Field */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#e0e0e0',
          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
        }}>
        <TextInput
          placeholder="Search..."
          style={{ flex: 1, paddingVertical: 0 }}
        />
        {/* Filter Icon */}
        <TouchableOpacity style={{ marginLeft: 8 }}>
          <Icon name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
        Discover
      </Text>
      {/* Horizontal Scrollable Containers */}
      <View style={{ marginBottom: 16 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {/* Map over mountain data and render each container */}
            {mountainData.map((mountain, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: 150,
                  borderRadius: 10,
                  height: 200,
                  backgroundColor: 'lightblue',
                  marginRight: 8,
                }}>
                <Image
                  source={{uri: mountain.imageUri}}
                  style={{ width: '100%', height: '100%', borderRadius: 10 }}
                />
                <View style={{ position: 'absolute', bottom: 0, padding: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                    {mountain.name}
                  </Text>
                  <Text style={{ fontSize: 14, color: 'white' }}>
                    {mountain.location}
                  </Text>
                  <Text style={{ fontSize: 14, color: 'white' }}>
                    {mountain.countries}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
        Categories
      </Text>
      <View style={{ marginBottom: 16 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Example of Horizontal Scrollable Container */}
          <View style={{ flexDirection: 'row' }}>
            {/* Add your scrollable content here */}
            {/* Example Item */}
            <TouchableOpacity
              style={{
                width: 90,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#3299FF',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}>
              <Text>Himalayas</Text>
            </TouchableOpacity>

            {/* Example Item */}
            <TouchableOpacity
              style={{
                width: 80,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#3299FF',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Rocky</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 70,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#3299FF',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Alps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 70,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#3299FF',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Andes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 110,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#3299FF',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Appalachians</Text>
            </TouchableOpacity>

            {/* Add more items as needed */}
          </View>
        </ScrollView>
      </View>
      {/* Vertical Scrollable Containers for Top Trending */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          Top Trending
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 16 }}>
      {/* Example of Vertical Scrollable Container */}
      {activities.map((activity) => (
        <TouchableOpacity
          key={activity.id}
          style={{
            marginBottom: 8,
            padding: 16,
            backgroundColor: 'white',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#ddd',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: activity.image }}
            style={{
              width: 100,
              height: 100,
              marginRight: 16,
              borderRadius: 4,
            }}
          />
          <View>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{activity.name}</Text>
            <Text style={{ marginBottom: 4 }}>{activity.description}</Text>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{`Price: ${activity.price}`}</Text>
            <Text style={{ fontWeight: 'bold' }}>{`Rating: ${activity.rating}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
      </View>
      {/* Bottom Navigation Bar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#3299FF',
          paddingVertical: 10,
          borderRadius: 28,
        }}>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen1')}>
          <Icon name="home" size={24} color="white" />
          <Text style={{ color: 'white' }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen1')}>
          <Icon name="earth-outline" size={24} color="white" />
          <Text style={{ color: 'white' }}>Edu</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Community')}>
          <Icon name="people" size={24} color="white" />
          <Text style={{ color: 'white' }}>Social</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen3')}>
          <Icon name="ribbon" size={24} color="white" />
          <Text style={{ color: 'white' }}>Impact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileScreen;
