
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_trails
 * 
 */
export type audit_trails = $Result.DefaultSelection<Prisma.$audit_trailsPayload>
/**
 * Model failed_jobs
 * 
 */
export type failed_jobs = $Result.DefaultSelection<Prisma.$failed_jobsPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model model_has_permissions
 * 
 */
export type model_has_permissions = $Result.DefaultSelection<Prisma.$model_has_permissionsPayload>
/**
 * Model model_has_roles
 * 
 */
export type model_has_roles = $Result.DefaultSelection<Prisma.$model_has_rolesPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model permissions
 * 
 */
export type permissions = $Result.DefaultSelection<Prisma.$permissionsPayload>
/**
 * Model personal_access_tokens
 * 
 */
export type personal_access_tokens = $Result.DefaultSelection<Prisma.$personal_access_tokensPayload>
/**
 * Model role_has_permissions
 * 
 */
export type role_has_permissions = $Result.DefaultSelection<Prisma.$role_has_permissionsPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_trails
 * const audit_trails = await prisma.audit_trails.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_trails
   * const audit_trails = await prisma.audit_trails.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit_trails`: Exposes CRUD operations for the **audit_trails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_trails
    * const audit_trails = await prisma.audit_trails.findMany()
    * ```
    */
  get audit_trails(): Prisma.audit_trailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failed_jobs`: Exposes CRUD operations for the **failed_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failed_jobs
    * const failed_jobs = await prisma.failed_jobs.findMany()
    * ```
    */
  get failed_jobs(): Prisma.failed_jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model_has_permissions`: Exposes CRUD operations for the **model_has_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Model_has_permissions
    * const model_has_permissions = await prisma.model_has_permissions.findMany()
    * ```
    */
  get model_has_permissions(): Prisma.model_has_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model_has_roles`: Exposes CRUD operations for the **model_has_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Model_has_roles
    * const model_has_roles = await prisma.model_has_roles.findMany()
    * ```
    */
  get model_has_roles(): Prisma.model_has_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_access_tokens`: Exposes CRUD operations for the **personal_access_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_access_tokens
    * const personal_access_tokens = await prisma.personal_access_tokens.findMany()
    * ```
    */
  get personal_access_tokens(): Prisma.personal_access_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role_has_permissions`: Exposes CRUD operations for the **role_has_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_has_permissions
    * const role_has_permissions = await prisma.role_has_permissions.findMany()
    * ```
    */
  get role_has_permissions(): Prisma.role_has_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    audit_trails: 'audit_trails',
    failed_jobs: 'failed_jobs',
    jobs: 'jobs',
    migrations: 'migrations',
    model_has_permissions: 'model_has_permissions',
    model_has_roles: 'model_has_roles',
    notifications: 'notifications',
    password_reset_tokens: 'password_reset_tokens',
    permissions: 'permissions',
    personal_access_tokens: 'personal_access_tokens',
    role_has_permissions: 'role_has_permissions',
    roles: 'roles',
    settings: 'settings',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit_trails" | "failed_jobs" | "jobs" | "migrations" | "model_has_permissions" | "model_has_roles" | "notifications" | "password_reset_tokens" | "permissions" | "personal_access_tokens" | "role_has_permissions" | "roles" | "settings" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      audit_trails: {
        payload: Prisma.$audit_trailsPayload<ExtArgs>
        fields: Prisma.audit_trailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_trailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_trailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          findFirst: {
            args: Prisma.audit_trailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_trailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          findMany: {
            args: Prisma.audit_trailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>[]
          }
          create: {
            args: Prisma.audit_trailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          createMany: {
            args: Prisma.audit_trailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.audit_trailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          update: {
            args: Prisma.audit_trailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          deleteMany: {
            args: Prisma.audit_trailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_trailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.audit_trailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_trailsPayload>
          }
          aggregate: {
            args: Prisma.Audit_trailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_trails>
          }
          groupBy: {
            args: Prisma.audit_trailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_trailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_trailsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_trailsCountAggregateOutputType> | number
          }
        }
      }
      failed_jobs: {
        payload: Prisma.$failed_jobsPayload<ExtArgs>
        fields: Prisma.failed_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findFirst: {
            args: Prisma.failed_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findMany: {
            args: Prisma.failed_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>[]
          }
          create: {
            args: Prisma.failed_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          createMany: {
            args: Prisma.failed_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.failed_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          update: {
            args: Prisma.failed_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          deleteMany: {
            args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.failed_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          aggregate: {
            args: Prisma.Failed_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailed_jobs>
          }
          groupBy: {
            args: Prisma.failed_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.failed_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      model_has_permissions: {
        payload: Prisma.$model_has_permissionsPayload<ExtArgs>
        fields: Prisma.model_has_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.model_has_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.model_has_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          findFirst: {
            args: Prisma.model_has_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.model_has_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          findMany: {
            args: Prisma.model_has_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>[]
          }
          create: {
            args: Prisma.model_has_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          createMany: {
            args: Prisma.model_has_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.model_has_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          update: {
            args: Prisma.model_has_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.model_has_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.model_has_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.model_has_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Model_has_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel_has_permissions>
          }
          groupBy: {
            args: Prisma.model_has_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Model_has_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.model_has_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Model_has_permissionsCountAggregateOutputType> | number
          }
        }
      }
      model_has_roles: {
        payload: Prisma.$model_has_rolesPayload<ExtArgs>
        fields: Prisma.model_has_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.model_has_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.model_has_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          findFirst: {
            args: Prisma.model_has_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.model_has_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          findMany: {
            args: Prisma.model_has_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>[]
          }
          create: {
            args: Prisma.model_has_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          createMany: {
            args: Prisma.model_has_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.model_has_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          update: {
            args: Prisma.model_has_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          deleteMany: {
            args: Prisma.model_has_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.model_has_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.model_has_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_has_rolesPayload>
          }
          aggregate: {
            args: Prisma.Model_has_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel_has_roles>
          }
          groupBy: {
            args: Prisma.model_has_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Model_has_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.model_has_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<Model_has_rolesCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      permissions: {
        payload: Prisma.$permissionsPayload<ExtArgs>
        fields: Prisma.permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findFirst: {
            args: Prisma.permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          findMany: {
            args: Prisma.permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>[]
          }
          create: {
            args: Prisma.permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          createMany: {
            args: Prisma.permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          update: {
            args: Prisma.permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          deleteMany: {
            args: Prisma.permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      personal_access_tokens: {
        payload: Prisma.$personal_access_tokensPayload<ExtArgs>
        fields: Prisma.personal_access_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personal_access_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          findFirst: {
            args: Prisma.personal_access_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personal_access_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          findMany: {
            args: Prisma.personal_access_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[]
          }
          create: {
            args: Prisma.personal_access_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          createMany: {
            args: Prisma.personal_access_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personal_access_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          update: {
            args: Prisma.personal_access_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          deleteMany: {
            args: Prisma.personal_access_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personal_access_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personal_access_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          aggregate: {
            args: Prisma.Personal_access_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_access_tokens>
          }
          groupBy: {
            args: Prisma.personal_access_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_access_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.personal_access_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_access_tokensCountAggregateOutputType> | number
          }
        }
      }
      role_has_permissions: {
        payload: Prisma.$role_has_permissionsPayload<ExtArgs>
        fields: Prisma.role_has_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_has_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_has_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          findFirst: {
            args: Prisma.role_has_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_has_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          findMany: {
            args: Prisma.role_has_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>[]
          }
          create: {
            args: Prisma.role_has_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          createMany: {
            args: Prisma.role_has_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.role_has_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          update: {
            args: Prisma.role_has_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.role_has_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_has_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.role_has_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_has_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Role_has_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_has_permissions>
          }
          groupBy: {
            args: Prisma.role_has_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_has_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_has_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Role_has_permissionsCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    audit_trails?: audit_trailsOmit
    failed_jobs?: failed_jobsOmit
    jobs?: jobsOmit
    migrations?: migrationsOmit
    model_has_permissions?: model_has_permissionsOmit
    model_has_roles?: model_has_rolesOmit
    notifications?: notificationsOmit
    password_reset_tokens?: password_reset_tokensOmit
    permissions?: permissionsOmit
    personal_access_tokens?: personal_access_tokensOmit
    role_has_permissions?: role_has_permissionsOmit
    roles?: rolesOmit
    settings?: settingsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    model_has_permissions: number
    role_has_permissions: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_has_permissions?: boolean | PermissionsCountOutputTypeCountModel_has_permissionsArgs
    role_has_permissions?: boolean | PermissionsCountOutputTypeCountRole_has_permissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountModel_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: model_has_permissionsWhereInput
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountRole_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_has_permissionsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    model_has_roles: number
    role_has_permissions: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_has_roles?: boolean | RolesCountOutputTypeCountModel_has_rolesArgs
    role_has_permissions?: boolean | RolesCountOutputTypeCountRole_has_permissionsArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountModel_has_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: model_has_rolesWhereInput
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRole_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_has_permissionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    audit_trails: number
    notifications_notifications_assigned_from_user_idTousers: number
    notifications_notifications_assigned_to_user_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_trails?: boolean | UsersCountOutputTypeCountAudit_trailsArgs
    notifications_notifications_assigned_from_user_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_assigned_from_user_idTousersArgs
    notifications_notifications_assigned_to_user_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_assigned_to_user_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAudit_trailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_trailsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_assigned_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_assigned_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model audit_trails
   */

  export type AggregateAudit_trails = {
    _count: Audit_trailsCountAggregateOutputType | null
    _min: Audit_trailsMinAggregateOutputType | null
    _max: Audit_trailsMaxAggregateOutputType | null
  }

  export type Audit_trailsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    link: string | null
    reference_id: string | null
    section: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Audit_trailsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    link: string | null
    reference_id: string | null
    section: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Audit_trailsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    link: number
    reference_id: number
    section: number
    type: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Audit_trailsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    link?: true
    reference_id?: true
    section?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Audit_trailsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    link?: true
    reference_id?: true
    section?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Audit_trailsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    link?: true
    reference_id?: true
    section?: true
    type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Audit_trailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_trails to aggregate.
     */
    where?: audit_trailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_trails to fetch.
     */
    orderBy?: audit_trailsOrderByWithRelationInput | audit_trailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_trailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_trails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_trails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_trails
    **/
    _count?: true | Audit_trailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_trailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_trailsMaxAggregateInputType
  }

  export type GetAudit_trailsAggregateType<T extends Audit_trailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_trails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_trails[P]>
      : GetScalarType<T[P], AggregateAudit_trails[P]>
  }




  export type audit_trailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_trailsWhereInput
    orderBy?: audit_trailsOrderByWithAggregationInput | audit_trailsOrderByWithAggregationInput[]
    by: Audit_trailsScalarFieldEnum[] | Audit_trailsScalarFieldEnum
    having?: audit_trailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_trailsCountAggregateInputType | true
    _min?: Audit_trailsMinAggregateInputType
    _max?: Audit_trailsMaxAggregateInputType
  }

  export type Audit_trailsGroupByOutputType = {
    id: string
    user_id: string | null
    title: string
    link: string | null
    reference_id: string
    section: string
    type: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Audit_trailsCountAggregateOutputType | null
    _min: Audit_trailsMinAggregateOutputType | null
    _max: Audit_trailsMaxAggregateOutputType | null
  }

  type GetAudit_trailsGroupByPayload<T extends audit_trailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_trailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_trailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_trailsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_trailsGroupByOutputType[P]>
        }
      >
    >


  export type audit_trailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    link?: boolean
    reference_id?: boolean
    section?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    users?: boolean | audit_trails$usersArgs<ExtArgs>
  }, ExtArgs["result"]["audit_trails"]>



  export type audit_trailsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    link?: boolean
    reference_id?: boolean
    section?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type audit_trailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "link" | "reference_id" | "section" | "type" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["audit_trails"]>
  export type audit_trailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | audit_trails$usersArgs<ExtArgs>
  }

  export type $audit_trailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_trails"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      title: string
      link: string | null
      reference_id: string
      section: string
      type: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["audit_trails"]>
    composites: {}
  }

  type audit_trailsGetPayload<S extends boolean | null | undefined | audit_trailsDefaultArgs> = $Result.GetResult<Prisma.$audit_trailsPayload, S>

  type audit_trailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_trailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_trailsCountAggregateInputType | true
    }

  export interface audit_trailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_trails'], meta: { name: 'audit_trails' } }
    /**
     * Find zero or one Audit_trails that matches the filter.
     * @param {audit_trailsFindUniqueArgs} args - Arguments to find a Audit_trails
     * @example
     * // Get one Audit_trails
     * const audit_trails = await prisma.audit_trails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_trailsFindUniqueArgs>(args: SelectSubset<T, audit_trailsFindUniqueArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_trails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_trailsFindUniqueOrThrowArgs} args - Arguments to find a Audit_trails
     * @example
     * // Get one Audit_trails
     * const audit_trails = await prisma.audit_trails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_trailsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_trailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_trails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsFindFirstArgs} args - Arguments to find a Audit_trails
     * @example
     * // Get one Audit_trails
     * const audit_trails = await prisma.audit_trails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_trailsFindFirstArgs>(args?: SelectSubset<T, audit_trailsFindFirstArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_trails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsFindFirstOrThrowArgs} args - Arguments to find a Audit_trails
     * @example
     * // Get one Audit_trails
     * const audit_trails = await prisma.audit_trails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_trailsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_trailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_trails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_trails
     * const audit_trails = await prisma.audit_trails.findMany()
     * 
     * // Get first 10 Audit_trails
     * const audit_trails = await prisma.audit_trails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_trailsWithIdOnly = await prisma.audit_trails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_trailsFindManyArgs>(args?: SelectSubset<T, audit_trailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_trails.
     * @param {audit_trailsCreateArgs} args - Arguments to create a Audit_trails.
     * @example
     * // Create one Audit_trails
     * const Audit_trails = await prisma.audit_trails.create({
     *   data: {
     *     // ... data to create a Audit_trails
     *   }
     * })
     * 
     */
    create<T extends audit_trailsCreateArgs>(args: SelectSubset<T, audit_trailsCreateArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_trails.
     * @param {audit_trailsCreateManyArgs} args - Arguments to create many Audit_trails.
     * @example
     * // Create many Audit_trails
     * const audit_trails = await prisma.audit_trails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_trailsCreateManyArgs>(args?: SelectSubset<T, audit_trailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audit_trails.
     * @param {audit_trailsDeleteArgs} args - Arguments to delete one Audit_trails.
     * @example
     * // Delete one Audit_trails
     * const Audit_trails = await prisma.audit_trails.delete({
     *   where: {
     *     // ... filter to delete one Audit_trails
     *   }
     * })
     * 
     */
    delete<T extends audit_trailsDeleteArgs>(args: SelectSubset<T, audit_trailsDeleteArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_trails.
     * @param {audit_trailsUpdateArgs} args - Arguments to update one Audit_trails.
     * @example
     * // Update one Audit_trails
     * const audit_trails = await prisma.audit_trails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_trailsUpdateArgs>(args: SelectSubset<T, audit_trailsUpdateArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_trails.
     * @param {audit_trailsDeleteManyArgs} args - Arguments to filter Audit_trails to delete.
     * @example
     * // Delete a few Audit_trails
     * const { count } = await prisma.audit_trails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_trailsDeleteManyArgs>(args?: SelectSubset<T, audit_trailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_trails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_trails
     * const audit_trails = await prisma.audit_trails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_trailsUpdateManyArgs>(args: SelectSubset<T, audit_trailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit_trails.
     * @param {audit_trailsUpsertArgs} args - Arguments to update or create a Audit_trails.
     * @example
     * // Update or create a Audit_trails
     * const audit_trails = await prisma.audit_trails.upsert({
     *   create: {
     *     // ... data to create a Audit_trails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_trails we want to update
     *   }
     * })
     */
    upsert<T extends audit_trailsUpsertArgs>(args: SelectSubset<T, audit_trailsUpsertArgs<ExtArgs>>): Prisma__audit_trailsClient<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_trails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsCountArgs} args - Arguments to filter Audit_trails to count.
     * @example
     * // Count the number of Audit_trails
     * const count = await prisma.audit_trails.count({
     *   where: {
     *     // ... the filter for the Audit_trails we want to count
     *   }
     * })
    **/
    count<T extends audit_trailsCountArgs>(
      args?: Subset<T, audit_trailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_trailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_trails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_trailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_trailsAggregateArgs>(args: Subset<T, Audit_trailsAggregateArgs>): Prisma.PrismaPromise<GetAudit_trailsAggregateType<T>>

    /**
     * Group by Audit_trails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_trailsGroupByArgs} args - Group by arguments.
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
      T extends audit_trailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_trailsGroupByArgs['orderBy'] }
        : { orderBy?: audit_trailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, audit_trailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_trailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_trails model
   */
  readonly fields: audit_trailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_trails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_trailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends audit_trails$usersArgs<ExtArgs> = {}>(args?: Subset<T, audit_trails$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the audit_trails model
   */
  interface audit_trailsFieldRefs {
    readonly id: FieldRef<"audit_trails", 'String'>
    readonly user_id: FieldRef<"audit_trails", 'String'>
    readonly title: FieldRef<"audit_trails", 'String'>
    readonly link: FieldRef<"audit_trails", 'String'>
    readonly reference_id: FieldRef<"audit_trails", 'String'>
    readonly section: FieldRef<"audit_trails", 'String'>
    readonly type: FieldRef<"audit_trails", 'String'>
    readonly created_at: FieldRef<"audit_trails", 'DateTime'>
    readonly updated_at: FieldRef<"audit_trails", 'DateTime'>
    readonly deleted_at: FieldRef<"audit_trails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_trails findUnique
   */
  export type audit_trailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter, which audit_trails to fetch.
     */
    where: audit_trailsWhereUniqueInput
  }

  /**
   * audit_trails findUniqueOrThrow
   */
  export type audit_trailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter, which audit_trails to fetch.
     */
    where: audit_trailsWhereUniqueInput
  }

  /**
   * audit_trails findFirst
   */
  export type audit_trailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter, which audit_trails to fetch.
     */
    where?: audit_trailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_trails to fetch.
     */
    orderBy?: audit_trailsOrderByWithRelationInput | audit_trailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_trails.
     */
    cursor?: audit_trailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_trails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_trails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_trails.
     */
    distinct?: Audit_trailsScalarFieldEnum | Audit_trailsScalarFieldEnum[]
  }

  /**
   * audit_trails findFirstOrThrow
   */
  export type audit_trailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter, which audit_trails to fetch.
     */
    where?: audit_trailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_trails to fetch.
     */
    orderBy?: audit_trailsOrderByWithRelationInput | audit_trailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_trails.
     */
    cursor?: audit_trailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_trails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_trails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_trails.
     */
    distinct?: Audit_trailsScalarFieldEnum | Audit_trailsScalarFieldEnum[]
  }

  /**
   * audit_trails findMany
   */
  export type audit_trailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter, which audit_trails to fetch.
     */
    where?: audit_trailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_trails to fetch.
     */
    orderBy?: audit_trailsOrderByWithRelationInput | audit_trailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_trails.
     */
    cursor?: audit_trailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_trails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_trails.
     */
    skip?: number
    distinct?: Audit_trailsScalarFieldEnum | Audit_trailsScalarFieldEnum[]
  }

  /**
   * audit_trails create
   */
  export type audit_trailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_trails.
     */
    data: XOR<audit_trailsCreateInput, audit_trailsUncheckedCreateInput>
  }

  /**
   * audit_trails createMany
   */
  export type audit_trailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_trails.
     */
    data: audit_trailsCreateManyInput | audit_trailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_trails update
   */
  export type audit_trailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_trails.
     */
    data: XOR<audit_trailsUpdateInput, audit_trailsUncheckedUpdateInput>
    /**
     * Choose, which audit_trails to update.
     */
    where: audit_trailsWhereUniqueInput
  }

  /**
   * audit_trails updateMany
   */
  export type audit_trailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_trails.
     */
    data: XOR<audit_trailsUpdateManyMutationInput, audit_trailsUncheckedUpdateManyInput>
    /**
     * Filter which audit_trails to update
     */
    where?: audit_trailsWhereInput
    /**
     * Limit how many audit_trails to update.
     */
    limit?: number
  }

  /**
   * audit_trails upsert
   */
  export type audit_trailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_trails to update in case it exists.
     */
    where: audit_trailsWhereUniqueInput
    /**
     * In case the audit_trails found by the `where` argument doesn't exist, create a new audit_trails with this data.
     */
    create: XOR<audit_trailsCreateInput, audit_trailsUncheckedCreateInput>
    /**
     * In case the audit_trails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_trailsUpdateInput, audit_trailsUncheckedUpdateInput>
  }

  /**
   * audit_trails delete
   */
  export type audit_trailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    /**
     * Filter which audit_trails to delete.
     */
    where: audit_trailsWhereUniqueInput
  }

  /**
   * audit_trails deleteMany
   */
  export type audit_trailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_trails to delete
     */
    where?: audit_trailsWhereInput
    /**
     * Limit how many audit_trails to delete.
     */
    limit?: number
  }

  /**
   * audit_trails.users
   */
  export type audit_trails$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * audit_trails without action
   */
  export type audit_trailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
  }


  /**
   * Model failed_jobs
   */

  export type AggregateFailed_jobs = {
    _count: Failed_jobsCountAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  export type Failed_jobsMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsCountAggregateOutputType = {
    id: number
    uuid: number
    connection: number
    queue: number
    payload: number
    exception: number
    failed_at: number
    _all: number
  }


  export type Failed_jobsMinAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsMaxAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsCountAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
    _all?: true
  }

  export type Failed_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to aggregate.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failed_jobs
    **/
    _count?: true | Failed_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Failed_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type GetFailed_jobsAggregateType<T extends Failed_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailed_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailed_jobs[P]>
      : GetScalarType<T[P], AggregateFailed_jobs[P]>
  }




  export type failed_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: failed_jobsWhereInput
    orderBy?: failed_jobsOrderByWithAggregationInput | failed_jobsOrderByWithAggregationInput[]
    by: Failed_jobsScalarFieldEnum[] | Failed_jobsScalarFieldEnum
    having?: failed_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Failed_jobsCountAggregateInputType | true
    _min?: Failed_jobsMinAggregateInputType
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type Failed_jobsGroupByOutputType = {
    id: string
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at: Date
    _count: Failed_jobsCountAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  type GetFailed_jobsGroupByPayload<T extends failed_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Failed_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Failed_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
        }
      >
    >


  export type failed_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }, ExtArgs["result"]["failed_jobs"]>



  export type failed_jobsSelectScalar = {
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }

  export type failed_jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "connection" | "queue" | "payload" | "exception" | "failed_at", ExtArgs["result"]["failed_jobs"]>

  export type $failed_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "failed_jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      connection: string
      queue: string
      payload: string
      exception: string
      failed_at: Date
    }, ExtArgs["result"]["failed_jobs"]>
    composites: {}
  }

  type failed_jobsGetPayload<S extends boolean | null | undefined | failed_jobsDefaultArgs> = $Result.GetResult<Prisma.$failed_jobsPayload, S>

  type failed_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<failed_jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Failed_jobsCountAggregateInputType | true
    }

  export interface failed_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['failed_jobs'], meta: { name: 'failed_jobs' } }
    /**
     * Find zero or one Failed_jobs that matches the filter.
     * @param {failed_jobsFindUniqueArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends failed_jobsFindUniqueArgs>(args: SelectSubset<T, failed_jobsFindUniqueArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Failed_jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {failed_jobsFindUniqueOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends failed_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, failed_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends failed_jobsFindFirstArgs>(args?: SelectSubset<T, failed_jobsFindFirstArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends failed_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, failed_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany()
     * 
     * // Get first 10 Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failed_jobsWithIdOnly = await prisma.failed_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends failed_jobsFindManyArgs>(args?: SelectSubset<T, failed_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Failed_jobs.
     * @param {failed_jobsCreateArgs} args - Arguments to create a Failed_jobs.
     * @example
     * // Create one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.create({
     *   data: {
     *     // ... data to create a Failed_jobs
     *   }
     * })
     * 
     */
    create<T extends failed_jobsCreateArgs>(args: SelectSubset<T, failed_jobsCreateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Failed_jobs.
     * @param {failed_jobsCreateManyArgs} args - Arguments to create many Failed_jobs.
     * @example
     * // Create many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends failed_jobsCreateManyArgs>(args?: SelectSubset<T, failed_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Failed_jobs.
     * @param {failed_jobsDeleteArgs} args - Arguments to delete one Failed_jobs.
     * @example
     * // Delete one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.delete({
     *   where: {
     *     // ... filter to delete one Failed_jobs
     *   }
     * })
     * 
     */
    delete<T extends failed_jobsDeleteArgs>(args: SelectSubset<T, failed_jobsDeleteArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Failed_jobs.
     * @param {failed_jobsUpdateArgs} args - Arguments to update one Failed_jobs.
     * @example
     * // Update one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends failed_jobsUpdateArgs>(args: SelectSubset<T, failed_jobsUpdateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Failed_jobs.
     * @param {failed_jobsDeleteManyArgs} args - Arguments to filter Failed_jobs to delete.
     * @example
     * // Delete a few Failed_jobs
     * const { count } = await prisma.failed_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends failed_jobsDeleteManyArgs>(args?: SelectSubset<T, failed_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends failed_jobsUpdateManyArgs>(args: SelectSubset<T, failed_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Failed_jobs.
     * @param {failed_jobsUpsertArgs} args - Arguments to update or create a Failed_jobs.
     * @example
     * // Update or create a Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.upsert({
     *   create: {
     *     // ... data to create a Failed_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failed_jobs we want to update
     *   }
     * })
     */
    upsert<T extends failed_jobsUpsertArgs>(args: SelectSubset<T, failed_jobsUpsertArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsCountArgs} args - Arguments to filter Failed_jobs to count.
     * @example
     * // Count the number of Failed_jobs
     * const count = await prisma.failed_jobs.count({
     *   where: {
     *     // ... the filter for the Failed_jobs we want to count
     *   }
     * })
    **/
    count<T extends failed_jobsCountArgs>(
      args?: Subset<T, failed_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Failed_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Failed_jobsAggregateArgs>(args: Subset<T, Failed_jobsAggregateArgs>): Prisma.PrismaPromise<GetFailed_jobsAggregateType<T>>

    /**
     * Group by Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsGroupByArgs} args - Group by arguments.
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
      T extends failed_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: failed_jobsGroupByArgs['orderBy'] }
        : { orderBy?: failed_jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, failed_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailed_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the failed_jobs model
   */
  readonly fields: failed_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for failed_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__failed_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the failed_jobs model
   */
  interface failed_jobsFieldRefs {
    readonly id: FieldRef<"failed_jobs", 'String'>
    readonly uuid: FieldRef<"failed_jobs", 'String'>
    readonly connection: FieldRef<"failed_jobs", 'String'>
    readonly queue: FieldRef<"failed_jobs", 'String'>
    readonly payload: FieldRef<"failed_jobs", 'String'>
    readonly exception: FieldRef<"failed_jobs", 'String'>
    readonly failed_at: FieldRef<"failed_jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * failed_jobs findUnique
   */
  export type failed_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findUniqueOrThrow
   */
  export type failed_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findFirst
   */
  export type failed_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findFirstOrThrow
   */
  export type failed_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findMany
   */
  export type failed_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs create
   */
  export type failed_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a failed_jobs.
     */
    data: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
  }

  /**
   * failed_jobs createMany
   */
  export type failed_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many failed_jobs.
     */
    data: failed_jobsCreateManyInput | failed_jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * failed_jobs update
   */
  export type failed_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a failed_jobs.
     */
    data: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
    /**
     * Choose, which failed_jobs to update.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs updateMany
   */
  export type failed_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update failed_jobs.
     */
    data: XOR<failed_jobsUpdateManyMutationInput, failed_jobsUncheckedUpdateManyInput>
    /**
     * Filter which failed_jobs to update
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to update.
     */
    limit?: number
  }

  /**
   * failed_jobs upsert
   */
  export type failed_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the failed_jobs to update in case it exists.
     */
    where: failed_jobsWhereUniqueInput
    /**
     * In case the failed_jobs found by the `where` argument doesn't exist, create a new failed_jobs with this data.
     */
    create: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
    /**
     * In case the failed_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
  }

  /**
   * failed_jobs delete
   */
  export type failed_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter which failed_jobs to delete.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs deleteMany
   */
  export type failed_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to delete
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to delete.
     */
    limit?: number
  }

  /**
   * failed_jobs without action
   */
  export type failed_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: bigint | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    queue: number
    payload: number
    attempts: number
    reserved_at: number
    available_at: number
    created_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: bigint
    queue: string
    payload: string
    attempts: number
    reserved_at: number | null
    available_at: number
    created_at: number
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>



  export type jobsSelectScalar = {
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queue" | "payload" | "attempts" | "reserved_at" | "available_at" | "created_at", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      queue: string
      payload: string
      attempts: number
      reserved_at: number | null
      available_at: number
      created_at: number
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'BigInt'>
    readonly queue: FieldRef<"jobs", 'String'>
    readonly payload: FieldRef<"jobs", 'String'>
    readonly attempts: FieldRef<"jobs", 'Int'>
    readonly reserved_at: FieldRef<"jobs", 'Int'>
    readonly available_at: FieldRef<"jobs", 'Int'>
    readonly created_at: FieldRef<"jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    migration?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "migration" | "batch", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      migration: string
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
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
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly migration: FieldRef<"migrations", 'String'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model model_has_permissions
   */

  export type AggregateModel_has_permissions = {
    _count: Model_has_permissionsCountAggregateOutputType | null
    _min: Model_has_permissionsMinAggregateOutputType | null
    _max: Model_has_permissionsMaxAggregateOutputType | null
  }

  export type Model_has_permissionsMinAggregateOutputType = {
    permission_id: string | null
    model_type: string | null
    model_id: string | null
  }

  export type Model_has_permissionsMaxAggregateOutputType = {
    permission_id: string | null
    model_type: string | null
    model_id: string | null
  }

  export type Model_has_permissionsCountAggregateOutputType = {
    permission_id: number
    model_type: number
    model_id: number
    _all: number
  }


  export type Model_has_permissionsMinAggregateInputType = {
    permission_id?: true
    model_type?: true
    model_id?: true
  }

  export type Model_has_permissionsMaxAggregateInputType = {
    permission_id?: true
    model_type?: true
    model_id?: true
  }

  export type Model_has_permissionsCountAggregateInputType = {
    permission_id?: true
    model_type?: true
    model_id?: true
    _all?: true
  }

  export type Model_has_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_has_permissions to aggregate.
     */
    where?: model_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_permissions to fetch.
     */
    orderBy?: model_has_permissionsOrderByWithRelationInput | model_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: model_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned model_has_permissions
    **/
    _count?: true | Model_has_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Model_has_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Model_has_permissionsMaxAggregateInputType
  }

  export type GetModel_has_permissionsAggregateType<T extends Model_has_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateModel_has_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel_has_permissions[P]>
      : GetScalarType<T[P], AggregateModel_has_permissions[P]>
  }




  export type model_has_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: model_has_permissionsWhereInput
    orderBy?: model_has_permissionsOrderByWithAggregationInput | model_has_permissionsOrderByWithAggregationInput[]
    by: Model_has_permissionsScalarFieldEnum[] | Model_has_permissionsScalarFieldEnum
    having?: model_has_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Model_has_permissionsCountAggregateInputType | true
    _min?: Model_has_permissionsMinAggregateInputType
    _max?: Model_has_permissionsMaxAggregateInputType
  }

  export type Model_has_permissionsGroupByOutputType = {
    permission_id: string
    model_type: string
    model_id: string
    _count: Model_has_permissionsCountAggregateOutputType | null
    _min: Model_has_permissionsMinAggregateOutputType | null
    _max: Model_has_permissionsMaxAggregateOutputType | null
  }

  type GetModel_has_permissionsGroupByPayload<T extends model_has_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Model_has_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Model_has_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Model_has_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Model_has_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type model_has_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permission_id?: boolean
    model_type?: boolean
    model_id?: boolean
    permissions?: boolean | permissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model_has_permissions"]>



  export type model_has_permissionsSelectScalar = {
    permission_id?: boolean
    model_type?: boolean
    model_id?: boolean
  }

  export type model_has_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permission_id" | "model_type" | "model_id", ExtArgs["result"]["model_has_permissions"]>
  export type model_has_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | permissionsDefaultArgs<ExtArgs>
  }

  export type $model_has_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "model_has_permissions"
    objects: {
      permissions: Prisma.$permissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      permission_id: string
      model_type: string
      model_id: string
    }, ExtArgs["result"]["model_has_permissions"]>
    composites: {}
  }

  type model_has_permissionsGetPayload<S extends boolean | null | undefined | model_has_permissionsDefaultArgs> = $Result.GetResult<Prisma.$model_has_permissionsPayload, S>

  type model_has_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<model_has_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Model_has_permissionsCountAggregateInputType | true
    }

  export interface model_has_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['model_has_permissions'], meta: { name: 'model_has_permissions' } }
    /**
     * Find zero or one Model_has_permissions that matches the filter.
     * @param {model_has_permissionsFindUniqueArgs} args - Arguments to find a Model_has_permissions
     * @example
     * // Get one Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends model_has_permissionsFindUniqueArgs>(args: SelectSubset<T, model_has_permissionsFindUniqueArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model_has_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {model_has_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Model_has_permissions
     * @example
     * // Get one Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends model_has_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, model_has_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_has_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsFindFirstArgs} args - Arguments to find a Model_has_permissions
     * @example
     * // Get one Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends model_has_permissionsFindFirstArgs>(args?: SelectSubset<T, model_has_permissionsFindFirstArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_has_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsFindFirstOrThrowArgs} args - Arguments to find a Model_has_permissions
     * @example
     * // Get one Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends model_has_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, model_has_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Model_has_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findMany()
     * 
     * // Get first 10 Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.findMany({ take: 10 })
     * 
     * // Only select the `permission_id`
     * const model_has_permissionsWithPermission_idOnly = await prisma.model_has_permissions.findMany({ select: { permission_id: true } })
     * 
     */
    findMany<T extends model_has_permissionsFindManyArgs>(args?: SelectSubset<T, model_has_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model_has_permissions.
     * @param {model_has_permissionsCreateArgs} args - Arguments to create a Model_has_permissions.
     * @example
     * // Create one Model_has_permissions
     * const Model_has_permissions = await prisma.model_has_permissions.create({
     *   data: {
     *     // ... data to create a Model_has_permissions
     *   }
     * })
     * 
     */
    create<T extends model_has_permissionsCreateArgs>(args: SelectSubset<T, model_has_permissionsCreateArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Model_has_permissions.
     * @param {model_has_permissionsCreateManyArgs} args - Arguments to create many Model_has_permissions.
     * @example
     * // Create many Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends model_has_permissionsCreateManyArgs>(args?: SelectSubset<T, model_has_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model_has_permissions.
     * @param {model_has_permissionsDeleteArgs} args - Arguments to delete one Model_has_permissions.
     * @example
     * // Delete one Model_has_permissions
     * const Model_has_permissions = await prisma.model_has_permissions.delete({
     *   where: {
     *     // ... filter to delete one Model_has_permissions
     *   }
     * })
     * 
     */
    delete<T extends model_has_permissionsDeleteArgs>(args: SelectSubset<T, model_has_permissionsDeleteArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model_has_permissions.
     * @param {model_has_permissionsUpdateArgs} args - Arguments to update one Model_has_permissions.
     * @example
     * // Update one Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends model_has_permissionsUpdateArgs>(args: SelectSubset<T, model_has_permissionsUpdateArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Model_has_permissions.
     * @param {model_has_permissionsDeleteManyArgs} args - Arguments to filter Model_has_permissions to delete.
     * @example
     * // Delete a few Model_has_permissions
     * const { count } = await prisma.model_has_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends model_has_permissionsDeleteManyArgs>(args?: SelectSubset<T, model_has_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Model_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends model_has_permissionsUpdateManyArgs>(args: SelectSubset<T, model_has_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model_has_permissions.
     * @param {model_has_permissionsUpsertArgs} args - Arguments to update or create a Model_has_permissions.
     * @example
     * // Update or create a Model_has_permissions
     * const model_has_permissions = await prisma.model_has_permissions.upsert({
     *   create: {
     *     // ... data to create a Model_has_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_has_permissions we want to update
     *   }
     * })
     */
    upsert<T extends model_has_permissionsUpsertArgs>(args: SelectSubset<T, model_has_permissionsUpsertArgs<ExtArgs>>): Prisma__model_has_permissionsClient<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Model_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsCountArgs} args - Arguments to filter Model_has_permissions to count.
     * @example
     * // Count the number of Model_has_permissions
     * const count = await prisma.model_has_permissions.count({
     *   where: {
     *     // ... the filter for the Model_has_permissions we want to count
     *   }
     * })
    **/
    count<T extends model_has_permissionsCountArgs>(
      args?: Subset<T, model_has_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Model_has_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_has_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_has_permissionsAggregateArgs>(args: Subset<T, Model_has_permissionsAggregateArgs>): Prisma.PrismaPromise<GetModel_has_permissionsAggregateType<T>>

    /**
     * Group by Model_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_permissionsGroupByArgs} args - Group by arguments.
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
      T extends model_has_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: model_has_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: model_has_permissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, model_has_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_has_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the model_has_permissions model
   */
  readonly fields: model_has_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for model_has_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__model_has_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends permissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionsDefaultArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the model_has_permissions model
   */
  interface model_has_permissionsFieldRefs {
    readonly permission_id: FieldRef<"model_has_permissions", 'String'>
    readonly model_type: FieldRef<"model_has_permissions", 'String'>
    readonly model_id: FieldRef<"model_has_permissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * model_has_permissions findUnique
   */
  export type model_has_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which model_has_permissions to fetch.
     */
    where: model_has_permissionsWhereUniqueInput
  }

  /**
   * model_has_permissions findUniqueOrThrow
   */
  export type model_has_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which model_has_permissions to fetch.
     */
    where: model_has_permissionsWhereUniqueInput
  }

  /**
   * model_has_permissions findFirst
   */
  export type model_has_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which model_has_permissions to fetch.
     */
    where?: model_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_permissions to fetch.
     */
    orderBy?: model_has_permissionsOrderByWithRelationInput | model_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_has_permissions.
     */
    cursor?: model_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_has_permissions.
     */
    distinct?: Model_has_permissionsScalarFieldEnum | Model_has_permissionsScalarFieldEnum[]
  }

  /**
   * model_has_permissions findFirstOrThrow
   */
  export type model_has_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which model_has_permissions to fetch.
     */
    where?: model_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_permissions to fetch.
     */
    orderBy?: model_has_permissionsOrderByWithRelationInput | model_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_has_permissions.
     */
    cursor?: model_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_has_permissions.
     */
    distinct?: Model_has_permissionsScalarFieldEnum | Model_has_permissionsScalarFieldEnum[]
  }

  /**
   * model_has_permissions findMany
   */
  export type model_has_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which model_has_permissions to fetch.
     */
    where?: model_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_permissions to fetch.
     */
    orderBy?: model_has_permissionsOrderByWithRelationInput | model_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing model_has_permissions.
     */
    cursor?: model_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_permissions.
     */
    skip?: number
    distinct?: Model_has_permissionsScalarFieldEnum | Model_has_permissionsScalarFieldEnum[]
  }

  /**
   * model_has_permissions create
   */
  export type model_has_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a model_has_permissions.
     */
    data: XOR<model_has_permissionsCreateInput, model_has_permissionsUncheckedCreateInput>
  }

  /**
   * model_has_permissions createMany
   */
  export type model_has_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many model_has_permissions.
     */
    data: model_has_permissionsCreateManyInput | model_has_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * model_has_permissions update
   */
  export type model_has_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a model_has_permissions.
     */
    data: XOR<model_has_permissionsUpdateInput, model_has_permissionsUncheckedUpdateInput>
    /**
     * Choose, which model_has_permissions to update.
     */
    where: model_has_permissionsWhereUniqueInput
  }

  /**
   * model_has_permissions updateMany
   */
  export type model_has_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update model_has_permissions.
     */
    data: XOR<model_has_permissionsUpdateManyMutationInput, model_has_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which model_has_permissions to update
     */
    where?: model_has_permissionsWhereInput
    /**
     * Limit how many model_has_permissions to update.
     */
    limit?: number
  }

  /**
   * model_has_permissions upsert
   */
  export type model_has_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the model_has_permissions to update in case it exists.
     */
    where: model_has_permissionsWhereUniqueInput
    /**
     * In case the model_has_permissions found by the `where` argument doesn't exist, create a new model_has_permissions with this data.
     */
    create: XOR<model_has_permissionsCreateInput, model_has_permissionsUncheckedCreateInput>
    /**
     * In case the model_has_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<model_has_permissionsUpdateInput, model_has_permissionsUncheckedUpdateInput>
  }

  /**
   * model_has_permissions delete
   */
  export type model_has_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter which model_has_permissions to delete.
     */
    where: model_has_permissionsWhereUniqueInput
  }

  /**
   * model_has_permissions deleteMany
   */
  export type model_has_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_has_permissions to delete
     */
    where?: model_has_permissionsWhereInput
    /**
     * Limit how many model_has_permissions to delete.
     */
    limit?: number
  }

  /**
   * model_has_permissions without action
   */
  export type model_has_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model model_has_roles
   */

  export type AggregateModel_has_roles = {
    _count: Model_has_rolesCountAggregateOutputType | null
    _min: Model_has_rolesMinAggregateOutputType | null
    _max: Model_has_rolesMaxAggregateOutputType | null
  }

  export type Model_has_rolesMinAggregateOutputType = {
    role_id: string | null
    model_type: string | null
    model_id: string | null
  }

  export type Model_has_rolesMaxAggregateOutputType = {
    role_id: string | null
    model_type: string | null
    model_id: string | null
  }

  export type Model_has_rolesCountAggregateOutputType = {
    role_id: number
    model_type: number
    model_id: number
    _all: number
  }


  export type Model_has_rolesMinAggregateInputType = {
    role_id?: true
    model_type?: true
    model_id?: true
  }

  export type Model_has_rolesMaxAggregateInputType = {
    role_id?: true
    model_type?: true
    model_id?: true
  }

  export type Model_has_rolesCountAggregateInputType = {
    role_id?: true
    model_type?: true
    model_id?: true
    _all?: true
  }

  export type Model_has_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_has_roles to aggregate.
     */
    where?: model_has_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_roles to fetch.
     */
    orderBy?: model_has_rolesOrderByWithRelationInput | model_has_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: model_has_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned model_has_roles
    **/
    _count?: true | Model_has_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Model_has_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Model_has_rolesMaxAggregateInputType
  }

  export type GetModel_has_rolesAggregateType<T extends Model_has_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateModel_has_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel_has_roles[P]>
      : GetScalarType<T[P], AggregateModel_has_roles[P]>
  }




  export type model_has_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: model_has_rolesWhereInput
    orderBy?: model_has_rolesOrderByWithAggregationInput | model_has_rolesOrderByWithAggregationInput[]
    by: Model_has_rolesScalarFieldEnum[] | Model_has_rolesScalarFieldEnum
    having?: model_has_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Model_has_rolesCountAggregateInputType | true
    _min?: Model_has_rolesMinAggregateInputType
    _max?: Model_has_rolesMaxAggregateInputType
  }

  export type Model_has_rolesGroupByOutputType = {
    role_id: string
    model_type: string
    model_id: string
    _count: Model_has_rolesCountAggregateOutputType | null
    _min: Model_has_rolesMinAggregateOutputType | null
    _max: Model_has_rolesMaxAggregateOutputType | null
  }

  type GetModel_has_rolesGroupByPayload<T extends model_has_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Model_has_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Model_has_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Model_has_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Model_has_rolesGroupByOutputType[P]>
        }
      >
    >


  export type model_has_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    model_type?: boolean
    model_id?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model_has_roles"]>



  export type model_has_rolesSelectScalar = {
    role_id?: boolean
    model_type?: boolean
    model_id?: boolean
  }

  export type model_has_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "model_type" | "model_id", ExtArgs["result"]["model_has_roles"]>
  export type model_has_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }

  export type $model_has_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "model_has_roles"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: string
      model_type: string
      model_id: string
    }, ExtArgs["result"]["model_has_roles"]>
    composites: {}
  }

  type model_has_rolesGetPayload<S extends boolean | null | undefined | model_has_rolesDefaultArgs> = $Result.GetResult<Prisma.$model_has_rolesPayload, S>

  type model_has_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<model_has_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Model_has_rolesCountAggregateInputType | true
    }

  export interface model_has_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['model_has_roles'], meta: { name: 'model_has_roles' } }
    /**
     * Find zero or one Model_has_roles that matches the filter.
     * @param {model_has_rolesFindUniqueArgs} args - Arguments to find a Model_has_roles
     * @example
     * // Get one Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends model_has_rolesFindUniqueArgs>(args: SelectSubset<T, model_has_rolesFindUniqueArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model_has_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {model_has_rolesFindUniqueOrThrowArgs} args - Arguments to find a Model_has_roles
     * @example
     * // Get one Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends model_has_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, model_has_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_has_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesFindFirstArgs} args - Arguments to find a Model_has_roles
     * @example
     * // Get one Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends model_has_rolesFindFirstArgs>(args?: SelectSubset<T, model_has_rolesFindFirstArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_has_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesFindFirstOrThrowArgs} args - Arguments to find a Model_has_roles
     * @example
     * // Get one Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends model_has_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, model_has_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Model_has_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findMany()
     * 
     * // Get first 10 Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const model_has_rolesWithRole_idOnly = await prisma.model_has_roles.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends model_has_rolesFindManyArgs>(args?: SelectSubset<T, model_has_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model_has_roles.
     * @param {model_has_rolesCreateArgs} args - Arguments to create a Model_has_roles.
     * @example
     * // Create one Model_has_roles
     * const Model_has_roles = await prisma.model_has_roles.create({
     *   data: {
     *     // ... data to create a Model_has_roles
     *   }
     * })
     * 
     */
    create<T extends model_has_rolesCreateArgs>(args: SelectSubset<T, model_has_rolesCreateArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Model_has_roles.
     * @param {model_has_rolesCreateManyArgs} args - Arguments to create many Model_has_roles.
     * @example
     * // Create many Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends model_has_rolesCreateManyArgs>(args?: SelectSubset<T, model_has_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model_has_roles.
     * @param {model_has_rolesDeleteArgs} args - Arguments to delete one Model_has_roles.
     * @example
     * // Delete one Model_has_roles
     * const Model_has_roles = await prisma.model_has_roles.delete({
     *   where: {
     *     // ... filter to delete one Model_has_roles
     *   }
     * })
     * 
     */
    delete<T extends model_has_rolesDeleteArgs>(args: SelectSubset<T, model_has_rolesDeleteArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model_has_roles.
     * @param {model_has_rolesUpdateArgs} args - Arguments to update one Model_has_roles.
     * @example
     * // Update one Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends model_has_rolesUpdateArgs>(args: SelectSubset<T, model_has_rolesUpdateArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Model_has_roles.
     * @param {model_has_rolesDeleteManyArgs} args - Arguments to filter Model_has_roles to delete.
     * @example
     * // Delete a few Model_has_roles
     * const { count } = await prisma.model_has_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends model_has_rolesDeleteManyArgs>(args?: SelectSubset<T, model_has_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Model_has_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends model_has_rolesUpdateManyArgs>(args: SelectSubset<T, model_has_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model_has_roles.
     * @param {model_has_rolesUpsertArgs} args - Arguments to update or create a Model_has_roles.
     * @example
     * // Update or create a Model_has_roles
     * const model_has_roles = await prisma.model_has_roles.upsert({
     *   create: {
     *     // ... data to create a Model_has_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_has_roles we want to update
     *   }
     * })
     */
    upsert<T extends model_has_rolesUpsertArgs>(args: SelectSubset<T, model_has_rolesUpsertArgs<ExtArgs>>): Prisma__model_has_rolesClient<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Model_has_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesCountArgs} args - Arguments to filter Model_has_roles to count.
     * @example
     * // Count the number of Model_has_roles
     * const count = await prisma.model_has_roles.count({
     *   where: {
     *     // ... the filter for the Model_has_roles we want to count
     *   }
     * })
    **/
    count<T extends model_has_rolesCountArgs>(
      args?: Subset<T, model_has_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Model_has_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model_has_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_has_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_has_rolesAggregateArgs>(args: Subset<T, Model_has_rolesAggregateArgs>): Prisma.PrismaPromise<GetModel_has_rolesAggregateType<T>>

    /**
     * Group by Model_has_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_has_rolesGroupByArgs} args - Group by arguments.
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
      T extends model_has_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: model_has_rolesGroupByArgs['orderBy'] }
        : { orderBy?: model_has_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, model_has_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_has_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the model_has_roles model
   */
  readonly fields: model_has_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for model_has_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__model_has_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the model_has_roles model
   */
  interface model_has_rolesFieldRefs {
    readonly role_id: FieldRef<"model_has_roles", 'String'>
    readonly model_type: FieldRef<"model_has_roles", 'String'>
    readonly model_id: FieldRef<"model_has_roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * model_has_roles findUnique
   */
  export type model_has_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter, which model_has_roles to fetch.
     */
    where: model_has_rolesWhereUniqueInput
  }

  /**
   * model_has_roles findUniqueOrThrow
   */
  export type model_has_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter, which model_has_roles to fetch.
     */
    where: model_has_rolesWhereUniqueInput
  }

  /**
   * model_has_roles findFirst
   */
  export type model_has_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter, which model_has_roles to fetch.
     */
    where?: model_has_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_roles to fetch.
     */
    orderBy?: model_has_rolesOrderByWithRelationInput | model_has_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_has_roles.
     */
    cursor?: model_has_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_has_roles.
     */
    distinct?: Model_has_rolesScalarFieldEnum | Model_has_rolesScalarFieldEnum[]
  }

  /**
   * model_has_roles findFirstOrThrow
   */
  export type model_has_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter, which model_has_roles to fetch.
     */
    where?: model_has_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_roles to fetch.
     */
    orderBy?: model_has_rolesOrderByWithRelationInput | model_has_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_has_roles.
     */
    cursor?: model_has_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_has_roles.
     */
    distinct?: Model_has_rolesScalarFieldEnum | Model_has_rolesScalarFieldEnum[]
  }

  /**
   * model_has_roles findMany
   */
  export type model_has_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter, which model_has_roles to fetch.
     */
    where?: model_has_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_has_roles to fetch.
     */
    orderBy?: model_has_rolesOrderByWithRelationInput | model_has_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing model_has_roles.
     */
    cursor?: model_has_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_has_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_has_roles.
     */
    skip?: number
    distinct?: Model_has_rolesScalarFieldEnum | Model_has_rolesScalarFieldEnum[]
  }

  /**
   * model_has_roles create
   */
  export type model_has_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a model_has_roles.
     */
    data: XOR<model_has_rolesCreateInput, model_has_rolesUncheckedCreateInput>
  }

  /**
   * model_has_roles createMany
   */
  export type model_has_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many model_has_roles.
     */
    data: model_has_rolesCreateManyInput | model_has_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * model_has_roles update
   */
  export type model_has_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a model_has_roles.
     */
    data: XOR<model_has_rolesUpdateInput, model_has_rolesUncheckedUpdateInput>
    /**
     * Choose, which model_has_roles to update.
     */
    where: model_has_rolesWhereUniqueInput
  }

  /**
   * model_has_roles updateMany
   */
  export type model_has_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update model_has_roles.
     */
    data: XOR<model_has_rolesUpdateManyMutationInput, model_has_rolesUncheckedUpdateManyInput>
    /**
     * Filter which model_has_roles to update
     */
    where?: model_has_rolesWhereInput
    /**
     * Limit how many model_has_roles to update.
     */
    limit?: number
  }

  /**
   * model_has_roles upsert
   */
  export type model_has_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the model_has_roles to update in case it exists.
     */
    where: model_has_rolesWhereUniqueInput
    /**
     * In case the model_has_roles found by the `where` argument doesn't exist, create a new model_has_roles with this data.
     */
    create: XOR<model_has_rolesCreateInput, model_has_rolesUncheckedCreateInput>
    /**
     * In case the model_has_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<model_has_rolesUpdateInput, model_has_rolesUncheckedUpdateInput>
  }

  /**
   * model_has_roles delete
   */
  export type model_has_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    /**
     * Filter which model_has_roles to delete.
     */
    where: model_has_rolesWhereUniqueInput
  }

  /**
   * model_has_roles deleteMany
   */
  export type model_has_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_has_roles to delete
     */
    where?: model_has_rolesWhereInput
    /**
     * Limit how many model_has_roles to delete.
     */
    limit?: number
  }

  /**
   * model_has_roles without action
   */
  export type model_has_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    title: string | null
    assigned_to_user_id: string | null
    assigned_from_user_id: string | null
    link: string | null
    viewed: boolean | null
    viewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    assigned_to_user_id: string | null
    assigned_from_user_id: string | null
    link: string | null
    viewed: boolean | null
    viewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    title: number
    assigned_to_user_id: number
    assigned_from_user_id: number
    link: number
    viewed: number
    viewed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    title?: true
    assigned_to_user_id?: true
    assigned_from_user_id?: true
    link?: true
    viewed?: true
    viewed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    title?: true
    assigned_to_user_id?: true
    assigned_from_user_id?: true
    link?: true
    viewed?: true
    viewed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    title?: true
    assigned_to_user_id?: true
    assigned_from_user_id?: true
    link?: true
    viewed?: true
    viewed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    title: string
    assigned_to_user_id: string
    assigned_from_user_id: string
    link: string | null
    viewed: boolean | null
    viewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    assigned_to_user_id?: boolean
    assigned_from_user_id?: boolean
    link?: boolean
    viewed?: boolean
    viewed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_notifications_assigned_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_notifications_assigned_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    id?: boolean
    title?: boolean
    assigned_to_user_id?: boolean
    assigned_from_user_id?: boolean
    link?: boolean
    viewed?: boolean
    viewed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "assigned_to_user_id" | "assigned_from_user_id" | "link" | "viewed" | "viewed_at" | "created_at" | "updated_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_notifications_assigned_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_notifications_assigned_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users_notifications_assigned_from_user_idTousers: Prisma.$usersPayload<ExtArgs>
      users_notifications_assigned_to_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      assigned_to_user_id: string
      assigned_from_user_id: string
      link: string | null
      viewed: boolean | null
      viewed_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_notifications_assigned_from_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_notifications_assigned_to_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly assigned_to_user_id: FieldRef<"notifications", 'String'>
    readonly assigned_from_user_id: FieldRef<"notifications", 'String'>
    readonly link: FieldRef<"notifications", 'String'>
    readonly viewed: FieldRef<"notifications", 'Boolean'>
    readonly viewed_at: FieldRef<"notifications", 'DateTime'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
    readonly updated_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    email: number
    token: number
    created_at: number
    _all: number
  }


  export type Password_reset_tokensMinAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    email: string
    token: string
    created_at: Date | null
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["password_reset_tokens"]>



  export type password_reset_tokensSelectScalar = {
    email?: boolean
    token?: boolean
    created_at?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "token" | "created_at", ExtArgs["result"]["password_reset_tokens"]>

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      token: string
      created_at: Date | null
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const password_reset_tokensWithEmailOnly = await prisma.password_reset_tokens.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly email: FieldRef<"password_reset_tokens", 'String'>
    readonly token: FieldRef<"password_reset_tokens", 'String'>
    readonly created_at: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
  }


  /**
   * Model permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    module: string | null
    guard_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    module: string | null
    guard_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    name: number
    label: number
    module: number
    guard_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionsMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    module?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    module?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    module?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to aggregate.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionsWhereInput
    orderBy?: permissionsOrderByWithAggregationInput | permissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: string
    name: string
    label: string
    module: string
    guard_name: string
    created_at: Date | null
    updated_at: Date | null
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    module?: boolean
    guard_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    model_has_permissions?: boolean | permissions$model_has_permissionsArgs<ExtArgs>
    role_has_permissions?: boolean | permissions$role_has_permissionsArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>



  export type permissionsSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    module?: boolean
    guard_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "module" | "guard_name" | "created_at" | "updated_at", ExtArgs["result"]["permissions"]>
  export type permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_has_permissions?: boolean | permissions$model_has_permissionsArgs<ExtArgs>
    role_has_permissions?: boolean | permissions$role_has_permissionsArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permissions"
    objects: {
      model_has_permissions: Prisma.$model_has_permissionsPayload<ExtArgs>[]
      role_has_permissions: Prisma.$role_has_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label: string
      module: string
      guard_name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type permissionsGetPayload<S extends boolean | null | undefined | permissionsDefaultArgs> = $Result.GetResult<Prisma.$permissionsPayload, S>

  type permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permissions'], meta: { name: 'permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {permissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionsFindUniqueArgs>(args: SelectSubset<T, permissionsFindUniqueArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionsFindFirstArgs>(args?: SelectSubset<T, permissionsFindFirstArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionsFindManyArgs>(args?: SelectSubset<T, permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissions.
     * @param {permissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends permissionsCreateArgs>(args: SelectSubset<T, permissionsCreateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {permissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionsCreateManyArgs>(args?: SelectSubset<T, permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permissions.
     * @param {permissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends permissionsDeleteArgs>(args: SelectSubset<T, permissionsDeleteArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissions.
     * @param {permissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionsUpdateArgs>(args: SelectSubset<T, permissionsUpdateArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {permissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionsDeleteManyArgs>(args?: SelectSubset<T, permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionsUpdateManyArgs>(args: SelectSubset<T, permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permissions.
     * @param {permissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends permissionsUpsertArgs>(args: SelectSubset<T, permissionsUpsertArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionsCountArgs>(
      args?: Subset<T, permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionsGroupByArgs} args - Group by arguments.
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
      T extends permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionsGroupByArgs['orderBy'] }
        : { orderBy?: permissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permissions model
   */
  readonly fields: permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model_has_permissions<T extends permissions$model_has_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, permissions$model_has_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_has_permissions<T extends permissions$role_has_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, permissions$role_has_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the permissions model
   */
  interface permissionsFieldRefs {
    readonly id: FieldRef<"permissions", 'String'>
    readonly name: FieldRef<"permissions", 'String'>
    readonly label: FieldRef<"permissions", 'String'>
    readonly module: FieldRef<"permissions", 'String'>
    readonly guard_name: FieldRef<"permissions", 'String'>
    readonly created_at: FieldRef<"permissions", 'DateTime'>
    readonly updated_at: FieldRef<"permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permissions findUnique
   */
  export type permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findUniqueOrThrow
   */
  export type permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions findFirst
   */
  export type permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findFirstOrThrow
   */
  export type permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions findMany
   */
  export type permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionsOrderByWithRelationInput | permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * permissions create
   */
  export type permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a permissions.
     */
    data: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
  }

  /**
   * permissions createMany
   */
  export type permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionsCreateManyInput | permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permissions update
   */
  export type permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a permissions.
     */
    data: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
    /**
     * Choose, which permissions to update.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions updateMany
   */
  export type permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionsUpdateManyMutationInput, permissionsUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permissions upsert
   */
  export type permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the permissions to update in case it exists.
     */
    where: permissionsWhereUniqueInput
    /**
     * In case the permissions found by the `where` argument doesn't exist, create a new permissions with this data.
     */
    create: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>
    /**
     * In case the permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionsUpdateInput, permissionsUncheckedUpdateInput>
  }

  /**
   * permissions delete
   */
  export type permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
    /**
     * Filter which permissions to delete.
     */
    where: permissionsWhereUniqueInput
  }

  /**
   * permissions deleteMany
   */
  export type permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionsWhereInput
    /**
     * Limit how many permissions to delete.
     */
    limit?: number
  }

  /**
   * permissions.model_has_permissions
   */
  export type permissions$model_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_permissions
     */
    select?: model_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_permissions
     */
    omit?: model_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_permissionsInclude<ExtArgs> | null
    where?: model_has_permissionsWhereInput
    orderBy?: model_has_permissionsOrderByWithRelationInput | model_has_permissionsOrderByWithRelationInput[]
    cursor?: model_has_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Model_has_permissionsScalarFieldEnum | Model_has_permissionsScalarFieldEnum[]
  }

  /**
   * permissions.role_has_permissions
   */
  export type permissions$role_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    where?: role_has_permissionsWhereInput
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    cursor?: role_has_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_has_permissionsScalarFieldEnum | Role_has_permissionsScalarFieldEnum[]
  }

  /**
   * permissions without action
   */
  export type permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permissions
     */
    select?: permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permissions
     */
    omit?: permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionsInclude<ExtArgs> | null
  }


  /**
   * Model personal_access_tokens
   */

  export type AggregatePersonal_access_tokens = {
    _count: Personal_access_tokensCountAggregateOutputType | null
    _avg: Personal_access_tokensAvgAggregateOutputType | null
    _sum: Personal_access_tokensSumAggregateOutputType | null
    _min: Personal_access_tokensMinAggregateOutputType | null
    _max: Personal_access_tokensMaxAggregateOutputType | null
  }

  export type Personal_access_tokensAvgAggregateOutputType = {
    tokenable_id: number | null
  }

  export type Personal_access_tokensSumAggregateOutputType = {
    tokenable_id: bigint | null
  }

  export type Personal_access_tokensMinAggregateOutputType = {
    id: string | null
    tokenable_type: string | null
    tokenable_id: bigint | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Personal_access_tokensMaxAggregateOutputType = {
    id: string | null
    tokenable_type: string | null
    tokenable_id: bigint | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Personal_access_tokensCountAggregateOutputType = {
    id: number
    tokenable_type: number
    tokenable_id: number
    name: number
    token: number
    abilities: number
    last_used_at: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Personal_access_tokensAvgAggregateInputType = {
    tokenable_id?: true
  }

  export type Personal_access_tokensSumAggregateInputType = {
    tokenable_id?: true
  }

  export type Personal_access_tokensMinAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Personal_access_tokensMaxAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Personal_access_tokensCountAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Personal_access_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal_access_tokens to aggregate.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personal_access_tokens
    **/
    _count?: true | Personal_access_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_access_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_access_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_access_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_access_tokensMaxAggregateInputType
  }

  export type GetPersonal_access_tokensAggregateType<T extends Personal_access_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_access_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_access_tokens[P]>
      : GetScalarType<T[P], AggregatePersonal_access_tokens[P]>
  }




  export type personal_access_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personal_access_tokensWhereInput
    orderBy?: personal_access_tokensOrderByWithAggregationInput | personal_access_tokensOrderByWithAggregationInput[]
    by: Personal_access_tokensScalarFieldEnum[] | Personal_access_tokensScalarFieldEnum
    having?: personal_access_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_access_tokensCountAggregateInputType | true
    _avg?: Personal_access_tokensAvgAggregateInputType
    _sum?: Personal_access_tokensSumAggregateInputType
    _min?: Personal_access_tokensMinAggregateInputType
    _max?: Personal_access_tokensMaxAggregateInputType
  }

  export type Personal_access_tokensGroupByOutputType = {
    id: string
    tokenable_type: string
    tokenable_id: bigint
    name: string
    token: string
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Personal_access_tokensCountAggregateOutputType | null
    _avg: Personal_access_tokensAvgAggregateOutputType | null
    _sum: Personal_access_tokensSumAggregateOutputType | null
    _min: Personal_access_tokensMinAggregateOutputType | null
    _max: Personal_access_tokensMaxAggregateOutputType | null
  }

  type GetPersonal_access_tokensGroupByPayload<T extends personal_access_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_access_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_access_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_access_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_access_tokensGroupByOutputType[P]>
        }
      >
    >


  export type personal_access_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personal_access_tokens"]>



  export type personal_access_tokensSelectScalar = {
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type personal_access_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenable_type" | "tokenable_id" | "name" | "token" | "abilities" | "last_used_at" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["personal_access_tokens"]>

  export type $personal_access_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personal_access_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenable_type: string
      tokenable_id: bigint
      name: string
      token: string
      abilities: string | null
      last_used_at: Date | null
      expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["personal_access_tokens"]>
    composites: {}
  }

  type personal_access_tokensGetPayload<S extends boolean | null | undefined | personal_access_tokensDefaultArgs> = $Result.GetResult<Prisma.$personal_access_tokensPayload, S>

  type personal_access_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personal_access_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_access_tokensCountAggregateInputType | true
    }

  export interface personal_access_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personal_access_tokens'], meta: { name: 'personal_access_tokens' } }
    /**
     * Find zero or one Personal_access_tokens that matches the filter.
     * @param {personal_access_tokensFindUniqueArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personal_access_tokensFindUniqueArgs>(args: SelectSubset<T, personal_access_tokensFindUniqueArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_access_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personal_access_tokensFindUniqueOrThrowArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personal_access_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindFirstArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personal_access_tokensFindFirstArgs>(args?: SelectSubset<T, personal_access_tokensFindFirstArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_access_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindFirstOrThrowArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personal_access_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, personal_access_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findMany()
     * 
     * // Get first 10 Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_access_tokensWithIdOnly = await prisma.personal_access_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personal_access_tokensFindManyArgs>(args?: SelectSubset<T, personal_access_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_access_tokens.
     * @param {personal_access_tokensCreateArgs} args - Arguments to create a Personal_access_tokens.
     * @example
     * // Create one Personal_access_tokens
     * const Personal_access_tokens = await prisma.personal_access_tokens.create({
     *   data: {
     *     // ... data to create a Personal_access_tokens
     *   }
     * })
     * 
     */
    create<T extends personal_access_tokensCreateArgs>(args: SelectSubset<T, personal_access_tokensCreateArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_access_tokens.
     * @param {personal_access_tokensCreateManyArgs} args - Arguments to create many Personal_access_tokens.
     * @example
     * // Create many Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personal_access_tokensCreateManyArgs>(args?: SelectSubset<T, personal_access_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_access_tokens.
     * @param {personal_access_tokensDeleteArgs} args - Arguments to delete one Personal_access_tokens.
     * @example
     * // Delete one Personal_access_tokens
     * const Personal_access_tokens = await prisma.personal_access_tokens.delete({
     *   where: {
     *     // ... filter to delete one Personal_access_tokens
     *   }
     * })
     * 
     */
    delete<T extends personal_access_tokensDeleteArgs>(args: SelectSubset<T, personal_access_tokensDeleteArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_access_tokens.
     * @param {personal_access_tokensUpdateArgs} args - Arguments to update one Personal_access_tokens.
     * @example
     * // Update one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personal_access_tokensUpdateArgs>(args: SelectSubset<T, personal_access_tokensUpdateArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_access_tokens.
     * @param {personal_access_tokensDeleteManyArgs} args - Arguments to filter Personal_access_tokens to delete.
     * @example
     * // Delete a few Personal_access_tokens
     * const { count } = await prisma.personal_access_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personal_access_tokensDeleteManyArgs>(args?: SelectSubset<T, personal_access_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personal_access_tokensUpdateManyArgs>(args: SelectSubset<T, personal_access_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_access_tokens.
     * @param {personal_access_tokensUpsertArgs} args - Arguments to update or create a Personal_access_tokens.
     * @example
     * // Update or create a Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.upsert({
     *   create: {
     *     // ... data to create a Personal_access_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_access_tokens we want to update
     *   }
     * })
     */
    upsert<T extends personal_access_tokensUpsertArgs>(args: SelectSubset<T, personal_access_tokensUpsertArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensCountArgs} args - Arguments to filter Personal_access_tokens to count.
     * @example
     * // Count the number of Personal_access_tokens
     * const count = await prisma.personal_access_tokens.count({
     *   where: {
     *     // ... the filter for the Personal_access_tokens we want to count
     *   }
     * })
    **/
    count<T extends personal_access_tokensCountArgs>(
      args?: Subset<T, personal_access_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_access_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_access_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Personal_access_tokensAggregateArgs>(args: Subset<T, Personal_access_tokensAggregateArgs>): Prisma.PrismaPromise<GetPersonal_access_tokensAggregateType<T>>

    /**
     * Group by Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensGroupByArgs} args - Group by arguments.
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
      T extends personal_access_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personal_access_tokensGroupByArgs['orderBy'] }
        : { orderBy?: personal_access_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, personal_access_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_access_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personal_access_tokens model
   */
  readonly fields: personal_access_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personal_access_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personal_access_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the personal_access_tokens model
   */
  interface personal_access_tokensFieldRefs {
    readonly id: FieldRef<"personal_access_tokens", 'String'>
    readonly tokenable_type: FieldRef<"personal_access_tokens", 'String'>
    readonly tokenable_id: FieldRef<"personal_access_tokens", 'BigInt'>
    readonly name: FieldRef<"personal_access_tokens", 'String'>
    readonly token: FieldRef<"personal_access_tokens", 'String'>
    readonly abilities: FieldRef<"personal_access_tokens", 'String'>
    readonly last_used_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly expires_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly created_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly updated_at: FieldRef<"personal_access_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * personal_access_tokens findUnique
   */
  export type personal_access_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens findUniqueOrThrow
   */
  export type personal_access_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens findFirst
   */
  export type personal_access_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personal_access_tokens.
     */
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens findFirstOrThrow
   */
  export type personal_access_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personal_access_tokens.
     */
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens findMany
   */
  export type personal_access_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens create
   */
  export type personal_access_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a personal_access_tokens.
     */
    data: XOR<personal_access_tokensCreateInput, personal_access_tokensUncheckedCreateInput>
  }

  /**
   * personal_access_tokens createMany
   */
  export type personal_access_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personal_access_tokens.
     */
    data: personal_access_tokensCreateManyInput | personal_access_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal_access_tokens update
   */
  export type personal_access_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a personal_access_tokens.
     */
    data: XOR<personal_access_tokensUpdateInput, personal_access_tokensUncheckedUpdateInput>
    /**
     * Choose, which personal_access_tokens to update.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens updateMany
   */
  export type personal_access_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personal_access_tokens.
     */
    data: XOR<personal_access_tokensUpdateManyMutationInput, personal_access_tokensUncheckedUpdateManyInput>
    /**
     * Filter which personal_access_tokens to update
     */
    where?: personal_access_tokensWhereInput
    /**
     * Limit how many personal_access_tokens to update.
     */
    limit?: number
  }

  /**
   * personal_access_tokens upsert
   */
  export type personal_access_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the personal_access_tokens to update in case it exists.
     */
    where: personal_access_tokensWhereUniqueInput
    /**
     * In case the personal_access_tokens found by the `where` argument doesn't exist, create a new personal_access_tokens with this data.
     */
    create: XOR<personal_access_tokensCreateInput, personal_access_tokensUncheckedCreateInput>
    /**
     * In case the personal_access_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personal_access_tokensUpdateInput, personal_access_tokensUncheckedUpdateInput>
  }

  /**
   * personal_access_tokens delete
   */
  export type personal_access_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter which personal_access_tokens to delete.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens deleteMany
   */
  export type personal_access_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal_access_tokens to delete
     */
    where?: personal_access_tokensWhereInput
    /**
     * Limit how many personal_access_tokens to delete.
     */
    limit?: number
  }

  /**
   * personal_access_tokens without action
   */
  export type personal_access_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
  }


  /**
   * Model role_has_permissions
   */

  export type AggregateRole_has_permissions = {
    _count: Role_has_permissionsCountAggregateOutputType | null
    _min: Role_has_permissionsMinAggregateOutputType | null
    _max: Role_has_permissionsMaxAggregateOutputType | null
  }

  export type Role_has_permissionsMinAggregateOutputType = {
    permission_id: string | null
    role_id: string | null
  }

  export type Role_has_permissionsMaxAggregateOutputType = {
    permission_id: string | null
    role_id: string | null
  }

  export type Role_has_permissionsCountAggregateOutputType = {
    permission_id: number
    role_id: number
    _all: number
  }


  export type Role_has_permissionsMinAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type Role_has_permissionsMaxAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type Role_has_permissionsCountAggregateInputType = {
    permission_id?: true
    role_id?: true
    _all?: true
  }

  export type Role_has_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_has_permissions to aggregate.
     */
    where?: role_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_has_permissions to fetch.
     */
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_has_permissions
    **/
    _count?: true | Role_has_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_has_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_has_permissionsMaxAggregateInputType
  }

  export type GetRole_has_permissionsAggregateType<T extends Role_has_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_has_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_has_permissions[P]>
      : GetScalarType<T[P], AggregateRole_has_permissions[P]>
  }




  export type role_has_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_has_permissionsWhereInput
    orderBy?: role_has_permissionsOrderByWithAggregationInput | role_has_permissionsOrderByWithAggregationInput[]
    by: Role_has_permissionsScalarFieldEnum[] | Role_has_permissionsScalarFieldEnum
    having?: role_has_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_has_permissionsCountAggregateInputType | true
    _min?: Role_has_permissionsMinAggregateInputType
    _max?: Role_has_permissionsMaxAggregateInputType
  }

  export type Role_has_permissionsGroupByOutputType = {
    permission_id: string
    role_id: string
    _count: Role_has_permissionsCountAggregateOutputType | null
    _min: Role_has_permissionsMinAggregateOutputType | null
    _max: Role_has_permissionsMaxAggregateOutputType | null
  }

  type GetRole_has_permissionsGroupByPayload<T extends role_has_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_has_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_has_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_has_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Role_has_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type role_has_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permission_id?: boolean
    role_id?: boolean
    permissions?: boolean | permissionsDefaultArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_has_permissions"]>



  export type role_has_permissionsSelectScalar = {
    permission_id?: boolean
    role_id?: boolean
  }

  export type role_has_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permission_id" | "role_id", ExtArgs["result"]["role_has_permissions"]>
  export type role_has_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | permissionsDefaultArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }

  export type $role_has_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_has_permissions"
    objects: {
      permissions: Prisma.$permissionsPayload<ExtArgs>
      roles: Prisma.$rolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      permission_id: string
      role_id: string
    }, ExtArgs["result"]["role_has_permissions"]>
    composites: {}
  }

  type role_has_permissionsGetPayload<S extends boolean | null | undefined | role_has_permissionsDefaultArgs> = $Result.GetResult<Prisma.$role_has_permissionsPayload, S>

  type role_has_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<role_has_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Role_has_permissionsCountAggregateInputType | true
    }

  export interface role_has_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_has_permissions'], meta: { name: 'role_has_permissions' } }
    /**
     * Find zero or one Role_has_permissions that matches the filter.
     * @param {role_has_permissionsFindUniqueArgs} args - Arguments to find a Role_has_permissions
     * @example
     * // Get one Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_has_permissionsFindUniqueArgs>(args: SelectSubset<T, role_has_permissionsFindUniqueArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role_has_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {role_has_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Role_has_permissions
     * @example
     * // Get one Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_has_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, role_has_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_has_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsFindFirstArgs} args - Arguments to find a Role_has_permissions
     * @example
     * // Get one Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_has_permissionsFindFirstArgs>(args?: SelectSubset<T, role_has_permissionsFindFirstArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_has_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsFindFirstOrThrowArgs} args - Arguments to find a Role_has_permissions
     * @example
     * // Get one Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_has_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, role_has_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Role_has_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findMany()
     * 
     * // Get first 10 Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.findMany({ take: 10 })
     * 
     * // Only select the `permission_id`
     * const role_has_permissionsWithPermission_idOnly = await prisma.role_has_permissions.findMany({ select: { permission_id: true } })
     * 
     */
    findMany<T extends role_has_permissionsFindManyArgs>(args?: SelectSubset<T, role_has_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role_has_permissions.
     * @param {role_has_permissionsCreateArgs} args - Arguments to create a Role_has_permissions.
     * @example
     * // Create one Role_has_permissions
     * const Role_has_permissions = await prisma.role_has_permissions.create({
     *   data: {
     *     // ... data to create a Role_has_permissions
     *   }
     * })
     * 
     */
    create<T extends role_has_permissionsCreateArgs>(args: SelectSubset<T, role_has_permissionsCreateArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Role_has_permissions.
     * @param {role_has_permissionsCreateManyArgs} args - Arguments to create many Role_has_permissions.
     * @example
     * // Create many Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_has_permissionsCreateManyArgs>(args?: SelectSubset<T, role_has_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_has_permissions.
     * @param {role_has_permissionsDeleteArgs} args - Arguments to delete one Role_has_permissions.
     * @example
     * // Delete one Role_has_permissions
     * const Role_has_permissions = await prisma.role_has_permissions.delete({
     *   where: {
     *     // ... filter to delete one Role_has_permissions
     *   }
     * })
     * 
     */
    delete<T extends role_has_permissionsDeleteArgs>(args: SelectSubset<T, role_has_permissionsDeleteArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role_has_permissions.
     * @param {role_has_permissionsUpdateArgs} args - Arguments to update one Role_has_permissions.
     * @example
     * // Update one Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_has_permissionsUpdateArgs>(args: SelectSubset<T, role_has_permissionsUpdateArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Role_has_permissions.
     * @param {role_has_permissionsDeleteManyArgs} args - Arguments to filter Role_has_permissions to delete.
     * @example
     * // Delete a few Role_has_permissions
     * const { count } = await prisma.role_has_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_has_permissionsDeleteManyArgs>(args?: SelectSubset<T, role_has_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_has_permissionsUpdateManyArgs>(args: SelectSubset<T, role_has_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_has_permissions.
     * @param {role_has_permissionsUpsertArgs} args - Arguments to update or create a Role_has_permissions.
     * @example
     * // Update or create a Role_has_permissions
     * const role_has_permissions = await prisma.role_has_permissions.upsert({
     *   create: {
     *     // ... data to create a Role_has_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_has_permissions we want to update
     *   }
     * })
     */
    upsert<T extends role_has_permissionsUpsertArgs>(args: SelectSubset<T, role_has_permissionsUpsertArgs<ExtArgs>>): Prisma__role_has_permissionsClient<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Role_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsCountArgs} args - Arguments to filter Role_has_permissions to count.
     * @example
     * // Count the number of Role_has_permissions
     * const count = await prisma.role_has_permissions.count({
     *   where: {
     *     // ... the filter for the Role_has_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_has_permissionsCountArgs>(
      args?: Subset<T, role_has_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_has_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_has_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Role_has_permissionsAggregateArgs>(args: Subset<T, Role_has_permissionsAggregateArgs>): Prisma.PrismaPromise<GetRole_has_permissionsAggregateType<T>>

    /**
     * Group by Role_has_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_has_permissionsGroupByArgs} args - Group by arguments.
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
      T extends role_has_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_has_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: role_has_permissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, role_has_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_has_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_has_permissions model
   */
  readonly fields: role_has_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_has_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_has_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends permissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionsDefaultArgs<ExtArgs>>): Prisma__permissionsClient<$Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the role_has_permissions model
   */
  interface role_has_permissionsFieldRefs {
    readonly permission_id: FieldRef<"role_has_permissions", 'String'>
    readonly role_id: FieldRef<"role_has_permissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role_has_permissions findUnique
   */
  export type role_has_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_has_permissions to fetch.
     */
    where: role_has_permissionsWhereUniqueInput
  }

  /**
   * role_has_permissions findUniqueOrThrow
   */
  export type role_has_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_has_permissions to fetch.
     */
    where: role_has_permissionsWhereUniqueInput
  }

  /**
   * role_has_permissions findFirst
   */
  export type role_has_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_has_permissions to fetch.
     */
    where?: role_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_has_permissions to fetch.
     */
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_has_permissions.
     */
    cursor?: role_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_has_permissions.
     */
    distinct?: Role_has_permissionsScalarFieldEnum | Role_has_permissionsScalarFieldEnum[]
  }

  /**
   * role_has_permissions findFirstOrThrow
   */
  export type role_has_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_has_permissions to fetch.
     */
    where?: role_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_has_permissions to fetch.
     */
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_has_permissions.
     */
    cursor?: role_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_has_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_has_permissions.
     */
    distinct?: Role_has_permissionsScalarFieldEnum | Role_has_permissionsScalarFieldEnum[]
  }

  /**
   * role_has_permissions findMany
   */
  export type role_has_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_has_permissions to fetch.
     */
    where?: role_has_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_has_permissions to fetch.
     */
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_has_permissions.
     */
    cursor?: role_has_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_has_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_has_permissions.
     */
    skip?: number
    distinct?: Role_has_permissionsScalarFieldEnum | Role_has_permissionsScalarFieldEnum[]
  }

  /**
   * role_has_permissions create
   */
  export type role_has_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a role_has_permissions.
     */
    data: XOR<role_has_permissionsCreateInput, role_has_permissionsUncheckedCreateInput>
  }

  /**
   * role_has_permissions createMany
   */
  export type role_has_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_has_permissions.
     */
    data: role_has_permissionsCreateManyInput | role_has_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role_has_permissions update
   */
  export type role_has_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a role_has_permissions.
     */
    data: XOR<role_has_permissionsUpdateInput, role_has_permissionsUncheckedUpdateInput>
    /**
     * Choose, which role_has_permissions to update.
     */
    where: role_has_permissionsWhereUniqueInput
  }

  /**
   * role_has_permissions updateMany
   */
  export type role_has_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_has_permissions.
     */
    data: XOR<role_has_permissionsUpdateManyMutationInput, role_has_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which role_has_permissions to update
     */
    where?: role_has_permissionsWhereInput
    /**
     * Limit how many role_has_permissions to update.
     */
    limit?: number
  }

  /**
   * role_has_permissions upsert
   */
  export type role_has_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the role_has_permissions to update in case it exists.
     */
    where: role_has_permissionsWhereUniqueInput
    /**
     * In case the role_has_permissions found by the `where` argument doesn't exist, create a new role_has_permissions with this data.
     */
    create: XOR<role_has_permissionsCreateInput, role_has_permissionsUncheckedCreateInput>
    /**
     * In case the role_has_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_has_permissionsUpdateInput, role_has_permissionsUncheckedUpdateInput>
  }

  /**
   * role_has_permissions delete
   */
  export type role_has_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    /**
     * Filter which role_has_permissions to delete.
     */
    where: role_has_permissionsWhereUniqueInput
  }

  /**
   * role_has_permissions deleteMany
   */
  export type role_has_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_has_permissions to delete
     */
    where?: role_has_permissionsWhereInput
    /**
     * Limit how many role_has_permissions to delete.
     */
    limit?: number
  }

  /**
   * role_has_permissions without action
   */
  export type role_has_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    guard_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    guard_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    label: number
    guard_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    guard_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    label: string
    guard_name: string
    created_at: Date | null
    updated_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    guard_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    model_has_roles?: boolean | roles$model_has_rolesArgs<ExtArgs>
    role_has_permissions?: boolean | roles$role_has_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    guard_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "guard_name" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_has_roles?: boolean | roles$model_has_rolesArgs<ExtArgs>
    role_has_permissions?: boolean | roles$role_has_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      model_has_roles: Prisma.$model_has_rolesPayload<ExtArgs>[]
      role_has_permissions: Prisma.$role_has_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label: string
      guard_name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model_has_roles<T extends roles$model_has_rolesArgs<ExtArgs> = {}>(args?: Subset<T, roles$model_has_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_has_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_has_permissions<T extends roles$role_has_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, roles$role_has_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_has_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly name: FieldRef<"roles", 'String'>
    readonly label: FieldRef<"roles", 'String'>
    readonly guard_name: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.model_has_roles
   */
  export type roles$model_has_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_has_roles
     */
    select?: model_has_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_has_roles
     */
    omit?: model_has_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_has_rolesInclude<ExtArgs> | null
    where?: model_has_rolesWhereInput
    orderBy?: model_has_rolesOrderByWithRelationInput | model_has_rolesOrderByWithRelationInput[]
    cursor?: model_has_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Model_has_rolesScalarFieldEnum | Model_has_rolesScalarFieldEnum[]
  }

  /**
   * roles.role_has_permissions
   */
  export type roles$role_has_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_has_permissions
     */
    select?: role_has_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_has_permissions
     */
    omit?: role_has_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_has_permissionsInclude<ExtArgs> | null
    where?: role_has_permissionsWhereInput
    orderBy?: role_has_permissionsOrderByWithRelationInput | role_has_permissionsOrderByWithRelationInput[]
    cursor?: role_has_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_has_permissionsScalarFieldEnum | Role_has_permissionsScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    key: string
    value: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>



  export type settingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "created_at" | "updated_at", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'String'>
    readonly key: FieldRef<"settings", 'String'>
    readonly value: FieldRef<"settings", 'String'>
    readonly created_at: FieldRef<"settings", 'DateTime'>
    readonly updated_at: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    password: string | null
    image: string | null
    is_office_login_only: boolean | null
    is_active: boolean | null
    email_verified_at: Date | null
    last_logged_in_at: Date | null
    two_fa_active: boolean | null
    two_fa_secret_key: string | null
    invited_by: string | null
    invited_at: Date | null
    joined_at: Date | null
    invite_token: string | null
    last_activity: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    password: string | null
    image: string | null
    is_office_login_only: boolean | null
    is_active: boolean | null
    email_verified_at: Date | null
    last_logged_in_at: Date | null
    two_fa_active: boolean | null
    two_fa_secret_key: string | null
    invited_by: string | null
    invited_at: Date | null
    joined_at: Date | null
    invite_token: string | null
    last_activity: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    password: number
    image: number
    is_office_login_only: number
    is_active: number
    email_verified_at: number
    last_logged_in_at: number
    two_fa_active: number
    two_fa_secret_key: number
    invited_by: number
    invited_at: number
    joined_at: number
    invite_token: number
    last_activity: number
    remember_token: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    image?: true
    is_office_login_only?: true
    is_active?: true
    email_verified_at?: true
    last_logged_in_at?: true
    two_fa_active?: true
    two_fa_secret_key?: true
    invited_by?: true
    invited_at?: true
    joined_at?: true
    invite_token?: true
    last_activity?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    image?: true
    is_office_login_only?: true
    is_active?: true
    email_verified_at?: true
    last_logged_in_at?: true
    two_fa_active?: true
    two_fa_secret_key?: true
    invited_by?: true
    invited_at?: true
    joined_at?: true
    invite_token?: true
    last_activity?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password?: true
    image?: true
    is_office_login_only?: true
    is_active?: true
    email_verified_at?: true
    last_logged_in_at?: true
    two_fa_active?: true
    two_fa_secret_key?: true
    invited_by?: true
    invited_at?: true
    joined_at?: true
    invite_token?: true
    last_activity?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    password: string | null
    image: string | null
    is_office_login_only: boolean
    is_active: boolean
    email_verified_at: Date | null
    last_logged_in_at: Date | null
    two_fa_active: boolean
    two_fa_secret_key: string | null
    invited_by: string | null
    invited_at: Date | null
    joined_at: Date | null
    invite_token: string | null
    last_activity: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: boolean
    last_logged_in_at?: boolean
    two_fa_active?: boolean
    two_fa_secret_key?: boolean
    invited_by?: boolean
    invited_at?: boolean
    joined_at?: boolean
    invite_token?: boolean
    last_activity?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    audit_trails?: boolean | users$audit_trailsArgs<ExtArgs>
    notifications_notifications_assigned_from_user_idTousers?: boolean | users$notifications_notifications_assigned_from_user_idTousersArgs<ExtArgs>
    notifications_notifications_assigned_to_user_idTousers?: boolean | users$notifications_notifications_assigned_to_user_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: boolean
    last_logged_in_at?: boolean
    two_fa_active?: boolean
    two_fa_secret_key?: boolean
    invited_by?: boolean
    invited_at?: boolean
    joined_at?: boolean
    invite_token?: boolean
    last_activity?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "password" | "image" | "is_office_login_only" | "is_active" | "email_verified_at" | "last_logged_in_at" | "two_fa_active" | "two_fa_secret_key" | "invited_by" | "invited_at" | "joined_at" | "invite_token" | "last_activity" | "remember_token" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_trails?: boolean | users$audit_trailsArgs<ExtArgs>
    notifications_notifications_assigned_from_user_idTousers?: boolean | users$notifications_notifications_assigned_from_user_idTousersArgs<ExtArgs>
    notifications_notifications_assigned_to_user_idTousers?: boolean | users$notifications_notifications_assigned_to_user_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      audit_trails: Prisma.$audit_trailsPayload<ExtArgs>[]
      notifications_notifications_assigned_from_user_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
      notifications_notifications_assigned_to_user_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      password: string | null
      image: string | null
      is_office_login_only: boolean
      is_active: boolean
      email_verified_at: Date | null
      last_logged_in_at: Date | null
      two_fa_active: boolean
      two_fa_secret_key: string | null
      invited_by: string | null
      invited_at: Date | null
      joined_at: Date | null
      invite_token: string | null
      last_activity: Date | null
      remember_token: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_trails<T extends users$audit_trailsArgs<ExtArgs> = {}>(args?: Subset<T, users$audit_trailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_trailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_assigned_from_user_idTousers<T extends users$notifications_notifications_assigned_from_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_assigned_from_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_assigned_to_user_idTousers<T extends users$notifications_notifications_assigned_to_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_assigned_to_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly slug: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly image: FieldRef<"users", 'String'>
    readonly is_office_login_only: FieldRef<"users", 'Boolean'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly last_logged_in_at: FieldRef<"users", 'DateTime'>
    readonly two_fa_active: FieldRef<"users", 'Boolean'>
    readonly two_fa_secret_key: FieldRef<"users", 'String'>
    readonly invited_by: FieldRef<"users", 'String'>
    readonly invited_at: FieldRef<"users", 'DateTime'>
    readonly joined_at: FieldRef<"users", 'DateTime'>
    readonly invite_token: FieldRef<"users", 'String'>
    readonly last_activity: FieldRef<"users", 'DateTime'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.audit_trails
   */
  export type users$audit_trailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_trails
     */
    select?: audit_trailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_trails
     */
    omit?: audit_trailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_trailsInclude<ExtArgs> | null
    where?: audit_trailsWhereInput
    orderBy?: audit_trailsOrderByWithRelationInput | audit_trailsOrderByWithRelationInput[]
    cursor?: audit_trailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_trailsScalarFieldEnum | Audit_trailsScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_assigned_from_user_idTousers
   */
  export type users$notifications_notifications_assigned_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_assigned_to_user_idTousers
   */
  export type users$notifications_notifications_assigned_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Audit_trailsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    link: 'link',
    reference_id: 'reference_id',
    section: 'section',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Audit_trailsScalarFieldEnum = (typeof Audit_trailsScalarFieldEnum)[keyof typeof Audit_trailsScalarFieldEnum]


  export const Failed_jobsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
  };

  export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    queue: 'queue',
    payload: 'payload',
    attempts: 'attempts',
    reserved_at: 'reserved_at',
    available_at: 'available_at',
    created_at: 'created_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const Model_has_permissionsScalarFieldEnum: {
    permission_id: 'permission_id',
    model_type: 'model_type',
    model_id: 'model_id'
  };

  export type Model_has_permissionsScalarFieldEnum = (typeof Model_has_permissionsScalarFieldEnum)[keyof typeof Model_has_permissionsScalarFieldEnum]


  export const Model_has_rolesScalarFieldEnum: {
    role_id: 'role_id',
    model_type: 'model_type',
    model_id: 'model_id'
  };

  export type Model_has_rolesScalarFieldEnum = (typeof Model_has_rolesScalarFieldEnum)[keyof typeof Model_has_rolesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    assigned_to_user_id: 'assigned_to_user_id',
    assigned_from_user_id: 'assigned_from_user_id',
    link: 'link',
    viewed: 'viewed',
    viewed_at: 'viewed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    email: 'email',
    token: 'token',
    created_at: 'created_at'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    module: 'module',
    guard_name: 'guard_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const Personal_access_tokensScalarFieldEnum: {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Personal_access_tokensScalarFieldEnum = (typeof Personal_access_tokensScalarFieldEnum)[keyof typeof Personal_access_tokensScalarFieldEnum]


  export const Role_has_permissionsScalarFieldEnum: {
    permission_id: 'permission_id',
    role_id: 'role_id'
  };

  export type Role_has_permissionsScalarFieldEnum = (typeof Role_has_permissionsScalarFieldEnum)[keyof typeof Role_has_permissionsScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    guard_name: 'guard_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    password: 'password',
    image: 'image',
    is_office_login_only: 'is_office_login_only',
    is_active: 'is_active',
    email_verified_at: 'email_verified_at',
    last_logged_in_at: 'last_logged_in_at',
    two_fa_active: 'two_fa_active',
    two_fa_secret_key: 'two_fa_secret_key',
    invited_by: 'invited_by',
    invited_at: 'invited_at',
    joined_at: 'joined_at',
    invite_token: 'invite_token',
    last_activity: 'last_activity',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const audit_trailsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    link: 'link',
    reference_id: 'reference_id',
    section: 'section',
    type: 'type'
  };

  export type audit_trailsOrderByRelevanceFieldEnum = (typeof audit_trailsOrderByRelevanceFieldEnum)[keyof typeof audit_trailsOrderByRelevanceFieldEnum]


  export const failed_jobsOrderByRelevanceFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception'
  };

  export type failed_jobsOrderByRelevanceFieldEnum = (typeof failed_jobsOrderByRelevanceFieldEnum)[keyof typeof failed_jobsOrderByRelevanceFieldEnum]


  export const jobsOrderByRelevanceFieldEnum: {
    queue: 'queue',
    payload: 'payload'
  };

  export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum]


  export const migrationsOrderByRelevanceFieldEnum: {
    migration: 'migration'
  };

  export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum]


  export const model_has_permissionsOrderByRelevanceFieldEnum: {
    permission_id: 'permission_id',
    model_type: 'model_type',
    model_id: 'model_id'
  };

  export type model_has_permissionsOrderByRelevanceFieldEnum = (typeof model_has_permissionsOrderByRelevanceFieldEnum)[keyof typeof model_has_permissionsOrderByRelevanceFieldEnum]


  export const model_has_rolesOrderByRelevanceFieldEnum: {
    role_id: 'role_id',
    model_type: 'model_type',
    model_id: 'model_id'
  };

  export type model_has_rolesOrderByRelevanceFieldEnum = (typeof model_has_rolesOrderByRelevanceFieldEnum)[keyof typeof model_has_rolesOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    assigned_to_user_id: 'assigned_to_user_id',
    assigned_from_user_id: 'assigned_from_user_id',
    link: 'link'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const password_reset_tokensOrderByRelevanceFieldEnum: {
    email: 'email',
    token: 'token'
  };

  export type password_reset_tokensOrderByRelevanceFieldEnum = (typeof password_reset_tokensOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokensOrderByRelevanceFieldEnum]


  export const permissionsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    module: 'module',
    guard_name: 'guard_name'
  };

  export type permissionsOrderByRelevanceFieldEnum = (typeof permissionsOrderByRelevanceFieldEnum)[keyof typeof permissionsOrderByRelevanceFieldEnum]


  export const personal_access_tokensOrderByRelevanceFieldEnum: {
    id: 'id',
    tokenable_type: 'tokenable_type',
    name: 'name',
    token: 'token',
    abilities: 'abilities'
  };

  export type personal_access_tokensOrderByRelevanceFieldEnum = (typeof personal_access_tokensOrderByRelevanceFieldEnum)[keyof typeof personal_access_tokensOrderByRelevanceFieldEnum]


  export const role_has_permissionsOrderByRelevanceFieldEnum: {
    permission_id: 'permission_id',
    role_id: 'role_id'
  };

  export type role_has_permissionsOrderByRelevanceFieldEnum = (typeof role_has_permissionsOrderByRelevanceFieldEnum)[keyof typeof role_has_permissionsOrderByRelevanceFieldEnum]


  export const rolesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    guard_name: 'guard_name'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const settingsOrderByRelevanceFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type settingsOrderByRelevanceFieldEnum = (typeof settingsOrderByRelevanceFieldEnum)[keyof typeof settingsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    password: 'password',
    image: 'image',
    two_fa_secret_key: 'two_fa_secret_key',
    invited_by: 'invited_by',
    invite_token: 'invite_token',
    remember_token: 'remember_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type audit_trailsWhereInput = {
    AND?: audit_trailsWhereInput | audit_trailsWhereInput[]
    OR?: audit_trailsWhereInput[]
    NOT?: audit_trailsWhereInput | audit_trailsWhereInput[]
    id?: StringFilter<"audit_trails"> | string
    user_id?: StringNullableFilter<"audit_trails"> | string | null
    title?: StringFilter<"audit_trails"> | string
    link?: StringNullableFilter<"audit_trails"> | string | null
    reference_id?: StringFilter<"audit_trails"> | string
    section?: StringFilter<"audit_trails"> | string
    type?: StringFilter<"audit_trails"> | string
    created_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type audit_trailsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    reference_id?: SortOrder
    section?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: audit_trailsOrderByRelevanceInput
  }

  export type audit_trailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: audit_trailsWhereInput | audit_trailsWhereInput[]
    OR?: audit_trailsWhereInput[]
    NOT?: audit_trailsWhereInput | audit_trailsWhereInput[]
    user_id?: StringNullableFilter<"audit_trails"> | string | null
    title?: StringFilter<"audit_trails"> | string
    link?: StringNullableFilter<"audit_trails"> | string | null
    reference_id?: StringFilter<"audit_trails"> | string
    section?: StringFilter<"audit_trails"> | string
    type?: StringFilter<"audit_trails"> | string
    created_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type audit_trailsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    reference_id?: SortOrder
    section?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: audit_trailsCountOrderByAggregateInput
    _max?: audit_trailsMaxOrderByAggregateInput
    _min?: audit_trailsMinOrderByAggregateInput
  }

  export type audit_trailsScalarWhereWithAggregatesInput = {
    AND?: audit_trailsScalarWhereWithAggregatesInput | audit_trailsScalarWhereWithAggregatesInput[]
    OR?: audit_trailsScalarWhereWithAggregatesInput[]
    NOT?: audit_trailsScalarWhereWithAggregatesInput | audit_trailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"audit_trails"> | string
    user_id?: StringNullableWithAggregatesFilter<"audit_trails"> | string | null
    title?: StringWithAggregatesFilter<"audit_trails"> | string
    link?: StringNullableWithAggregatesFilter<"audit_trails"> | string | null
    reference_id?: StringWithAggregatesFilter<"audit_trails"> | string
    section?: StringWithAggregatesFilter<"audit_trails"> | string
    type?: StringWithAggregatesFilter<"audit_trails"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"audit_trails"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"audit_trails"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"audit_trails"> | Date | string | null
  }

  export type failed_jobsWhereInput = {
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    id?: StringFilter<"failed_jobs"> | string
    uuid?: StringFilter<"failed_jobs"> | string
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }

  export type failed_jobsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _relevance?: failed_jobsOrderByRelevanceInput
  }

  export type failed_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }, "id" | "uuid">

  export type failed_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _count?: failed_jobsCountOrderByAggregateInput
    _max?: failed_jobsMaxOrderByAggregateInput
    _min?: failed_jobsMinOrderByAggregateInput
  }

  export type failed_jobsScalarWhereWithAggregatesInput = {
    AND?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    OR?: failed_jobsScalarWhereWithAggregatesInput[]
    NOT?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"failed_jobs"> | string
    uuid?: StringWithAggregatesFilter<"failed_jobs"> | string
    connection?: StringWithAggregatesFilter<"failed_jobs"> | string
    queue?: StringWithAggregatesFilter<"failed_jobs"> | string
    payload?: StringWithAggregatesFilter<"failed_jobs"> | string
    exception?: StringWithAggregatesFilter<"failed_jobs"> | string
    failed_at?: DateTimeWithAggregatesFilter<"failed_jobs"> | Date | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: BigIntFilter<"jobs"> | bigint | number
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _relevance?: jobsOrderByRelevanceInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"jobs"> | bigint | number
    queue?: StringWithAggregatesFilter<"jobs"> | string
    payload?: StringWithAggregatesFilter<"jobs"> | string
    attempts?: IntWithAggregatesFilter<"jobs"> | number
    reserved_at?: IntNullableWithAggregatesFilter<"jobs"> | number | null
    available_at?: IntWithAggregatesFilter<"jobs"> | number
    created_at?: IntWithAggregatesFilter<"jobs"> | number
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _relevance?: migrationsOrderByRelevanceInput
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    migration?: StringWithAggregatesFilter<"migrations"> | string
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type model_has_permissionsWhereInput = {
    AND?: model_has_permissionsWhereInput | model_has_permissionsWhereInput[]
    OR?: model_has_permissionsWhereInput[]
    NOT?: model_has_permissionsWhereInput | model_has_permissionsWhereInput[]
    permission_id?: StringFilter<"model_has_permissions"> | string
    model_type?: StringFilter<"model_has_permissions"> | string
    model_id?: StringFilter<"model_has_permissions"> | string
    permissions?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }

  export type model_has_permissionsOrderByWithRelationInput = {
    permission_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
    permissions?: permissionsOrderByWithRelationInput
    _relevance?: model_has_permissionsOrderByRelevanceInput
  }

  export type model_has_permissionsWhereUniqueInput = Prisma.AtLeast<{
    permission_id_model_id_model_type?: model_has_permissionsPermission_idModel_idModel_typeCompoundUniqueInput
    AND?: model_has_permissionsWhereInput | model_has_permissionsWhereInput[]
    OR?: model_has_permissionsWhereInput[]
    NOT?: model_has_permissionsWhereInput | model_has_permissionsWhereInput[]
    permission_id?: StringFilter<"model_has_permissions"> | string
    model_type?: StringFilter<"model_has_permissions"> | string
    model_id?: StringFilter<"model_has_permissions"> | string
    permissions?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
  }, "permission_id_model_id_model_type">

  export type model_has_permissionsOrderByWithAggregationInput = {
    permission_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
    _count?: model_has_permissionsCountOrderByAggregateInput
    _max?: model_has_permissionsMaxOrderByAggregateInput
    _min?: model_has_permissionsMinOrderByAggregateInput
  }

  export type model_has_permissionsScalarWhereWithAggregatesInput = {
    AND?: model_has_permissionsScalarWhereWithAggregatesInput | model_has_permissionsScalarWhereWithAggregatesInput[]
    OR?: model_has_permissionsScalarWhereWithAggregatesInput[]
    NOT?: model_has_permissionsScalarWhereWithAggregatesInput | model_has_permissionsScalarWhereWithAggregatesInput[]
    permission_id?: StringWithAggregatesFilter<"model_has_permissions"> | string
    model_type?: StringWithAggregatesFilter<"model_has_permissions"> | string
    model_id?: StringWithAggregatesFilter<"model_has_permissions"> | string
  }

  export type model_has_rolesWhereInput = {
    AND?: model_has_rolesWhereInput | model_has_rolesWhereInput[]
    OR?: model_has_rolesWhereInput[]
    NOT?: model_has_rolesWhereInput | model_has_rolesWhereInput[]
    role_id?: StringFilter<"model_has_roles"> | string
    model_type?: StringFilter<"model_has_roles"> | string
    model_id?: StringFilter<"model_has_roles"> | string
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }

  export type model_has_rolesOrderByWithRelationInput = {
    role_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
    roles?: rolesOrderByWithRelationInput
    _relevance?: model_has_rolesOrderByRelevanceInput
  }

  export type model_has_rolesWhereUniqueInput = Prisma.AtLeast<{
    role_id_model_id_model_type?: model_has_rolesRole_idModel_idModel_typeCompoundUniqueInput
    AND?: model_has_rolesWhereInput | model_has_rolesWhereInput[]
    OR?: model_has_rolesWhereInput[]
    NOT?: model_has_rolesWhereInput | model_has_rolesWhereInput[]
    role_id?: StringFilter<"model_has_roles"> | string
    model_type?: StringFilter<"model_has_roles"> | string
    model_id?: StringFilter<"model_has_roles"> | string
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }, "role_id_model_id_model_type">

  export type model_has_rolesOrderByWithAggregationInput = {
    role_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
    _count?: model_has_rolesCountOrderByAggregateInput
    _max?: model_has_rolesMaxOrderByAggregateInput
    _min?: model_has_rolesMinOrderByAggregateInput
  }

  export type model_has_rolesScalarWhereWithAggregatesInput = {
    AND?: model_has_rolesScalarWhereWithAggregatesInput | model_has_rolesScalarWhereWithAggregatesInput[]
    OR?: model_has_rolesScalarWhereWithAggregatesInput[]
    NOT?: model_has_rolesScalarWhereWithAggregatesInput | model_has_rolesScalarWhereWithAggregatesInput[]
    role_id?: StringWithAggregatesFilter<"model_has_roles"> | string
    model_type?: StringWithAggregatesFilter<"model_has_roles"> | string
    model_id?: StringWithAggregatesFilter<"model_has_roles"> | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: StringFilter<"notifications"> | string
    title?: StringFilter<"notifications"> | string
    assigned_to_user_id?: StringFilter<"notifications"> | string
    assigned_from_user_id?: StringFilter<"notifications"> | string
    link?: StringNullableFilter<"notifications"> | string | null
    viewed?: BoolNullableFilter<"notifications"> | boolean | null
    viewed_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users_notifications_assigned_from_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_notifications_assigned_to_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    assigned_to_user_id?: SortOrder
    assigned_from_user_id?: SortOrder
    link?: SortOrderInput | SortOrder
    viewed?: SortOrderInput | SortOrder
    viewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users_notifications_assigned_from_user_idTousers?: usersOrderByWithRelationInput
    users_notifications_assigned_to_user_idTousers?: usersOrderByWithRelationInput
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    title?: StringFilter<"notifications"> | string
    assigned_to_user_id?: StringFilter<"notifications"> | string
    assigned_from_user_id?: StringFilter<"notifications"> | string
    link?: StringNullableFilter<"notifications"> | string | null
    viewed?: BoolNullableFilter<"notifications"> | boolean | null
    viewed_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users_notifications_assigned_from_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_notifications_assigned_to_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    assigned_to_user_id?: SortOrder
    assigned_from_user_id?: SortOrder
    link?: SortOrderInput | SortOrder
    viewed?: SortOrderInput | SortOrder
    viewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifications"> | string
    title?: StringWithAggregatesFilter<"notifications"> | string
    assigned_to_user_id?: StringWithAggregatesFilter<"notifications"> | string
    assigned_from_user_id?: StringWithAggregatesFilter<"notifications"> | string
    link?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    viewed?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    viewed_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    email?: StringFilter<"password_reset_tokens"> | string
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: password_reset_tokensOrderByRelevanceInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }, "email">

  export type password_reset_tokensOrderByWithAggregationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    token?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"password_reset_tokens"> | Date | string | null
  }

  export type permissionsWhereInput = {
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    id?: StringFilter<"permissions"> | string
    name?: StringFilter<"permissions"> | string
    label?: StringFilter<"permissions"> | string
    module?: StringFilter<"permissions"> | string
    guard_name?: StringFilter<"permissions"> | string
    created_at?: DateTimeNullableFilter<"permissions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"permissions"> | Date | string | null
    model_has_permissions?: Model_has_permissionsListRelationFilter
    role_has_permissions?: Role_has_permissionsListRelationFilter
  }

  export type permissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    module?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    model_has_permissions?: model_has_permissionsOrderByRelationAggregateInput
    role_has_permissions?: role_has_permissionsOrderByRelationAggregateInput
    _relevance?: permissionsOrderByRelevanceInput
  }

  export type permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: permissionsWhereInput | permissionsWhereInput[]
    OR?: permissionsWhereInput[]
    NOT?: permissionsWhereInput | permissionsWhereInput[]
    name?: StringFilter<"permissions"> | string
    label?: StringFilter<"permissions"> | string
    module?: StringFilter<"permissions"> | string
    guard_name?: StringFilter<"permissions"> | string
    created_at?: DateTimeNullableFilter<"permissions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"permissions"> | Date | string | null
    model_has_permissions?: Model_has_permissionsListRelationFilter
    role_has_permissions?: Role_has_permissionsListRelationFilter
  }, "id">

  export type permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    module?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: permissionsCountOrderByAggregateInput
    _max?: permissionsMaxOrderByAggregateInput
    _min?: permissionsMinOrderByAggregateInput
  }

  export type permissionsScalarWhereWithAggregatesInput = {
    AND?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    OR?: permissionsScalarWhereWithAggregatesInput[]
    NOT?: permissionsScalarWhereWithAggregatesInput | permissionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"permissions"> | string
    name?: StringWithAggregatesFilter<"permissions"> | string
    label?: StringWithAggregatesFilter<"permissions"> | string
    module?: StringWithAggregatesFilter<"permissions"> | string
    guard_name?: StringWithAggregatesFilter<"permissions"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"permissions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"permissions"> | Date | string | null
  }

  export type personal_access_tokensWhereInput = {
    AND?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    OR?: personal_access_tokensWhereInput[]
    NOT?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    id?: StringFilter<"personal_access_tokens"> | string
    tokenable_type?: StringFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntFilter<"personal_access_tokens"> | bigint | number
    name?: StringFilter<"personal_access_tokens"> | string
    token?: StringFilter<"personal_access_tokens"> | string
    abilities?: StringNullableFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
  }

  export type personal_access_tokensOrderByWithRelationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: personal_access_tokensOrderByRelevanceInput
  }

  export type personal_access_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    OR?: personal_access_tokensWhereInput[]
    NOT?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    tokenable_type?: StringFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntFilter<"personal_access_tokens"> | bigint | number
    name?: StringFilter<"personal_access_tokens"> | string
    abilities?: StringNullableFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
  }, "id" | "token">

  export type personal_access_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: personal_access_tokensCountOrderByAggregateInput
    _avg?: personal_access_tokensAvgOrderByAggregateInput
    _max?: personal_access_tokensMaxOrderByAggregateInput
    _min?: personal_access_tokensMinOrderByAggregateInput
    _sum?: personal_access_tokensSumOrderByAggregateInput
  }

  export type personal_access_tokensScalarWhereWithAggregatesInput = {
    AND?: personal_access_tokensScalarWhereWithAggregatesInput | personal_access_tokensScalarWhereWithAggregatesInput[]
    OR?: personal_access_tokensScalarWhereWithAggregatesInput[]
    NOT?: personal_access_tokensScalarWhereWithAggregatesInput | personal_access_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    tokenable_type?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntWithAggregatesFilter<"personal_access_tokens"> | bigint | number
    name?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    token?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    abilities?: StringNullableWithAggregatesFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
  }

  export type role_has_permissionsWhereInput = {
    AND?: role_has_permissionsWhereInput | role_has_permissionsWhereInput[]
    OR?: role_has_permissionsWhereInput[]
    NOT?: role_has_permissionsWhereInput | role_has_permissionsWhereInput[]
    permission_id?: StringFilter<"role_has_permissions"> | string
    role_id?: StringFilter<"role_has_permissions"> | string
    permissions?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }

  export type role_has_permissionsOrderByWithRelationInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
    permissions?: permissionsOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
    _relevance?: role_has_permissionsOrderByRelevanceInput
  }

  export type role_has_permissionsWhereUniqueInput = Prisma.AtLeast<{
    permission_id_role_id?: role_has_permissionsPermission_idRole_idCompoundUniqueInput
    AND?: role_has_permissionsWhereInput | role_has_permissionsWhereInput[]
    OR?: role_has_permissionsWhereInput[]
    NOT?: role_has_permissionsWhereInput | role_has_permissionsWhereInput[]
    permission_id?: StringFilter<"role_has_permissions"> | string
    role_id?: StringFilter<"role_has_permissions"> | string
    permissions?: XOR<PermissionsScalarRelationFilter, permissionsWhereInput>
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }, "permission_id_role_id">

  export type role_has_permissionsOrderByWithAggregationInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
    _count?: role_has_permissionsCountOrderByAggregateInput
    _max?: role_has_permissionsMaxOrderByAggregateInput
    _min?: role_has_permissionsMinOrderByAggregateInput
  }

  export type role_has_permissionsScalarWhereWithAggregatesInput = {
    AND?: role_has_permissionsScalarWhereWithAggregatesInput | role_has_permissionsScalarWhereWithAggregatesInput[]
    OR?: role_has_permissionsScalarWhereWithAggregatesInput[]
    NOT?: role_has_permissionsScalarWhereWithAggregatesInput | role_has_permissionsScalarWhereWithAggregatesInput[]
    permission_id?: StringWithAggregatesFilter<"role_has_permissions"> | string
    role_id?: StringWithAggregatesFilter<"role_has_permissions"> | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: StringFilter<"roles"> | string
    name?: StringFilter<"roles"> | string
    label?: StringFilter<"roles"> | string
    guard_name?: StringFilter<"roles"> | string
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    model_has_roles?: Model_has_rolesListRelationFilter
    role_has_permissions?: Role_has_permissionsListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    model_has_roles?: model_has_rolesOrderByRelationAggregateInput
    role_has_permissions?: role_has_permissionsOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    name?: StringFilter<"roles"> | string
    label?: StringFilter<"roles"> | string
    guard_name?: StringFilter<"roles"> | string
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    model_has_roles?: Model_has_rolesListRelationFilter
    role_has_permissions?: Role_has_permissionsListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"roles"> | string
    name?: StringWithAggregatesFilter<"roles"> | string
    label?: StringWithAggregatesFilter<"roles"> | string
    guard_name?: StringWithAggregatesFilter<"roles"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: StringFilter<"settings"> | string
    key?: StringFilter<"settings"> | string
    value?: StringNullableFilter<"settings"> | string | null
    created_at?: DateTimeNullableFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"settings"> | Date | string | null
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: settingsOrderByRelevanceInput
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    key?: StringFilter<"settings"> | string
    value?: StringNullableFilter<"settings"> | string | null
    created_at?: DateTimeNullableFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"settings"> | Date | string | null
  }, "id">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: settingsCountOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"settings"> | string
    key?: StringWithAggregatesFilter<"settings"> | string
    value?: StringNullableWithAggregatesFilter<"settings"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    slug?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    is_office_login_only?: BoolFilter<"users"> | boolean
    is_active?: BoolFilter<"users"> | boolean
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_logged_in_at?: DateTimeNullableFilter<"users"> | Date | string | null
    two_fa_active?: BoolFilter<"users"> | boolean
    two_fa_secret_key?: StringNullableFilter<"users"> | string | null
    invited_by?: StringNullableFilter<"users"> | string | null
    invited_at?: DateTimeNullableFilter<"users"> | Date | string | null
    joined_at?: DateTimeNullableFilter<"users"> | Date | string | null
    invite_token?: StringNullableFilter<"users"> | string | null
    last_activity?: DateTimeNullableFilter<"users"> | Date | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    audit_trails?: Audit_trailsListRelationFilter
    notifications_notifications_assigned_from_user_idTousers?: NotificationsListRelationFilter
    notifications_notifications_assigned_to_user_idTousers?: NotificationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    is_office_login_only?: SortOrder
    is_active?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    last_logged_in_at?: SortOrderInput | SortOrder
    two_fa_active?: SortOrder
    two_fa_secret_key?: SortOrderInput | SortOrder
    invited_by?: SortOrderInput | SortOrder
    invited_at?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    invite_token?: SortOrderInput | SortOrder
    last_activity?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    audit_trails?: audit_trailsOrderByRelationAggregateInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsOrderByRelationAggregateInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    slug?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    is_office_login_only?: BoolFilter<"users"> | boolean
    is_active?: BoolFilter<"users"> | boolean
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    last_logged_in_at?: DateTimeNullableFilter<"users"> | Date | string | null
    two_fa_active?: BoolFilter<"users"> | boolean
    two_fa_secret_key?: StringNullableFilter<"users"> | string | null
    invited_by?: StringNullableFilter<"users"> | string | null
    invited_at?: DateTimeNullableFilter<"users"> | Date | string | null
    joined_at?: DateTimeNullableFilter<"users"> | Date | string | null
    invite_token?: StringNullableFilter<"users"> | string | null
    last_activity?: DateTimeNullableFilter<"users"> | Date | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    audit_trails?: Audit_trailsListRelationFilter
    notifications_notifications_assigned_from_user_idTousers?: NotificationsListRelationFilter
    notifications_notifications_assigned_to_user_idTousers?: NotificationsListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    is_office_login_only?: SortOrder
    is_active?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    last_logged_in_at?: SortOrderInput | SortOrder
    two_fa_active?: SortOrder
    two_fa_secret_key?: SortOrderInput | SortOrder
    invited_by?: SortOrderInput | SortOrder
    invited_at?: SortOrderInput | SortOrder
    joined_at?: SortOrderInput | SortOrder
    invite_token?: SortOrderInput | SortOrder
    last_activity?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    slug?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_office_login_only?: BoolWithAggregatesFilter<"users"> | boolean
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    last_logged_in_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    two_fa_active?: BoolWithAggregatesFilter<"users"> | boolean
    two_fa_secret_key?: StringNullableWithAggregatesFilter<"users"> | string | null
    invited_by?: StringNullableWithAggregatesFilter<"users"> | string | null
    invited_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    joined_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    invite_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_activity?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type audit_trailsCreateInput = {
    id: string
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAudit_trailsInput
  }

  export type audit_trailsUncheckedCreateInput = {
    id: string
    user_id?: string | null
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type audit_trailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAudit_trailsNestedInput
  }

  export type audit_trailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_trailsCreateManyInput = {
    id: string
    user_id?: string | null
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type audit_trailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_trailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_jobsCreateInput = {
    id: string
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUncheckedCreateInput = {
    id: string
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsCreateManyInput = {
    id: string
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUncheckedCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsCreateManyInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type model_has_permissionsCreateInput = {
    model_type: string
    model_id: string
    permissions: permissionsCreateNestedOneWithoutModel_has_permissionsInput
  }

  export type model_has_permissionsUncheckedCreateInput = {
    permission_id: string
    model_type: string
    model_id: string
  }

  export type model_has_permissionsUpdateInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    permissions?: permissionsUpdateOneRequiredWithoutModel_has_permissionsNestedInput
  }

  export type model_has_permissionsUncheckedUpdateInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_permissionsCreateManyInput = {
    permission_id: string
    model_type: string
    model_id: string
  }

  export type model_has_permissionsUpdateManyMutationInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_permissionsUncheckedUpdateManyInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesCreateInput = {
    model_type: string
    model_id: string
    roles: rolesCreateNestedOneWithoutModel_has_rolesInput
  }

  export type model_has_rolesUncheckedCreateInput = {
    role_id: string
    model_type: string
    model_id: string
  }

  export type model_has_rolesUpdateInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateOneRequiredWithoutModel_has_rolesNestedInput
  }

  export type model_has_rolesUncheckedUpdateInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesCreateManyInput = {
    role_id: string
    model_type: string
    model_id: string
  }

  export type model_has_rolesUpdateManyMutationInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesUncheckedUpdateManyInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateInput = {
    id: string
    title: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_notifications_assigned_from_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_assigned_from_user_idTousersInput
    users_notifications_assigned_to_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_assigned_to_user_idTousersInput
  }

  export type notificationsUncheckedCreateInput = {
    id: string
    title: string
    assigned_to_user_id: string
    assigned_from_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_assigned_from_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_assigned_from_user_idTousersNestedInput
    users_notifications_assigned_to_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_assigned_to_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_to_user_id?: StringFieldUpdateOperationsInput | string
    assigned_from_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id: string
    title: string
    assigned_to_user_id: string
    assigned_from_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_to_user_id?: StringFieldUpdateOperationsInput | string
    assigned_from_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUncheckedCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateManyInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permissionsCreateInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_permissions?: model_has_permissionsCreateNestedManyWithoutPermissionsInput
    role_has_permissions?: role_has_permissionsCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsUncheckedCreateInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_permissions?: model_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput
    role_has_permissions?: role_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_permissions?: model_has_permissionsUpdateManyWithoutPermissionsNestedInput
    role_has_permissions?: role_has_permissionsUpdateManyWithoutPermissionsNestedInput
  }

  export type permissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_permissions?: model_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput
    role_has_permissions?: role_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type permissionsCreateManyInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type permissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensCreateInput = {
    id: string
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUncheckedCreateInput = {
    id: string
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensCreateManyInput = {
    id: string
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_has_permissionsCreateInput = {
    permissions: permissionsCreateNestedOneWithoutRole_has_permissionsInput
    roles: rolesCreateNestedOneWithoutRole_has_permissionsInput
  }

  export type role_has_permissionsUncheckedCreateInput = {
    permission_id: string
    role_id: string
  }

  export type role_has_permissionsUpdateInput = {
    permissions?: permissionsUpdateOneRequiredWithoutRole_has_permissionsNestedInput
    roles?: rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput
  }

  export type role_has_permissionsUncheckedUpdateInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type role_has_permissionsCreateManyInput = {
    permission_id: string
    role_id: string
  }

  export type role_has_permissionsUpdateManyMutationInput = {

  }

  export type role_has_permissionsUncheckedUpdateManyInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type rolesCreateInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_roles?: model_has_rolesCreateNestedManyWithoutRolesInput
    role_has_permissions?: role_has_permissionsCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_roles?: model_has_rolesUncheckedCreateNestedManyWithoutRolesInput
    role_has_permissions?: role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_roles?: model_has_rolesUpdateManyWithoutRolesNestedInput
    role_has_permissions?: role_has_permissionsUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_roles?: model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput
    role_has_permissions?: role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsCreateInput = {
    id: string
    key: string
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUncheckedCreateInput = {
    id: string
    key: string
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsCreateManyInput = {
    id: string
    key: string
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_trailsOrderByRelevanceInput = {
    fields: audit_trailsOrderByRelevanceFieldEnum | audit_trailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type audit_trailsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    reference_id?: SortOrder
    section?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type audit_trailsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    reference_id?: SortOrder
    section?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type audit_trailsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    reference_id?: SortOrder
    section?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type failed_jobsOrderByRelevanceInput = {
    fields: failed_jobsOrderByRelevanceFieldEnum | failed_jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type failed_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type jobsOrderByRelevanceInput = {
    fields: jobsOrderByRelevanceFieldEnum | jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type migrationsOrderByRelevanceInput = {
    fields: migrationsOrderByRelevanceFieldEnum | migrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type PermissionsScalarRelationFilter = {
    is?: permissionsWhereInput
    isNot?: permissionsWhereInput
  }

  export type model_has_permissionsOrderByRelevanceInput = {
    fields: model_has_permissionsOrderByRelevanceFieldEnum | model_has_permissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type model_has_permissionsPermission_idModel_idModel_typeCompoundUniqueInput = {
    permission_id: string
    model_id: string
    model_type: string
  }

  export type model_has_permissionsCountOrderByAggregateInput = {
    permission_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type model_has_permissionsMaxOrderByAggregateInput = {
    permission_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type model_has_permissionsMinOrderByAggregateInput = {
    permission_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type model_has_rolesOrderByRelevanceInput = {
    fields: model_has_rolesOrderByRelevanceFieldEnum | model_has_rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type model_has_rolesRole_idModel_idModel_typeCompoundUniqueInput = {
    role_id: string
    model_id: string
    model_type: string
  }

  export type model_has_rolesCountOrderByAggregateInput = {
    role_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type model_has_rolesMaxOrderByAggregateInput = {
    role_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type model_has_rolesMinOrderByAggregateInput = {
    role_id?: SortOrder
    model_type?: SortOrder
    model_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigned_to_user_id?: SortOrder
    assigned_from_user_id?: SortOrder
    link?: SortOrder
    viewed?: SortOrder
    viewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigned_to_user_id?: SortOrder
    assigned_from_user_id?: SortOrder
    link?: SortOrder
    viewed?: SortOrder
    viewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigned_to_user_id?: SortOrder
    assigned_from_user_id?: SortOrder
    link?: SortOrder
    viewed?: SortOrder
    viewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type password_reset_tokensOrderByRelevanceInput = {
    fields: password_reset_tokensOrderByRelevanceFieldEnum | password_reset_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type Model_has_permissionsListRelationFilter = {
    every?: model_has_permissionsWhereInput
    some?: model_has_permissionsWhereInput
    none?: model_has_permissionsWhereInput
  }

  export type Role_has_permissionsListRelationFilter = {
    every?: role_has_permissionsWhereInput
    some?: role_has_permissionsWhereInput
    none?: role_has_permissionsWhereInput
  }

  export type model_has_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type role_has_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type permissionsOrderByRelevanceInput = {
    fields: permissionsOrderByRelevanceFieldEnum | permissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    module?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    module?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    module?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensOrderByRelevanceInput = {
    fields: personal_access_tokensOrderByRelevanceFieldEnum | personal_access_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personal_access_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensAvgOrderByAggregateInput = {
    tokenable_id?: SortOrder
  }

  export type personal_access_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensSumOrderByAggregateInput = {
    tokenable_id?: SortOrder
  }

  export type role_has_permissionsOrderByRelevanceInput = {
    fields: role_has_permissionsOrderByRelevanceFieldEnum | role_has_permissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type role_has_permissionsPermission_idRole_idCompoundUniqueInput = {
    permission_id: string
    role_id: string
  }

  export type role_has_permissionsCountOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type role_has_permissionsMaxOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type role_has_permissionsMinOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type Model_has_rolesListRelationFilter = {
    every?: model_has_rolesWhereInput
    some?: model_has_rolesWhereInput
    none?: model_has_rolesWhereInput
  }

  export type model_has_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    guard_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsOrderByRelevanceInput = {
    fields: settingsOrderByRelevanceFieldEnum | settingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Audit_trailsListRelationFilter = {
    every?: audit_trailsWhereInput
    some?: audit_trailsWhereInput
    none?: audit_trailsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type audit_trailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_office_login_only?: SortOrder
    is_active?: SortOrder
    email_verified_at?: SortOrder
    last_logged_in_at?: SortOrder
    two_fa_active?: SortOrder
    two_fa_secret_key?: SortOrder
    invited_by?: SortOrder
    invited_at?: SortOrder
    joined_at?: SortOrder
    invite_token?: SortOrder
    last_activity?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_office_login_only?: SortOrder
    is_active?: SortOrder
    email_verified_at?: SortOrder
    last_logged_in_at?: SortOrder
    two_fa_active?: SortOrder
    two_fa_secret_key?: SortOrder
    invited_by?: SortOrder
    invited_at?: SortOrder
    joined_at?: SortOrder
    invite_token?: SortOrder
    last_activity?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_office_login_only?: SortOrder
    is_active?: SortOrder
    email_verified_at?: SortOrder
    last_logged_in_at?: SortOrder
    two_fa_active?: SortOrder
    two_fa_secret_key?: SortOrder
    invited_by?: SortOrder
    invited_at?: SortOrder
    joined_at?: SortOrder
    invite_token?: SortOrder
    last_activity?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAudit_trailsInput = {
    create?: XOR<usersCreateWithoutAudit_trailsInput, usersUncheckedCreateWithoutAudit_trailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_trailsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutAudit_trailsNestedInput = {
    create?: XOR<usersCreateWithoutAudit_trailsInput, usersUncheckedCreateWithoutAudit_trailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_trailsInput
    upsert?: usersUpsertWithoutAudit_trailsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAudit_trailsInput, usersUpdateWithoutAudit_trailsInput>, usersUncheckedUpdateWithoutAudit_trailsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type permissionsCreateNestedOneWithoutModel_has_permissionsInput = {
    create?: XOR<permissionsCreateWithoutModel_has_permissionsInput, permissionsUncheckedCreateWithoutModel_has_permissionsInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutModel_has_permissionsInput
    connect?: permissionsWhereUniqueInput
  }

  export type permissionsUpdateOneRequiredWithoutModel_has_permissionsNestedInput = {
    create?: XOR<permissionsCreateWithoutModel_has_permissionsInput, permissionsUncheckedCreateWithoutModel_has_permissionsInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutModel_has_permissionsInput
    upsert?: permissionsUpsertWithoutModel_has_permissionsInput
    connect?: permissionsWhereUniqueInput
    update?: XOR<XOR<permissionsUpdateToOneWithWhereWithoutModel_has_permissionsInput, permissionsUpdateWithoutModel_has_permissionsInput>, permissionsUncheckedUpdateWithoutModel_has_permissionsInput>
  }

  export type rolesCreateNestedOneWithoutModel_has_rolesInput = {
    create?: XOR<rolesCreateWithoutModel_has_rolesInput, rolesUncheckedCreateWithoutModel_has_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutModel_has_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type rolesUpdateOneRequiredWithoutModel_has_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutModel_has_rolesInput, rolesUncheckedCreateWithoutModel_has_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutModel_has_rolesInput
    upsert?: rolesUpsertWithoutModel_has_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutModel_has_rolesInput, rolesUpdateWithoutModel_has_rolesInput>, rolesUncheckedUpdateWithoutModel_has_rolesInput>
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_assigned_from_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_assigned_to_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutNotifications_notifications_assigned_from_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_assigned_from_user_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_assigned_from_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutNotifications_notifications_assigned_to_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_assigned_to_user_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_assigned_to_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
  }

  export type model_has_permissionsCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput> | model_has_permissionsCreateWithoutPermissionsInput[] | model_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: model_has_permissionsCreateOrConnectWithoutPermissionsInput | model_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    createMany?: model_has_permissionsCreateManyPermissionsInputEnvelope
    connect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
  }

  export type role_has_permissionsCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput> | role_has_permissionsCreateWithoutPermissionsInput[] | role_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutPermissionsInput | role_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    createMany?: role_has_permissionsCreateManyPermissionsInputEnvelope
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
  }

  export type model_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput> | model_has_permissionsCreateWithoutPermissionsInput[] | model_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: model_has_permissionsCreateOrConnectWithoutPermissionsInput | model_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    createMany?: model_has_permissionsCreateManyPermissionsInputEnvelope
    connect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
  }

  export type role_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput> | role_has_permissionsCreateWithoutPermissionsInput[] | role_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutPermissionsInput | role_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    createMany?: role_has_permissionsCreateManyPermissionsInputEnvelope
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
  }

  export type model_has_permissionsUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput> | model_has_permissionsCreateWithoutPermissionsInput[] | model_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: model_has_permissionsCreateOrConnectWithoutPermissionsInput | model_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    upsert?: model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: model_has_permissionsCreateManyPermissionsInputEnvelope
    set?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    disconnect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    delete?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    connect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    update?: model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: model_has_permissionsScalarWhereInput | model_has_permissionsScalarWhereInput[]
  }

  export type role_has_permissionsUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput> | role_has_permissionsCreateWithoutPermissionsInput[] | role_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutPermissionsInput | role_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    upsert?: role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: role_has_permissionsCreateManyPermissionsInputEnvelope
    set?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    disconnect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    delete?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    update?: role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
  }

  export type model_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput> | model_has_permissionsCreateWithoutPermissionsInput[] | model_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: model_has_permissionsCreateOrConnectWithoutPermissionsInput | model_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    upsert?: model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: model_has_permissionsCreateManyPermissionsInputEnvelope
    set?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    disconnect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    delete?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    connect?: model_has_permissionsWhereUniqueInput | model_has_permissionsWhereUniqueInput[]
    update?: model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: model_has_permissionsScalarWhereInput | model_has_permissionsScalarWhereInput[]
  }

  export type role_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput> | role_has_permissionsCreateWithoutPermissionsInput[] | role_has_permissionsUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutPermissionsInput | role_has_permissionsCreateOrConnectWithoutPermissionsInput[]
    upsert?: role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[]
    createMany?: role_has_permissionsCreateManyPermissionsInputEnvelope
    set?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    disconnect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    delete?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    update?: role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput | role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
  }

  export type permissionsCreateNestedOneWithoutRole_has_permissionsInput = {
    create?: XOR<permissionsCreateWithoutRole_has_permissionsInput, permissionsUncheckedCreateWithoutRole_has_permissionsInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutRole_has_permissionsInput
    connect?: permissionsWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutRole_has_permissionsInput = {
    create?: XOR<rolesCreateWithoutRole_has_permissionsInput, rolesUncheckedCreateWithoutRole_has_permissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_has_permissionsInput
    connect?: rolesWhereUniqueInput
  }

  export type permissionsUpdateOneRequiredWithoutRole_has_permissionsNestedInput = {
    create?: XOR<permissionsCreateWithoutRole_has_permissionsInput, permissionsUncheckedCreateWithoutRole_has_permissionsInput>
    connectOrCreate?: permissionsCreateOrConnectWithoutRole_has_permissionsInput
    upsert?: permissionsUpsertWithoutRole_has_permissionsInput
    connect?: permissionsWhereUniqueInput
    update?: XOR<XOR<permissionsUpdateToOneWithWhereWithoutRole_has_permissionsInput, permissionsUpdateWithoutRole_has_permissionsInput>, permissionsUncheckedUpdateWithoutRole_has_permissionsInput>
  }

  export type rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput = {
    create?: XOR<rolesCreateWithoutRole_has_permissionsInput, rolesUncheckedCreateWithoutRole_has_permissionsInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_has_permissionsInput
    upsert?: rolesUpsertWithoutRole_has_permissionsInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutRole_has_permissionsInput, rolesUpdateWithoutRole_has_permissionsInput>, rolesUncheckedUpdateWithoutRole_has_permissionsInput>
  }

  export type model_has_rolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput> | model_has_rolesCreateWithoutRolesInput[] | model_has_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: model_has_rolesCreateOrConnectWithoutRolesInput | model_has_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: model_has_rolesCreateManyRolesInputEnvelope
    connect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
  }

  export type role_has_permissionsCreateNestedManyWithoutRolesInput = {
    create?: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput> | role_has_permissionsCreateWithoutRolesInput[] | role_has_permissionsUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutRolesInput | role_has_permissionsCreateOrConnectWithoutRolesInput[]
    createMany?: role_has_permissionsCreateManyRolesInputEnvelope
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
  }

  export type model_has_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput> | model_has_rolesCreateWithoutRolesInput[] | model_has_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: model_has_rolesCreateOrConnectWithoutRolesInput | model_has_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: model_has_rolesCreateManyRolesInputEnvelope
    connect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
  }

  export type role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput> | role_has_permissionsCreateWithoutRolesInput[] | role_has_permissionsUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutRolesInput | role_has_permissionsCreateOrConnectWithoutRolesInput[]
    createMany?: role_has_permissionsCreateManyRolesInputEnvelope
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
  }

  export type model_has_rolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput> | model_has_rolesCreateWithoutRolesInput[] | model_has_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: model_has_rolesCreateOrConnectWithoutRolesInput | model_has_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: model_has_rolesUpsertWithWhereUniqueWithoutRolesInput | model_has_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: model_has_rolesCreateManyRolesInputEnvelope
    set?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    disconnect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    delete?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    connect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    update?: model_has_rolesUpdateWithWhereUniqueWithoutRolesInput | model_has_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: model_has_rolesUpdateManyWithWhereWithoutRolesInput | model_has_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: model_has_rolesScalarWhereInput | model_has_rolesScalarWhereInput[]
  }

  export type role_has_permissionsUpdateManyWithoutRolesNestedInput = {
    create?: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput> | role_has_permissionsCreateWithoutRolesInput[] | role_has_permissionsUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutRolesInput | role_has_permissionsCreateOrConnectWithoutRolesInput[]
    upsert?: role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput | role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: role_has_permissionsCreateManyRolesInputEnvelope
    set?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    disconnect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    delete?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    update?: role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput | role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: role_has_permissionsUpdateManyWithWhereWithoutRolesInput | role_has_permissionsUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
  }

  export type model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput> | model_has_rolesCreateWithoutRolesInput[] | model_has_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: model_has_rolesCreateOrConnectWithoutRolesInput | model_has_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: model_has_rolesUpsertWithWhereUniqueWithoutRolesInput | model_has_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: model_has_rolesCreateManyRolesInputEnvelope
    set?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    disconnect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    delete?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    connect?: model_has_rolesWhereUniqueInput | model_has_rolesWhereUniqueInput[]
    update?: model_has_rolesUpdateWithWhereUniqueWithoutRolesInput | model_has_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: model_has_rolesUpdateManyWithWhereWithoutRolesInput | model_has_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: model_has_rolesScalarWhereInput | model_has_rolesScalarWhereInput[]
  }

  export type role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput> | role_has_permissionsCreateWithoutRolesInput[] | role_has_permissionsUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_has_permissionsCreateOrConnectWithoutRolesInput | role_has_permissionsCreateOrConnectWithoutRolesInput[]
    upsert?: role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput | role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: role_has_permissionsCreateManyRolesInputEnvelope
    set?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    disconnect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    delete?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    connect?: role_has_permissionsWhereUniqueInput | role_has_permissionsWhereUniqueInput[]
    update?: role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput | role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: role_has_permissionsUpdateManyWithWhereWithoutRolesInput | role_has_permissionsUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
  }

  export type audit_trailsCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput> | audit_trailsCreateWithoutUsersInput[] | audit_trailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_trailsCreateOrConnectWithoutUsersInput | audit_trailsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_trailsCreateManyUsersInputEnvelope
    connect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type audit_trailsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput> | audit_trailsCreateWithoutUsersInput[] | audit_trailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_trailsCreateOrConnectWithoutUsersInput | audit_trailsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_trailsCreateManyUsersInputEnvelope
    connect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type audit_trailsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput> | audit_trailsCreateWithoutUsersInput[] | audit_trailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_trailsCreateOrConnectWithoutUsersInput | audit_trailsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_trailsUpsertWithWhereUniqueWithoutUsersInput | audit_trailsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_trailsCreateManyUsersInputEnvelope
    set?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    disconnect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    delete?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    connect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    update?: audit_trailsUpdateWithWhereUniqueWithoutUsersInput | audit_trailsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_trailsUpdateManyWithWhereWithoutUsersInput | audit_trailsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_trailsScalarWhereInput | audit_trailsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type audit_trailsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput> | audit_trailsCreateWithoutUsersInput[] | audit_trailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_trailsCreateOrConnectWithoutUsersInput | audit_trailsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_trailsUpsertWithWhereUniqueWithoutUsersInput | audit_trailsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_trailsCreateManyUsersInputEnvelope
    set?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    disconnect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    delete?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    connect?: audit_trailsWhereUniqueInput | audit_trailsWhereUniqueInput[]
    update?: audit_trailsUpdateWithWhereUniqueWithoutUsersInput | audit_trailsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_trailsUpdateManyWithWhereWithoutUsersInput | audit_trailsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_trailsScalarWhereInput | audit_trailsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_from_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_from_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_to_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_to_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateWithoutAudit_trailsInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notifications_notifications_assigned_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutAudit_trailsInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutAudit_trailsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAudit_trailsInput, usersUncheckedCreateWithoutAudit_trailsInput>
  }

  export type usersUpsertWithoutAudit_trailsInput = {
    update: XOR<usersUpdateWithoutAudit_trailsInput, usersUncheckedUpdateWithoutAudit_trailsInput>
    create: XOR<usersCreateWithoutAudit_trailsInput, usersUncheckedCreateWithoutAudit_trailsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAudit_trailsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAudit_trailsInput, usersUncheckedUpdateWithoutAudit_trailsInput>
  }

  export type usersUpdateWithoutAudit_trailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications_notifications_assigned_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAudit_trailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type permissionsCreateWithoutModel_has_permissionsInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_has_permissions?: role_has_permissionsCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsUncheckedCreateWithoutModel_has_permissionsInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_has_permissions?: role_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsCreateOrConnectWithoutModel_has_permissionsInput = {
    where: permissionsWhereUniqueInput
    create: XOR<permissionsCreateWithoutModel_has_permissionsInput, permissionsUncheckedCreateWithoutModel_has_permissionsInput>
  }

  export type permissionsUpsertWithoutModel_has_permissionsInput = {
    update: XOR<permissionsUpdateWithoutModel_has_permissionsInput, permissionsUncheckedUpdateWithoutModel_has_permissionsInput>
    create: XOR<permissionsCreateWithoutModel_has_permissionsInput, permissionsUncheckedCreateWithoutModel_has_permissionsInput>
    where?: permissionsWhereInput
  }

  export type permissionsUpdateToOneWithWhereWithoutModel_has_permissionsInput = {
    where?: permissionsWhereInput
    data: XOR<permissionsUpdateWithoutModel_has_permissionsInput, permissionsUncheckedUpdateWithoutModel_has_permissionsInput>
  }

  export type permissionsUpdateWithoutModel_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_has_permissions?: role_has_permissionsUpdateManyWithoutPermissionsNestedInput
  }

  export type permissionsUncheckedUpdateWithoutModel_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_has_permissions?: role_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type rolesCreateWithoutModel_has_rolesInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_has_permissions?: role_has_permissionsCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutModel_has_rolesInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role_has_permissions?: role_has_permissionsUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutModel_has_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutModel_has_rolesInput, rolesUncheckedCreateWithoutModel_has_rolesInput>
  }

  export type rolesUpsertWithoutModel_has_rolesInput = {
    update: XOR<rolesUpdateWithoutModel_has_rolesInput, rolesUncheckedUpdateWithoutModel_has_rolesInput>
    create: XOR<rolesCreateWithoutModel_has_rolesInput, rolesUncheckedCreateWithoutModel_has_rolesInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutModel_has_rolesInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutModel_has_rolesInput, rolesUncheckedUpdateWithoutModel_has_rolesInput>
  }

  export type rolesUpdateWithoutModel_has_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_has_permissions?: role_has_permissionsUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutModel_has_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_has_permissions?: role_has_permissionsUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type usersCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_to_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
  }

  export type usersCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    id: string
    name: string
    slug: string
    email: string
    password?: string | null
    image?: string | null
    is_office_login_only?: boolean
    is_active?: boolean
    email_verified_at?: Date | string | null
    last_logged_in_at?: Date | string | null
    two_fa_active?: boolean
    two_fa_secret_key?: string | null
    invited_by?: string | null
    invited_at?: Date | string | null
    joined_at?: Date | string | null
    invite_token?: string | null
    last_activity?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    audit_trails?: audit_trailsUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_assigned_from_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
  }

  export type usersUpsertWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_assigned_from_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_to_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersNestedInput
  }

  export type usersUpsertWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_assigned_to_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_office_login_only?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_logged_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_fa_active?: BoolFieldUpdateOperationsInput | boolean
    two_fa_secret_key?: NullableStringFieldUpdateOperationsInput | string | null
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    invited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invite_token?: NullableStringFieldUpdateOperationsInput | string | null
    last_activity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_trails?: audit_trailsUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_assigned_from_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersNestedInput
  }

  export type model_has_permissionsCreateWithoutPermissionsInput = {
    model_type: string
    model_id: string
  }

  export type model_has_permissionsUncheckedCreateWithoutPermissionsInput = {
    model_type: string
    model_id: string
  }

  export type model_has_permissionsCreateOrConnectWithoutPermissionsInput = {
    where: model_has_permissionsWhereUniqueInput
    create: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput>
  }

  export type model_has_permissionsCreateManyPermissionsInputEnvelope = {
    data: model_has_permissionsCreateManyPermissionsInput | model_has_permissionsCreateManyPermissionsInput[]
    skipDuplicates?: boolean
  }

  export type role_has_permissionsCreateWithoutPermissionsInput = {
    roles: rolesCreateNestedOneWithoutRole_has_permissionsInput
  }

  export type role_has_permissionsUncheckedCreateWithoutPermissionsInput = {
    role_id: string
  }

  export type role_has_permissionsCreateOrConnectWithoutPermissionsInput = {
    where: role_has_permissionsWhereUniqueInput
    create: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput>
  }

  export type role_has_permissionsCreateManyPermissionsInputEnvelope = {
    data: role_has_permissionsCreateManyPermissionsInput | role_has_permissionsCreateManyPermissionsInput[]
    skipDuplicates?: boolean
  }

  export type model_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: model_has_permissionsWhereUniqueInput
    update: XOR<model_has_permissionsUpdateWithoutPermissionsInput, model_has_permissionsUncheckedUpdateWithoutPermissionsInput>
    create: XOR<model_has_permissionsCreateWithoutPermissionsInput, model_has_permissionsUncheckedCreateWithoutPermissionsInput>
  }

  export type model_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: model_has_permissionsWhereUniqueInput
    data: XOR<model_has_permissionsUpdateWithoutPermissionsInput, model_has_permissionsUncheckedUpdateWithoutPermissionsInput>
  }

  export type model_has_permissionsUpdateManyWithWhereWithoutPermissionsInput = {
    where: model_has_permissionsScalarWhereInput
    data: XOR<model_has_permissionsUpdateManyMutationInput, model_has_permissionsUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type model_has_permissionsScalarWhereInput = {
    AND?: model_has_permissionsScalarWhereInput | model_has_permissionsScalarWhereInput[]
    OR?: model_has_permissionsScalarWhereInput[]
    NOT?: model_has_permissionsScalarWhereInput | model_has_permissionsScalarWhereInput[]
    permission_id?: StringFilter<"model_has_permissions"> | string
    model_type?: StringFilter<"model_has_permissions"> | string
    model_id?: StringFilter<"model_has_permissions"> | string
  }

  export type role_has_permissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: role_has_permissionsWhereUniqueInput
    update: XOR<role_has_permissionsUpdateWithoutPermissionsInput, role_has_permissionsUncheckedUpdateWithoutPermissionsInput>
    create: XOR<role_has_permissionsCreateWithoutPermissionsInput, role_has_permissionsUncheckedCreateWithoutPermissionsInput>
  }

  export type role_has_permissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: role_has_permissionsWhereUniqueInput
    data: XOR<role_has_permissionsUpdateWithoutPermissionsInput, role_has_permissionsUncheckedUpdateWithoutPermissionsInput>
  }

  export type role_has_permissionsUpdateManyWithWhereWithoutPermissionsInput = {
    where: role_has_permissionsScalarWhereInput
    data: XOR<role_has_permissionsUpdateManyMutationInput, role_has_permissionsUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type role_has_permissionsScalarWhereInput = {
    AND?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
    OR?: role_has_permissionsScalarWhereInput[]
    NOT?: role_has_permissionsScalarWhereInput | role_has_permissionsScalarWhereInput[]
    permission_id?: StringFilter<"role_has_permissions"> | string
    role_id?: StringFilter<"role_has_permissions"> | string
  }

  export type permissionsCreateWithoutRole_has_permissionsInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_permissions?: model_has_permissionsCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsUncheckedCreateWithoutRole_has_permissionsInput = {
    id: string
    name: string
    label: string
    module: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_permissions?: model_has_permissionsUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type permissionsCreateOrConnectWithoutRole_has_permissionsInput = {
    where: permissionsWhereUniqueInput
    create: XOR<permissionsCreateWithoutRole_has_permissionsInput, permissionsUncheckedCreateWithoutRole_has_permissionsInput>
  }

  export type rolesCreateWithoutRole_has_permissionsInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_roles?: model_has_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateWithoutRole_has_permissionsInput = {
    id: string
    name: string
    label: string
    guard_name?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    model_has_roles?: model_has_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesCreateOrConnectWithoutRole_has_permissionsInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutRole_has_permissionsInput, rolesUncheckedCreateWithoutRole_has_permissionsInput>
  }

  export type permissionsUpsertWithoutRole_has_permissionsInput = {
    update: XOR<permissionsUpdateWithoutRole_has_permissionsInput, permissionsUncheckedUpdateWithoutRole_has_permissionsInput>
    create: XOR<permissionsCreateWithoutRole_has_permissionsInput, permissionsUncheckedCreateWithoutRole_has_permissionsInput>
    where?: permissionsWhereInput
  }

  export type permissionsUpdateToOneWithWhereWithoutRole_has_permissionsInput = {
    where?: permissionsWhereInput
    data: XOR<permissionsUpdateWithoutRole_has_permissionsInput, permissionsUncheckedUpdateWithoutRole_has_permissionsInput>
  }

  export type permissionsUpdateWithoutRole_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_permissions?: model_has_permissionsUpdateManyWithoutPermissionsNestedInput
  }

  export type permissionsUncheckedUpdateWithoutRole_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_permissions?: model_has_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type rolesUpsertWithoutRole_has_permissionsInput = {
    update: XOR<rolesUpdateWithoutRole_has_permissionsInput, rolesUncheckedUpdateWithoutRole_has_permissionsInput>
    create: XOR<rolesCreateWithoutRole_has_permissionsInput, rolesUncheckedCreateWithoutRole_has_permissionsInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutRole_has_permissionsInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutRole_has_permissionsInput, rolesUncheckedUpdateWithoutRole_has_permissionsInput>
  }

  export type rolesUpdateWithoutRole_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_roles?: model_has_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateWithoutRole_has_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guard_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    model_has_roles?: model_has_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type model_has_rolesCreateWithoutRolesInput = {
    model_type: string
    model_id: string
  }

  export type model_has_rolesUncheckedCreateWithoutRolesInput = {
    model_type: string
    model_id: string
  }

  export type model_has_rolesCreateOrConnectWithoutRolesInput = {
    where: model_has_rolesWhereUniqueInput
    create: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput>
  }

  export type model_has_rolesCreateManyRolesInputEnvelope = {
    data: model_has_rolesCreateManyRolesInput | model_has_rolesCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type role_has_permissionsCreateWithoutRolesInput = {
    permissions: permissionsCreateNestedOneWithoutRole_has_permissionsInput
  }

  export type role_has_permissionsUncheckedCreateWithoutRolesInput = {
    permission_id: string
  }

  export type role_has_permissionsCreateOrConnectWithoutRolesInput = {
    where: role_has_permissionsWhereUniqueInput
    create: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput>
  }

  export type role_has_permissionsCreateManyRolesInputEnvelope = {
    data: role_has_permissionsCreateManyRolesInput | role_has_permissionsCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type model_has_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: model_has_rolesWhereUniqueInput
    update: XOR<model_has_rolesUpdateWithoutRolesInput, model_has_rolesUncheckedUpdateWithoutRolesInput>
    create: XOR<model_has_rolesCreateWithoutRolesInput, model_has_rolesUncheckedCreateWithoutRolesInput>
  }

  export type model_has_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: model_has_rolesWhereUniqueInput
    data: XOR<model_has_rolesUpdateWithoutRolesInput, model_has_rolesUncheckedUpdateWithoutRolesInput>
  }

  export type model_has_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: model_has_rolesScalarWhereInput
    data: XOR<model_has_rolesUpdateManyMutationInput, model_has_rolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type model_has_rolesScalarWhereInput = {
    AND?: model_has_rolesScalarWhereInput | model_has_rolesScalarWhereInput[]
    OR?: model_has_rolesScalarWhereInput[]
    NOT?: model_has_rolesScalarWhereInput | model_has_rolesScalarWhereInput[]
    role_id?: StringFilter<"model_has_roles"> | string
    model_type?: StringFilter<"model_has_roles"> | string
    model_id?: StringFilter<"model_has_roles"> | string
  }

  export type role_has_permissionsUpsertWithWhereUniqueWithoutRolesInput = {
    where: role_has_permissionsWhereUniqueInput
    update: XOR<role_has_permissionsUpdateWithoutRolesInput, role_has_permissionsUncheckedUpdateWithoutRolesInput>
    create: XOR<role_has_permissionsCreateWithoutRolesInput, role_has_permissionsUncheckedCreateWithoutRolesInput>
  }

  export type role_has_permissionsUpdateWithWhereUniqueWithoutRolesInput = {
    where: role_has_permissionsWhereUniqueInput
    data: XOR<role_has_permissionsUpdateWithoutRolesInput, role_has_permissionsUncheckedUpdateWithoutRolesInput>
  }

  export type role_has_permissionsUpdateManyWithWhereWithoutRolesInput = {
    where: role_has_permissionsScalarWhereInput
    data: XOR<role_has_permissionsUpdateManyMutationInput, role_has_permissionsUncheckedUpdateManyWithoutRolesInput>
  }

  export type audit_trailsCreateWithoutUsersInput = {
    id: string
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type audit_trailsUncheckedCreateWithoutUsersInput = {
    id: string
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type audit_trailsCreateOrConnectWithoutUsersInput = {
    where: audit_trailsWhereUniqueInput
    create: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput>
  }

  export type audit_trailsCreateManyUsersInputEnvelope = {
    data: audit_trailsCreateManyUsersInput | audit_trailsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    id: string
    title: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_notifications_assigned_to_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_assigned_to_user_idTousersInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    id: string
    title: string
    assigned_to_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInput | notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    id: string
    title: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_notifications_assigned_from_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_assigned_from_user_idTousersInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    id: string
    title: string
    assigned_from_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInput | notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type audit_trailsUpsertWithWhereUniqueWithoutUsersInput = {
    where: audit_trailsWhereUniqueInput
    update: XOR<audit_trailsUpdateWithoutUsersInput, audit_trailsUncheckedUpdateWithoutUsersInput>
    create: XOR<audit_trailsCreateWithoutUsersInput, audit_trailsUncheckedCreateWithoutUsersInput>
  }

  export type audit_trailsUpdateWithWhereUniqueWithoutUsersInput = {
    where: audit_trailsWhereUniqueInput
    data: XOR<audit_trailsUpdateWithoutUsersInput, audit_trailsUncheckedUpdateWithoutUsersInput>
  }

  export type audit_trailsUpdateManyWithWhereWithoutUsersInput = {
    where: audit_trailsScalarWhereInput
    data: XOR<audit_trailsUpdateManyMutationInput, audit_trailsUncheckedUpdateManyWithoutUsersInput>
  }

  export type audit_trailsScalarWhereInput = {
    AND?: audit_trailsScalarWhereInput | audit_trailsScalarWhereInput[]
    OR?: audit_trailsScalarWhereInput[]
    NOT?: audit_trailsScalarWhereInput | audit_trailsScalarWhereInput[]
    id?: StringFilter<"audit_trails"> | string
    user_id?: StringNullableFilter<"audit_trails"> | string | null
    title?: StringFilter<"audit_trails"> | string
    link?: StringNullableFilter<"audit_trails"> | string | null
    reference_id?: StringFilter<"audit_trails"> | string
    section?: StringFilter<"audit_trails"> | string
    type?: StringFilter<"audit_trails"> | string
    created_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"audit_trails"> | Date | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_from_user_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: StringFilter<"notifications"> | string
    title?: StringFilter<"notifications"> | string
    assigned_to_user_id?: StringFilter<"notifications"> | string
    assigned_from_user_id?: StringFilter<"notifications"> | string
    link?: StringNullableFilter<"notifications"> | string | null
    viewed?: BoolNullableFilter<"notifications"> | boolean | null
    viewed_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_assigned_to_user_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersInput>
  }

  export type model_has_permissionsCreateManyPermissionsInput = {
    model_type: string
    model_id: string
  }

  export type role_has_permissionsCreateManyPermissionsInput = {
    role_id: string
  }

  export type model_has_permissionsUpdateWithoutPermissionsInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_permissionsUncheckedUpdateWithoutPermissionsInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_permissionsUncheckedUpdateManyWithoutPermissionsInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type role_has_permissionsUpdateWithoutPermissionsInput = {
    roles?: rolesUpdateOneRequiredWithoutRole_has_permissionsNestedInput
  }

  export type role_has_permissionsUncheckedUpdateWithoutPermissionsInput = {
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type role_has_permissionsUncheckedUpdateManyWithoutPermissionsInput = {
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesCreateManyRolesInput = {
    model_type: string
    model_id: string
  }

  export type role_has_permissionsCreateManyRolesInput = {
    permission_id: string
  }

  export type model_has_rolesUpdateWithoutRolesInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesUncheckedUpdateWithoutRolesInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type model_has_rolesUncheckedUpdateManyWithoutRolesInput = {
    model_type?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type role_has_permissionsUpdateWithoutRolesInput = {
    permissions?: permissionsUpdateOneRequiredWithoutRole_has_permissionsNestedInput
  }

  export type role_has_permissionsUncheckedUpdateWithoutRolesInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
  }

  export type role_has_permissionsUncheckedUpdateManyWithoutRolesInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
  }

  export type audit_trailsCreateManyUsersInput = {
    id: string
    title: string
    link?: string | null
    reference_id: string
    section: string
    type: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_assigned_from_user_idTousersInput = {
    id: string
    title: string
    assigned_to_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_assigned_to_user_idTousersInput = {
    id: string
    title: string
    assigned_from_user_id: string
    link?: string | null
    viewed?: boolean | null
    viewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type audit_trailsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_trailsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_trailsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_assigned_to_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_assigned_to_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_to_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_from_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_to_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_assigned_from_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_assigned_from_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_from_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_assigned_to_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assigned_from_user_id?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    viewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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