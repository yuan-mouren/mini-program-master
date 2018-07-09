const Base = require('./base.js');

module.exports = class extends Base {

  /**
   * 获取共享设备位置
   * @returns {Promise.<>}
   */

  async getMarksAction() {
    const markers = await this.mongo('mapInfo').getMapMarkers();
    return this.success(markers);
  }
};
