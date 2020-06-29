(function () {
    var viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
    });

    // Set the initial camera view to look at Manhattan
    var initialPosition = Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 753);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(21.27879878293835, -21.34390550872461, 0.0716951918898415);

    viewer.scene.camera.setView({
        destination: initialPosition,
        orientation: initialOrientation,
        endTransform: Cesium.Matrix4.IDENTITY
    });

    var tileset = new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(5741) });

    viewer.scene.primitives.add(tileset);

    var streetViewController = new Cesium.StreetViewController({
        cesiumViewer : viewer
    });

    $("#enterStreetViewButton").click(function () {
        streetViewController.entered().addEventListener(function () {
            $("#enterStreetViewButton").hide();
            $("#exitStreetViewButton").show();
        });

        streetViewController.enter();
    });

    $("#exitStreetViewButton").click(function () {
        streetViewController.exited().addEventListener(function () {
            $("#enterStreetViewButton").show();
            $("#exitStreetViewButton").hide();
        });

        streetViewController.exit();
    });
})();
