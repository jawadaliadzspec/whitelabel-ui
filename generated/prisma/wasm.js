
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

exports.Prisma.Audit_trailsScalarFieldEnum = {
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

exports.Prisma.NotificationsScalarFieldEnum = {
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

exports.Prisma.Password_reset_tokensScalarFieldEnum = {
  email: 'email',
  token: 'token',
  created_at: 'created_at'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  module: 'module',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Personal_access_tokensScalarFieldEnum = {
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

exports.Prisma.Role_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  guard_name: 'guard_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SettingsScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.audit_trailsOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  link: 'link',
  reference_id: 'reference_id',
  section: 'section',
  type: 'type'
};

exports.Prisma.failed_jobsOrderByRelevanceFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception'
};

exports.Prisma.jobsOrderByRelevanceFieldEnum = {
  queue: 'queue',
  payload: 'payload'
};

exports.Prisma.migrationsOrderByRelevanceFieldEnum = {
  migration: 'migration'
};

exports.Prisma.model_has_permissionsOrderByRelevanceFieldEnum = {
  permission_id: 'permission_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.model_has_rolesOrderByRelevanceFieldEnum = {
  role_id: 'role_id',
  model_type: 'model_type',
  model_id: 'model_id'
};

exports.Prisma.notificationsOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  assigned_to_user_id: 'assigned_to_user_id',
  assigned_from_user_id: 'assigned_from_user_id',
  link: 'link'
};

exports.Prisma.password_reset_tokensOrderByRelevanceFieldEnum = {
  email: 'email',
  token: 'token'
};

exports.Prisma.permissionsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  module: 'module',
  guard_name: 'guard_name'
};

exports.Prisma.personal_access_tokensOrderByRelevanceFieldEnum = {
  id: 'id',
  tokenable_type: 'tokenable_type',
  name: 'name',
  token: 'token',
  abilities: 'abilities'
};

exports.Prisma.role_has_permissionsOrderByRelevanceFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.rolesOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  guard_name: 'guard_name'
};

exports.Prisma.settingsOrderByRelevanceFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
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


exports.Prisma.ModelName = {
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
