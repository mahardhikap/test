import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import { useData } from './VoteContext';

function FeedScreen() {
  const navigation = useNavigation();
  const {upvotePost, downvotePost, data} = useData()
  const [expandedPostId, setExpandedPostId] = useState(null);

  const handleUpvote = (id) => {
    upvotePost(id);
  };
  const handleDownvote = (id) => {
    downvotePost(id);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {data?.map((item, index)=>{
          const isExpanded = item.id === expandedPostId;
          return (
        <Pressable onPress={() => navigation.navigate('post-detail', {id: item.id})} key={index}>
          <View style={{height: 547, marginLeft:20, marginRight:20}}>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                width={48}
                height={48}
                style={{borderRadius: 24, marginLeft: 24}}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                 {item.name}
                </Text>
                <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                  Mar 27, 2023
                </Text>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            <Pressable onPress={() => setExpandedPostId(item.id)}>
              <View>
                <Text numberOfLines={isExpanded ? undefined : 3}>
                  {item.longText}
                </Text>
                {isExpanded ? '' : <Text style={{color:'blue'}}>..more</Text> }
              </View>
            </Pressable>
            <View>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Pressable onPress={() => handleDownvote(item.id)}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  {item.upVote}
                </Text>
                <Pressable onPress={() => handleUpvote(item.id)}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        </Pressable>
          )
        })}
        {/* <Pressable onPress={() => navigation.navigate('post-detail')}>
          <View style={{height: 547}}>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                width={48}
                height={48}
                style={{borderRadius: 24, marginLeft: 24}}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                  Usup Suparma
                </Text>
                <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                  Mar 27, 2023
                </Text>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            <Pressable onPress={() => setShowMore(!showMore)}>
              <View>
                <Text
                  style={{margin: 24}}
                  numberOfLines={showMore || isOverThreeLines ? null : 3}
                  ref={textRef}>
                  {showMore ? longText : longText.slice(0, 180)}
                  {!showMore && longText.length > 180 && (
                    <Text style={{color: 'blue'}}>... More</Text>
                  )}
                </Text>
              </View>
            </Pressable>
            <View>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Pressable onPress={() => console.log('downvote')}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
                <Pressable onPress={() => console.log('upvote')}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('post-detail')}>
          <View style={{height: 547}}>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                width={48}
                height={48}
                style={{borderRadius: 24, marginLeft: 24}}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                  Usup Suparma
                </Text>
                <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                  Mar 27, 2023
                </Text>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            <Pressable onPress={() => setShowMore(!showMore)}>
              <View>
                <Text
                  style={{margin: 24}}
                  numberOfLines={showMore || isOverThreeLines ? null : 3}
                  ref={textRef}>
                  {showMore ? longText : longText.slice(0, 180)}
                  {!showMore && longText.length > 180 && (
                    <Text style={{color: 'blue'}}>... More</Text>
                  )}
                </Text>
              </View>
            </Pressable>
            <View>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Pressable onPress={() => console.log('downvote')}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
                <Pressable onPress={() => console.log('upvote')}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        </Pressable> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
