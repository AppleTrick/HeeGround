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

interface FormType {
  [key: string]: any;
}
