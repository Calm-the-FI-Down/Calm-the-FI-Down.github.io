import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import chartOptions from '../script/debt-paydown-chart';

function DebtPaydownChart() {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef.current) {
          // Initialize ECharts instance
          const chartInstance = echarts.init(chartRef.current);
    
          chartInstance.setOption(chartOptions);
    
          // Cleanup on unmount
          return () => {
            chartInstance.dispose();
          };
        }
      }, []);
    
      return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}

export default DebtPaydownChart;