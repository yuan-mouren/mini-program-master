module.exports = class extends think.Mongo {
    /**
     * 获取共享设备位置
     * @returns {Promise.<*>}
     */
    async getMapMarkers() {
      const markers = await this.model('map_info').select()
      return markers;
    }
  };
