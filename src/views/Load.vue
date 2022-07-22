<template>
  <div>
    <load-chart :chart-data="chartData" :options="options"></load-chart>
  </div>
</template>

<script>
import loadChart from "@/components/Load-chart"
export default {
  name: "Load-graphic",
  components: {
    loadChart,
  },
  data () {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Data One',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style scoped>

</style>