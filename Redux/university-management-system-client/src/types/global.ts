export interface IError {
  data: {
    message: string;
    success: boolean;
    stack?: string;
  };
}

export interface IResponse {
  data?: any;
  error?: IError;
}
