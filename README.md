# Simple CesiumJS Camera Controlling similar to Google StreetView

## 1 when a user clicks a point, the camera should move to that point
##### a. orientation of camera should be the same when moving
##### b. height of camera to the ground of the 3D tile should be the same when moving

![alt idea](https://raw.githubusercontent.com/3DGISKing/CesiumStreetView/master/idea.jpeg?raw=true)

## 2. Cesium.ScreenSpaceEventType.LEFT_DOWN should be same as Google Street View 
#### so that the screen does not keep tilting to the side when user is looking around.
#### This can be seen in Cesium when the user holds SHIFT+LEFT_DOWN to rotate around

