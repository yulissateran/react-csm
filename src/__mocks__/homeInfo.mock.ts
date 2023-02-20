const imageURl =
  'https://images.unsplash.com/photo-1421986527537-888d998adb74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

const hero = {
  URL: imageURl,
  altText: 'Woman holding a sparkler light',
};

const mainVideosList = [
  {
    title: '10 Things You Probably Didn’t Know About Chrome Debugging',
    description:
      'Because no one told you it was possible — until now — It doesn’t matter what kind of software developer you are. You will end up using Chrome for work. From browsing cat videos on YouTube to testing our micro SaaS apps (or whatever you’re working on), Chrome is a staple feature in our lives. However, many of us don’t get further…',
    URL: 'https://www.youtube.com/embed/H0XScE08hy8?rel=0&modestbranding=1&controls=0',
  },
];

const secondaryNotes = [
  {
    title: 'Image player',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus repellat doloribus vero, eos eum iusto facilis sint dolore natus molestias veniam alias praesentium maiores ipsum, itaque, laudantium perferendis labore?',
    imageURL: imageURl,
  },
  {
    title: 'Image player',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus repellat doloribus vero, eos eum iusto facilis sint dolore natus molestias veniam alias praesentium maiores ipsum, itaque, laudantium perferendis labore?',
    imageURL: imageURl,
  },
  {
    title: 'Image player',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus repellat doloribus vero, eos eum iusto facilis sint dolore natus molestias veniam alias praesentium maiores ipsum, itaque, laudantium perferendis labore?',
    imageURL: imageURl,
  },
];

const imageBanners = [
  {
    title: 'Image player',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    imageURL: imageURl,
  },
];

export const MOCK_HOME_NOTES = {
  imageBanners,
  mainVideosList,
  secondaryNotes,
  hero,
};
