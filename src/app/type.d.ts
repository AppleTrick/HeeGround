interface MainProps {
  children: ReactNode;
}

interface PostType {
  userId: number;
  slug: string;
  title: string;
  body: string;
  img?: string;
}
