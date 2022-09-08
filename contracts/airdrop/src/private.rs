use crate::*;

impl Contract {
    pub(crate) fn assert_owner(&self) {
        require!(self.signer_is_owner(), "Method is private to owner")
    }

    pub(crate) fn signer_is_owner(&self) -> bool {
        self.is_owner(&env::signer_account_id())
    }

    pub(crate) fn is_owner(&self, minter: &AccountId) -> bool {
        minter.as_str() == self.tokens.owner_id.as_str()
    }

    pub(crate) fn assert_owner_or_admin(&self) {
        require!(
            self.signer_is_owner_or_admin(),
            "Method is private to owner or admin"
        )
    }

    #[allow(dead_code)]
    pub(crate) fn signer_is_admin(&self) -> bool {
        self.is_admin(&env::signer_account_id())
    }

    pub(crate) fn signer_is_owner_or_admin(&self) -> bool {
        let signer = env::signer_account_id();
        self.is_owner(&signer) || self.is_admin(&signer)
    }

    pub(crate) fn is_admin(&self, account_id: &AccountId) -> bool {
        self.admins.contains(account_id)
    }
}
