import { InternalServerError } from "../../errors";
import { UserRole } from "..";
import { Maybe, Users } from "generated-graphql";
import { includes, values } from "lodash";

export function getUserRole(
  user?: Maybe<Pick<Users, "accountType">>
): UserRole | undefined {
  if (
    !user?.accountType ||
    user?.accountType === UserRole.Unauthenticated ||
    !includes(values(UserRole), user?.accountType)
  ) {
    throw new InternalServerError(
      `Unsupported account type: "${user?.accountType}"`
    );
  }
  return user?.accountType as UserRole;
}
