import DashboardService	from './DashboardService';

export default {
  template: '#dashboard',
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.fecthItems();
  },
  computed: {
    filteredItems() { },
  },
  methods: {
    fecthItems() {
      return DashboardService.get();
    },
  },
};
