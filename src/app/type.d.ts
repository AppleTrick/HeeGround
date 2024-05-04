interface MainProps {
  children: ReactNode;
}

interface PostType {
  userId: number;
  slug: string;
  title: string;
  body: string;
  img?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;

}

interface FormType {
  [key: string]: any;
}
