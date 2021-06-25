# 测试使用
   <es-modular title="左右布局" :background="'#344670'">
               <div style="width: 500px">
                   <multi-pie-chart
                           :height="'280px'"
                           :data="[
                                   {'name': '危房多一个字', 'value': 53},
                                   {'name': '乱堆乱放多一个字', 'value': 94},
                                   {'name': '家庭暴力多一个字', 'value': 84},
                                   {'name': '自然灾害多一个字', 'value': 112},
                                   {'name': '医患纠纷多一个字', 'value': 132},
                               ]"
                           :radius="[50, '50%']"
                           :center="['30%', '35%']"
                           :islabelLine="false"
                           :legend-type="'rect'"
                           :layout="'about'"
                   ></multi-pie-chart>
               </div>
               <div slot="code">
                   <es-code :code="'233434'"></es-code>
               </div>
   </es-modular>   
   
```html
<es-modular title="左右布局" :background="'#344670'">
               <div style="width: 500px">
                   <multi-pie-chart
                           :height="'280px'"
                           :data="[
                                   {'name': '危房多一个字', 'value': 53},
                                   {'name': '乱堆乱放多一个字', 'value': 94},
                                   {'name': '家庭暴力多一个字', 'value': 84},
                                   {'name': '自然灾害多一个字', 'value': 112},
                                   {'name': '医患纠纷多一个字', 'value': 132},
                               ]"
                           :radius="[50, '50%']"
                           :center="['30%', '35%']"
                           :islabelLine="false"
                           :legend-type="'rect'"
                           :layout="'about'"
                   ></multi-pie-chart>
               </div>
               <div slot="code">
                   <es-code :code="'233434'"></es-code>
               </div>
   </es-modular> 
```
    
  ```html
 
  ``` 
   