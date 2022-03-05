import {
  HTTPDataSource,
  RequestOptions,
  ApolloError,
  Request,
  Response,
  RequestError,
  CacheTTLOptions,
  LRUOptions,
  HTTPDataSourceOptions
} from "apollo-datasource-http";
import { loggingMiddleware } from "../Context/index";
export class GitHub extends HTTPDataSource<HTTPDataSourceOptions> {
  constructor() {
    super("https://api.github.com/");
  }
}
