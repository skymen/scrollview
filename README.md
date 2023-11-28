<img src="./src/icon.svg" width="100" /><br>
# Scroll View <br>
Handles scrolling a given instance over the area of the object <br>
<br>
Author: skymen <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Max speed | Max speed | float |
| Deceleration | Deceleration | float |
| Overscroll push back | Overscroll push back | float |
| Overscroll deceleration ratio | Overscroll deceleration ratio | float |
| Scroll direction | Scroll direction | combo |
| Horizontal align | Horizontal align | combo |
| Vertical align | Vertical align | combo |
| Margin left | Margin left | float |
| Margin top | Margin top | float |
| Margin right | Margin right | float |
| Margin bottom | Margin bottom | float |
| Max Overscroll | How much overscroll is allowed | float |
| Show overscroll | Show overscroll | check |
| Pick first child as instance | Pick first child as instance | check |
| Enable snapping | Enable snapping | check |
| Snap speed threshold | Snap speed threshold | float |
| Snap distance threshold | Snap distance threshold | float |
| Snap speed | Snap speed | float |
| Nb columns | Nb columns | float |
| Nb rows | Nb rows | float |
| Enabled | Enabled | check |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set scroll | Set scroll | X             *(number)* <br>Y             *(number)* <br> |
| Set scroll X | Set scroll X | X             *(number)* <br> |
| Set scroll Y | Set scroll Y | Y             *(number)* <br> |
| Set progress | Set progress | X             *(number)* <br>Y             *(number)* <br> |
| Set progress X | Set progress X | X             *(number)* <br> |
| Set progress Y | Set progress Y | Y             *(number)* <br> |
| Set instance | Set instance | Instance             *(object)* <br> |
| Set vector X | Set vector X | X             *(number)* <br> |
| Set vector Y | Set vector Y | Y             *(number)* <br> |
| Set vector | Set vector | X             *(number)* <br>Y             *(number)* <br> |
| Set max speed | Set max speed | Max speed             *(number)* <br> |
| Set deceleration | Set deceleration | Deceleration             *(number)* <br> |
| Set overscroll push back | Set overscroll push back | Push back             *(number)* <br> |
| Set snap speed threshold | Set snap speed threshold | Speed threshold             *(number)* <br> |
| Set snap distance threshold | Set snap distance threshold | Distance threshold             *(number)* <br> |
| Set snap speed | Set snap speed | Snap speed             *(number)* <br> |
| Set nb columns | Set nb columns | Nb columns             *(number)* <br> |
| Set nb rows | Set nb rows | Nb rows             *(number)* <br> |
| Set grid | Set grid | Nb columns             *(number)* <br>Nb rows             *(number)* <br> |
| Set enabled | Set enabled | Enabled             *(boolean)* <br> |
| Set snapping enabled | Set snapping enabled | Enabled             *(boolean)* <br> |
| Set scroll direction | Set scroll direction | Direction             *(combo)* <br> |
| Set horizontal align | Set horizontal align | Align             *(combo)* <br> |
| Set vertical align | Set vertical align | Align             *(combo)* <br> |
| Set align | Set align | Horizontal align             *(combo)* <br>Vertical align             *(combo)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| Is enabled | Is enabled |  |
| Is snapping enabled | Is snapping enabled |  |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| ScrollX | Scroll X | number |  | 
| ScrollY | Scroll Y | number |  | 
| ScrollProgressX | Scroll progress X | number |  | 
| ScrollProgressY | Scroll progress Y | number |  | 
| ScrollWidth | Scroll width | number |  | 
| ScrollHeight | Scroll height | number |  | 
| MaxSpeed | Max speed | number |  | 
| Deceleration | Deceleration | number |  | 
| VectorX | Vector X | number |  | 
| VectorY | Vector Y | number |  | 
| MarginLeft | Margin left | number |  | 
| MarginTop | Margin top | number |  | 
| MarginRight | Margin right | number |  | 
| MarginBottom | Margin bottom | number |  | 
| OverscrollX | Overscroll | number |  | 
| OverscrollY | Overscroll | number |  | 
| MaxOverScroll | Max overscroll | number |  | 
| Speed | Speed | number |  | 
| OverScrollPushBack | OverScrollPushBack | number |  | 
| SnapSpeedThreshold | Snap speed threshold | number |  | 
| SnapDistanceThreshold | Snap distance threshold | number |  | 
| SnapSpeed | Snap speed | number |  | 
| NbColumns | Nb columns | number |  | 
| NbRows | Nb rows | number |  | 
