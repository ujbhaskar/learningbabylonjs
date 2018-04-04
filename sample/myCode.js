window.addEventListener("DOMContentLoaded",()=>{
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = ()=>{
        var scene = new BABYLON.Scene(engine);
        // scene.clearColor = new BABYLON.Color3.White();
        
        var camera = new BABYLON.FreeCamera("cam1",
            new BABYLON.Vector3(5,5,-10),scene);
        
        camera.setTarget(BABYLON.Vector3.Zero());

        var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
        return scene;

    }

    var scene = createScene();
    engine.runRenderLoop(()=>{
        scene.render();
    });
});