import { AppErrorCode, AppErrorObject } from ".";

type AppErrorArgs = {
  messageParams?: Record<string, unknown>;
  ref?: string;
  id?: string;
};

export class AppError<TMessageCode> extends Error {
  public status = 500;
  public code: AppErrorCode = "INTERNAL_SERVER_ERROR";
  public ref?: string;
  public messageCode?: TMessageCode;
  public messageParams?: Record<string, unknown>;
  public id?: string;

  constructor(messageCode?: TMessageCode, args?: AppErrorArgs) {
    super("");
    this.message = this.code;
    this.messageCode = messageCode;
    this.messageParams = args?.messageParams;
    this.ref = args?.ref;
    this.id = args?.id;
  }

  get frontendMock(): Partial<AppErrorObject> {
    return {
      [this.code]: {
        locations: undefined,
        // TODO: Use central function that's being reused to i18n frontend as well
        message: this.messageCode || this.code,
        name: this.name,
        nodes: undefined,
        originalError: undefined,
        path: undefined,
        positions: undefined,
        source: undefined,
        extensions: {
          code: this.code,
          ref: this.ref,
          status: this.status,
          messageCode: this.messageCode,
          messageParams: this.messageParams,
        },
      },
    };
  }
}
