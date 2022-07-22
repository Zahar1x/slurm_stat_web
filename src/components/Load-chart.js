import { Line } from 'vue-chartjs/legacy'
export default {
  name: 'load-chart',
  extends: Line,
  mounted () {
    this.renderChart(this.chartData, this.options);
  },
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
  },

}
