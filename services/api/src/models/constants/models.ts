import {USER_MODEL, UserSchema} from "../schemas/user";
import {PROFILE_MODEL, ProfileSchema} from "../schemas/profile";
import {PERSONALINFO_MODEL, PersonalInfoSchema} from "../schemas/personalInfo";
import {ACCOUNT_MODEL, AccountSchema} from "../schemas/account";

const MODELS = [
  {name: USER_MODEL, schema: UserSchema},
  {name: PROFILE_MODEL, schema: ProfileSchema},
  {name: PERSONALINFO_MODEL, schema: PersonalInfoSchema},
  {name: ACCOUNT_MODEL, schema: AccountSchema},
];

export default MODELS;
