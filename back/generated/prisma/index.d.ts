
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model MediaProvider
 * 
 */
export type MediaProvider = $Result.DefaultSelection<Prisma.$MediaProviderPayload>
/**
 * Model UserMedia
 * 
 */
export type UserMedia = $Result.DefaultSelection<Prisma.$UserMediaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaProvider`: Exposes CRUD operations for the **MediaProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaProviders
    * const mediaProviders = await prisma.mediaProvider.findMany()
    * ```
    */
  get mediaProvider(): Prisma.MediaProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMedia`: Exposes CRUD operations for the **UserMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMedias
    * const userMedias = await prisma.userMedia.findMany()
    * ```
    */
  get userMedia(): Prisma.UserMediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Media: 'Media',
    Provider: 'Provider',
    MediaProvider: 'MediaProvider',
    UserMedia: 'UserMedia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "media" | "provider" | "mediaProvider" | "userMedia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      MediaProvider: {
        payload: Prisma.$MediaProviderPayload<ExtArgs>
        fields: Prisma.MediaProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          findFirst: {
            args: Prisma.MediaProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          findMany: {
            args: Prisma.MediaProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>[]
          }
          create: {
            args: Prisma.MediaProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          createMany: {
            args: Prisma.MediaProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>[]
          }
          delete: {
            args: Prisma.MediaProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          update: {
            args: Prisma.MediaProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          deleteMany: {
            args: Prisma.MediaProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>[]
          }
          upsert: {
            args: Prisma.MediaProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaProviderPayload>
          }
          aggregate: {
            args: Prisma.MediaProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaProvider>
          }
          groupBy: {
            args: Prisma.MediaProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaProviderCountArgs<ExtArgs>
            result: $Utils.Optional<MediaProviderCountAggregateOutputType> | number
          }
        }
      }
      UserMedia: {
        payload: Prisma.$UserMediaPayload<ExtArgs>
        fields: Prisma.UserMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          findFirst: {
            args: Prisma.UserMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          findMany: {
            args: Prisma.UserMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          create: {
            args: Prisma.UserMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          createMany: {
            args: Prisma.UserMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          delete: {
            args: Prisma.UserMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          update: {
            args: Prisma.UserMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          deleteMany: {
            args: Prisma.UserMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          upsert: {
            args: Prisma.UserMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          aggregate: {
            args: Prisma.UserMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMedia>
          }
          groupBy: {
            args: Prisma.UserMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMediaCountArgs<ExtArgs>
            result: $Utils.Optional<UserMediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    media?: MediaOmit
    provider?: ProviderOmit
    mediaProvider?: MediaProviderOmit
    userMedia?: UserMediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    library: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | UserCountOutputTypeCountLibraryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLibraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    providers: number
    users: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | MediaCountOutputTypeCountProvidersArgs
    users?: boolean | MediaCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaProviderWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediaWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    medias: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | ProviderCountOutputTypeCountMediasArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaProviderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    library?: boolean | User$libraryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | User$libraryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      library: Prisma.$UserMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends User$libraryArgs<ExtArgs> = {}>(args?: Subset<T, User$libraryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.library
   */
  export type User$libraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    where?: UserMediaWhereInput
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    cursor?: UserMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    nbSeason: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    nbSeason: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    releaseDate: Date | null
    description: string | null
    posterPath: string | null
    nbSeason: number | null
    lastSeasonReleaseDate: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    releaseDate: Date | null
    description: string | null
    posterPath: string | null
    nbSeason: number | null
    lastSeasonReleaseDate: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    title: number
    type: number
    createdAt: number
    lastUpdate: number
    releaseDate: number
    description: number
    posterPath: number
    nbSeason: number
    lastSeasonReleaseDate: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    nbSeason?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    nbSeason?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    releaseDate?: true
    description?: true
    posterPath?: true
    nbSeason?: true
    lastSeasonReleaseDate?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    releaseDate?: true
    description?: true
    posterPath?: true
    nbSeason?: true
    lastSeasonReleaseDate?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    releaseDate?: true
    description?: true
    posterPath?: true
    nbSeason?: true
    lastSeasonReleaseDate?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    title: string
    type: string
    createdAt: Date
    lastUpdate: Date
    releaseDate: Date | null
    description: string | null
    posterPath: string | null
    nbSeason: number | null
    lastSeasonReleaseDate: Date | null
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    releaseDate?: boolean
    description?: boolean
    posterPath?: boolean
    nbSeason?: boolean
    lastSeasonReleaseDate?: boolean
    providers?: boolean | Media$providersArgs<ExtArgs>
    users?: boolean | Media$usersArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    releaseDate?: boolean
    description?: boolean
    posterPath?: boolean
    nbSeason?: boolean
    lastSeasonReleaseDate?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    releaseDate?: boolean
    description?: boolean
    posterPath?: boolean
    nbSeason?: boolean
    lastSeasonReleaseDate?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    releaseDate?: boolean
    description?: boolean
    posterPath?: boolean
    nbSeason?: boolean
    lastSeasonReleaseDate?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "createdAt" | "lastUpdate" | "releaseDate" | "description" | "posterPath" | "nbSeason" | "lastSeasonReleaseDate", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | Media$providersArgs<ExtArgs>
    users?: boolean | Media$usersArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      providers: Prisma.$MediaProviderPayload<ExtArgs>[]
      users: Prisma.$UserMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string
      createdAt: Date
      lastUpdate: Date
      releaseDate: Date | null
      description: string | null
      posterPath: string | null
      nbSeason: number | null
      lastSeasonReleaseDate: Date | null
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providers<T extends Media$providersArgs<ExtArgs> = {}>(args?: Subset<T, Media$providersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Media$usersArgs<ExtArgs> = {}>(args?: Subset<T, Media$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly title: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly lastUpdate: FieldRef<"Media", 'DateTime'>
    readonly releaseDate: FieldRef<"Media", 'DateTime'>
    readonly description: FieldRef<"Media", 'String'>
    readonly posterPath: FieldRef<"Media", 'String'>
    readonly nbSeason: FieldRef<"Media", 'Int'>
    readonly lastSeasonReleaseDate: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.providers
   */
  export type Media$providersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    where?: MediaProviderWhereInput
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    cursor?: MediaProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaProviderScalarFieldEnum | MediaProviderScalarFieldEnum[]
  }

  /**
   * Media.users
   */
  export type Media$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    where?: UserMediaWhereInput
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    cursor?: UserMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    logoUrl: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    logoUrl: string | null
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    medias?: boolean | Provider$mediasArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoUrl", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | Provider$mediasArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      medias: Prisma.$MediaProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logoUrl: string | null
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medias<T extends Provider$mediasArgs<ExtArgs> = {}>(args?: Subset<T, Provider$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly logoUrl: FieldRef<"Provider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.medias
   */
  export type Provider$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    where?: MediaProviderWhereInput
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    cursor?: MediaProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaProviderScalarFieldEnum | MediaProviderScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model MediaProvider
   */

  export type AggregateMediaProvider = {
    _count: MediaProviderCountAggregateOutputType | null
    _avg: MediaProviderAvgAggregateOutputType | null
    _sum: MediaProviderSumAggregateOutputType | null
    _min: MediaProviderMinAggregateOutputType | null
    _max: MediaProviderMaxAggregateOutputType | null
  }

  export type MediaProviderAvgAggregateOutputType = {
    id: number | null
    mediaId: number | null
  }

  export type MediaProviderSumAggregateOutputType = {
    id: number | null
    mediaId: number | null
  }

  export type MediaProviderMinAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    link: string | null
    mediaId: number | null
    providerId: string | null
  }

  export type MediaProviderMaxAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    link: string | null
    mediaId: number | null
    providerId: string | null
  }

  export type MediaProviderCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    lastUpdate: number
    audios: number
    subtitles: number
    link: number
    mediaId: number
    providerId: number
    _all: number
  }


  export type MediaProviderAvgAggregateInputType = {
    id?: true
    mediaId?: true
  }

  export type MediaProviderSumAggregateInputType = {
    id?: true
    mediaId?: true
  }

  export type MediaProviderMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    link?: true
    mediaId?: true
    providerId?: true
  }

  export type MediaProviderMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    link?: true
    mediaId?: true
    providerId?: true
  }

  export type MediaProviderCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    lastUpdate?: true
    audios?: true
    subtitles?: true
    link?: true
    mediaId?: true
    providerId?: true
    _all?: true
  }

  export type MediaProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaProvider to aggregate.
     */
    where?: MediaProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaProviders to fetch.
     */
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaProviders
    **/
    _count?: true | MediaProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaProviderMaxAggregateInputType
  }

  export type GetMediaProviderAggregateType<T extends MediaProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaProvider[P]>
      : GetScalarType<T[P], AggregateMediaProvider[P]>
  }




  export type MediaProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaProviderWhereInput
    orderBy?: MediaProviderOrderByWithAggregationInput | MediaProviderOrderByWithAggregationInput[]
    by: MediaProviderScalarFieldEnum[] | MediaProviderScalarFieldEnum
    having?: MediaProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaProviderCountAggregateInputType | true
    _avg?: MediaProviderAvgAggregateInputType
    _sum?: MediaProviderSumAggregateInputType
    _min?: MediaProviderMinAggregateInputType
    _max?: MediaProviderMaxAggregateInputType
  }

  export type MediaProviderGroupByOutputType = {
    id: number
    type: string
    createdAt: Date
    lastUpdate: Date
    audios: string[]
    subtitles: string[]
    link: string | null
    mediaId: number
    providerId: string
    _count: MediaProviderCountAggregateOutputType | null
    _avg: MediaProviderAvgAggregateOutputType | null
    _sum: MediaProviderSumAggregateOutputType | null
    _min: MediaProviderMinAggregateOutputType | null
    _max: MediaProviderMaxAggregateOutputType | null
  }

  type GetMediaProviderGroupByPayload<T extends MediaProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaProviderGroupByOutputType[P]>
            : GetScalarType<T[P], MediaProviderGroupByOutputType[P]>
        }
      >
    >


  export type MediaProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    audios?: boolean
    subtitles?: boolean
    link?: boolean
    mediaId?: boolean
    providerId?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaProvider"]>

  export type MediaProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    audios?: boolean
    subtitles?: boolean
    link?: boolean
    mediaId?: boolean
    providerId?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaProvider"]>

  export type MediaProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    audios?: boolean
    subtitles?: boolean
    link?: boolean
    mediaId?: boolean
    providerId?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaProvider"]>

  export type MediaProviderSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    audios?: boolean
    subtitles?: boolean
    link?: boolean
    mediaId?: boolean
    providerId?: boolean
  }

  export type MediaProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "lastUpdate" | "audios" | "subtitles" | "link" | "mediaId" | "providerId", ExtArgs["result"]["mediaProvider"]>
  export type MediaProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type MediaProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type MediaProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $MediaProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaProvider"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      createdAt: Date
      lastUpdate: Date
      audios: string[]
      subtitles: string[]
      link: string | null
      mediaId: number
      providerId: string
    }, ExtArgs["result"]["mediaProvider"]>
    composites: {}
  }

  type MediaProviderGetPayload<S extends boolean | null | undefined | MediaProviderDefaultArgs> = $Result.GetResult<Prisma.$MediaProviderPayload, S>

  type MediaProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaProviderCountAggregateInputType | true
    }

  export interface MediaProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaProvider'], meta: { name: 'MediaProvider' } }
    /**
     * Find zero or one MediaProvider that matches the filter.
     * @param {MediaProviderFindUniqueArgs} args - Arguments to find a MediaProvider
     * @example
     * // Get one MediaProvider
     * const mediaProvider = await prisma.mediaProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaProviderFindUniqueArgs>(args: SelectSubset<T, MediaProviderFindUniqueArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaProviderFindUniqueOrThrowArgs} args - Arguments to find a MediaProvider
     * @example
     * // Get one MediaProvider
     * const mediaProvider = await prisma.mediaProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderFindFirstArgs} args - Arguments to find a MediaProvider
     * @example
     * // Get one MediaProvider
     * const mediaProvider = await prisma.mediaProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaProviderFindFirstArgs>(args?: SelectSubset<T, MediaProviderFindFirstArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderFindFirstOrThrowArgs} args - Arguments to find a MediaProvider
     * @example
     * // Get one MediaProvider
     * const mediaProvider = await prisma.mediaProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaProviders
     * const mediaProviders = await prisma.mediaProvider.findMany()
     * 
     * // Get first 10 MediaProviders
     * const mediaProviders = await prisma.mediaProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaProviderWithIdOnly = await prisma.mediaProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaProviderFindManyArgs>(args?: SelectSubset<T, MediaProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaProvider.
     * @param {MediaProviderCreateArgs} args - Arguments to create a MediaProvider.
     * @example
     * // Create one MediaProvider
     * const MediaProvider = await prisma.mediaProvider.create({
     *   data: {
     *     // ... data to create a MediaProvider
     *   }
     * })
     * 
     */
    create<T extends MediaProviderCreateArgs>(args: SelectSubset<T, MediaProviderCreateArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaProviders.
     * @param {MediaProviderCreateManyArgs} args - Arguments to create many MediaProviders.
     * @example
     * // Create many MediaProviders
     * const mediaProvider = await prisma.mediaProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaProviderCreateManyArgs>(args?: SelectSubset<T, MediaProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaProviders and returns the data saved in the database.
     * @param {MediaProviderCreateManyAndReturnArgs} args - Arguments to create many MediaProviders.
     * @example
     * // Create many MediaProviders
     * const mediaProvider = await prisma.mediaProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaProviders and only return the `id`
     * const mediaProviderWithIdOnly = await prisma.mediaProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaProvider.
     * @param {MediaProviderDeleteArgs} args - Arguments to delete one MediaProvider.
     * @example
     * // Delete one MediaProvider
     * const MediaProvider = await prisma.mediaProvider.delete({
     *   where: {
     *     // ... filter to delete one MediaProvider
     *   }
     * })
     * 
     */
    delete<T extends MediaProviderDeleteArgs>(args: SelectSubset<T, MediaProviderDeleteArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaProvider.
     * @param {MediaProviderUpdateArgs} args - Arguments to update one MediaProvider.
     * @example
     * // Update one MediaProvider
     * const mediaProvider = await prisma.mediaProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaProviderUpdateArgs>(args: SelectSubset<T, MediaProviderUpdateArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaProviders.
     * @param {MediaProviderDeleteManyArgs} args - Arguments to filter MediaProviders to delete.
     * @example
     * // Delete a few MediaProviders
     * const { count } = await prisma.mediaProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaProviderDeleteManyArgs>(args?: SelectSubset<T, MediaProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaProviders
     * const mediaProvider = await prisma.mediaProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaProviderUpdateManyArgs>(args: SelectSubset<T, MediaProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaProviders and returns the data updated in the database.
     * @param {MediaProviderUpdateManyAndReturnArgs} args - Arguments to update many MediaProviders.
     * @example
     * // Update many MediaProviders
     * const mediaProvider = await prisma.mediaProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaProviders and only return the `id`
     * const mediaProviderWithIdOnly = await prisma.mediaProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaProvider.
     * @param {MediaProviderUpsertArgs} args - Arguments to update or create a MediaProvider.
     * @example
     * // Update or create a MediaProvider
     * const mediaProvider = await prisma.mediaProvider.upsert({
     *   create: {
     *     // ... data to create a MediaProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaProvider we want to update
     *   }
     * })
     */
    upsert<T extends MediaProviderUpsertArgs>(args: SelectSubset<T, MediaProviderUpsertArgs<ExtArgs>>): Prisma__MediaProviderClient<$Result.GetResult<Prisma.$MediaProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderCountArgs} args - Arguments to filter MediaProviders to count.
     * @example
     * // Count the number of MediaProviders
     * const count = await prisma.mediaProvider.count({
     *   where: {
     *     // ... the filter for the MediaProviders we want to count
     *   }
     * })
    **/
    count<T extends MediaProviderCountArgs>(
      args?: Subset<T, MediaProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaProviderAggregateArgs>(args: Subset<T, MediaProviderAggregateArgs>): Prisma.PrismaPromise<GetMediaProviderAggregateType<T>>

    /**
     * Group by MediaProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaProviderGroupByArgs['orderBy'] }
        : { orderBy?: MediaProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaProvider model
   */
  readonly fields: MediaProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaProvider model
   */
  interface MediaProviderFieldRefs {
    readonly id: FieldRef<"MediaProvider", 'Int'>
    readonly type: FieldRef<"MediaProvider", 'String'>
    readonly createdAt: FieldRef<"MediaProvider", 'DateTime'>
    readonly lastUpdate: FieldRef<"MediaProvider", 'DateTime'>
    readonly audios: FieldRef<"MediaProvider", 'String[]'>
    readonly subtitles: FieldRef<"MediaProvider", 'String[]'>
    readonly link: FieldRef<"MediaProvider", 'String'>
    readonly mediaId: FieldRef<"MediaProvider", 'Int'>
    readonly providerId: FieldRef<"MediaProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaProvider findUnique
   */
  export type MediaProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter, which MediaProvider to fetch.
     */
    where: MediaProviderWhereUniqueInput
  }

  /**
   * MediaProvider findUniqueOrThrow
   */
  export type MediaProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter, which MediaProvider to fetch.
     */
    where: MediaProviderWhereUniqueInput
  }

  /**
   * MediaProvider findFirst
   */
  export type MediaProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter, which MediaProvider to fetch.
     */
    where?: MediaProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaProviders to fetch.
     */
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaProviders.
     */
    cursor?: MediaProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaProviders.
     */
    distinct?: MediaProviderScalarFieldEnum | MediaProviderScalarFieldEnum[]
  }

  /**
   * MediaProvider findFirstOrThrow
   */
  export type MediaProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter, which MediaProvider to fetch.
     */
    where?: MediaProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaProviders to fetch.
     */
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaProviders.
     */
    cursor?: MediaProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaProviders.
     */
    distinct?: MediaProviderScalarFieldEnum | MediaProviderScalarFieldEnum[]
  }

  /**
   * MediaProvider findMany
   */
  export type MediaProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter, which MediaProviders to fetch.
     */
    where?: MediaProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaProviders to fetch.
     */
    orderBy?: MediaProviderOrderByWithRelationInput | MediaProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaProviders.
     */
    cursor?: MediaProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaProviders.
     */
    distinct?: MediaProviderScalarFieldEnum | MediaProviderScalarFieldEnum[]
  }

  /**
   * MediaProvider create
   */
  export type MediaProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaProvider.
     */
    data: XOR<MediaProviderCreateInput, MediaProviderUncheckedCreateInput>
  }

  /**
   * MediaProvider createMany
   */
  export type MediaProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaProviders.
     */
    data: MediaProviderCreateManyInput | MediaProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaProvider createManyAndReturn
   */
  export type MediaProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * The data used to create many MediaProviders.
     */
    data: MediaProviderCreateManyInput | MediaProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaProvider update
   */
  export type MediaProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaProvider.
     */
    data: XOR<MediaProviderUpdateInput, MediaProviderUncheckedUpdateInput>
    /**
     * Choose, which MediaProvider to update.
     */
    where: MediaProviderWhereUniqueInput
  }

  /**
   * MediaProvider updateMany
   */
  export type MediaProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaProviders.
     */
    data: XOR<MediaProviderUpdateManyMutationInput, MediaProviderUncheckedUpdateManyInput>
    /**
     * Filter which MediaProviders to update
     */
    where?: MediaProviderWhereInput
    /**
     * Limit how many MediaProviders to update.
     */
    limit?: number
  }

  /**
   * MediaProvider updateManyAndReturn
   */
  export type MediaProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * The data used to update MediaProviders.
     */
    data: XOR<MediaProviderUpdateManyMutationInput, MediaProviderUncheckedUpdateManyInput>
    /**
     * Filter which MediaProviders to update
     */
    where?: MediaProviderWhereInput
    /**
     * Limit how many MediaProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaProvider upsert
   */
  export type MediaProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaProvider to update in case it exists.
     */
    where: MediaProviderWhereUniqueInput
    /**
     * In case the MediaProvider found by the `where` argument doesn't exist, create a new MediaProvider with this data.
     */
    create: XOR<MediaProviderCreateInput, MediaProviderUncheckedCreateInput>
    /**
     * In case the MediaProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaProviderUpdateInput, MediaProviderUncheckedUpdateInput>
  }

  /**
   * MediaProvider delete
   */
  export type MediaProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
    /**
     * Filter which MediaProvider to delete.
     */
    where: MediaProviderWhereUniqueInput
  }

  /**
   * MediaProvider deleteMany
   */
  export type MediaProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaProviders to delete
     */
    where?: MediaProviderWhereInput
    /**
     * Limit how many MediaProviders to delete.
     */
    limit?: number
  }

  /**
   * MediaProvider without action
   */
  export type MediaProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaProvider
     */
    select?: MediaProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaProvider
     */
    omit?: MediaProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaProviderInclude<ExtArgs> | null
  }


  /**
   * Model UserMedia
   */

  export type AggregateUserMedia = {
    _count: UserMediaCountAggregateOutputType | null
    _avg: UserMediaAvgAggregateOutputType | null
    _sum: UserMediaSumAggregateOutputType | null
    _min: UserMediaMinAggregateOutputType | null
    _max: UserMediaMaxAggregateOutputType | null
  }

  export type UserMediaAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    mediaId: number | null
  }

  export type UserMediaSumAggregateOutputType = {
    id: number | null
    userId: number | null
    mediaId: number | null
  }

  export type UserMediaMinAggregateOutputType = {
    id: number | null
    status: string | null
    addedAt: Date | null
    lastUpdate: Date | null
    userId: number | null
    mediaId: number | null
  }

  export type UserMediaMaxAggregateOutputType = {
    id: number | null
    status: string | null
    addedAt: Date | null
    lastUpdate: Date | null
    userId: number | null
    mediaId: number | null
  }

  export type UserMediaCountAggregateOutputType = {
    id: number
    status: number
    addedAt: number
    lastUpdate: number
    userId: number
    mediaId: number
    _all: number
  }


  export type UserMediaAvgAggregateInputType = {
    id?: true
    userId?: true
    mediaId?: true
  }

  export type UserMediaSumAggregateInputType = {
    id?: true
    userId?: true
    mediaId?: true
  }

  export type UserMediaMinAggregateInputType = {
    id?: true
    status?: true
    addedAt?: true
    lastUpdate?: true
    userId?: true
    mediaId?: true
  }

  export type UserMediaMaxAggregateInputType = {
    id?: true
    status?: true
    addedAt?: true
    lastUpdate?: true
    userId?: true
    mediaId?: true
  }

  export type UserMediaCountAggregateInputType = {
    id?: true
    status?: true
    addedAt?: true
    lastUpdate?: true
    userId?: true
    mediaId?: true
    _all?: true
  }

  export type UserMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedia to aggregate.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMedias
    **/
    _count?: true | UserMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMediaMaxAggregateInputType
  }

  export type GetUserMediaAggregateType<T extends UserMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMedia[P]>
      : GetScalarType<T[P], AggregateUserMedia[P]>
  }




  export type UserMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediaWhereInput
    orderBy?: UserMediaOrderByWithAggregationInput | UserMediaOrderByWithAggregationInput[]
    by: UserMediaScalarFieldEnum[] | UserMediaScalarFieldEnum
    having?: UserMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMediaCountAggregateInputType | true
    _avg?: UserMediaAvgAggregateInputType
    _sum?: UserMediaSumAggregateInputType
    _min?: UserMediaMinAggregateInputType
    _max?: UserMediaMaxAggregateInputType
  }

  export type UserMediaGroupByOutputType = {
    id: number
    status: string
    addedAt: Date
    lastUpdate: Date
    userId: number
    mediaId: number
    _count: UserMediaCountAggregateOutputType | null
    _avg: UserMediaAvgAggregateOutputType | null
    _sum: UserMediaSumAggregateOutputType | null
    _min: UserMediaMinAggregateOutputType | null
    _max: UserMediaMaxAggregateOutputType | null
  }

  type GetUserMediaGroupByPayload<T extends UserMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMediaGroupByOutputType[P]>
            : GetScalarType<T[P], UserMediaGroupByOutputType[P]>
        }
      >
    >


  export type UserMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    addedAt?: boolean
    lastUpdate?: boolean
    userId?: boolean
    mediaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    addedAt?: boolean
    lastUpdate?: boolean
    userId?: boolean
    mediaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    addedAt?: boolean
    lastUpdate?: boolean
    userId?: boolean
    mediaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectScalar = {
    id?: boolean
    status?: boolean
    addedAt?: boolean
    lastUpdate?: boolean
    userId?: boolean
    mediaId?: boolean
  }

  export type UserMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "addedAt" | "lastUpdate" | "userId" | "mediaId", ExtArgs["result"]["userMedia"]>
  export type UserMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type UserMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type UserMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $UserMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMedia"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      addedAt: Date
      lastUpdate: Date
      userId: number
      mediaId: number
    }, ExtArgs["result"]["userMedia"]>
    composites: {}
  }

  type UserMediaGetPayload<S extends boolean | null | undefined | UserMediaDefaultArgs> = $Result.GetResult<Prisma.$UserMediaPayload, S>

  type UserMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMediaCountAggregateInputType | true
    }

  export interface UserMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMedia'], meta: { name: 'UserMedia' } }
    /**
     * Find zero or one UserMedia that matches the filter.
     * @param {UserMediaFindUniqueArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMediaFindUniqueArgs>(args: SelectSubset<T, UserMediaFindUniqueArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMediaFindUniqueOrThrowArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindFirstArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMediaFindFirstArgs>(args?: SelectSubset<T, UserMediaFindFirstArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindFirstOrThrowArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMedias
     * const userMedias = await prisma.userMedia.findMany()
     * 
     * // Get first 10 UserMedias
     * const userMedias = await prisma.userMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMediaFindManyArgs>(args?: SelectSubset<T, UserMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMedia.
     * @param {UserMediaCreateArgs} args - Arguments to create a UserMedia.
     * @example
     * // Create one UserMedia
     * const UserMedia = await prisma.userMedia.create({
     *   data: {
     *     // ... data to create a UserMedia
     *   }
     * })
     * 
     */
    create<T extends UserMediaCreateArgs>(args: SelectSubset<T, UserMediaCreateArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMedias.
     * @param {UserMediaCreateManyArgs} args - Arguments to create many UserMedias.
     * @example
     * // Create many UserMedias
     * const userMedia = await prisma.userMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMediaCreateManyArgs>(args?: SelectSubset<T, UserMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMedias and returns the data saved in the database.
     * @param {UserMediaCreateManyAndReturnArgs} args - Arguments to create many UserMedias.
     * @example
     * // Create many UserMedias
     * const userMedia = await prisma.userMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMedias and only return the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMedia.
     * @param {UserMediaDeleteArgs} args - Arguments to delete one UserMedia.
     * @example
     * // Delete one UserMedia
     * const UserMedia = await prisma.userMedia.delete({
     *   where: {
     *     // ... filter to delete one UserMedia
     *   }
     * })
     * 
     */
    delete<T extends UserMediaDeleteArgs>(args: SelectSubset<T, UserMediaDeleteArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMedia.
     * @param {UserMediaUpdateArgs} args - Arguments to update one UserMedia.
     * @example
     * // Update one UserMedia
     * const userMedia = await prisma.userMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMediaUpdateArgs>(args: SelectSubset<T, UserMediaUpdateArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMedias.
     * @param {UserMediaDeleteManyArgs} args - Arguments to filter UserMedias to delete.
     * @example
     * // Delete a few UserMedias
     * const { count } = await prisma.userMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMediaDeleteManyArgs>(args?: SelectSubset<T, UserMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMedias
     * const userMedia = await prisma.userMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMediaUpdateManyArgs>(args: SelectSubset<T, UserMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedias and returns the data updated in the database.
     * @param {UserMediaUpdateManyAndReturnArgs} args - Arguments to update many UserMedias.
     * @example
     * // Update many UserMedias
     * const userMedia = await prisma.userMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMedias and only return the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMedia.
     * @param {UserMediaUpsertArgs} args - Arguments to update or create a UserMedia.
     * @example
     * // Update or create a UserMedia
     * const userMedia = await prisma.userMedia.upsert({
     *   create: {
     *     // ... data to create a UserMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMedia we want to update
     *   }
     * })
     */
    upsert<T extends UserMediaUpsertArgs>(args: SelectSubset<T, UserMediaUpsertArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaCountArgs} args - Arguments to filter UserMedias to count.
     * @example
     * // Count the number of UserMedias
     * const count = await prisma.userMedia.count({
     *   where: {
     *     // ... the filter for the UserMedias we want to count
     *   }
     * })
    **/
    count<T extends UserMediaCountArgs>(
      args?: Subset<T, UserMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMediaAggregateArgs>(args: Subset<T, UserMediaAggregateArgs>): Prisma.PrismaPromise<GetUserMediaAggregateType<T>>

    /**
     * Group by UserMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMediaGroupByArgs['orderBy'] }
        : { orderBy?: UserMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMedia model
   */
  readonly fields: UserMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMedia model
   */
  interface UserMediaFieldRefs {
    readonly id: FieldRef<"UserMedia", 'Int'>
    readonly status: FieldRef<"UserMedia", 'String'>
    readonly addedAt: FieldRef<"UserMedia", 'DateTime'>
    readonly lastUpdate: FieldRef<"UserMedia", 'DateTime'>
    readonly userId: FieldRef<"UserMedia", 'Int'>
    readonly mediaId: FieldRef<"UserMedia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserMedia findUnique
   */
  export type UserMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia findUniqueOrThrow
   */
  export type UserMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia findFirst
   */
  export type UserMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia findFirstOrThrow
   */
  export type UserMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia findMany
   */
  export type UserMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedias to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia create
   */
  export type UserMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMedia.
     */
    data: XOR<UserMediaCreateInput, UserMediaUncheckedCreateInput>
  }

  /**
   * UserMedia createMany
   */
  export type UserMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMedias.
     */
    data: UserMediaCreateManyInput | UserMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMedia createManyAndReturn
   */
  export type UserMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * The data used to create many UserMedias.
     */
    data: UserMediaCreateManyInput | UserMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedia update
   */
  export type UserMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMedia.
     */
    data: XOR<UserMediaUpdateInput, UserMediaUncheckedUpdateInput>
    /**
     * Choose, which UserMedia to update.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia updateMany
   */
  export type UserMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMedias.
     */
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserMedias to update
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to update.
     */
    limit?: number
  }

  /**
   * UserMedia updateManyAndReturn
   */
  export type UserMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * The data used to update UserMedias.
     */
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserMedias to update
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedia upsert
   */
  export type UserMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMedia to update in case it exists.
     */
    where: UserMediaWhereUniqueInput
    /**
     * In case the UserMedia found by the `where` argument doesn't exist, create a new UserMedia with this data.
     */
    create: XOR<UserMediaCreateInput, UserMediaUncheckedCreateInput>
    /**
     * In case the UserMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMediaUpdateInput, UserMediaUncheckedUpdateInput>
  }

  /**
   * UserMedia delete
   */
  export type UserMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter which UserMedia to delete.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia deleteMany
   */
  export type UserMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedias to delete
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to delete.
     */
    limit?: number
  }

  /**
   * UserMedia without action
   */
  export type UserMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    createdAt: 'createdAt',
    lastUpdate: 'lastUpdate',
    releaseDate: 'releaseDate',
    description: 'description',
    posterPath: 'posterPath',
    nbSeason: 'nbSeason',
    lastSeasonReleaseDate: 'lastSeasonReleaseDate'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoUrl: 'logoUrl'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const MediaProviderScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    lastUpdate: 'lastUpdate',
    audios: 'audios',
    subtitles: 'subtitles',
    link: 'link',
    mediaId: 'mediaId',
    providerId: 'providerId'
  };

  export type MediaProviderScalarFieldEnum = (typeof MediaProviderScalarFieldEnum)[keyof typeof MediaProviderScalarFieldEnum]


  export const UserMediaScalarFieldEnum: {
    id: 'id',
    status: 'status',
    addedAt: 'addedAt',
    lastUpdate: 'lastUpdate',
    userId: 'userId',
    mediaId: 'mediaId'
  };

  export type UserMediaScalarFieldEnum = (typeof UserMediaScalarFieldEnum)[keyof typeof UserMediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    library?: UserMediaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    library?: UserMediaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    library?: UserMediaListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    title?: StringFilter<"Media"> | string
    type?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    lastUpdate?: DateTimeFilter<"Media"> | Date | string
    releaseDate?: DateTimeNullableFilter<"Media"> | Date | string | null
    description?: StringNullableFilter<"Media"> | string | null
    posterPath?: StringNullableFilter<"Media"> | string | null
    nbSeason?: IntNullableFilter<"Media"> | number | null
    lastSeasonReleaseDate?: DateTimeNullableFilter<"Media"> | Date | string | null
    providers?: MediaProviderListRelationFilter
    users?: UserMediaListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    posterPath?: SortOrderInput | SortOrder
    nbSeason?: SortOrderInput | SortOrder
    lastSeasonReleaseDate?: SortOrderInput | SortOrder
    providers?: MediaProviderOrderByRelationAggregateInput
    users?: UserMediaOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    title?: StringFilter<"Media"> | string
    type?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    lastUpdate?: DateTimeFilter<"Media"> | Date | string
    releaseDate?: DateTimeNullableFilter<"Media"> | Date | string | null
    description?: StringNullableFilter<"Media"> | string | null
    posterPath?: StringNullableFilter<"Media"> | string | null
    nbSeason?: IntNullableFilter<"Media"> | number | null
    lastSeasonReleaseDate?: DateTimeNullableFilter<"Media"> | Date | string | null
    providers?: MediaProviderListRelationFilter
    users?: UserMediaListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    posterPath?: SortOrderInput | SortOrder
    nbSeason?: SortOrderInput | SortOrder
    lastSeasonReleaseDate?: SortOrderInput | SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    title?: StringWithAggregatesFilter<"Media"> | string
    type?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    lastUpdate?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Media"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Media"> | string | null
    posterPath?: StringNullableWithAggregatesFilter<"Media"> | string | null
    nbSeason?: IntNullableWithAggregatesFilter<"Media"> | number | null
    lastSeasonReleaseDate?: DateTimeNullableWithAggregatesFilter<"Media"> | Date | string | null
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    logoUrl?: StringNullableFilter<"Provider"> | string | null
    medias?: MediaProviderListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    medias?: MediaProviderOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    logoUrl?: StringNullableFilter<"Provider"> | string | null
    medias?: MediaProviderListRelationFilter
  }, "id" | "name">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Provider"> | string | null
  }

  export type MediaProviderWhereInput = {
    AND?: MediaProviderWhereInput | MediaProviderWhereInput[]
    OR?: MediaProviderWhereInput[]
    NOT?: MediaProviderWhereInput | MediaProviderWhereInput[]
    id?: IntFilter<"MediaProvider"> | number
    type?: StringFilter<"MediaProvider"> | string
    createdAt?: DateTimeFilter<"MediaProvider"> | Date | string
    lastUpdate?: DateTimeFilter<"MediaProvider"> | Date | string
    audios?: StringNullableListFilter<"MediaProvider">
    subtitles?: StringNullableListFilter<"MediaProvider">
    link?: StringNullableFilter<"MediaProvider"> | string | null
    mediaId?: IntFilter<"MediaProvider"> | number
    providerId?: StringFilter<"MediaProvider"> | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }

  export type MediaProviderOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    audios?: SortOrder
    subtitles?: SortOrder
    link?: SortOrderInput | SortOrder
    mediaId?: SortOrder
    providerId?: SortOrder
    media?: MediaOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
  }

  export type MediaProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mediaId_providerId?: MediaProviderMediaIdProviderIdCompoundUniqueInput
    AND?: MediaProviderWhereInput | MediaProviderWhereInput[]
    OR?: MediaProviderWhereInput[]
    NOT?: MediaProviderWhereInput | MediaProviderWhereInput[]
    type?: StringFilter<"MediaProvider"> | string
    createdAt?: DateTimeFilter<"MediaProvider"> | Date | string
    lastUpdate?: DateTimeFilter<"MediaProvider"> | Date | string
    audios?: StringNullableListFilter<"MediaProvider">
    subtitles?: StringNullableListFilter<"MediaProvider">
    link?: StringNullableFilter<"MediaProvider"> | string | null
    mediaId?: IntFilter<"MediaProvider"> | number
    providerId?: StringFilter<"MediaProvider"> | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }, "id" | "mediaId_providerId">

  export type MediaProviderOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    audios?: SortOrder
    subtitles?: SortOrder
    link?: SortOrderInput | SortOrder
    mediaId?: SortOrder
    providerId?: SortOrder
    _count?: MediaProviderCountOrderByAggregateInput
    _avg?: MediaProviderAvgOrderByAggregateInput
    _max?: MediaProviderMaxOrderByAggregateInput
    _min?: MediaProviderMinOrderByAggregateInput
    _sum?: MediaProviderSumOrderByAggregateInput
  }

  export type MediaProviderScalarWhereWithAggregatesInput = {
    AND?: MediaProviderScalarWhereWithAggregatesInput | MediaProviderScalarWhereWithAggregatesInput[]
    OR?: MediaProviderScalarWhereWithAggregatesInput[]
    NOT?: MediaProviderScalarWhereWithAggregatesInput | MediaProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaProvider"> | number
    type?: StringWithAggregatesFilter<"MediaProvider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaProvider"> | Date | string
    lastUpdate?: DateTimeWithAggregatesFilter<"MediaProvider"> | Date | string
    audios?: StringNullableListFilter<"MediaProvider">
    subtitles?: StringNullableListFilter<"MediaProvider">
    link?: StringNullableWithAggregatesFilter<"MediaProvider"> | string | null
    mediaId?: IntWithAggregatesFilter<"MediaProvider"> | number
    providerId?: StringWithAggregatesFilter<"MediaProvider"> | string
  }

  export type UserMediaWhereInput = {
    AND?: UserMediaWhereInput | UserMediaWhereInput[]
    OR?: UserMediaWhereInput[]
    NOT?: UserMediaWhereInput | UserMediaWhereInput[]
    id?: IntFilter<"UserMedia"> | number
    status?: StringFilter<"UserMedia"> | string
    addedAt?: DateTimeFilter<"UserMedia"> | Date | string
    lastUpdate?: DateTimeFilter<"UserMedia"> | Date | string
    userId?: IntFilter<"UserMedia"> | number
    mediaId?: IntFilter<"UserMedia"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type UserMediaOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    lastUpdate?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    user?: UserOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type UserMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_mediaId?: UserMediaUserIdMediaIdCompoundUniqueInput
    AND?: UserMediaWhereInput | UserMediaWhereInput[]
    OR?: UserMediaWhereInput[]
    NOT?: UserMediaWhereInput | UserMediaWhereInput[]
    status?: StringFilter<"UserMedia"> | string
    addedAt?: DateTimeFilter<"UserMedia"> | Date | string
    lastUpdate?: DateTimeFilter<"UserMedia"> | Date | string
    userId?: IntFilter<"UserMedia"> | number
    mediaId?: IntFilter<"UserMedia"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "id" | "userId_mediaId">

  export type UserMediaOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    lastUpdate?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    _count?: UserMediaCountOrderByAggregateInput
    _avg?: UserMediaAvgOrderByAggregateInput
    _max?: UserMediaMaxOrderByAggregateInput
    _min?: UserMediaMinOrderByAggregateInput
    _sum?: UserMediaSumOrderByAggregateInput
  }

  export type UserMediaScalarWhereWithAggregatesInput = {
    AND?: UserMediaScalarWhereWithAggregatesInput | UserMediaScalarWhereWithAggregatesInput[]
    OR?: UserMediaScalarWhereWithAggregatesInput[]
    NOT?: UserMediaScalarWhereWithAggregatesInput | UserMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserMedia"> | number
    status?: StringWithAggregatesFilter<"UserMedia"> | string
    addedAt?: DateTimeWithAggregatesFilter<"UserMedia"> | Date | string
    lastUpdate?: DateTimeWithAggregatesFilter<"UserMedia"> | Date | string
    userId?: IntWithAggregatesFilter<"UserMedia"> | number
    mediaId?: IntWithAggregatesFilter<"UserMedia"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    library?: UserMediaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    library?: UserMediaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: UserMediaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    providers?: MediaProviderCreateNestedManyWithoutMediaInput
    users?: UserMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    providers?: MediaProviderUncheckedCreateNestedManyWithoutMediaInput
    users?: UserMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providers?: MediaProviderUpdateManyWithoutMediaNestedInput
    users?: UserMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providers?: MediaProviderUncheckedUpdateManyWithoutMediaNestedInput
    users?: UserMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: number
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
  }

  export type MediaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProviderCreateInput = {
    id: string
    name: string
    logoUrl?: string | null
    medias?: MediaProviderCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id: string
    name: string
    logoUrl?: string | null
    medias?: MediaProviderUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: MediaProviderUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: MediaProviderUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id: string
    name: string
    logoUrl?: string | null
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaProviderCreateInput = {
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    media: MediaCreateNestedOneWithoutProvidersInput
    provider: ProviderCreateNestedOneWithoutMediasInput
  }

  export type MediaProviderUncheckedCreateInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    mediaId: number
    providerId: string
  }

  export type MediaProviderUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutProvidersNestedInput
    provider?: ProviderUpdateOneRequiredWithoutMediasNestedInput
  }

  export type MediaProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: IntFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaProviderCreateManyInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    mediaId: number
    providerId: string
  }

  export type MediaProviderUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: IntFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMediaCreateInput = {
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    user: UserCreateNestedOneWithoutLibraryInput
    media: MediaCreateNestedOneWithoutUsersInput
  }

  export type UserMediaUncheckedCreateInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    userId: number
    mediaId: number
  }

  export type UserMediaUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
    media?: MediaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMediaCreateManyInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    userId: number
    mediaId: number
  }

  export type UserMediaUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserMediaListRelationFilter = {
    every?: UserMediaWhereInput
    some?: UserMediaWhereInput
    none?: UserMediaWhereInput
  }

  export type UserMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MediaProviderListRelationFilter = {
    every?: MediaProviderWhereInput
    some?: MediaProviderWhereInput
    none?: MediaProviderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    releaseDate?: SortOrder
    description?: SortOrder
    posterPath?: SortOrder
    nbSeason?: SortOrder
    lastSeasonReleaseDate?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    nbSeason?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    releaseDate?: SortOrder
    description?: SortOrder
    posterPath?: SortOrder
    nbSeason?: SortOrder
    lastSeasonReleaseDate?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    releaseDate?: SortOrder
    description?: SortOrder
    posterPath?: SortOrder
    nbSeason?: SortOrder
    lastSeasonReleaseDate?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    nbSeason?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type MediaProviderMediaIdProviderIdCompoundUniqueInput = {
    mediaId: number
    providerId: string
  }

  export type MediaProviderCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    audios?: SortOrder
    subtitles?: SortOrder
    link?: SortOrder
    mediaId?: SortOrder
    providerId?: SortOrder
  }

  export type MediaProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
  }

  export type MediaProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    link?: SortOrder
    mediaId?: SortOrder
    providerId?: SortOrder
  }

  export type MediaProviderMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    link?: SortOrder
    mediaId?: SortOrder
    providerId?: SortOrder
  }

  export type MediaProviderSumOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserMediaUserIdMediaIdCompoundUniqueInput = {
    userId: number
    mediaId: number
  }

  export type UserMediaCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    lastUpdate?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type UserMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type UserMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    lastUpdate?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type UserMediaMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    addedAt?: SortOrder
    lastUpdate?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type UserMediaSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type UserMediaCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type UserMediaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserMediaUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutUserInput | UserMediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutUserInput | UserMediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutUserInput | UserMediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserMediaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutUserInput | UserMediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutUserInput | UserMediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutUserInput | UserMediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type MediaProviderCreateNestedManyWithoutMediaInput = {
    create?: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput> | MediaProviderCreateWithoutMediaInput[] | MediaProviderUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutMediaInput | MediaProviderCreateOrConnectWithoutMediaInput[]
    createMany?: MediaProviderCreateManyMediaInputEnvelope
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
  }

  export type UserMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput> | UserMediaCreateWithoutMediaInput[] | UserMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutMediaInput | UserMediaCreateOrConnectWithoutMediaInput[]
    createMany?: UserMediaCreateManyMediaInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type MediaProviderUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput> | MediaProviderCreateWithoutMediaInput[] | MediaProviderUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutMediaInput | MediaProviderCreateOrConnectWithoutMediaInput[]
    createMany?: MediaProviderCreateManyMediaInputEnvelope
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
  }

  export type UserMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput> | UserMediaCreateWithoutMediaInput[] | UserMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutMediaInput | UserMediaCreateOrConnectWithoutMediaInput[]
    createMany?: UserMediaCreateManyMediaInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediaProviderUpdateManyWithoutMediaNestedInput = {
    create?: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput> | MediaProviderCreateWithoutMediaInput[] | MediaProviderUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutMediaInput | MediaProviderCreateOrConnectWithoutMediaInput[]
    upsert?: MediaProviderUpsertWithWhereUniqueWithoutMediaInput | MediaProviderUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: MediaProviderCreateManyMediaInputEnvelope
    set?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    disconnect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    delete?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    update?: MediaProviderUpdateWithWhereUniqueWithoutMediaInput | MediaProviderUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: MediaProviderUpdateManyWithWhereWithoutMediaInput | MediaProviderUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
  }

  export type UserMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput> | UserMediaCreateWithoutMediaInput[] | UserMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutMediaInput | UserMediaCreateOrConnectWithoutMediaInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutMediaInput | UserMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: UserMediaCreateManyMediaInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutMediaInput | UserMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutMediaInput | UserMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type MediaProviderUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput> | MediaProviderCreateWithoutMediaInput[] | MediaProviderUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutMediaInput | MediaProviderCreateOrConnectWithoutMediaInput[]
    upsert?: MediaProviderUpsertWithWhereUniqueWithoutMediaInput | MediaProviderUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: MediaProviderCreateManyMediaInputEnvelope
    set?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    disconnect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    delete?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    update?: MediaProviderUpdateWithWhereUniqueWithoutMediaInput | MediaProviderUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: MediaProviderUpdateManyWithWhereWithoutMediaInput | MediaProviderUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
  }

  export type UserMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput> | UserMediaCreateWithoutMediaInput[] | UserMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutMediaInput | UserMediaCreateOrConnectWithoutMediaInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutMediaInput | UserMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: UserMediaCreateManyMediaInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutMediaInput | UserMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutMediaInput | UserMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type MediaProviderCreateNestedManyWithoutProviderInput = {
    create?: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput> | MediaProviderCreateWithoutProviderInput[] | MediaProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutProviderInput | MediaProviderCreateOrConnectWithoutProviderInput[]
    createMany?: MediaProviderCreateManyProviderInputEnvelope
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
  }

  export type MediaProviderUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput> | MediaProviderCreateWithoutProviderInput[] | MediaProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutProviderInput | MediaProviderCreateOrConnectWithoutProviderInput[]
    createMany?: MediaProviderCreateManyProviderInputEnvelope
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
  }

  export type MediaProviderUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput> | MediaProviderCreateWithoutProviderInput[] | MediaProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutProviderInput | MediaProviderCreateOrConnectWithoutProviderInput[]
    upsert?: MediaProviderUpsertWithWhereUniqueWithoutProviderInput | MediaProviderUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MediaProviderCreateManyProviderInputEnvelope
    set?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    disconnect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    delete?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    update?: MediaProviderUpdateWithWhereUniqueWithoutProviderInput | MediaProviderUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MediaProviderUpdateManyWithWhereWithoutProviderInput | MediaProviderUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
  }

  export type MediaProviderUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput> | MediaProviderCreateWithoutProviderInput[] | MediaProviderUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MediaProviderCreateOrConnectWithoutProviderInput | MediaProviderCreateOrConnectWithoutProviderInput[]
    upsert?: MediaProviderUpsertWithWhereUniqueWithoutProviderInput | MediaProviderUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MediaProviderCreateManyProviderInputEnvelope
    set?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    disconnect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    delete?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    connect?: MediaProviderWhereUniqueInput | MediaProviderWhereUniqueInput[]
    update?: MediaProviderUpdateWithWhereUniqueWithoutProviderInput | MediaProviderUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MediaProviderUpdateManyWithWhereWithoutProviderInput | MediaProviderUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
  }

  export type MediaProviderCreateaudiosInput = {
    set: string[]
  }

  export type MediaProviderCreatesubtitlesInput = {
    set: string[]
  }

  export type MediaCreateNestedOneWithoutProvidersInput = {
    create?: XOR<MediaCreateWithoutProvidersInput, MediaUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: MediaCreateOrConnectWithoutProvidersInput
    connect?: MediaWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutMediasInput = {
    create?: XOR<ProviderCreateWithoutMediasInput, ProviderUncheckedCreateWithoutMediasInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMediasInput
    connect?: ProviderWhereUniqueInput
  }

  export type MediaProviderUpdateaudiosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaProviderUpdatesubtitlesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaUpdateOneRequiredWithoutProvidersNestedInput = {
    create?: XOR<MediaCreateWithoutProvidersInput, MediaUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: MediaCreateOrConnectWithoutProvidersInput
    upsert?: MediaUpsertWithoutProvidersInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutProvidersInput, MediaUpdateWithoutProvidersInput>, MediaUncheckedUpdateWithoutProvidersInput>
  }

  export type ProviderUpdateOneRequiredWithoutMediasNestedInput = {
    create?: XOR<ProviderCreateWithoutMediasInput, ProviderUncheckedCreateWithoutMediasInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMediasInput
    upsert?: ProviderUpsertWithoutMediasInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutMediasInput, ProviderUpdateWithoutMediasInput>, ProviderUncheckedUpdateWithoutMediasInput>
  }

  export type UserCreateNestedOneWithoutLibraryInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    connect?: UserWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutUsersInput = {
    create?: XOR<MediaCreateWithoutUsersInput, MediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUsersInput
    connect?: MediaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLibraryNestedInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    upsert?: UserUpsertWithoutLibraryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibraryInput, UserUpdateWithoutLibraryInput>, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type MediaUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<MediaCreateWithoutUsersInput, MediaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUsersInput
    upsert?: MediaUpsertWithoutUsersInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutUsersInput, MediaUpdateWithoutUsersInput>, MediaUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserMediaCreateWithoutUserInput = {
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    media: MediaCreateNestedOneWithoutUsersInput
  }

  export type UserMediaUncheckedCreateWithoutUserInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    mediaId: number
  }

  export type UserMediaCreateOrConnectWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    create: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput>
  }

  export type UserMediaCreateManyUserInputEnvelope = {
    data: UserMediaCreateManyUserInput | UserMediaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMediaUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    update: XOR<UserMediaUpdateWithoutUserInput, UserMediaUncheckedUpdateWithoutUserInput>
    create: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput>
  }

  export type UserMediaUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    data: XOR<UserMediaUpdateWithoutUserInput, UserMediaUncheckedUpdateWithoutUserInput>
  }

  export type UserMediaUpdateManyWithWhereWithoutUserInput = {
    where: UserMediaScalarWhereInput
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMediaScalarWhereInput = {
    AND?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
    OR?: UserMediaScalarWhereInput[]
    NOT?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
    id?: IntFilter<"UserMedia"> | number
    status?: StringFilter<"UserMedia"> | string
    addedAt?: DateTimeFilter<"UserMedia"> | Date | string
    lastUpdate?: DateTimeFilter<"UserMedia"> | Date | string
    userId?: IntFilter<"UserMedia"> | number
    mediaId?: IntFilter<"UserMedia"> | number
  }

  export type MediaProviderCreateWithoutMediaInput = {
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    provider: ProviderCreateNestedOneWithoutMediasInput
  }

  export type MediaProviderUncheckedCreateWithoutMediaInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    providerId: string
  }

  export type MediaProviderCreateOrConnectWithoutMediaInput = {
    where: MediaProviderWhereUniqueInput
    create: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput>
  }

  export type MediaProviderCreateManyMediaInputEnvelope = {
    data: MediaProviderCreateManyMediaInput | MediaProviderCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type UserMediaCreateWithoutMediaInput = {
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    user: UserCreateNestedOneWithoutLibraryInput
  }

  export type UserMediaUncheckedCreateWithoutMediaInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    userId: number
  }

  export type UserMediaCreateOrConnectWithoutMediaInput = {
    where: UserMediaWhereUniqueInput
    create: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput>
  }

  export type UserMediaCreateManyMediaInputEnvelope = {
    data: UserMediaCreateManyMediaInput | UserMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type MediaProviderUpsertWithWhereUniqueWithoutMediaInput = {
    where: MediaProviderWhereUniqueInput
    update: XOR<MediaProviderUpdateWithoutMediaInput, MediaProviderUncheckedUpdateWithoutMediaInput>
    create: XOR<MediaProviderCreateWithoutMediaInput, MediaProviderUncheckedCreateWithoutMediaInput>
  }

  export type MediaProviderUpdateWithWhereUniqueWithoutMediaInput = {
    where: MediaProviderWhereUniqueInput
    data: XOR<MediaProviderUpdateWithoutMediaInput, MediaProviderUncheckedUpdateWithoutMediaInput>
  }

  export type MediaProviderUpdateManyWithWhereWithoutMediaInput = {
    where: MediaProviderScalarWhereInput
    data: XOR<MediaProviderUpdateManyMutationInput, MediaProviderUncheckedUpdateManyWithoutMediaInput>
  }

  export type MediaProviderScalarWhereInput = {
    AND?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
    OR?: MediaProviderScalarWhereInput[]
    NOT?: MediaProviderScalarWhereInput | MediaProviderScalarWhereInput[]
    id?: IntFilter<"MediaProvider"> | number
    type?: StringFilter<"MediaProvider"> | string
    createdAt?: DateTimeFilter<"MediaProvider"> | Date | string
    lastUpdate?: DateTimeFilter<"MediaProvider"> | Date | string
    audios?: StringNullableListFilter<"MediaProvider">
    subtitles?: StringNullableListFilter<"MediaProvider">
    link?: StringNullableFilter<"MediaProvider"> | string | null
    mediaId?: IntFilter<"MediaProvider"> | number
    providerId?: StringFilter<"MediaProvider"> | string
  }

  export type UserMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: UserMediaWhereUniqueInput
    update: XOR<UserMediaUpdateWithoutMediaInput, UserMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<UserMediaCreateWithoutMediaInput, UserMediaUncheckedCreateWithoutMediaInput>
  }

  export type UserMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: UserMediaWhereUniqueInput
    data: XOR<UserMediaUpdateWithoutMediaInput, UserMediaUncheckedUpdateWithoutMediaInput>
  }

  export type UserMediaUpdateManyWithWhereWithoutMediaInput = {
    where: UserMediaScalarWhereInput
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type MediaProviderCreateWithoutProviderInput = {
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    media: MediaCreateNestedOneWithoutProvidersInput
  }

  export type MediaProviderUncheckedCreateWithoutProviderInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    mediaId: number
  }

  export type MediaProviderCreateOrConnectWithoutProviderInput = {
    where: MediaProviderWhereUniqueInput
    create: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput>
  }

  export type MediaProviderCreateManyProviderInputEnvelope = {
    data: MediaProviderCreateManyProviderInput | MediaProviderCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type MediaProviderUpsertWithWhereUniqueWithoutProviderInput = {
    where: MediaProviderWhereUniqueInput
    update: XOR<MediaProviderUpdateWithoutProviderInput, MediaProviderUncheckedUpdateWithoutProviderInput>
    create: XOR<MediaProviderCreateWithoutProviderInput, MediaProviderUncheckedCreateWithoutProviderInput>
  }

  export type MediaProviderUpdateWithWhereUniqueWithoutProviderInput = {
    where: MediaProviderWhereUniqueInput
    data: XOR<MediaProviderUpdateWithoutProviderInput, MediaProviderUncheckedUpdateWithoutProviderInput>
  }

  export type MediaProviderUpdateManyWithWhereWithoutProviderInput = {
    where: MediaProviderScalarWhereInput
    data: XOR<MediaProviderUpdateManyMutationInput, MediaProviderUncheckedUpdateManyWithoutProviderInput>
  }

  export type MediaCreateWithoutProvidersInput = {
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    users?: UserMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutProvidersInput = {
    id?: number
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    users?: UserMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutProvidersInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutProvidersInput, MediaUncheckedCreateWithoutProvidersInput>
  }

  export type ProviderCreateWithoutMediasInput = {
    id: string
    name: string
    logoUrl?: string | null
  }

  export type ProviderUncheckedCreateWithoutMediasInput = {
    id: string
    name: string
    logoUrl?: string | null
  }

  export type ProviderCreateOrConnectWithoutMediasInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutMediasInput, ProviderUncheckedCreateWithoutMediasInput>
  }

  export type MediaUpsertWithoutProvidersInput = {
    update: XOR<MediaUpdateWithoutProvidersInput, MediaUncheckedUpdateWithoutProvidersInput>
    create: XOR<MediaCreateWithoutProvidersInput, MediaUncheckedCreateWithoutProvidersInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutProvidersInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutProvidersInput, MediaUncheckedUpdateWithoutProvidersInput>
  }

  export type MediaUpdateWithoutProvidersInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type ProviderUpsertWithoutMediasInput = {
    update: XOR<ProviderUpdateWithoutMediasInput, ProviderUncheckedUpdateWithoutMediasInput>
    create: XOR<ProviderCreateWithoutMediasInput, ProviderUncheckedCreateWithoutMediasInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutMediasInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutMediasInput, ProviderUncheckedUpdateWithoutMediasInput>
  }

  export type ProviderUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderUncheckedUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutLibraryInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLibraryInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLibraryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
  }

  export type MediaCreateWithoutUsersInput = {
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    providers?: MediaProviderCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    releaseDate?: Date | string | null
    description?: string | null
    posterPath?: string | null
    nbSeason?: number | null
    lastSeasonReleaseDate?: Date | string | null
    providers?: MediaProviderUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutUsersInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutUsersInput, MediaUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutLibraryInput = {
    update: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibraryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type UserUpdateWithoutLibraryInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithoutUsersInput = {
    update: XOR<MediaUpdateWithoutUsersInput, MediaUncheckedUpdateWithoutUsersInput>
    create: XOR<MediaCreateWithoutUsersInput, MediaUncheckedCreateWithoutUsersInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutUsersInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutUsersInput, MediaUncheckedUpdateWithoutUsersInput>
  }

  export type MediaUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providers?: MediaProviderUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    nbSeason?: NullableIntFieldUpdateOperationsInput | number | null
    lastSeasonReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providers?: MediaProviderUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type UserMediaCreateManyUserInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    mediaId: number
  }

  export type UserMediaUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserMediaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMediaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: IntFieldUpdateOperationsInput | number
  }

  export type MediaProviderCreateManyMediaInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    providerId: string
  }

  export type UserMediaCreateManyMediaInput = {
    id?: number
    status: string
    addedAt?: Date | string
    lastUpdate?: Date | string
    userId: number
  }

  export type MediaProviderUpdateWithoutMediaInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: ProviderUpdateOneRequiredWithoutMediasNestedInput
  }

  export type MediaProviderUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaProviderUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMediaUpdateWithoutMediaInput = {
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
  }

  export type UserMediaUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMediaUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MediaProviderCreateManyProviderInput = {
    id?: number
    type: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    audios?: MediaProviderCreateaudiosInput | string[]
    subtitles?: MediaProviderCreatesubtitlesInput | string[]
    link?: string | null
    mediaId: number
  }

  export type MediaProviderUpdateWithoutProviderInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateOneRequiredWithoutProvidersNestedInput
  }

  export type MediaProviderUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: IntFieldUpdateOperationsInput | number
  }

  export type MediaProviderUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    audios?: MediaProviderUpdateaudiosInput | string[]
    subtitles?: MediaProviderUpdatesubtitlesInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}