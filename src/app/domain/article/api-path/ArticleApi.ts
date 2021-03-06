import {AppApi} from "../../AppApi";

export class ArticleApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/article`,
    deleteById: `${AppApi.server.protectedApi}/article/{id}`,
    updateByAdmin: `${AppApi.server.protectedApi}/admin/article`,

    getByIdFull: `${AppApi.server.protectedApi}/article/full/{id}`,
    getById: `${AppApi.server.publicApi}/article/`,
    getAllPaginated: `${AppApi.server.publicApi}/article/all/{pageNumber}`,
  }
}
