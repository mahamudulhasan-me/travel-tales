export interface IComment {
  _id?: string; // Optional when creating new comments
  postId: string; // ID of the post this comment is related to
  author: {
    _id: string; // ID of the user who created the comment
    name: string; // Name of the user who created the comment
    profileImage: string; // Profile image of the user who created the comment
    coverImage: string; // Cover image of the user who created the comment
    email: string; // Email of the user who created the comment
    status: string; // Status of the user who created the comment
  }; // ID of the user who created the comment
  content: string; // The content of the comment
  createdAt?: Date; // Automatically set when the comment is created
  updatedAt?: Date; // Automatically set when the comment is updated
  __v?: number; // Version key for Mongoose documents (optional)
}

export interface ICreateComment {
  postId: string;
  author: string;
  content: string;
}
export interface IUpdateComment {
  commentId: string;
  content: string;
}
