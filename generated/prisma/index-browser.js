
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Failed_jobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at'
};

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  queue: 'queue',
  payload: 'payload',
  attempts: 'attempts',
  reserved_at: 'reserved_at',
  available_at: 'available_at',
  created_at: 'created_at'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.Model_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Model_has_rolesScalarFieldEnum = {
  role_id: 'role_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.Password_reset_tokensScalarFieldEnum = {
  email: 'email',
  token: 'token',
  created_at: 'created_at'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Role_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  company_id: 'company_id',
  remember_token: 'remember_token',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CacheScalarFieldEnum = {
  key: 'key',
  value: 'value',
  expiration: 'expiration'
};

exports.Prisma.Cache_locksScalarFieldEnum = {
  key: 'key',
  owner: 'owner',
  expiration: 'expiration'
};

exports.Prisma.Job_batchesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  total_jobs: 'total_jobs',
  pending_jobs: 'pending_jobs',
  failed_jobs: 'failed_jobs',
  failed_job_ids: 'failed_job_ids',
  options: 'options',
  cancelled_at: 'cancelled_at',
  created_at: 'created_at',
  finished_at: 'finished_at'
};

exports.Prisma.SessionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  payload: 'payload',
  last_activity: 'last_activity'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent_id: 'parent_id',
  company_id: 'company_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  registration_no: 'registration_no',
  vat: 'vat',
  name: 'name',
  email: 'email',
  domain: 'domain',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Company_frontend_settingsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  settings: 'settings',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Company_integrationsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  provider: 'provider',
  credentials: 'credentials',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Company_profilesScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  phone: 'phone',
  address: 'address',
  country: 'country',
  zipcode: 'zipcode',
  city: 'city',
  state: 'state',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Company_subscriptionsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  subscription_id: 'subscription_id',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Integration_category_mappingsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  provider: 'provider',
  external_category: 'external_category',
  category_id: 'category_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MenusScalarFieldEnum = {
  id: 'id',
  title: 'title',
  href: 'href',
  icon: 'icon',
  role: 'role',
  permission: 'permission',
  parent_id: 'parent_id',
  order: 'order',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Offer_categoryScalarFieldEnum = {
  id: 'id',
  offer_id: 'offer_id',
  category_id: 'category_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OffersScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  store_id: 'store_id',
  category_id: 'category_id',
  title: 'title',
  description: 'description',
  product_url: 'product_url',
  image_url: 'image_url',
  price: 'price',
  code: 'code',
  start_date: 'start_date',
  end_date: 'end_date',
  link: 'link',
  is_featured: 'is_featured',
  is_exclusive: 'is_exclusive',
  is_deal: 'is_deal',
  path: 'path',
  thumbnail: 'thumbnail',
  sku: 'sku',
  product_name: 'product_name',
  product_price: 'product_price',
  old_price: 'old_price',
  source: 'source',
  type: 'type',
  external_id: 'external_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  id: 'id',
  company_subscription_id: 'company_subscription_id',
  amount: 'amount',
  payment_method: 'payment_method',
  payment_status: 'payment_status',
  transaction_id: 'transaction_id',
  paid_at: 'paid_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StoresScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  name: 'name',
  image: 'image',
  description: 'description',
  status: 'status',
  channelId: 'channelId',
  channelName: 'channelName',
  programId: 'programId',
  categoryName: 'categoryName',
  categoryId: 'categoryId',
  productFeedId: 'productFeedId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SubscriptionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  duration: 'duration',
  features: 'features',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.failed_jobsOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.jobsOrderByRelevanceFieldEnum = {
  queue: 'queue',
  payload: 'payload'
};

exports.Prisma.migrationsOrderByRelevanceFieldEnum = {
  migration: 'migration'
};

exports.Prisma.model_has_permissionsOrderByRelevanceFieldEnum = {
  model_type: 'model_type'
};

exports.Prisma.model_has_rolesOrderByRelevanceFieldEnum = {
  model_type: 'model_type'
};

exports.Prisma.password_reset_tokensOrderByRelevanceFieldEnum = {
  email: 'email',
  token: 'token'
};

exports.Prisma.permissionsOrderByRelevanceFieldEnum = {
  name: 'name',
  guard_name: 'guard_name'
};

exports.Prisma.rolesOrderByRelevanceFieldEnum = {
  name: 'name',
  guard_name: 'guard_name'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  password: 'password',
  remember_token: 'remember_token'
};

exports.Prisma.cacheOrderByRelevanceFieldEnum = {
  key: 'key',
  value: 'value'
};

exports.Prisma.cache_locksOrderByRelevanceFieldEnum = {
  key: 'key',
  owner: 'owner'
};

exports.Prisma.job_batchesOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  failed_job_ids: 'failed_job_ids',
  options: 'options'
};

exports.Prisma.sessionsOrderByRelevanceFieldEnum = {
  id: 'id',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  payload: 'payload'
};

exports.Prisma.categoriesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.companiesOrderByRelevanceFieldEnum = {
  registration_no: 'registration_no',
  vat: 'vat',
  name: 'name',
  email: 'email',
  domain: 'domain'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.company_integrationsOrderByRelevanceFieldEnum = {
  provider: 'provider'
};

exports.Prisma.company_profilesOrderByRelevanceFieldEnum = {
  phone: 'phone',
  address: 'address',
  country: 'country',
  zipcode: 'zipcode',
  city: 'city',
  state: 'state'
};

exports.Prisma.company_subscriptionsOrderByRelevanceFieldEnum = {
  status: 'status'
};

exports.Prisma.integration_category_mappingsOrderByRelevanceFieldEnum = {
  provider: 'provider',
  external_category: 'external_category'
};

exports.Prisma.menusOrderByRelevanceFieldEnum = {
  title: 'title',
  href: 'href',
  icon: 'icon',
  role: 'role',
  permission: 'permission'
};

exports.Prisma.offersOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  product_url: 'product_url',
  image_url: 'image_url',
  code: 'code',
  link: 'link',
  path: 'path',
  thumbnail: 'thumbnail',
  sku: 'sku',
  product_name: 'product_name',
  source: 'source',
  external_id: 'external_id'
};

exports.Prisma.paymentsOrderByRelevanceFieldEnum = {
  payment_method: 'payment_method',
  payment_status: 'payment_status',
  transaction_id: 'transaction_id'
};

exports.Prisma.storesOrderByRelevanceFieldEnum = {
  name: 'name',
  image: 'image',
  description: 'description',
  channelName: 'channelName',
  categoryName: 'categoryName'
};

exports.Prisma.subscriptionsOrderByRelevanceFieldEnum = {
  name: 'name'
};
exports.offers_type = exports.$Enums.offers_type = {
  deal: 'deal',
  coupon: 'coupon',
  campaign: 'campaign'
};

exports.Prisma.ModelName = {
  failed_jobs: 'failed_jobs',
  jobs: 'jobs',
  migrations: 'migrations',
  model_has_permissions: 'model_has_permissions',
  model_has_roles: 'model_has_roles',
  password_reset_tokens: 'password_reset_tokens',
  permissions: 'permissions',
  role_has_permissions: 'role_has_permissions',
  roles: 'roles',
  users: 'users',
  cache: 'cache',
  cache_locks: 'cache_locks',
  job_batches: 'job_batches',
  sessions: 'sessions',
  categories: 'categories',
  companies: 'companies',
  company_frontend_settings: 'company_frontend_settings',
  company_integrations: 'company_integrations',
  company_profiles: 'company_profiles',
  company_subscriptions: 'company_subscriptions',
  integration_category_mappings: 'integration_category_mappings',
  menus: 'menus',
  offer_category: 'offer_category',
  offers: 'offers',
  payments: 'payments',
  stores: 'stores',
  subscriptions: 'subscriptions'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
