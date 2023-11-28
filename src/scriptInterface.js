function getScriptInterface(parentClass, map) {
  return class extends parentClass {
    constructor() {
      super();
      map.set(this, parentClass._GetInitInst().GetSdkInstance());
      this.SCROLL_DIRECTION = {
        VERTICAL: 0,
        HORIZONTAL: 1,
        BOTH: 2,
      };
      this.ALIGN_HORIZONTAL = {
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2,
      };
      this.ALIGN_VERTICAL = {
        TOP: 0,
        CENTER: 1,
        BOTTOM: 2,
      };
    }
    SetInstance(instOrObject) {
      const that = map.get(this);
      if (instOrObject === null) {
        that.instance = null;
        return;
      }

      if (instOrObject.getFirstInstance) {
        instOrObject = instOrObject.getFirstInstance();
      }
      that.instance = inst._runtime.GetInstanceByUID(instOrObject.uid);
    }
  };
}
