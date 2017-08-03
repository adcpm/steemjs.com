const { isEmpty, userExists, normalizeUsername } = require('../validation-utils');

const normalize = (query) => {
  const _query = {
    id: 'follow',
    json: JSON.stringify([
      'reblog', {
        author: normalizeUsername(query.author),
        permlink: query.permlink
      }
    ]),
    required_auths: [],
    required_posting_auths: [normalizeUsername(query.account)]
  };

  return {
    query: _query,
    type: 'custom_json'
  };
};

const validate = async (query) => {
  const errors = [];

  if (isEmpty(query.author)) {
    errors.push('author is required');
  } else if (!await userExists(query.author)) {
    errors.push(`the user ${query.author} doesn't exist`);
  }

  if (isEmpty(query.permlink)) {
    errors.push('permlink is required');
  }

  return errors;
};

module.exports = {
  normalize,
  validate
};
