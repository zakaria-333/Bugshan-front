import { ResponsivePie } from '@nivo/pie'
import { data } from './data'
import { Box, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom';



const FilialeStatics = () => {
  const theme=useTheme();
  const location =useLocation()
  return (
    <Box sx={{height:'75vh'}}>
       {location.pathname=='/filialeStatics'&&<h1 className="text-center font-bold text-xl underline">Statistics of the number of sites based on their Subsidiary</h1>}
    <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    theme={{

      "text": {
          "fontSize": 11,
          "fill": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
          "outlineWidth": 0,
          "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
      },
      "axis": {
          "domain": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              }
          },
          "legend": {
              "text": {
                  "fontSize": 12,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
              }
          },
          "ticks": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              },
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
              }
          }
      },
      "grid": {
          "line": {
              "stroke": "#dddddd",
              "strokeWidth": 1
          }
      },
      "legends": {
          "title": {
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
              }
          },
          "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor":theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
          },
          "ticks": {
              "line": {},
              "text": {
                  "fontSize": 10,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black
              }
          }
      },
      "annotations": {
          "text": {
              "fontSize": 13,
              "fill": "#333333",
              "outlineWidth": 2,
              "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
              "outlineOpacity": 1
          },
          "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
              "outlineOpacity": 1
          },
          "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
              "outlineOpacity": 1
          },
          "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
              "outlineOpacity": 1
          }
      },
      "tooltip": {
          "wrapper": {},
          "container": {
              
              "color": 'black',
              "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
      }
  }}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
            color:theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: theme.palette.mode=='dark'?theme.palette.common.white:theme.palette.common.black,
            color: 'black',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        
    ]}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: 'red'
                    }
                }
            ]
        }
    ]}
/>
</Box>)
}

export default FilialeStatics

