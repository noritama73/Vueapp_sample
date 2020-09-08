Vue.component('accordion', {
    template: `
        <div class="accordion">
          <a class="toggle" @click="toggle()">
            <slot name="title"></slot>
            <transition name="rotation">
              <i class="fas fa-chevron-down" v-if="!isOpen"></i>
            </transition>
            <transition name="rotation">
              <i class="fas fa-chevron-up" v-if="isOpen"></i>
            </transition>
          </a>
          <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div class="accordion-body" v-if="isOpen">
              <slot name="detail"></slot>
            </div>
          </transition>
        </div>
        `,

    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggle: function () {
            this.isOpen = !this.isOpen;
        },
        beforeEnter: function (el) {
            el.style.height = '0';
        },
        enter: function (el) {
            el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave: function (el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave: function (el) {
            el.style.height = '0';
        }
    }
});

new Vue({
    el: '#app'
});