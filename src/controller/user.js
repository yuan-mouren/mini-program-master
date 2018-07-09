const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * 保存用户信息
   * @returns {Promise.<>}
   */

  async saveUserInfoAction() {
    const username = this.post('username')
    const phoneNumber = this.post('phoneNumber')
    const _id = await this.mongo('user').add({username, phoneNumber})
  }
};

