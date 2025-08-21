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

export type PostMeta = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
};

export type BlogPageDetailPageProps = {
  postMeta: PostMeta;
  markDown: string;
};

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export type StrapiResponse<T> = {
  data: T[];
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
