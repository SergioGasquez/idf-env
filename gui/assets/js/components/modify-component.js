let modifyComponent = Vue.component('entry-component', {
  template: '#modify-component-template',
  store,
  props: {},
  computed: {
    isWorkloadsActive() {
      return this.$store.state.isWorkloadsActive;
    },
    isComponentsActive() {
      return this.$store.state.isComponentsActive;
    },
    isLocationsActive() {
      return this.$store.state.isLocationsActive;
    },
    workloads() {
      return this.$store.state.workloads;
    }

  },
  created() {
    // this.requestObservedState();
  },
  data: function () {
    return {
      options: {
        onlineMode: 'enabled'
      },
      idfList: DOCUMENTATION_VERSIONS.VERSIONS/*[
        { title: 'IDF 4.3', state: 'installed' },
        { title: 'IDF 4.2', state: '' },
        { title: 'IDF 4.1', state: '' },
        { title: 'IDF master', state: '' }
    ]*/,
      pythonList: [
        {title: 'Embedded 3.9'},
        {title: 'Embedded 3.7'},
        {title: 'System 3.6'}
      ],
      sites: [
        {
          state: 'enabled',
          title: 'Unofficial wheels',
          url: 'https://georgik.rocks/tmp/python/pypi'
        },
        {
          state: 'enabled',
          title: 'Official wheels',
          url: 'https://dl.espressif.com'
        }
      ]
    }
  },
  methods: {
    switchInstallTab: function (installTab) {
      this.$store.commit('switchModifyTab', installTab);
    },
    toggleDesiredState: function (componentId) {
      console.log("Component " + componentId);
      if (componentsController == undefined) {
        return;
      }
      this.$store.commit('toggleComponent', componentId);
      console.log("State definition changed");
      // componentsController.desiredState = getDesiredState();
    }
  }
});

