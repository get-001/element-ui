<template>
  <div
    :class="[
            'el-row',
            {'el-row--flex':type==='flex'},
            justify !== 'start' && `is-justify-${justify}`,
            align !== 'top' && `is-align-${align}`,
          ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ElEow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: "start",
      validator: val =>
        ["start", "end", "center", "space-between", "space-around"].includes(
          val
        )
    },
    align: {
      type: String,
      default: "top",
      validator: val => ["top", "middle", "bottom"].includes(val)
    }
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        const gutter = -this.gutter / 2 + "px";
        style.marginLeft = gutter;
        style.marginRight = gutter;
      }
      return style;
    }
  }
};
</script>

<style lang="scss" scope>
.el-row {
  &::before,
  &::after {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }
  &--flex {
    display: flex;
    &::before,
    &::after {
      display: none;
    }
    &.is-justify-end {
      justify-content: flex-end;
    }
    &.is-justify-center {
      justify-content: center;
    }
    &.is-justify-space-between {
      justify-content: space-between;
    }
    &.is-justify-space-around {
      justify-content: space-around;
    }
    &.is-align-middle {
      align-items: center;
    }
    &.is-align-bottom {
      align-items: flex-end;
    }
  }
}
</style>