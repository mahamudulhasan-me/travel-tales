export interface IError {
  data: {
    message: string;
    success: boolean;
    stack?: string;
  };
}

export interface IMeta {
  limit: number;
  page: number;
  total: number;
  pageCount: number;
}
export interface IResponse<T> {
  data?: T;
  error?: IError;
  meta?: IMeta;
  success: boolean;
  message?: string;
}

export interface IQueryParams {
  name: string;
  value: boolean | React.Key | number | string;
}
