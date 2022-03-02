// removes empty query params from query obj
export const filterQuery = (query: any) =>
  Object.keys(query).reduce<any>((obj, key) => {
    if (query[key]?.length) {
      obj[key] = query[key];
    }
    return obj;
  }, {});

// 	 // removes empty query params from query obj
// export function filterQuerys<T, K extends keyof T>(
// 	query: T[] | T
// ) {
// 	Object.keys(query).reduce<T[K]>((obj, key) => {
// 		if (query[key].length > 0) {
// 			obj[key] = query[key];
// 		}
// 		return obj;
// 	}, {});
// }
