export interface PostInterface {
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  publishedDateDescription: string;
  imageURL: string;
  author: {
    imageURL: string;
    name: string;
  };
  id: string;
}
