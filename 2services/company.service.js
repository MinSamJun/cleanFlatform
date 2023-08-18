const CompanyRepository = require('../3repositories/company.repository');
const ApiError = require('../apierror');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class CompanyService {
  companyRepository = new CompanyRepository();
}

module.exports = CompanyService;
