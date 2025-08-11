enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export function transformRoleToEnumRole(role: string) {
  switch (role) {
    case "ADMIN":
      return Roles.ADMIN;
    default:
      return Roles.USER;
  }
}
