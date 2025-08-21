export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  body: string;
};

// export type BlogPageDetailPageProps = {
//   postMeta: Post;
//   markDown: string;
// };

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  image: {
    url: string;
    formats?: {
      large?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      thumbnail?: { url: string };
    };
  };
};

export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  image: {
    name?: string;
    url: string;
    formats?: {
      large?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      thumbnail?: { url: string };
    };
  };
};
