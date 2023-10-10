export type StoryType = {
  id: number;
  title: string;
  points: number;
  content: string;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  url: string;
  domain: string;
  comments_count: number;
  comments?: Array<CommentType>;
};

export type CommentType = {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments?: Array<CommentType>;
};

export type UserType = {
  id: string;
  created: number;
  karma: number;
};
