import React from 'react';
import { Container, InteractionText, InteractionWrapper, Interaction, PostText, PostTime, UserInfoText, Card, UserImg, UserInfo, UserName, PostImg, Divider, } from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
const PostCard = ({ item }) => {



  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.UserName}</UserName>
          <PostTime>{item.PostTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != "none" ? <PostImg source={item.postImg} /> : <Divider />}
      {/*<PostImg source={require('../images/posts/post-img-2.jpg')} />*/}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name="heart-outline" size={25} color='#2e64e5' />
          <InteractionText active={item.liked}> 12 Like</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>



  )
}
export default PostCard;