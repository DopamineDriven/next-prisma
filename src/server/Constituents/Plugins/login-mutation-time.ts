import { Prisma } from "@prisma/client";
import { core } from "nexus";
import { Context } from "../context";

export const LogMutationTimePlugin = core.plugin({
  name: "LogMutationTimePlugin",

  onCreateFieldResolver(config) {
    if (config.parentTypeConfig.name !== ("Mutation" || "Query")) {
      return;
    }

    return async (root, args, ctx, info, next) => {
      const startTimeMs = new Date(Date.now()).valueOf();

      const value = await next(root, args, ctx, info);

      const endTimeMs = new Date(Date.now()).valueOf();

      console.log(`${info.operation.name} took ${endTimeMs - startTimeMs} ms`);

      return value;
    };
  }
});

// export type OperationLoggerProps = {
//   next: (params: Prisma.MiddlewareParams) => Promise<any>;
//   params: Prisma.MiddlewareParams;
// };

// export const OperationLogger = core.plugin({
//   name: "OperationLogger",
//   onCreateFieldResolver(config) {
//     if (config.parentTypeConfig.name !== ("Query" || "Mutation")) {
//       return;
//     }
//     return async ({ params, next }: OperationLoggerProps) => {
//       const before = new Date(Date.now()).getMilliseconds();

//       const result = await next(params);

//       const after = new Date(Date.now().toLocaleString("")).getMilliseconds();

//       console.log(
//         `Prisma Query ${params.model}.${params.action} took ${after - before}ms`
//       );

//       return result;
//     };
//   }
// });
