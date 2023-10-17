import {createContext, useContext, useState} from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({children}) {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Usup Suparma',
      longText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellustinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum acdictum.`,
      upVote: 0,
      comment: [],
    },
    {
      id: 2,
      name: 'Bambang Cahyadi',
      longText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellustinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum acdictum.`,
      upVote: 0,
      comment: [],
    },
    {
      id: 3,
      name: 'Eko Yulianto',
      longText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellustinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum acdictum.`,
      upVote: 0,
      comment: [],
    },
  ]);

  const upvotePost = postId => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === postId) {
          return {
            ...item,
            upVote: item.upVote + 1,
          };
        }
        return item;
      });
    });
  };
  const downvotePost = postId => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === postId) {
          return {
            ...item,
            upVote: item.upVote - 1,
          };
        }
        return item;
      });
    });
  };

  const addComment = (postId, commentText) => {
    setData((prevData) => {
      return prevData.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comment: [
              ...post.comment,
              { username: 'Nama Pengguna', text: commentText },
            ],
          };
        }
        return post;
      });
    });
  };

  return (
    <DataContext.Provider value={{data, setData, upvotePost, downvotePost, addComment}}>
      {children}
    </DataContext.Provider>
  );
}
