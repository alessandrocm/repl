const repl = require('repl');

let r = repl.start({
	ignoreUndefined: true,
	replMode: repl.REPL_MODE_STRICT
});

r.context.lodash = require('lodash');
r.context.moment = require('moment');
r.context.VError = require('verror');
r.context.shortid = require('shortid');
r.context.uuid = require('uuid');

