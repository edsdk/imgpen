export function editImage(
    conf: {
        urlImage: string,
        urlUploader: string,
        urlFiles: string,
        dirDestination?: string,
        onSave: (url: string) => void
    }
) {
    includeJS('//cdn.imgpen.com/imageeditorsdk.js', function() {
        (window as any).ImageEditorSDK.editImage(
            conf.urlImage,
            conf.urlUploader,
            conf.urlFiles,
            conf.dirDestination,
            conf.onSave
        );
    });
}

function includeJS(url: string, onIncluded: () => void) {
    var scripts = document.getElementsByTagName("script");
    var alreadyExists = false;
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src");
        if (src != null && src.indexOf(url) !== -1)
            alreadyExists = true;
    }
    if (!alreadyExists) {
        var script = document.createElement("script") as any;
        script.type = "text/javascript";
        if (onIncluded != null) {
            if (script.readyState) {  // IE
                script.onreadystatechange = function () {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        onIncluded();
                    }
                };
            } else {  // Others browsers
                script.onload = function () {
                    onIncluded();
                };
            }
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        if (onIncluded != null)
            onIncluded();
    }
}