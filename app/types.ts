export type Project = {
  id: string;
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
