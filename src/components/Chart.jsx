import React, { useEffect, useRef } from 'react'
import echarts from 'echarts'
import option from './option'
import Styles from './index.less';
function Chart() {
  const chartDom = useRef(null)
  let myChart
  useEffect(() => {
    myChart = echarts.init(chartDom.current)
    myChart.setOption(option)
    window.addEventListener('resize',myChart.resize)
    return () => {
      window.removeEventListener('resize',myChart.resize)
    }
  })
  return (
    <div ref={chartDom} className={Styles.chart} />
  )
}


export default Chart;