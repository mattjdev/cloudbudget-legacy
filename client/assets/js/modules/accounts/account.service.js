(function (angular) {
	function AccountService(AccountHolder) {
		var AccountService = this;

		AccountService.getAccounts = function (queryObj, cb) {
			AccountHolder.Accounts({ id: AccountHolder.getCurrentId(), filter: queryObj }).$promise.then(function (accounts) {
				if (cb) cb(accounts);
			});
		};

		AccountService.saveAccount = function (account, cb) {
			if (account.id) {
				AccountHolder.Transactions.updateById({ id: AccountHolder.getCurrentId(), fk: account.id }, account, function (resAccount) {
					if (cb) cb(resAccount);
				});
			} else {
				AccountHolder.Transactions.create({ id: AccountHolder.getCurrentId() }, account, function (resAccount) {
					if (cb) cb(resAccount);
				});
			}
		};

	}

	angular.module('CloudBudget').service('AccountService', ['AccountHolder', AccountService]);
})(window.angular);