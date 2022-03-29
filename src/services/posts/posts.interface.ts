export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostParams {
  title: string;
  body: string;
  userId: number;
}
