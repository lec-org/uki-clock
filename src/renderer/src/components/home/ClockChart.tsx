import { useUpdateEffect } from 'ahooks'
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import './clockchart.scss'

// import { clockLineChartOption } from './config'

const gradientColorFac = (
  points: [number, number, number, number],
  colors?: Array<{ offset: number; color: string }>
) => {
  const colorConfigs = colors || [
    {
      offset: 0,
      color: '#f44336'
    },
    {
      offset: 0.2,
      color: '#ff8c00'
    },
    {
      offset: 0.4,
      color: '#ffa117'
    },
    {
      offset: 0.6,
      color: '#0fc70f'
    },
    {
      offset: 0.8,
      color: '#2196f3'
    },
    {
      offset: 1,
      color: '#b145e9'
    }
  ]

  return new echarts.graphic.LinearGradient(...points, colorConfigs)
}

// echarts 折线图的配置，数据部分关注 series 字段即可，样式部分则是其余字段
const clockLineChartOption = {
  title: {
    text: '每周打卡数据',
    left: 'center',
    bottom: '5%',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis',
    // 鼠标经过柱体的背景
    axisPointer: {
      type: 'line',
      z: 0, // 层级（权重）
      lineStyle: {
        type: 'solid', // 将虚线改为实线
        width: 40, // 设置背景的宽度
        color: gradientColorFac(
          [0, 0, 0, 1],
          [
            {
              offset: 0,
              color: '#ffffff77'
            },
            {
              offset: 0.7,
              color: '#b9dbfc77'
            }
          ]
        )
      }
    }
  },
  grid: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel: {
      margin: 18,
      color: '#86909C'
    },
    axisLine: {
      show: true
    },
    axisTick: {
      show: true,
      length: 25,
      lineStyle: {
        color: '#ffffff1f'
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 20,
        color: '#86909C'
      },
      axisTick: {
        show: true,
        length: 15,
        lineStyle: {
          color: '#ffffff1f'
        }
      },
      axisLine: {
        show: true,
        formatter: (val: string) => `${val}H`
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      data: [4, 3, 2, 8, 9, 6, 3],
      type: 'line',
      smooth: true, //是否平滑曲线显示
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        normal: {
          color: gradientColorFac(
            [0, 0, 1, 0],
            [
              { offset: 0, color: '#ffa117' },
              { offset: 1, color: '#fff' }
            ]
          )
        }
      },
      itemStyle: {
        normal: {
          color: '#ffffff', //拐点颜色
          borderColor: gradientColorFac([0, 0, 1, 1]), //拐点边框颜色
          borderWidth: 2,
          lineStyle: {
            width: 3
          }
        }
      },
      tooltip: {
        show: true
      },
      areaStyle: {
        normal: {
          color: gradientColorFac(
            [0, 0, 1, 0],
            [
              { offset: 0, color: '#ffa117' },
              { offset: 1, color: '#fff' }
            ]
          )
        }
      }
    }
  ]
}

const ClockChart = () => {
  // * 折线图容器ref
  const chartRef = useRef<HTMLDivElement>(null)
  // * 折线图实例
  const lineChart = useRef<echarts.ECharts | null>(null)
  // * 假数据
  // const fake = [132, 89, 757, 140, 273, 47, 199]

  // * 更新折线图
  const updateChart = () => {
    // * 初始化折线图
    // * 载入数据
    // clockLineChartOption.series = clockLineChartOption.series.map((config, index) => {
    //   return {
    //     ...config,
    //     data: fake[index] ?? []
    //   }
    // })
    // console.log(clockLineChartOption.series)
    // * 绘制图表
    lineChart.current?.setOption(clockLineChartOption)
  }

  useEffect(() => {
    if (!lineChart.current && chartRef.current) lineChart.current = echarts.init(chartRef.current)
    updateChart()
    return () => {
      // * 组件销毁时销毁折线图实例
      // if (lineChart.current) lineChart.current?.dispose()
    }
  }, [])
  useUpdateEffect(() => {
    updateChart()
  }, [])
  return <div ref={chartRef} className="line-chart-container"></div>
}

export default ClockChart
