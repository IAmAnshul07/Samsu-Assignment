import { BlogActionType } from "../actionTypes/blogActionTypes";
import data from "../../../MOCK_DATA.json";

const initialState = {
  blogs: [...data],
  draftBlogs: [],
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BlogActionType.SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case BlogActionType.SAVE_DRAFT_BLOG: {
      const draftBlog = [...state.draftBlogs];
      const index = draftBlog.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index > -1) {
        draftBlog[index] = action.payload;
      } else {
        draftBlog.push(action.payload);
      }
      return {
        ...state,
        draftBlogs: draftBlog,
      };
    }
    case BlogActionType.PUBLISH_BLOG: {
      const draftBlog = [...state.draftBlogs];
      const publishedBlogs = [...state.blogs];
      const index = draftBlog.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index > -1) {
        const blog = draftBlog[index];
        publishedBlogs.push(blog);
        draftBlog.splice(index, 1);
      } else {
        console.log("file: else", action.payload);
        publishedBlogs.push(action.payload);
      }
      return {
        ...state,
        blogs: publishedBlogs,
        draftBlogs: draftBlog,
      };
    }
    default:
      return state;
  }
};

export default BlogReducer;
