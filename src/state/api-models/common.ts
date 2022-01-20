export type SortOrder = "asc" | "desc";

// GET /users?filter[id]=1,2,3,4,5&filter[admin]=true
export type Filter = {
  [field: string]: any;
};

export type Sort = {
  [field: string]: SortOrder;
};

export type Error = { code: string; message: string };

export type CommonRequest = {};

export type CommonResponse = {};

export type PaginationRequest = {
  page?: number;
  items_per_page?: number;
};

export type PaginationResponse = {
  page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};

export type SearchRequest = CommonRequest & {
  filter?: Filter;
  sort?: Sort;
  pagination?: PaginationRequest;
};

export type BulkRequest = CommonRequest & {
  action: string;
  ids?: string[];
};
