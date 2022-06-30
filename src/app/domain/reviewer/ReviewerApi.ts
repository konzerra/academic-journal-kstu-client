import {AppApi} from "../AppApi";

export class ReviewerApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/reviewer`,
    deleteById: `${AppApi.server.protectedApi}/reviewer/{id}`,
    update: `${AppApi.server.protectedApi}/reviewer`,

    getAllArticles: `${AppApi.server.protectedApi}/reviewer/articles/{id}`,
    getById: `${AppApi.server.publicApi}/reviewer/{id}`,
    getAllPaginated: `${AppApi.server.protectedApi}/reviewer/all/{pageNumber}`,
  }
}
