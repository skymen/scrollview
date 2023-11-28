function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);
      // this.scrollX = 0;
      // this.scrollY = 0;
      this.scrollProgressX = 0;
      this.scrollProgressY = 0;
      this.maxSpeed = 0;
      this.deceleration = 0;
      this.vectorX = 0;
      this.vectorY = 0;
      this.instance = null;
      this.marginLeft = 0;
      this.marginTop = 0;
      this.marginRight = 0;
      this.marginBottom = 0;
      this.overscrollX = 0;
      this.overscrollY = 0;
      this.showOverscroll = false;
      this.maxOverScroll = 0;
      this.autoPickFirstChild = false;
      this.alignHorizontal = 0;
      this.alignVertical = 0;
      this.overscrollPushback = 0;
      this.overscrollDecelerationRatio = 5;
      this.snapSpeedThreshold = 0;
      this.snapDistanceThreshold = 0;
      this.snapSpeed = 0;
      this.nbColumns = 0;
      this.nbRows = 0;
      this.enableSnap = false;
      this.enabled = true;
      if (properties) {
        this.maxSpeed = properties[0];
        this.deceleration = Math.max(properties[1], 0);
        this.overscrollPushback = Math.max(properties[2], 0);
        this.overscrollDecelerationRatio = Math.max(properties[3], 1);
        this.scrollDirection = properties[4];
        this.alignHorizontal = properties[5];
        this.alignVertical = properties[6];
        this.marginLeft = properties[7];
        this.marginTop = properties[8];
        this.marginRight = properties[9];
        this.marginBottom = properties[10];
        this.maxOverScroll = properties[11];
        this.showOverscroll = properties[12];
        this.autoPickFirstChild = properties[13];
        this.enableSnap = properties[14];
        this.snapSpeedThreshold = properties[15];
        this.snapDistanceThreshold = properties[16];
        this.snapSpeed = properties[17];
        this.nbColumns = properties[18];
        this.nbRows = properties[19];
        this.enabled = properties[20];
      }

      this._StartTicking();
    }

    get scrollWidth() {
      if (!this.instance) {
        return 0;
      } else {
        const wi = this.instance.GetWorldInfo();
        const instW = wi.GetWidth();
        return instW + this.marginLeft + this.marginRight;
      }
    }

    get scrollHeight() {
      if (!this.instance) {
        return 0;
      } else {
        const wi = this.instance.GetWorldInfo();
        const instH = wi.GetHeight();
        return instH + this.marginTop + this.marginBottom;
      }
    }

    get scrollX() {
      let scrollWidth = this.scrollWidth;
      if (scrollWidth === 0) {
        return 0;
      }
      return this.scrollProgressX * scrollWidth;
    }

    set scrollX(val) {
      let scrollWidth = this.scrollWidth;
      if (scrollWidth === 0) {
        this.scrollProgressX = 0;
        return;
      }
      this.scrollProgressX = val / scrollWidth;
    }

    get scrollY() {
      let scrollHeight = this.scrollHeight;
      if (scrollHeight === 0) {
        return 0;
      }
      return this.scrollProgressY * scrollHeight;
    }

    set scrollY(val) {
      let scrollHeight = this.scrollHeight;
      if (scrollHeight === 0) {
        this.scrollProgressY = 0;
        return;
      }
      this.scrollProgressY = val / scrollHeight;
    }

    // get scrollProgressX() {
    //   let scrollWidth = this.scrollWidth;
    //   if (scrollWidth === 0) {
    //     return 0;
    //   }
    //   return this.scrollX / scrollWidth;
    // }

    // set scrollProgressX(val) {
    //   this.scrollX = val * this.scrollWidth;
    // }

    // get scrollProgressY() {
    //   let scrollHeight = this.scrollHeight;
    //   if (scrollHeight === 0) {
    //     return 0;
    //   }
    //   return this.scrollY / scrollHeight;
    // }

    // set scrollProgressY(val) {
    //   this.scrollY = val * this.scrollHeight;
    // }

    Release() {
      super.Release();
    }

    GetDebuggerProperties() {
      return [
        {
          title: "Scrollview",
          properties: [
            {
              name: "Scroll X",
              value: this.scrollX,
              readonly: true,
            },
            {
              name: "Scroll Y",
              value: this.scrollY,
              readonly: true,
            },
            {
              name: "Scroll Width",
              value: this.scrollWidth,
              readonly: true,
            },
            {
              name: "Scroll Height",
              value: this.scrollHeight,
              readonly: true,
            },
            {
              name: "Scroll Progress X",
              value: this.scrollProgressX,
              readonly: true,
            },
            {
              name: "Scroll Progress Y",
              value: this.scrollProgressY,
              readonly: true,
            },
            {
              name: "Overscroll X",
              value: this.overscrollX,
              readonly: true,
            },
            {
              name: "Overscroll Y",
              value: this.overscrollY,
              readonly: true,
            },
            {
              name: "Vector X",
              value: this.vectorX,
              readonly: true,
            },
            {
              name: "Vector Y",
              value: this.vectorY,
              readonly: true,
            },
            {
              name: "Speed",
              value: Math.sqrt(
                this.vectorX * this.vectorX + this.vectorY * this.vectorY
              ),
              readonly: true,
            },
          ],
        },
      ];
    }

    SaveToJson() {
      return {
        scrollProgressX: this.scrollProgressX,
        scrollProgressY: this.scrollProgressY,
        maxSpeed: this.maxSpeed,
        deceleration: this.deceleration,
        vectorX: this.vectorX,
        vectorY: this.vectorY,
        marginLeft: this.marginLeft,
        marginTop: this.marginTop,
        marginRight: this.marginRight,
        marginBottom: this.marginBottom,
        overscrollX: this.overscrollX,
        overscrollY: this.overscrollY,
        showOverscroll: this.showOverscroll,
        maxOverScroll: this.maxOverScroll,
        autoPickFirstChild: this.autoPickFirstChild,
        alignHorizontal: this.alignHorizontal,
        alignVertical: this.alignVertical,
        overscrollPushback: this.overscrollPushback,
        overscrollDecelerationRatio: this.overscrollDecelerationRatio,
        snapSpeedThreshold: this.snapSpeedThreshold,
        snapDistanceThreshold: this.snapDistanceThreshold,
        snapSpeed: this.snapSpeed,
        nbColumns: this.nbColumns,
        nbRows: this.nbRows,
        enableSnap: this.enableSnap,
        enabled: this.enabled,
        instance: this.instance ? this.instance.GetUID() : null,
      };
    }

    LoadFromJson(o) {
      this.scrollProgressX = o.scrollProgressX;
      this.scrollProgressY = o.scrollProgressY;
      this.maxSpeed = o.maxSpeed;
      this.deceleration = o.deceleration;
      this.vectorX = o.vectorX;
      this.vectorY = o.vectorY;
      this.marginLeft = o.marginLeft;
      this.marginTop = o.marginTop;
      this.marginRight = o.marginRight;
      this.marginBottom = o.marginBottom;
      this.overscrollX = o.overscrollX;
      this.overscrollY = o.overscrollY;
      this.showOverscroll = o.showOverscroll;
      this.maxOverScroll = o.maxOverScroll;
      this.autoPickFirstChild = o.autoPickFirstChild;
      this.alignHorizontal = o.alignHorizontal;
      this.alignVertical = o.alignVertical;
      this.overscrollPushback = o.overscrollPushback;
      this.overscrollDecelerationRatio = o.overscrollDecelerationRatio;
      this.snapSpeedThreshold = o.snapSpeedThreshold;
      this.snapDistanceThreshold = o.snapDistanceThreshold;
      this.snapSpeed = o.snapSpeed;
      this.nbColumns = o.nbColumns;
      this.nbRows = o.nbRows;
      this.enableSnap = o.enableSnap;
      this.enabled = o.enabled;
      this.instance =
        o.instance === null ? null : this._runtime.GetInstanceByUID(o.instance);
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }

    Tick() {
      if (!this.instance) {
        if (this.autoPickFirstChild) {
          this.autoPickFirstChild = false;
          const children = this._inst.GetWorldInfo().GetChildren();
          if (children.length === 0) {
            return;
          }
          this.instance = children[0]._inst;
        } else {
          return;
        }
      }
      const dt = this._runtime.GetDt(this._inst);

      // Manage scroll direction
      if (this.scrollDirection === 0) {
        this.vectorX = 0;
        this.overscrollX = 0;
      } else if (this.scrollDirection === 1) {
        this.vectorY = 0;
        this.overscrollY = 0;
      }

      // adjust scroll X for overscroll. If overscroll is superior to 0, move scroll with deceleration
      if (this.scrollX < 0 || this.scrollX > this.scrollWidth) {
        if (this.scrollX < 0) {
          this.scrollX -= Math.max(
            this.overscrollX,
            Math.max(-0.5, this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        } else {
          this.scrollX -= Math.min(
            this.overscrollX,
            Math.min(0.5, this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        }
        if (
          (this.scrollX < 0 && this.vectorX < 0) ||
          (this.scrollX > 0 && this.vectorX > 0)
        ) {
          this.vectorX -=
            this.deceleration * dt +
            (this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              this.overscrollDecelerationRatio *
              dt;
        }
      }
      if (this.scrollY < 0 || this.scrollY > this.scrollHeight) {
        if (this.scrollY < 0) {
          this.scrollY -= Math.max(
            this.overscrollY,
            Math.max(-0.5, this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        } else {
          this.scrollY -= Math.max(
            this.overscrollY,
            Math.min(0.5, this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        }
        if (
          (this.scrollY < 0 && this.vectorY < 0) ||
          (this.scrollY > 0 && this.vectorY > 0)
        ) {
          this.vectorY -=
            this.deceleration * dt +
            (this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              this.overscrollDecelerationRatio *
              dt;
        }
      }

      // clamp vector based on max speed
      const speed = Math.sqrt(
        this.vectorX * this.vectorX + this.vectorY * this.vectorY
      );
      if (speed > this.maxSpeed) {
        const ratio = this.maxSpeed / speed;
        this.vectorX *= ratio;
        this.vectorY *= ratio;
      }

      if (this.enableSnap && speed < this.snapSpeedThreshold) {
        const scrollWidth = this.scrollWidth;
        const scrollHeight = this.scrollHeight;
        const scrollX = this.scrollX;
        const scrollY = this.scrollY;
        // get closest snap point. first and last snap points are the edges of the scrollview, but
        // everything in the middle doesn't take into account margins
        let snapX = 0;
        if (scrollX < this.marginLeft) {
          snapX = 0;
        } else if (scrollX > scrollWidth - this.marginRight) {
          snapX = scrollWidth;
        } else {
          const snapWidth =
            (scrollWidth - this.marginLeft - this.marginRight) / this.nbColumns;
          snapX =
            this.marginLeft +
            Math.round((scrollX - this.marginLeft) / snapWidth) * snapWidth;
        }

        let snapY = 0;
        if (scrollY < this.marginTop) {
          snapY = 0;
        } else if (scrollY > scrollHeight - this.marginBottom) {
          snapY = scrollHeight;
        } else {
          const snapHeight =
            (scrollHeight - this.marginTop - this.marginBottom) / this.nbRows;
          snapY =
            this.marginTop +
            Math.round((scrollY - this.marginTop) / snapHeight) * snapHeight;
        }

        // if we are close enough to a snap point, snap to it
        if (Math.abs(snapX - scrollX) < this.snapDistanceThreshold) {
          // move in the direction of the snap point with the snap speed
          this.scrollX += Math.min(
            Math.sign(snapX - scrollX) * this.snapSpeed * dt,
            Math.abs(snapX - scrollX)
          );

          if (Math.abs(this.scrollX - snapX) < 0.1) {
            this.scrollX = snapX;
          }
        }

        if (Math.abs(snapY - scrollY) < this.snapDistanceThreshold) {
          // move in the direction of the snap point with the snap speed
          this.scrollY += Math.min(
            Math.sign(snapY - scrollY) * this.snapSpeed * dt,
            Math.abs(snapY - scrollY)
          );

          if (Math.abs(this.scrollY - snapY) < 0.1) {
            this.scrollY = snapY;
          }
        }
      }

      // adjust scroll based on speed and deceleration
      if (this.vectorX !== 0) {
        this.scrollX += this.vectorX * dt;
        if (this.vectorX > 0) {
          this.vectorX = Math.max(this.vectorX - this.deceleration * dt, 0);
        }
        if (this.vectorX < 0) {
          this.vectorX = Math.min(this.vectorX + this.deceleration * dt, 0);
        }
      }
      if (this.vectorY !== 0) {
        this.scrollY += this.vectorY * dt;
        if (this.vectorY > 0) {
          this.vectorY = Math.max(this.vectorY - this.deceleration * dt, 0);
        }
        if (this.vectorY < 0) {
          this.vectorY = Math.min(this.vectorY + this.deceleration * dt, 0);
        }
      }

      // clamp scroll
      const scrollWidth = this.scrollWidth;
      const scrollHeight = this.scrollHeight;
      const scrollWidthWithOverscroll = scrollWidth + this.maxOverScroll;
      const scrollHeightWithOverscroll = scrollHeight + this.maxOverScroll;
      this.scrollX = Math.max(
        Math.min(this.scrollX, scrollWidthWithOverscroll),
        -this.maxOverScroll
      );
      this.scrollY = Math.max(
        Math.min(this.scrollY, scrollHeightWithOverscroll),
        -this.maxOverScroll
      );

      // calculate overscroll
      if (this.scrollX < 0) this.overscrollX = this.scrollX;
      else if (this.scrollX > scrollWidth)
        this.overscrollX = this.scrollX - scrollWidth;
      else this.overscrollX = 0;

      if (this.scrollY < 0) this.overscrollY = this.scrollY;
      else if (this.scrollY > scrollHeight)
        this.overscrollY = this.scrollY - scrollHeight;
      else this.overscrollY = 0;

      const wi = this._inst.GetWorldInfo();
      const w = wi.GetWidth();
      const h = wi.GetHeight();

      if (this.scrollWidth < w) {
        if (this.alignHorizontal === 0) {
          this.scrollX = 0;
        } else if (this.alignHorizontal === 1) {
          this.scrollX = this.scrollWidth / 2;
        } else {
          this.scrollX = this.scrollWidth;
        }
      }

      if (this.scrollHeight < h) {
        if (this.alignVertical === 0) {
          this.scrollY = 0;
        } else if (this.alignVertical === 1) {
          this.scrollY = this.scrollHeight / 2;
        } else {
          this.scrollY = this.scrollHeight;
        }
      }

      let scrollX = this.scrollX;
      let scrollY = this.scrollY;

      if (!this.showOverscroll) {
        scrollX = Math.max(Math.min(this.scrollX, scrollWidth), 0);
        scrollY = Math.max(Math.min(this.scrollY, scrollHeight), 0);
      }

      // update instance position
      const instWi = this.instance.GetWorldInfo();
      const ox = instWi.GetOriginX();
      const oy = instWi.GetOriginY();
      const instW = instWi.GetWidth();
      const instH = instWi.GetHeight();
      const bbox = wi.GetBoundingBox();

      const lerp = (a, b, t) => a + (b - a) * t;
      const left = lerp(
        this.marginLeft,
        -scrollWidth + w + this.marginRight,
        scrollX / scrollWidth
      );
      const top = lerp(
        this.marginTop,
        -scrollHeight + h + this.marginBottom,
        scrollY / scrollHeight
      );
      instWi.SetXY(
        bbox.getLeft() + left + instW * ox,
        bbox.getTop() + top + instH * oy
      );
      instWi.SetBboxChanged();
    }

    // ACTS
    _SetScrollXY(x, y) {
      this.scrollX = x;
      this.scrollY = y;
    }
    _SetScrollX(x) {
      this.scrollX = x;
    }
    _SetScrollY(y) {
      this.scrollY = y;
    }
    _SetProgressXY(x, y) {
      this.scrollProgressX = x;
      this.scrollProgressY = y;
    }
    _SetProgressX(x) {
      this.scrollProgressX = x;
    }
    _SetProgressY(y) {
      this.scrollProgressY = y;
    }
    _SetInstance(objectType) {
      const instances = objectType.GetCurrentSol().GetInstances();
      if (instances.length === 0) {
        this.instance = null;
        return;
      }
      this.instance = instances[0];
    }
    _SetVectorX(x) {
      this.vectorX = x;
    }
    _SetVectorY(y) {
      this.vectorY = y;
    }
    _SetVectorXY(x, y) {
      this.vectorX = x;
      this.vectorY = y;
    }
    _SetMaxSpeed(speed) {
      this.maxSpeed = speed;
    }
    _SetDeceleration(decel) {
      this.deceleration = Math.max(decel, 0);
    }
    _SetOverScrollPushBack(pushback) {
      this.overscrollPushback = Math.max(0, pushback);
    }

    _SetSnapSpeedThreshold(value) {
      this.snapSpeedThreshold = value;
    }
    _SetSnapDistanceThreshold(value) {
      this.snapDistanceThreshold = value;
    }
    _SetSnapSpeed(value) {
      this.snapSpeed = value;
    }
    _SetNbColumns(value) {
      this.nbColumns = value;
    }
    _SetNbRows(value) {
      this.nbRows = value;
    }
    _SetGrid(x, y) {
      this.nbColumns = x;
      this.nbRows = y;
    }
    _SetEnabled(enabled) {
      this.enabled = enabled;
    }
    _SetSnappingEnabled(enabled) {
      this.enableSnap = enabled;
    }

    // CNDS
    _IsEnabled() {
      return this.enabled;
    }
    _IsSnappingEnabled() {
      return this.enableSnap;
    }

    // EXPS
    _ScrollX() {
      return this.scrollX;
    }
    _ScrollY() {
      return this.scrollY;
    }
    _ScrollProgressX() {
      return this.scrollProgressX;
    }
    _ScrollProgressY() {
      return this.scrollProgressY;
    }
    _ScrollWidth() {
      return this.scrollWidth;
    }
    _ScrollHeight() {
      return this.scrollHeight;
    }
    _MaxSpeed() {
      return this.maxSpeed;
    }
    _Deceleration() {
      return this.deceleration;
    }
    _VectorX() {
      return this.vectorX;
    }
    _VectorY() {
      return this.vectorY;
    }
    _MarginLeft() {
      return this.marginLeft;
    }
    _MarginTop() {
      return this.marginTop;
    }
    _MarginRight() {
      return this.marginRight;
    }
    _MarginBottom() {
      return this.marginBottom;
    }
    _OverscrollX() {
      return this.overscrollX;
    }
    _OverscrollY() {
      return this.overscrollY;
    }
    _MaxOverScroll() {
      return this.maxOverScroll;
    }
    _Speed() {
      return Math.sqrt(
        this.vectorX * this.vectorX + this.vectorY * this.vectorY
      );
    }
    _OverScrollPushBack() {
      return this.overscrollPushback;
    }
    _SnapSpeedThreshold() {
      return this.snapSpeedThreshold;
    }
    _SnapDistanceThreshold() {
      return this.snapDistanceThreshold;
    }
    _SnapSpeed() {
      return this.snapSpeed;
    }
    _NbColumns() {
      return this.nbColumns;
    }
    _NbRows() {
      return this.nbRows;
    }
  };
}
