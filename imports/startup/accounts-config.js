import { accounts } from 'meteor/accounts-base';
import AccountsUIWrapper from '../ui/AccountsUIWrapper';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});